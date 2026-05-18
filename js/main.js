const COLORES_TIPO = {
    normal: "#A8A878", fire: "#F08030", water: "#6890F0",
    electric: "#F8D030", grass: "#78C850", ice: "#98D8D8",
    fighting: "#C03028", poison: "#A040A0", ground: "#E0C068",
    flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
    rock: "#B8A038", ghost: "#705898", dragon: "#7038F8",
    dark: "#705848", steel: "#B8B8D0", fairy: "#EE99AC"
};

const NOMBRES_STATS = {
    hp: "PS", attack: "ATAQUE", defense: "DEFENSA",
    "special-attack": "AT. ESP", "special-defense": "DEF. ESP", speed: "VELOCIDAD"
};

const TRAD_HABILIDAD = {
    "overgrow": "Espesura", "blaze": "Mar llamas", "torrent": "Torrente", "swarm": "Enjambre",
    "shield-dust": "Polvo escudo", "shed-skin": "Mudar", "compound-eyes": "Ojo compuesto",
    "run-away": "Huida", "keen-eye": "Vista lince", "intimidate": "Intimidación",
    "sand-veil": "Velo arena", "static": "Estática", "lightning-rod": "Pararrayos",
    "sand-rush": "Ímpetu arena", "snow-cloak": "Manto níveo", "oblivious": "Despiste",
    "own-tempo": "Ritmo propio", "early-bird": "Madrugador", "wonder-guard": "Superguarda",
    "levitate": "Levitación", "effect-spore": "Efecto espora", "damp": "Humedad",
    "limber": "Flexibilidad", "cute-charm": "Gran encanto", "magic-guard": "Escudo mágico",
    "synchronize": "Sincronía", "inner-focus": "Foco interno", "guts": "Agallas",
    "rough-skin": "Piel áspera", "sheer-force": "Potencia bruta", "rock-head": "Cabeza roca",
    "sturdy": "Robustez", "water-absorb": "Absorbe agua", "volt-absorb": "Absorbe electricidad",
    "natural-cure": "Cura natural", "serene-grace": "Dicha serena", "super-luck": "Afortunado",
    "cloud-nine": "Despejado", "vital-spirit": "Espíritu vital", "anger-point": "Ira",
    "pickup": "Recogida", "thick-fat": "Sebo", "flash-fire": "Cuerpo llama",
    "white-smoke": "Humo blanco", "pressure": "Presión", "poison-point": "Punto tóxico",
    "tinted-lens": "Cristal", "insomnia": "Insomnio", "immunity": "Inmunidad",
    "liquid-ooze": "Líquido fétido", "magma-armor": "Escudo magma", "sticky-hold": "Viscosidad",
    "chlorophyll": "Clorofila", "huge-power": "Potencia", "plus": "Más", "minus": "Menos",
    "trace": "Rastro", "shadow-tag": "Sombra trampa", "arena-trap": "Trampa arena",
    "speed-boost": "Impulso", "battle-armor": "Armadura batalla", "clear-body": "Cuerpo puro",
    "hyper-cutter": "Corte fuerte", "soundproof": "Insonorizar", "rain-dish": "Cura lluvia",
    "drizzle": "Llovizna", "drought": "Sequía", "sand-stream": "Chorro arena",
    "snow-warning": "Nevada", "air-lock": "Bucle aire", "mold-breaker": "Rompemoldes",
    "hustle": "Entusiasmo", "marvel-scale": "Escama especial", "moxie": "Autoestima",
    "reckless": "Osadía", "skill-link": "Encadenado", "water-veil": "Velo agua",
    "unaware": "Ignorante", "technician": "Experto", "flower-gift": "Don floral",
    "adaptability": "Adaptabilidad", "anticipation": "Anticipación", "aftermath": "Combustión",
    "dry-skin": "Piel seca", "filter": "Filtro", "frisk": "Cacheo", "gluttony": "Gula",
    "heatproof": "Ignífugo", "ice-body": "Cuerpo helado", "iron-fist": "Puño férreo",
    "motor-drive": "Electromotor", "normalize": "Normalizar", "poison-heal": "Antídoto",
    "regenerator": "Regeneración", "sniper": "Francotirador", "slow-start": "Inicio lento",
    "solar-power": "Poder solar", "steady": "Pies firmes", "solid-rock": "Roca sólida",
    "storm-drain": "Colector", "tangled-feet": "Tumbos", "hydration": "Hidratación",
    "flower-veil": "Velo flor", "gooey": "Viscosidad", "toxic-boost": "Ímpetu tóxico",
    "heavy-metal": "Metal pesado", "light-metal": "Metal ligero", "multiscale": "Compensación",
    "harvest": "Cosecha", "telepathy": "Telepatía", "justified": "Justiciero",
    "rattled": "Cobardía", "magic-bounce": "Espejo mágico", "sap-sipper": "Hervívoro",
    "prankster": "Bromista", "sand-force": "Poder arena", "weak-armor": "Armadura frágil",
    "heavy-slayer": "Rompedural", "no-guard": "Indefenso", "steam-engine": "Máquina vapor",
    "punk-rock": "Punk rock", "sand-spit": "Expulsión arena", "ice-scales": "Escama hielo",
    "steely-spirit": "Alma acerada", "perish-body": "Cuerpo mortecino",
    "wandering-spirit": "Alma errante", "gorilla-tactics": "Táctica gorila",
    "neutralizing-gas": "Gas neutralizante", "pastel-veil": "Velo pastel",
    "propeller-tail": "Cola hélice", "quick-draw": "Saco rápido", "screen-cleaner": "Antipantalla",
    "stakeout": "Vigilante", "mimicry": "Mimetismo", "mirror-armor": "Armadura espejo",
    "ice-face": "Cara hielo", "hunger-switch": "Mutapetito", "libero": "Líbero",
    "ball-fetch": "Recogebolas", "cotton-down": "Algodón", "dauntless-shield": "Escudo audaz",
    "intrepid-sword": "Espada indómita", "ripen": "Maduración", "cheek-pouch": "Carrillera",
    "triage": "Triaje", "emergency-exit": "Huida urgente", "wimp-out": "Huida",
    "full-metal-body": "Cuerpo metal", "shadow-shield": "Escudo sombra",
    "prism-armor": "Armadura prisma", "disguise": "Disfraz", "dancer": "Parejo",
    "battery": "Batería", "fluffy": "Peluche", "dazzling": "Destello",
    "queenly-majesty": "Majestad", "power-of-alchemy": "Alquimia", "beast-boost": "Ultraimpulso",
    "rks-system": "Sistema Alfa", "soul-heart": "Corazón alma", "tangling-hair": "Rizos",
    "receiver": "Receptor", "water-compaction": "Hidrocompactación", "merciless": "Crueldad",
    "shields-down": "Escudo mermado", "toxic-debris": "Residuo tóxico",
    "opportunist": "Oportunista", "cud-chew": "Rumia", "sharpness": "Cortante",
    "supreme-overlord": "Comandante", "costar": "Coplaje", "electromorphosis": "Electromorfosis",
    "protosynthesis": "Protosíntesis", "quark-drive": "Impulso quark",
    "good-as-gold": "Buen dorado", "mycelium-might": "Poder micelio",
    "hospitality": "Hospitalidad", "well-baked-body": "Cuerpo horneado",
    "wind-rider": "Jinete viento", "earth-eater": "Geofagia", "tera-shell": "Corte Teracristal",
    "teraform-zero": "Terraformación", "poison-puppeteer": "Títere tóxico",
    "orichalcum-pulse": "Latido oricalco", "hadron-engine": "Motor hadrónico",
    "sword-of-ruin": "Espada funesta", "vessel-of-ruin": "Vasija funesta",
    "beads-of-ruin": "Cuentas funestas", "tablets-of-ruin": "Tablas funestas",
    "thermal-exchange": "Termointercambio", "armor-tail": "Cola armadura",
    "lingering-aroma": "Aroma persistente", "seed-sower": "Sembrar semillas",
    "supersweet-syrup": "Jarabe", "mountaineer": "Montañés", "wave-rider": "Jinete ola",
    "skater": "Patinador", "wind-power": "Energía eólica", "anger-shell": "Cólera",
    "cursed-body": "Cuerpo maldito", "mummy": "Momias", "analytic": "Cálculo final",
    "contrary": "Competitivo", "defiant": "Competitivo", "competitive": "Tenacidad",
    "unnerve": "Nerviosismo", "infiltrator": "Allanador", "sweet-veil": "Velo dulce",
    "friend-guard": "Guardia amiga", "symbiosis": "Simbiosis", "bulletproof": "Antibalas",
    "aura-break": "Ruptura aura", "defeatist": "Fatalista", "klutz": "Zoquete",
    "big-pecks": "Sacapecho", "overcoat": "Funda", "turboblaze": "Turbollama",
    "teravolt": "Terravoltaje", "dark-aura": "Aura oscura", "fairy-aura": "Aura feérica",
    "refrigerate": "Piel helada", "pixilate": "Piel feérica", "galvanize": "Piel eléctrica",
    "aerilate": "Piel aérea", "long-reach": "Remoto", "liquid-voice": "Voz fluida",
    "schooling": "Banco", "comatose": "Letargo", "innards-out": "Revés",
    "stall": "Rezagado", "pickpocket": "Hurto", "magician": "Prestidigitador",
    "multitype": "Multitipo", "zen-mode": "Modo zen", "victory-star": "Victoriesto",
    "turboblaze": "Turbollama", "battle-bond": "Fuerte afecto", "power-construct": "Agrupamiento",
    "shields-down": "Escudo mermado", "schooling": "Banco", "disguise": "Disfraz",
    "rks-system": "Sistema Alfa", "shadow-shield": "Escudo sombra", "prism-armor": "Armadura prisma",
    "neuroforce": "Neurofuerza", "soul-heart": "Corazón alma", "stamina": "Firme",
    "water-bubble": "Pompa", "steelworker": "Acero templado", "berserk": "Cólera",
    "slush-rush": "Quitanieves", "long-reach": "Remoto", "liqui-ooze": "Líquido fétido",
    "misty-surge": "Campo bruma", "electric-surge": "Campo eléctrico", "psychic-surge": "Campo psíquico",
    "grassy-surge": "Campo hierba", "surge-surfer": "Cola surf", "tangled-feet": "Tumbos",
    "motor-drive": "Electromotor", "rattled": "Cobardía", "anticipation": "Anticipación",
    "forewarn": "Alerta", "frisk": "Cacheo", "insomnia": "Insomnio", "vital-spirit": "Espíritu vital",
    "limber": "Flexibilidad", "oblivious": "Despiste", "own-tempo": "Ritmo propio",
    "suction-cups": "Ventosas", "early-bird": "Madrugador", "hydration": "Hidratación",
    "shell-armor": "Armadura concha", "sturdy": "Robustez", "damp": "Humedad",
    "soundproof": "Insonorizar", "clear-body": "Cuerpo puro", "full-metal-body": "Cuerpo metal"
};

let galeriaPokemon = document.querySelector("#galeriaPokemon");
let moveDetalle = document.querySelector("#moveDetalle");
let moveDetalleTitulo = document.querySelector("#moveDetalleTitulo");
let moveDetalleDesc = document.querySelector("#moveDetalleDesc");
let modal = document.querySelector("#modalPokemon");
let cerrar = document.querySelector(".cerrar");
let buscador = document.querySelector("#buscador");
let loadingIndicator = document.querySelector("#loadingIndicator");
let noResults = document.querySelector("#noResults");
let pokemonCount = document.querySelector("#pokemonCount");
let todosLosPokemon = [];
let tiempoBusqueda;
let cacheHabilidades = {};
let cacheMovimientos = {};

window.addEventListener("load", cargarTodos);

cerrar.addEventListener("click", cerrarModal);
window.addEventListener("click", function (event) {
    if (event.target === modal) cerrarModal();
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") cerrarModal();
});
buscador.addEventListener("input", function () {
    clearTimeout(tiempoBusqueda);
    tiempoBusqueda = setTimeout(filtrarPokemones, 150);
});

function cerrarModal() {
    modal.classList.add("oculto");
}

async function cargarTodos() {
    loadingIndicator.style.display = "block";
    try {
        let listaResp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        let listaData = await listaResp.json();
        let todasLasUrls = listaData.results;

        for (let i = 0; i < todasLasUrls.length; i++) {
            let item = todasLasUrls[i];
            let id = extraerId(item.url);
            let divPokemon = crearCard(id, item.name);
            galeriaPokemon.appendChild(divPokemon);
            todosLosPokemon.push(divPokemon);
        }

        loadingIndicator.style.display = "none";
        cargarSpritesEnLotes(todasLasUrls);
        actualizarContador();
    } catch (error) {
        console.log("Error cargando lista de pokemon:", error);
        loadingIndicator.style.display = "none";
        galeriaPokemon.innerHTML = '<div class="no-resultados">Error al conectar con la API</div>';
    }
}

function extraerId(url) {
    let partes = url.replace(/\/$/, "").split("/");
    return partes[partes.length - 1];
}

const FALLBACK_SPRITE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='38' fill='%23ddd' stroke='%23999' stroke-width='2'/%3E%3Cpath d='M20 40h40M40 20v40' stroke='%23999' stroke-width='2'/%3E%3C/svg%3E";

function crearCard(id, nombre) {
    let div = document.createElement("div");
    div.className = "pokemon-item";
    div.dataset.id = id;
    div.dataset.name = nombre;

    let img = document.createElement("img");
    img.alt = nombre;
    img.loading = "lazy";
    img.src = FALLBACK_SPRITE;
    div.appendChild(img);

    let p = document.createElement("p");
    p.textContent = nombre;
    div.appendChild(p);

    let idLabel = document.createElement("span");
    idLabel.className = "pokemon-id";
    idLabel.textContent = "#" + id;
    div.appendChild(idLabel);

    div.addEventListener("click", function () {
        let cryUrl = this.dataset.cryUrl;
        if (cryUrl) {
            let audio = new Audio(cryUrl);
            audio.volume = 0.06;
            audio.play().catch(function () {});
        }
        abrirModal(parseInt(this.dataset.id));
    });

    return div;
}

async function cargarSpritesEnLotes(lista) {
    for (let i = 0; i < lista.length; i += 5) {
        let lote = lista.slice(i, i + 5);
        let promesas = lote.map(function (item) {
            let id = extraerId(item.url);
            let cards = galeriaPokemon.querySelectorAll('.pokemon-item[data-id="' + id + '"]');

            return fetch(item.url)
                .then(function (r) {
                    if (!r.ok) throw new Error("HTTP " + r.status);
                    return r.json();
                })
                .then(function (data) {
                    let mejorSprite = obtenerSprite(data);
                    let cryUrl = data.cries && (data.cries.latest || data.cries.legacy);
                    cards.forEach(function (card) {
                        if (cryUrl) card.dataset.cryUrl = cryUrl;
                        let img = card.querySelector("img");
                        img.onerror = function () {
                            this.src = FALLBACK_SPRITE;
                            this.onerror = null;
                        };
                        img.src = mejorSprite || FALLBACK_SPRITE;
                    });
                })
                .catch(function () {});
        });
        await Promise.allSettled(promesas);
        if (i % 100 === 0) actualizarContador();
        await new Promise(function (r) { setTimeout(r, 50); });
    }
    actualizarContador();
}

function actualizarContador() {
    let total = todosLosPokemon.length;
    let visible = total - galeriaPokemon.querySelectorAll('.pokemon-item[style*="display: none"]').length;
    pokemonCount.textContent = visible + " / " + total + " Pokémon";
}

const TRAD_TIPO = {
    normal: "Normal", fire: "Fuego", water: "Agua",
    electric: "Eléctrico", grass: "Planta", ice: "Hielo",
    fighting: "Lucha", poison: "Veneno", ground: "Tierra",
    flying: "Volador", psychic: "Psíquico", bug: "Bicho",
    rock: "Roca", ghost: "Fantasma", dragon: "Dragón",
    dark: "Siniestro", steel: "Acero", fairy: "Hada"
};

const TRAD_OBJETOS = {
    "fire-stone": "Piedra Fuego",
    "water-stone": "Piedra Agua",
    "thunder-stone": "Piedra Trueno",
    "leaf-stone": "Piedra Hoja",
    "moon-stone": "Piedra Lunar",
    "sun-stone": "Piedra Solar",
    "shiny-stone": "Piedra Día",
    "dusk-stone": "Piedra Noche",
    "dawn-stone": "Piedra Alba",
    "ice-stone": "Piedra Hielo",
    "oval-stone": "Piedra Ovalada",
    "king-s-rock": "Roca del Rey",
    "metal-coat": "Capa Metálica",
    "dragon-scale": "Escama Dragón",
    "up-grade": "Mejora",
    "protector": "Protector",
    "electirizer": "Electrizador",
    "magmarizer": "Magmatizador",
    "razor-claw": "Garra Afilada",
    "razor-fang": "Colmillo Afilado",
    "reaper-cloth": "Tela Tétrica",
    "prism-scale": "Escama Prisma",
    "sachet": "Fragüino",
    "whipped-dream": "Dulce Nube",
    "deep-sea-tooth": "Diente Marino",
    "deep-sea-scale": "Escama Marina",
    "dubious-disc": "Disco Extraño",
    "sweet-apple": "Manzana Dulce",
    "tart-apple": "Manzana Ácida",
    "cracked-pot": "Tetera Rota",
    "chipped-pot": "Tetera Estropeada",
    "galarica-cuff": "Brazal Galar",
    "galarica-wreath": "Corona Galar",
    "black-augurite": "Augurita Negra",
    "peat-block": "Bloque Turbo",
    "malicious-armor": "Armadura Maligna",
    "scroll-of-darkness": "Pergamino Oscuridad",
    "scroll-of-waters": "Pergamino Agua",
    "linking-cord": "Cordón Unión",
    "syrupy-apple": "Manzana Melosa",
    "berry-sweet": "Baya Dulce",
    "clover-sweet": "Trébol Dulce",
    "flower-sweet": "Flor Dulce",
    "love-sweet": "Amor Dulce",
    "ribbon-sweet": "Lazo Dulce",
    "star-sweet": "Estrella Dulce",
    "strawberry-sweet": "Fresa Dulce"
};

const DESC_HABILIDAD = {
    "overgrow": "Potencia los movimientos de tipo planta cuando le quedan pocos PS.",
    "blaze": "Potencia los movimientos de tipo fuego cuando le quedan pocos PS.",
    "torrent": "Potencia los movimientos de tipo agua cuando le quedan pocos PS.",
    "swarm": "Potencia los movimientos de tipo bicho cuando le quedan pocos PS.",
    "shield-dust": "El polvo de escudo protege al Pokémon de los efectos secundarios de los ataques.",
    "shed-skin": "Tiene una probabilidad de curar sus problemas de estado cada turno.",
    "compound-eyes": "Aumenta la precisión de los movimientos del Pokémon.",
    "run-away": "Permite huir siempre de Pokémon salvajes.",
    "keen-eye": "Impide que le bajen la precisión al Pokémon.",
    "intimidate": "Reduce el ataque del rival al entrar en combate.",
    "sand-veil": "Aumenta la evasión en una tormenta de arena.",
    "static": "Puede paralizar al rival si este usa un ataque de contacto.",
    "lightning-rod": "Atrae y anula los movimientos de tipo eléctrico, subiendo el ataque especial.",
    "sand-rush": "Aumenta la velocidad en una tormenta de arena.",
    "snow-cloak": "Aumenta la evasión durante la nieve.",
    "oblivious": "El Pokémon no se enamora ni puede ser afectado por movimientos que lo provoquen.",
    "own-tempo": "Impide que el Pokémon se confunda.",
    "early-bird": "Hace que el Pokémon se despierte el doble de rápido tras quedarse dormido.",
    "wonder-guard": "Solo le afectan los movimientos supereficaces.",
    "levitate": "Hace que el Pokémon flote, dándole inmunidad a los movimientos de tipo tierra.",
    "effect-spore": "Puede envenenar, paralizar o dormir al rival si este usa un ataque de contacto.",
    "damp": "Impide que cualquier Pokémon use movimientos de autodestrucción.",
    "limber": "Impide que el Pokémon sea paralizado.",
    "cute-charm": "Puede enamorar al rival si este usa un ataque de contacto.",
    "magic-guard": "Solo recibe daño de los ataques directos, no de quemaduras, veneno, etc.",
    "synchronize": "Transmite al rival cualquier problema de estado que sufra el Pokémon.",
    "inner-focus": "Impide que el Pokémon se amedrente.",
    "guts": "Aumenta el ataque si el Pokémon tiene un problema de estado.",
    "rough-skin": "Daña al rival si este usa un ataque de contacto.",
    "sheer-force": "Aumenta la potencia de los movimientos con efectos secundarios, pero elimina dichos efectos.",
    "rock-head": "Impide que el Pokémon sufra daño de retroceso.",
    "sturdy": "Impide que el Pokémon sea fulminado de un solo golpe.",
    "water-absorb": "Anula los movimientos de tipo agua y recupera PS.",
    "volt-absorb": "Anula los movimientos de tipo eléctrico y recupera PS.",
    "natural-cure": "Cura los problemas de estado al cambiar de Pokémon.",
    "serene-grace": "Duplica la probabilidad de que ocurran efectos secundarios.",
    "super-luck": "Aumenta la probabilidad de dar un golpe crítico.",
    "cloud-nine": "Anula todos los efectos del clima.",
    "vital-spirit": "Impide que el Pokémon se duerma.",
    "anger-point": "Sube el ataque al máximo si recibe un golpe crítico.",
    "pickup": "Puede recoger objetos del suelo.",
    "thick-fat": "Reduce a la mitad el daño de los movimientos de tipo fuego y hielo.",
    "flash-fire": "Anula los movimientos de tipo fuego y potencia los propios.",
    "white-smoke": "Impide que le bajen las características al Pokémon.",
    "pressure": "Hace que el rival gaste más PP al usar movimientos.",
    "poison-point": "Puede envenenar al rival si este usa un ataque de contacto.",
    "tinted-lens": "Duplica el daño de los movimientos no muy eficaces.",
    "insomnia": "Impide que el Pokémon se duerma.",
    "immunity": "Impide que el Pokémon sea envenenado.",
    "liquid-ooze": "Daña al rival si este absorbe PS del Pokémon.",
    "magma-armor": "Impide que el Pokémon se congele.",
    "sticky-hold": "Impide que el Pokémon pierda su objeto equipado.",
    "chlorophyll": "Duplica la velocidad cuando hace sol.",
    "huge-power": "Duplica el ataque del Pokémon.",
    "plus": "Aumenta el ataque especial si un aliado tiene la habilidad Más o Menos.",
    "minus": "Aumenta el ataque especial si un aliado tiene la habilidad Más o Menos.",
    "trace": "Copia la habilidad del rival al entrar en combate.",
    "shadow-tag": "Impide que el Pokémon rival huyan o sean cambiados.",
    "arena-trap": "Impide que el Pokémon rival huyan.",
    "speed-boost": "Aumenta la velocidad del Pokémon al final de cada turno.",
    "battle-armor": "Protege al Pokémon de los golpes críticos.",
    "clear-body": "Impide que le bajen las características al Pokémon.",
    "hyper-cutter": "Impide que le bajen el ataque.",
    "soundproof": "Protege al Pokémon de todos los movimientos que usan el sonido.",
    "rain-dish": "Recupera PS gradualmente cuando llueve.",
    "drizzle": "Provoca lluvia al entrar en combate.",
    "drought": "Provoca sol al entrar en combate.",
    "sand-stream": "Provoca una tormenta de arena al entrar en combate.",
    "snow-warning": "Provoca nieve al entrar en combate.",
    "air-lock": "Anula todos los efectos del clima.",
    "mold-breaker": "Ignora las habilidades del rival que afectan a los movimientos.",
    "hustle": "Aumenta el ataque pero reduce la precisión.",
    "marvel-scale": "Aumenta la defensa si el Pokémon tiene un problema de estado.",
    "moxie": "Sube el ataque cuando derrota a un Pokémon rival.",
    "reckless": "Aumenta la potencia de los movimientos que causan daño de retroceso.",
    "skill-link": "Los ataques de varios golpes siempre golpean el máximo de veces.",
    "water-veil": "Impide que el Pokémon se queme.",
    "unaware": "Ignora los cambios en las características del rival.",
    "technician": "Aumenta la potencia de los movimientos de baja potencia.",
    "flower-gift": "Sube el ataque y la defensa especiales cuando hace sol.",
    "adaptability": "Aumenta el bonus de tipo del mismo tipo que el Pokémon.",
    "anticipation": "Presiente los movimientos peligrosos del rival.",
    "aftermath": "Daña al rival si el Pokémon es derrotado por un ataque de contacto.",
    "dry-skin": "Anula los movimientos de tipo agua y recupera PS, pero el fuego le causa más daño.",
    "filter": "Reduce el daño de los movimientos supereficaces.",
    "frisk": "Examina el objeto del rival al entrar en combate.",
    "gluttony": "Hace que el Pokémon use su baya cuando le queda más PS de lo normal.",
    "heatproof": "Reduce a la mitad el daño de los movimientos de tipo fuego.",
    "ice-body": "Recupera PS gradualmente durante la nieve.",
    "iron-fist": "Aumenta la potencia de los movimientos de puño.",
    "motor-drive": "Sube la velocidad si recibe un ataque de tipo eléctrico.",
    "normalize": "Todos los movimientos del Pokémon se convierten en tipo normal.",
    "poison-heal": "Recupera PS si el Pokémon está envenenado, en lugar de dañarlo.",
    "regenerator": "Recupera PS al cambiar el Pokémon por otro.",
    "sniper": "Aumenta el daño de los golpes críticos.",
    "slow-start": "Reduce el ataque y la velocidad durante los primeros turnos.",
    "solar-power": "Aumenta el ataque especial cuando hace sol, pero pierde PS cada turno.",
    "solid-rock": "Reduce el daño de los movimientos supereficaces.",
    "storm-drain": "Atrae los movimientos de tipo agua y sube el ataque especial.",
    "tangled-feet": "Aumenta la evasión si el Pokémon está confuso.",
    "hydration": "Cura los problemas de estado cuando llueve.",
    "flower-veil": "Protege a los Pokémon de tipo planta de que les bajen las características.",
    "gooey": "Reduce la velocidad del rival si este usa un ataque de contacto.",
    "toxic-boost": "Aumenta la potencia de los movimientos físicos cuando está envenenado.",
    "heavy-metal": "Duplica el peso del Pokémon.",
    "light-metal": "Reduce el peso del Pokémon a la mitad.",
    "multiscale": "Reduce el daño recibido cuando el Pokémon tiene todos los PS.",
    "harvest": "Puede recuperar la baya ya usada después de cada turno.",
    "telepathy": "Evita el daño de los movimientos de los aliados.",
    "justified": "Sube el ataque si recibe un ataque de tipo siniestro.",
    "cursed-body": "Puede inhabilitar el movimiento usado contra el Pokémon.",
    "mummy": "Transmite la habilidad Momias al rival si este usa un ataque de contacto.",
    "rattled": "Sube la velocidad si el Pokémon se asusta con un movimiento de tipo siniestro, bicho o fantasma.",
    "magic-bounce": "Devuelve los movimientos de estado al rival.",
    "sap-sipper": "Anula los movimientos de tipo planta y sube el ataque.",
    "prankster": "Da prioridad a los movimientos de estado.",
    "sand-force": "Aumenta la potencia de los movimientos de tipo roca, tierra y acero durante la tormenta de arena.",
    "weak-armor": "Sube la velocidad pero baja la defensa al recibir daño.",
    "no-guard": "Todos los movimientos del Pokémon y del rival aciertan siempre.",
    "steam-engine": "Sube drásticamente la velocidad si recibe un ataque de tipo agua o fuego.",
    "punk-rock": "Aumenta la potencia de los movimientos de tipo sonido y reduce el daño recibido de estos.",
    "sand-spit": "Crea una tormenta de arena al recibir daño."
};

async function obtenerHabilidad(url) {
    if (cacheHabilidades[url]) return cacheHabilidades[url];
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        let nombreEs = data.names.find(function (n) { return n.language.name === "es"; });
        if (!nombreEs && TRAD_HABILIDAD[data.name]) {
            nombreEs = { name: TRAD_HABILIDAD[data.name] };
        }

        let desc = DESC_HABILIDAD[data.name] || null;
        if (!desc) {
            let flavor = data.flavor_text_entries && data.flavor_text_entries.find(function (e) { return e.language.name === "es"; });
            if (flavor) desc = flavor.flavor_text.replace(/[\n\f]/g, " ");
        }
        if (!desc) {
            let eff = data.effect_entries && data.effect_entries.find(function (e) { return e.language.name === "es"; });
            if (eff) desc = eff.short_effect || eff.effect;
        }
        if (!desc) {
            let flavor = data.flavor_text_entries && data.flavor_text_entries.find(function (e) { return e.language.name === "en"; });
            if (flavor) desc = flavor.flavor_text.replace(/[\n\f]/g, " ");
        }
        if (!desc) {
            let eff = data.effect_entries && data.effect_entries.find(function (e) { return e.language.name === "en"; });
            if (eff) desc = eff.short_effect || eff.effect;
        }

        cacheHabilidades[url] = {
            nombre: nombreEs ? nombreEs.name : data.name,
            descripcion: desc || "Sin descripción disponible."
        };
        return cacheHabilidades[url];
    } catch (e) {
        return { nombre: "Desconocido", descripcion: "Error al cargar." };
    }
}

async function obtenerMovimiento(nombre) {
    if (cacheMovimientos[nombre]) return cacheMovimientos[nombre];
    try {
        let resp = await fetch("https://pokeapi.co/api/v2/move/" + nombre + "/");
        let data = await resp.json();
        let nombreEs = data.names.find(function (n) { return n.language.name === "es"; });
        let efecto = data.flavor_text_entries.find(function (e) { return e.language.name === "es"; });
        if (!efecto) efecto = data.flavor_text_entries.find(function (e) { return e.language.name === "en"; });
        if (!efecto) {
            let eff = data.effect_entries.find(function (e) { return e.language.name === "es"; });
            if (eff) efecto = { flavor_text: eff.short_effect || eff.effect };
        }
        if (!efecto) {
            let eff = data.effect_entries.find(function (e) { return e.language.name === "en"; });
            if (eff) efecto = { flavor_text: eff.short_effect || eff.effect };
        }
        cacheMovimientos[nombre] = {
            nombre: nombreEs ? nombreEs.name : nombre,
            descripcion: efecto ? efecto.flavor_text.replace(/[\n\f]/g, " ") : "Sin descripción."
        };
        return cacheMovimientos[nombre];
    } catch (e) {
        return { nombre: nombre, descripcion: "Error al cargar." };
    }
}

async function abrirModal(idPokemon) {
    try {
        let [pokemonResponse, especieResponse] = await Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon + "/"),
            fetch("https://pokeapi.co/api/v2/pokemon-species/" + idPokemon + "/")
        ]);

        let data = await pokemonResponse.json();
        let especieData = await especieResponse.json();

        let spriteNormal = obtenerSprite(data);
        let spriteShiny = obtenerSprite(data, true);
        let imgModal = document.querySelector("#imgModal");
        let btnShiny = document.querySelector("#btnShiny");
        imgModal.src = spriteNormal || FALLBACK_SPRITE;
        if (spriteNormal) {
            imgModal.onerror = function () { this.src = FALLBACK_SPRITE; this.onerror = null; };
        }
        if (spriteShiny) {
            btnShiny.classList.remove("oculto");
            btnShiny.classList.remove("activo");
            let isShiny = false;
            btnShiny.onclick = function () {
                isShiny = !isShiny;
                imgModal.src = isShiny ? spriteShiny : spriteNormal;
                btnShiny.classList.toggle("activo", isShiny);
            };
        } else {
            btnShiny.classList.add("oculto");
        }

        document.querySelector("#nombreModal").textContent = data.name;
        document.querySelector("#idModal").textContent = data.id;

        let tiposHtml = data.types.map(function (t) {
            var color = COLORES_TIPO[t.type.name] || "#999";
            var nombreEs = TRAD_TIPO[t.type.name] || t.type.name;
            return '<span class="tipo-badge" style="background:' + color + '">' + nombreEs + "</span>";
        }).join(" ");
        document.querySelector("#tipoModal").innerHTML = tiposHtml;

        document.querySelector("#alturaModal").textContent = (data.height / 10).toFixed(1);
        document.querySelector("#pesoModal").textContent = (data.weight / 10).toFixed(1);
        document.querySelector("#expModal").textContent = data.base_experience || "N/A";

        let promesasHabilidades = data.abilities.map(function (a) {
            return obtenerHabilidad(a.ability.url);
        });
        let habilidadesData = await Promise.all(promesasHabilidades);

        let nombresHabilidades = habilidadesData.map(function (h, i) {
            return h.nombre + (data.abilities[i].is_hidden ? " (oculta)" : "");
        }).join(", ");
        document.querySelector("#habilidadesModal").textContent = nombresHabilidades;

        let habilidadesContainer = document.querySelector("#habilidadesContainer");
        habilidadesContainer.innerHTML = "";

        habilidadesData.forEach(function (h, i) {
            let item = document.createElement("div");
            item.className = "habilidad-item";

            let titulo = document.createElement("div");
            titulo.className = "habilidad-titulo";
            titulo.textContent = h.nombre + (data.abilities[i].is_hidden ? " (oculta)" : "");

            let desc = document.createElement("div");
            desc.className = "habilidad-desc";
            desc.textContent = h.descripcion;

            item.appendChild(titulo);
            item.appendChild(desc);
            habilidadesContainer.appendChild(item);
        });

        let statsContainer = document.querySelector("#statsContainer");
        statsContainer.innerHTML = "";

        var statsTargets = [];
        data.stats.forEach(function (s) {
            let item = document.createElement("div");
            item.className = "stat-item";

            let label = document.createElement("span");
            label.className = "stat-nombre";
            label.textContent = NOMBRES_STATS[s.stat.name] || s.stat.name.replace("-", " ").toUpperCase();

            let val = document.createElement("span");
            val.className = "stat-valor";
            val.textContent = s.base_stat;

            let barraOuter = document.createElement("div");
            barraOuter.className = "stat-barra";

            let barraInner = document.createElement("div");
            barraInner.className = "stat-barra-relleno";
            var pct = Math.min((s.base_stat / 255) * 100, 100);
            barraInner.style.width = "0%";
            barraInner.dataset.pct = pct;
            barraInner.style.background = obtenerColorStat(pct);

            barraOuter.appendChild(barraInner);
            item.appendChild(label);
            item.appendChild(barraOuter);
            item.appendChild(val);
            statsContainer.appendChild(item);
            statsTargets.push(barraInner);
        });
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                statsTargets.forEach(function (el, idx) {
                    setTimeout(function () {
                        el.style.width = el.dataset.pct + "%";
                    }, idx * 60);
                });
            });
        });

        cargarEvoluciones(especieData);

        let movimientosContainer = document.querySelector("#movimientosContainer");
        movimientosContainer.innerHTML = "";

        let chips = [];
        data.moves.slice(0, 24).forEach(function (m) {
            let chip = document.createElement("span");
            chip.className = "movimiento-chip";
            chip.textContent = m.move.name.replace(/-/g, " ");
            chip.dataset.moveName = m.move.name;
            chip.addEventListener("click", function (e) {
                e.stopPropagation();
                mostrarMovimiento(this.dataset.moveName);
            });
            movimientosContainer.appendChild(chip);
            chips.push(chip);
        });

        traducirChipsMovimiento(chips);

        let criesContainer = document.querySelector("#criesContainer");
        criesContainer.innerHTML = "";

        if (data.cries) {
            let cryUrl = data.cries.latest || data.cries.legacy;
            if (cryUrl) {
                let audio = document.createElement("audio");
                audio.controls = true;
                audio.src = cryUrl;
                criesContainer.appendChild(audio);
            } else {
                criesContainer.textContent = "No disponible";
            }
        } else {
            criesContainer.textContent = "No disponible";
        }

        let descripcion = "Sin descripción disponible.";
        if (especieData.flavor_text_entries && especieData.flavor_text_entries.length > 0) {
            let es = especieData.flavor_text_entries.find(function (e) { return e.language.name === "es"; });
            if (es) {
                descripcion = es.flavor_text.replace(/[\n\f]/g, " ");
            } else {
                descripcion = especieData.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
            }
        }
        document.querySelector("#descripcionModal").textContent = descripcion;
        modal.classList.remove("oculto");
        moveDetalle.classList.add("oculto");
    } catch (error) {
        console.log("Error cargando datos del pokemon:", error);
        document.querySelector("#descripcionModal").textContent = "Error al cargar los datos.";
        modal.classList.remove("oculto");
    }
}

async function mostrarMovimiento(nombre) {
    let info = await obtenerMovimiento(nombre);
    moveDetalleTitulo.textContent = info.nombre;
    moveDetalleDesc.textContent = info.descripcion;
    moveDetalle.classList.remove("oculto");
}

async function traducirChipsMovimiento(chips) {
    for (let i = 0; i < chips.length; i += 5) {
        let lote = chips.slice(i, i + 5);
        let promesas = lote.map(function (chip) {
            return obtenerMovimiento(chip.dataset.moveName).then(function (info) {
                chip.textContent = info.nombre;
            });
        });
        await Promise.allSettled(promesas);
    }
}

function obtenerSprite(data, shiny) {
    var key = shiny ? "front_shiny" : "front_default";
    try {
        var gen5 = data.sprites.versions["generation-v"]["black-white"];
        if (gen5 && gen5.animated && gen5.animated[key]) return gen5.animated[key];
    } catch (e) {}
    try {
        var artwork = data.sprites.other["official-artwork"];
        if (artwork && artwork[key]) return artwork[key];
    } catch (e) {}
    if (data.sprites[key]) return data.sprites[key];
    if (!shiny && data.sprites.front_default) return data.sprites.front_default;
    return null;
}

function obtenerColorStat(pct) {
    if (pct < 25) return "linear-gradient(90deg, #f44336, #ef5350)";
    if (pct < 50) return "linear-gradient(90deg, #ff9800, #ffa726)";
    if (pct < 75) return "linear-gradient(90deg, #ffc107, #ffca28)";
    return "linear-gradient(90deg, #4caf50, #66bb6a)";
}

async function cargarEvoluciones(especieData) {
    let container = document.querySelector("#evolucionesContainer");
    container.innerHTML = "";

    if (!especieData.evolution_chain || !especieData.evolution_chain.url) {
        container.innerHTML = '<span class="evo-placeholder">No tiene evoluciones</span>';
        return;
    }

    try {
        let resp = await fetch(especieData.evolution_chain.url);
        let data = await resp.json();
        let cadena = data.chain;
        let niveles = [];
        extraerNiveles(cadena, niveles, 0, []);

        if (niveles.length <= 1) {
            container.innerHTML = '<span class="evo-placeholder">No tiene evoluciones</span>';
            return;
        }

        for (let i = 0; i < niveles.length; i++) {
            let nivel = niveles[i];
            let evoId = extraerId(nivel.url);

            let link = document.createElement("a");
            link.className = "evo-item";
            link.href = "#";
            link.dataset.id = evoId;

            let img = document.createElement("img");
            img.alt = nivel.nombre;
            img.loading = "lazy";
            img.src = FALLBACK_SPRITE;
            link.appendChild(img);

            fetch("https://pokeapi.co/api/v2/pokemon/" + evoId + "/")
                .then(function (r) { return r.json(); })
                .then(function (evoData) {
                    var evoSprite = obtenerSprite(evoData);
                    if (evoSprite) {
                        img.onerror = function () { this.src = FALLBACK_SPRITE; this.onerror = null; };
                        img.src = evoSprite;
                    }
                })
                .catch(function () {});

            let nombre = document.createElement("span");
            nombre.textContent = nivel.nombre;
            link.appendChild(nombre);

            link.addEventListener("click", function (e) {
                e.preventDefault();
                cerrarModal();
                setTimeout(function () {
                    let cards = document.querySelectorAll('.pokemon-item[data-id="' + this.dataset.id + '"]');
                    if (cards.length > 0) {
                        cards[0].scrollIntoView({ behavior: "smooth", block: "center" });
                        cards[0].style.borderColor = "#ffd54f";
                        setTimeout(function () { cards[0].style.borderColor = ""; }, 2000);
                    }
                    abrirModal(parseInt(this.dataset.id));
                }.bind(this), 300);
            });

            container.appendChild(link);

            if (i < niveles.length - 1) {
                let grupo = document.createElement("span");
                grupo.className = "evo-grupo-flecha";

                let flecha = document.createElement("span");
                flecha.className = "evo-flecha";
                flecha.textContent = "\u2192";
                grupo.appendChild(flecha);

                var detalleSiguiente = niveles[i + 1].detalle;
                if (detalleSiguiente) {
                    let detalle = document.createElement("span");
                    detalle.className = "evo-detalle";
                    detalle.textContent = detalleSiguiente;
                    grupo.appendChild(detalle);
                }

                container.appendChild(grupo);
            }
        }
    } catch (e) {
        container.innerHTML = '<span class="evo-placeholder">Error al cargar evoluciones</span>';
    }
}

function extraerNiveles(cadena, resultado, profundidad, detallesEvo) {
    var textoDetalle = null;
    if (detallesEvo && detallesEvo.length > 0) {
        textoDetalle = formatearDetalleEvo(detallesEvo[0]);
    }
    resultado.push({ nombre: cadena.species.name, url: cadena.species.url, nivel: profundidad, detalle: textoDetalle });
    if (cadena.evolves_to && cadena.evolves_to.length > 0) {
        cadena.evolves_to.forEach(function (evo) {
            extraerNiveles(evo, resultado, profundidad + 1, evo.evolution_details);
        });
    }
}

function formatearDetalleEvo(detalle) {
    var trigger = detalle.trigger ? detalle.trigger.name : null;
    if (trigger === "level-up") {
        if (detalle.min_level) {
            return "Nv. " + detalle.min_level;
        }
        return "Nv. up";
    }
    if (trigger === "use-item") {
        if (detalle.item) {
            var nombreItem = TRAD_OBJETOS[detalle.item.name] || detalle.item.name.replace(/-/g, " ");
            return nombreItem;
        }
        return "Objeto";
    }
    if (trigger === "trade") {
        if (detalle.held_item) {
            var objeto = TRAD_OBJETOS[detalle.held_item.name] || detalle.held_item.name.replace(/-/g, " ");
            return "Interc. + " + objeto;
        }
        return "Intercambio";
    }
    if (trigger === "shed") {
        return "Evolución";
    }
    if (trigger === "spin") {
        return "Girar";
    }
    if (trigger === "level-up-happiness") {
        return "Amistad Nv." + (detalle.min_level || "");
    }
    if (trigger === "three-critical-hits") {
        return "3 críticos";
    }
    if (trigger === "take-damage") {
        return "Daño recibido";
    }
    if (trigger === "tower-of-darkness") {
        return "Torre Oscuridad";
    }
    if (trigger === "tower-of-waters") {
        return "Torre Agua";
    }
    if (trigger === "level-up-night") {
        if (detalle.min_level) return "Noche Nv. " + detalle.min_level;
        return "Noche";
    }
    if (trigger === "level-up-day") {
        if (detalle.min_level) return "Día Nv. " + detalle.min_level;
        return "Día";
    }
    if (trigger === "friendship") {
        return "Amistad";
    }
    if (trigger === "beauty") {
        return "Belleza";
    }
    if (trigger === "agile-style") {
        return "Estilo ágil";
    }
    if (trigger === "defeat-leader") {
        return "Derrotar líder";
    }
    if (trigger === "defeat-agatha") {
        return "Derrotar a Ágatha";
    }
    if (trigger === "defeat-primeape") {
        return "Derrotar ×20 Primeape";
    }
    if (trigger === "level-up-atk>def") {
        if (detalle.min_level) return "Nv. " + detalle.min_level + " (Ataque>Def)";
        return "Ataque > Defensa";
    }
    if (trigger === "level-up-atk=def") {
        if (detalle.min_level) return "Nv. " + detalle.min_level + " (Atq=Def)";
        return "Ataque = Defensa";
    }
    if (trigger === "level-up-def>atk") {
        if (detalle.min_level) return "Nv. " + detalle.min_level + " (Def>Ataque)";
        return "Defensa > Ataque";
    }
    if (trigger === "recoil-damage") {
        return "Daño retroceso";
    }
    if (trigger === "crit-count") {
        return "Críticos en combate";
    }
    return trigger ? trigger.replace(/-/g, " ") : "Evolución";
}

function filtrarPokemones() {
    let texto = buscador.value.toLowerCase().trim();
    let coincidencias = 0;

    todosLosPokemon.forEach(function (item) {
        let nombre = item.dataset.name.toLowerCase();
        let id = item.dataset.id;
        var coincide = texto === "" || nombre.includes(texto) || id.includes(texto);
        item.style.display = coincide ? "" : "none";
        if (coincide) coincidencias++;
    });

    if (texto !== "" && coincidencias === 0) {
        noResults.classList.remove("oculto");
    } else {
        noResults.classList.add("oculto");
    }

    actualizarContador();
}
