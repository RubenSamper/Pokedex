const TRAD_OBJETOS = {
    "fire-stone": "Piedra Fuego", "water-stone": "Piedra Agua",
    "thunder-stone": "Piedra Trueno", "leaf-stone": "Piedra Hoja",
    "moon-stone": "Piedra Lunar", "sun-stone": "Piedra Solar",
    "shiny-stone": "Piedra Día", "dusk-stone": "Piedra Noche",
    "dawn-stone": "Piedra Alba", "ice-stone": "Piedra Hielo",
    "oval-stone": "Piedra Ovalada", "king-s-rock": "Roca del Rey",
    "metal-coat": "Capa Metálica", "dragon-scale": "Escama Dragón",
    "up-grade": "Mejora", "protector": "Protector",
    "electirizer": "Electrizador", "magmarizer": "Magmatizador",
    "razor-claw": "Garra Afilada", "razor-fang": "Colmillo Afilado",
    "reaper-cloth": "Tela Tétrica", "prism-scale": "Escama Prisma",
    "sachet": "Fragüino", "whipped-dream": "Dulce Nube",
    "deep-sea-tooth": "Diente Marino", "deep-sea-scale": "Escama Marina",
    "dubious-disc": "Disco Extraño", "sweet-apple": "Manzana Dulce",
    "tart-apple": "Manzana Ácida", "cracked-pot": "Tetera Rota",
    "chipped-pot": "Tetera Estropeada", "galarica-cuff": "Brazal Galar",
    "galarica-wreath": "Corona Galar", "black-augurite": "Augurita Negra",
    "peat-block": "Bloque Turbo", "malicious-armor": "Armadura Maligna",
    "scroll-of-darkness": "Pergamino Oscuridad", "scroll-of-waters": "Pergamino Agua",
    "linking-cord": "Cordón Unión", "syrupy-apple": "Manzana Melosa",
    "berry-sweet": "Baya Dulce", "clover-sweet": "Trébol Dulce",
    "flower-sweet": "Flor Dulce", "love-sweet": "Amor Dulce",
    "ribbon-sweet": "Lazo Dulce", "star-sweet": "Estrella Dulce",
    "strawberry-sweet": "Fresa Dulce"
};

const FALLBACK_SPRITE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect x='15' y='28' width='50' height='38' rx='6' fill='%23e0d8c8' stroke='%23999' stroke-width='2'/%3E%3Cpath d='M25 28L30 12h20l5 16' fill='%23f5f0e0' stroke='%23999' stroke-width='2'/%3E%3Ccircle cx='30' cy='48' r='4' fill='%23ddd' stroke='%23999' stroke-width='1.5'/%3E%3Ccircle cx='50' cy='48' r='4' fill='%23ddd' stroke='%23999' stroke-width='1.5'/%3E%3Crect x='34' y='40' width='12' height='16' rx='2' fill='%23ddd' stroke='%23999' stroke-width='1'/%3E%3C/svg%3E";

const ITEM_SPRITE_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";

let itemEvoMap = null;
let itemSearchTimeout;
let itemSuggestionIndex = -1;
let todosLosItems = [];
let itemActivo = null;

let buscadorItems = document.querySelector("#buscadorItems");
let btnClearItemSearch = document.querySelector("#btnClearItemSearch");
let itemSuggestions = document.querySelector("#itemSuggestions");
let galeriaItems = document.querySelector("#galeriaItems");
let resultadosItems = document.querySelector("#resultadosItems");
let loadingItems = document.querySelector("#loadingItems");
let noItemResults = document.querySelector("#noItemResults");
let itemCount = document.querySelector("#itemCount");

window.addEventListener("load", cargarTodosItems);

buscadorItems.addEventListener("input", function () {
    btnClearItemSearch.classList.toggle("oculto", this.value === "");
    clearTimeout(itemSearchTimeout);
    itemSearchTimeout = setTimeout(function () {
        let texto = buscadorItems.value.trim();
        if (texto) {
            let matches = buscarCoincidenciasItems(texto);
            mostrarSugerencias(matches);
        } else {
            itemSuggestions.classList.add("oculto");
        }
        aplicarFiltroItems();
    }, 150);
});

buscadorItems.addEventListener("keydown", function (e) {
    let items = itemSuggestions.querySelectorAll(".autocomplete-item");
    if (items.length === 0) return;
    if (e.key === "ArrowDown") {
        e.preventDefault();
        itemSuggestionIndex = Math.min(itemSuggestionIndex + 1, items.length - 1);
        resaltarSugerencia(items);
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        itemSuggestionIndex = Math.max(itemSuggestionIndex - 1, 0);
        resaltarSugerencia(items);
    } else if (e.key === "Enter" && itemSuggestionIndex > -1) {
        e.preventDefault();
        items[itemSuggestionIndex].click();
    } else if (e.key === "Escape") {
        itemSuggestions.classList.add("oculto");
    }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest(".buscador-contenedor-items")) {
        itemSuggestions.classList.add("oculto");
    }
});

btnClearItemSearch.addEventListener("click", function () {
    buscadorItems.value = "";
    btnClearItemSearch.classList.add("oculto");
    itemSuggestions.classList.add("oculto");
    ocultarResultados();
    buscadorItems.focus();
    aplicarFiltroItems();
});

function resaltarSugerencia(items) {
    items.forEach(function (el, i) {
        el.classList.toggle("destacado", i === itemSuggestionIndex);
    });
}

function buscarCoincidenciasItems(texto) {
    let lower = texto.toLowerCase();
    let matches = [];
    let seen = {};

    for (let key in TRAD_OBJETOS) {
        let val = TRAD_OBJETOS[key];
        if (key.includes(lower) || val.toLowerCase().includes(lower)) {
            if (!seen[key]) {
                matches.push({ key: key, value: val });
                seen[key] = true;
            }
        }
    }

    matches.sort(function (a, b) {
        let aExact = a.value.toLowerCase() === lower || a.key === lower;
        let bExact = b.value.toLowerCase() === lower || b.key === lower;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        let aStart = a.key.startsWith(lower) || a.value.toLowerCase().startsWith(lower);
        let bStart = b.key.startsWith(lower) || b.value.toLowerCase().startsWith(lower);
        if (aStart && !bStart) return -1;
        if (!aStart && bStart) return 1;
        return a.value.localeCompare(b.value);
    });

    return matches;
}

function mostrarSugerencias(matches) {
    itemSuggestionIndex = -1;
    if (matches.length === 0) {
        itemSuggestions.classList.add("oculto");
        return;
    }
    itemSuggestions.innerHTML = matches.map(function (m) {
        return '<div class="autocomplete-item" data-key="' + m.key + '">' + m.value + '</div>';
    }).join("");
    itemSuggestions.classList.remove("oculto");

    itemSuggestions.querySelectorAll(".autocomplete-item").forEach(function (el) {
        el.addEventListener("click", function () {
            let key = this.dataset.key;
            buscadorItems.value = TRAD_OBJETOS[key] || key;
            itemSuggestions.classList.add("oculto");
            btnClearItemSearch.classList.remove("oculto");
            aplicarFiltroItems();
            seleccionarItem(key);
            let card = document.querySelector('.item-card[data-key="' + key + '"]');
            if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });
}

async function cargarTodosItems() {
    loadingItems.style.display = "block";
    let itemKeys = Object.keys(TRAD_OBJETOS);

    for (let i = 0; i < itemKeys.length; i += 20) {
        let batch = itemKeys.slice(i, i + 20);
        let promesas = batch.map(function (key) {
            return fetch("https://pokeapi.co/api/v2/item/" + key + "/")
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    return data;
                })
                .catch(function () {
                    return null;
                })
                .then(function (data) {
                    let spriteUrl = null;
                    if (data && data.sprites && data.sprites.default) {
                        spriteUrl = data.sprites.default;
                    } else {
                        spriteUrl = ITEM_SPRITE_BASE + key + ".png";
                    }
                    let card = crearCardItem(key, spriteUrl);
                    galeriaItems.appendChild(card);
                    todosLosItems.push(card);
                });
        });
        await Promise.allSettled(promesas);
    }

    loadingItems.style.display = "none";
    actualizarContador();
}

function crearCardItem(key, spriteUrl) {
    let div = document.createElement("div");
    div.className = "item-card";
    div.dataset.key = key;
    div.dataset.name = TRAD_OBJETOS[key].toLowerCase();

    let img = document.createElement("img");
    img.alt = TRAD_OBJETOS[key];
    img.loading = "lazy";
    img.src = spriteUrl || FALLBACK_SPRITE;
    img.onerror = function () {
        if (this.src !== FALLBACK_SPRITE) {
            this.src = FALLBACK_SPRITE;
            this.onerror = null;
        }
    };
    div.appendChild(img);

    let p = document.createElement("p");
    p.textContent = TRAD_OBJETOS[key];
    div.appendChild(p);

    div.addEventListener("click", function () {
        seleccionarItem(key);
    });

    return div;
}

function seleccionarItem(key) {
    if (itemActivo === key) {
        ocultarResultados();
        return;
    }

    itemActivo = key;

    todosLosItems.forEach(function (card) {
        card.classList.toggle("activo", card.dataset.key === key);
    });

    procesarItem(key);
}

function ocultarResultados() {
    itemActivo = null;
    resultadosItems.style.display = "none";
    resultadosItems.innerHTML = "";
    todosLosItems.forEach(function (card) {
        card.classList.remove("activo");
    });
}

function aplicarFiltroItems() {
    let texto = buscadorItems.value.toLowerCase().trim();

    todosLosItems.forEach(function (card) {
        let nombre = card.dataset.name;
        let coincide = texto === "" || nombre.includes(texto);
        card.style.display = coincide ? "" : "none";
    });

    let visible = todosLosItems.filter(function (c) {
        return c.style.display !== "none";
    }).length;

    noItemResults.classList.toggle("oculto", texto === "" || visible > 0);
    actualizarContador();
}

function actualizarContador() {
    let total = todosLosItems.length;
    let visible = todosLosItems.filter(function (c) {
        return c.style.display !== "none";
    }).length;
    itemCount.textContent = visible + " / " + total + " objetos";
}

async function procesarItem(nombreIngles) {
    resultadosItems.style.display = "none";
    resultadosItems.innerHTML = "";
    loadingItems.style.display = "block";

    await construirMapaItemEvo();

    let spriteUrl = null;
    try {
        let resp = await fetch("https://pokeapi.co/api/v2/item/" + nombreIngles + "/");
        if (resp.ok) {
            let itemData = await resp.json();
            if (itemData && itemData.sprites && itemData.sprites.default) {
                spriteUrl = itemData.sprites.default;
            }
        }
    } catch (e) {}
    if (!spriteUrl) {
        spriteUrl = ITEM_SPRITE_BASE + nombreIngles + ".png";
    }

    mostrarResultadoItem(nombreIngles, spriteUrl);

    loadingItems.style.display = "none";
}

async function construirMapaItemEvo() {
    if (itemEvoMap) return;

    try {
        itemEvoMap = {};
        let resp = await fetch("https://pokeapi.co/api/v2/evolution-chain?limit=1000");
        let data = await resp.json();
        let chains = data.results;

        for (let i = 0; i < chains.length; i += 50) {
            let batch = chains.slice(i, i + 50);
            let promesas = batch.map(function (c) {
                return fetch(c.url)
                    .then(function (r) { return r.json(); })
                    .then(function (chainData) { procesarCadenaEvo(chainData.chain); })
                    .catch(function () {});
            });
            await Promise.allSettled(promesas);
        }
    } catch (e) {
        console.error("Error building evolution map:", e);
        itemEvoMap = null;
    }
}

function procesarCadenaEvo(node) {
    let from = node.species.name;
    let evolvesTo = node.evolves_to || [];

    for (let evo of evolvesTo) {
        let details = evo.evolution_details || [];
        for (let detail of details) {
            if (detail.trigger && detail.trigger.name === "use-item" && detail.item) {
                let itemName = detail.item.name;
                if (!itemEvoMap[itemName]) itemEvoMap[itemName] = [];
                itemEvoMap[itemName].push({
                    pokemon: evo.species.name,
                    from: from,
                    pokemonUrl: evo.species.url,
                    fromUrl: node.species.url
                });
            }
        }
        procesarCadenaEvo(evo);
    }
}

function extraerId(url) {
    let partes = url.replace(/\/$/, "").split("/");
    return partes[partes.length - 1];
}

function mostrarResultadoItem(nombreIngles, spriteUrl) {
    let nombreEspanol = TRAD_OBJETOS[nombreIngles] || nombreIngles.replace(/-/g, " ").replace(/\b\w/g, function (l) { return l.toUpperCase(); });
    let evos = itemEvoMap[nombreIngles];

    resultadosItems.innerHTML = "";

    if (!evos || evos.length === 0) {
        resultadosItems.innerHTML =
            '<div class="item-result">' +
            '<div class="item-result-header">' +
            '<img src="' + spriteUrl + '" alt="' + nombreEspanol + '" onerror="this.style.display=\'none\'">' +
            '<h3>' + nombreEspanol + '</h3>' +
            '</div>' +
            '<div class="item-no-evo">Ningún Pokémon usa este objeto para evolucionar</div>' +
            '</div>';
        resultadosItems.style.display = "";
        resultadosItems.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
    }

    let html = '<div class="item-result">';
    html += '<div class="item-result-header">';
    html += '<img src="' + spriteUrl + '" alt="' + nombreEspanol + '" onerror="this.style.display=\'none\'">';
    html += '<h3>' + nombreEspanol + '</h3>';
    html += '</div>';
    html += '<div class="item-evo-subtitulo">Pokémon que lo usan para evolucionar</div>';
    html += '<div class="item-evo-list">';

    evos.forEach(function (evo) {
        let fromId = evo.fromUrl ? extraerId(evo.fromUrl) : "";
        let toId = evo.pokemonUrl ? extraerId(evo.pokemonUrl) : "";
        html += '<div class="item-evo-pair" data-to-id="' + toId + '">';
        html += '<img class="evo-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + fromId + '.png" alt="' + evo.from + '" onerror="this.src=\'' + FALLBACK_SPRITE + '\'">';
        html += '<span class="evo-name">' + evo.from + '</span>';
        html += '<span class="evo-arrow">&rarr;</span>';
        html += '<img class="evo-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + toId + '.png" alt="' + evo.pokemon + '" onerror="this.src=\'' + FALLBACK_SPRITE + '\'">';
        html += '<span class="evo-name">' + evo.pokemon + '</span>';
        html += '</div>';
    });

    html += '</div></div>';
    resultadosItems.innerHTML = html;
    resultadosItems.style.display = "";
    resultadosItems.scrollIntoView({ behavior: "smooth", block: "nearest" });

    resultadosItems.querySelectorAll(".item-evo-pair").forEach(function (pair) {
        pair.addEventListener("click", function () {
            let id = this.dataset.toId;
            if (id) {
                window.location.href = "index.html?pokemon=" + id;
            }
        });
    });
}
