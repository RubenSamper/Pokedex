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
    "strawberry-sweet": "Fresa Dulce",
    "silk-scarf": "Pañuelo Seda", "charcoal": "Carbón",
    "mystic-water": "Agua Mística", "magnet": "Imán",
    "miracle-seed": "Semilla Milagro", "never-melt-ice": "Hielo Eterno",
    "black-belt": "Cinta Negra", "poison-barb": "Púa Venenosa",
    "soft-sand": "Arena Fina", "sharp-beak": "Pico Afilado",
    "twisted-spoon": "Cuchara Torcida", "silver-powder": "Polvo Plateado",
    "hard-stone": "Roca Dura", "spell-tag": "Hechizo",
    "dragon-fang": "Colmillo Dragón", "black-glasses": "Gafas Negras",
    "fairy-feather": "Pluma Feérica",
    "choice-band": "Cinta Elegida", "choice-specs": "Gafas Elegidas",
    "choice-scarf": "Pañuelo Elegido", "life-orb": "Vidaesfera",
    "leftovers": "Restos", "assault-vest": "Chaleco Asalto",
    "focus-sash": "Banda Focus", "rocky-helmet": "Casco Dentado",
    "heavy-duty-boots": "Botas Pesadas", "eviolite": "Evolur",
    "air-balloon": "Globo Helio", "black-sludge": "Lodo Negro",
    "focus-band": "Banda Aguante", "bright-powder": "Polvo Brillante",
    "wide-lens": "Lupa", "scope-lens": "Periscopio",
    "quick-claw": "Garra Rápida", "metronome": "Metrónomo",
    "muscle-band": "Banda Muscle", "wise-glasses": "Gafas Mente",
    "expert-belt": "Cinturón Experto", "flame-orb": "Orbe Llama",
    "toxic-orb": "Orbe Tóxico", "lagging-tail": "Cola Rémi",
    "safety-goggles": "Gafas Protectoras", "red-card": "Tarjeta Roja",
    "eject-button": "Botón Escape", "shed-shell": "Muda Concha",
    "big-root": "Raíz Grande",
    "damp-rock": "Roca Húmeda", "heat-rock": "Roca Calor",
    "icy-rock": "Roca Hielo", "smooth-rock": "Roca Lisa",
    "light-clay": "Arcilla Luminosa",
    "oran-berry": "Baya Caqui", "sitrus-berry": "Baya Zidra",
    "lum-berry": "Baya Perasi", "cheri-berry": "Baya Atania",
    "chesto-berry": "Baya Aranja", "pecha-berry": "Baya Meloc",
    "rawst-berry": "Baya Anjiro", "aspear-berry": "Baya Peracé",
    "leppa-berry": "Baya Angano", "persim-berry": "Baya Caquic",
    "figy-berry": "Baya Chiri", "wiki-berry": "Baya Wiki",
    "mago-berry": "Baya Mago", "aguav-berry": "Baya Ango",
    "iapapa-berry": "Baya Labra", "ganlon-berry": "Baya Gaula",
    "salac-berry": "Baya Aric", "petaya-berry": "Baya Petaya",
    "apicot-berry": "Baya Atal", "liechi-berry": "Baya Liechi",
    "enigma-berry": "Baya Enigma", "rowap-berry": "Baya Rowap",
    "starf-berry": "Baya Estram", "lansat-berry": "Baya Lansat",
    "kebia-berry": "Baya Kebia",
    "wacan-berry": "Baya Wacan", "rindo-berry": "Baya Rindo",
    "payapa-berry": "Baya Payapa", "charti-berry": "Baya Charti",
    "roseli-berry": "Baya Roseli", "occa-berry": "Baya Ocea",
    "shuca-berry": "Baya Shuca", "coba-berry": "Baya Coba",
    "babiri-berry": "Baya Babiri", "chilan-berry": "Baya Chilan",
    "chople-berry": "Baya Chople", "kasib-berry": "Baya Kasib",
    "colbur-berry": "Baya Colbur", "yache-berry": "Baya Yache",
    "haban-berry": "Baya Haban", "tanga-berry": "Baya Tanga",
    "occa-berry": "Baya Ocea", "passho-berry": "Baya Passho",
    "power-herb": "Hierba Única", "white-herb": "Hierba Blanca",
    "mental-herb": "Hierba Mente",
    "power-bracer": "Pesas Brazo", "power-belt": "Cinto Pesado",
    "power-lens": "Lupas", "power-band": "Banda Pesada",
    "power-anklet": "Pesas Tobillo", "power-weight": "Pesa Pesada",
    "macho-brace": "Fuerte Brazal",
    "sky-plate": "Losa Cielo",
    "toxic-plate": "Losa Tóxica", "earth-plate": "Losa Tierra",
    "stone-plate": "Losa Roca", "insect-plate": "Losa Bicho",
    "spooky-plate": "Losa Sombra", "iron-plate": "Losa Acero",
    "flame-plate": "Losa Llama", "splash-plate": "Losa Agua",
    "zap-plate": "Losa Rayo", "meadow-plate": "Losa Prado",
    "icicle-plate": "Losa Hielo", "fist-plate": "Losa Puño",
    "mind-plate": "Losa Mente", "dread-plate": "Losa Siniestra",
    "draco-plate": "Losa Dragón", "pixie-plate": "Losa Feérica"
};

const CATEGORIA_ITEMS = [
    {
        id: "potenciadores",
        nombre: "Potenciadores de Tipo",
        icono: "⚡",
        descripcion: "Aumentan el poder de los movimientos de un tipo específico un 20%",
        items: [
            { key: "silk-scarf", tipo: "normal" },
            { key: "charcoal", tipo: "fire" },
            { key: "mystic-water", tipo: "water" },
            { key: "magnet", tipo: "electric" },
            { key: "miracle-seed", tipo: "grass" },
            { key: "never-melt-ice", tipo: "ice" },
            { key: "black-belt", tipo: "fighting" },
            { key: "poison-barb", tipo: "poison" },
            { key: "soft-sand", tipo: "ground" },
            { key: "sharp-beak", tipo: "flying" },
            { key: "twisted-spoon", tipo: "psychic" },
            { key: "silver-powder", tipo: "bug" },
            { key: "hard-stone", tipo: "rock" },
            { key: "spell-tag", tipo: "ghost" },
            { key: "dragon-fang", tipo: "dragon" },
            { key: "black-glasses", tipo: "dark" },
            { key: "fairy-feather", tipo: "fairy" }
        ]
    },
    {
        id: "platos",
        nombre: "Platos Arceus",
        icono: "🌀",
        descripcion: "Los platos potencian un tipo específico. En Cobblemon funcionan igual que los potenciadores de tipo",
        items: [
            { key: "flame-plate", tipo: "fire" },
            { key: "splash-plate", tipo: "water" },
            { key: "zap-plate", tipo: "electric" },
            { key: "meadow-plate", tipo: "grass" },
            { key: "icicle-plate", tipo: "ice" },
            { key: "fist-plate", tipo: "fighting" },
            { key: "toxic-plate", tipo: "poison" },
            { key: "earth-plate", tipo: "ground" },
            { key: "sky-plate", tipo: "flying" },
            { key: "mind-plate", tipo: "psychic" },
            { key: "insect-plate", tipo: "bug" },
            { key: "stone-plate", tipo: "rock" },
            { key: "spooky-plate", tipo: "ghost" },
            { key: "draco-plate", tipo: "dragon" },
            { key: "dread-plate", tipo: "dark" },
            { key: "iron-plate", tipo: "steel" },
            { key: "pixie-plate", tipo: "fairy" }
        ]
    },
    {
        id: "competitivos",
        nombre: "Objetos Competitivos",
        icono: "⚔",
        descripcion: "Objetos clave para combate que potencian stats, dan ventaja estratégica o protegen al Pokémon",
        items: [
            { key: "choice-band", recomendacion: "Pokémon con Ataque físico muy alto que usen un solo movimiento (ej: Garchomp, Dracaufeu)" },
            { key: "choice-specs", recomendacion: "Pokémon con Ataque Especial muy alto que usen un solo movimiento (ej: Gardevoir, Dragapult)" },
            { key: "choice-scarf", recomendacion: "Pokémon rápidos que necesiten aún más velocidad para atacar primero (ej: Gengar, Weavile)" },
            { key: "life-orb", recomendacion: "Atacantes versátiles que quieran potencia extra sin sacrificar cobertura (ej: Lucario, Infernape)" },
            { key: "leftovers", recomendacion: "Pokémon tanque o defensivos que se beneficien de recuperar PS cada turno (ej: Blissey, Ferrothorn)" },
            { key: "assault-vest", recomendacion: "Pokémon físicos con buena Defensa Especial natural que quieran ser tanques especiales (ej: Conkeldurr, Tyranitar)" },
            { key: "focus-sash", recomendacion: "Pokémon frágiles o setup sweepers que necesiten sobrevivir un golpe (ej: Alakazam, Froslass)" },
            { key: "rocky-helmet", recomendacion: "Tanques físicos que castigan ataques de contacto (ej: Ferrothorn, Slowbro)" },
            { key: "heavy-duty-boots", recomendacion: "Pokémon débiles a entry hazards que necesiten cambiar sin daño (ej: Volcarona, Corviknight)" },
            { key: "eviolite", recomendacion: "Pokémon no evolucionados con buenas stats base (ej: Porygon2, Chansey, Dusclops)" },
            { key: "air-balloon", recomendacion: "Pokémon débiles a Tierra que quieran una inmunidad temporal (ej: Heatran, Gengar)" },
            { key: "black-sludge", recomendacion: "Pokémon de tipo Veneno que se curan PS cada turno (ej: Toxapex, Gengar)" },
            { key: "expert-belt", recomendacion: "Pokémon con buena cobertura de tipos que golpeen supereficaz a menudo (ej: Lucario, Greninja)" },
            { key: "muscle-band", recomendacion: "Atacantes físicos que quieran un pequeño extra sin penalización" },
            { key: "wise-glasses", recomendacion: "Atacantes especiales que quieran un pequeño extra sin penalización" },
            { key: "wide-lens", recomendacion: "Pokémon que usen movimientos de precisión media (ej: Focus Blast, Hydro Pump)" },
            { key: "scope-lens", recomendacion: "Pokémon con alta probabilidad de golpe crítico o movimientos como Night Slash" },
            { key: "focus-band", recomendacion: "Alternativa a Focus Sash para Pokémon más bulky" },
            { key: "quick-claw", recomendacion: "Pokémon lentos que quieran una oportunidad de atacar primero" },
            { key: "metronome", recomendacion: "Pokémon que usen el mismo movimiento repetidamente (ej: Choice users sin Choice item)" },
            { key: "flame-orb", recomendacion: "Pokémon con habilidad Guts o que se beneficien de estar quemados (ej: Conkeldurr, Ursaring)" },
            { key: "toxic-orb", recomendacion: "Pokémon con habilidad Poison Heal o que se beneficien de estar envenenados (ej: Breloom, Gliscor)" },
            { key: "life-orb", recomendacion: "Atacantes que quieran un 30% más de daño a cambio de PS" },
            { key: "eject-button", recomendacion: "Pokémon de apoyo que necesiten cambiar tras usar un movimiento" },
            { key: "red-card", recomendacion: "Pokémon defensivos que quieran forzar cambios en el rival" },
            { key: "safety-goggles", recomendacion: "Pokémon que quieran ignorar polvo veneno y tormentas de arena" },
            { key: "shed-shell", recomendacion: "Pokémon que quieran escapar de moves que atrapan (Mean Look, Arena Trap)" },
            { key: "big-root", recomendacion: "Pokémon con movimientos de absorción de PS (Giga Drain, Drain Punch)" },
            { key: "white-herb", recomendacion: "Pokémon que entren con stats reducidas o usen Close Combat/Superpower" },
            { key: "power-herb", recomendacion: "Pokémon que usen movimientos de carga (Solar Beam, Meteor Beam, Skull Bash)" },
            { key: "mental-herb", recomendacion: "Pokémon que quieran ignorar Taunt o Encore en un solo uso" }
        ]
    },
    {
        id: "clima",
        nombre: "Objetos de Clima",
        icono: "🌤",
        descripcion: "Extienden la duración del clima en combate de 5 a 8 turnos",
        items: [
            { key: "damp-rock", recomendacion: "Equipos de lluvia (Swift Swim, Rain Dish)" },
            { key: "heat-rock", recomendacion: "Equipos de sol (Chlorophyll, Solar Power, Drought)" },
            { key: "icy-rock", recomendacion: "Equipos de nieve (Slush Rush, Snow Cloak, Snow Warning)" },
            { key: "smooth-rock", recomendacion: "Equipos de arena (Sand Rush, Sand Force, Sand Stream)" },
            { key: "light-clay", recomendacion: "Pokémon que usen Reflect/Light Screen para extender la duración" }
        ]
    },
    {
        id: "evolutivos",
        nombre: "Objetos Evolutivos",
        icono: "⬆",
        descripcion: "Piedras y objetos especiales que permiten evolucionar a ciertos Pokémon",
        items: [
            { key: "fire-stone" }, { key: "water-stone" }, { key: "thunder-stone" },
            { key: "leaf-stone" }, { key: "moon-stone" }, { key: "sun-stone" },
            { key: "shiny-stone" }, { key: "dusk-stone" }, { key: "dawn-stone" },
            { key: "ice-stone" }, { key: "oval-stone" }, { key: "king-s-rock" },
            { key: "metal-coat" }, { key: "dragon-scale" }, { key: "up-grade" },
            { key: "protector" }, { key: "electirizer" }, { key: "magmarizer" },
            { key: "razor-claw" }, { key: "razor-fang" }, { key: "reaper-cloth" },
            { key: "prism-scale" }, { key: "sachet" }, { key: "whipped-dream" },
            { key: "deep-sea-tooth" }, { key: "deep-sea-scale" }, { key: "dubious-disc" },
            { key: "sweet-apple" }, { key: "tart-apple" }, { key: "cracked-pot" },
            { key: "chipped-pot" }, { key: "galarica-cuff" }, { key: "galarica-wreath" },
            { key: "black-augurite" }, { key: "peat-block" }, { key: "malicious-armor" },
            { key: "scroll-of-darkness" }, { key: "scroll-of-waters" }, { key: "linking-cord" },
            { key: "syrupy-apple" }, { key: "berry-sweet" }, { key: "clover-sweet" },
            { key: "flower-sweet" }, { key: "love-sweet" }, { key: "ribbon-sweet" },
            { key: "star-sweet" }, { key: "strawberry-sweet" }
        ]
    },
    {
        id: "entreno",
        nombre: "Objetos de Esfuerzo (EV)",
        icono: "💪",
        descripcion: "Equípalos a un Pokémon para ganar EVs más rápido al derrotar Pokémon salvajes",
        items: [
            { key: "power-bracer", recomendacion: "Aumenta EVs de Ataque" },
            { key: "power-belt", recomendacion: "Aumenta EVs de Defensa" },
            { key: "power-lens", recomendacion: "Aumenta EVs de Ataque Especial" },
            { key: "power-band", recomendacion: "Aumenta EVs de Defensa Especial" },
            { key: "power-anklet", recomendacion: "Aumenta EVs de Velocidad" },
            { key: "power-weight", recomendacion: "Aumenta EVs de PS" },
            { key: "macho-brace", recomendacion: "Duplica todos los EVs ganados (repartidos)" }
        ]
    },
    {
        id: "bayas",
        nombre: "Bayas Útiles",
        icono: "🍇",
        descripcion: "Bayas con efectos en combate: curan estado, restauran PS o reducen daño supereficaz",
        items: [
            { key: "sitrus-berry", recomendacion: "Cura 25% PS cuando baja a 50% o menos. Útil en cualquier Pokémon" },
            { key: "oran-berry", recomendacion: "Cura 10 PS. Alternativa early-game a Sitrus" },
            { key: "lum-berry", recomendacion: "Cura cualquier problema de estado. Ideal para sweepers" },
            { key: "leppa-berry", recomendacion: "Restaura 10 PP de un movimiento con 0 PP" },
            { key: "figy-berry", recomendacion: "Restaura 33% PS cuando baja a 25%. Para Pokémon con Ataque alto" },
            { key: "occa-berry", recomendacion: "Reduce daño supereficaz de Fuego" },
            { key: "passho-berry", recomendacion: "Reduce daño supereficaz de Agua" },
            { key: "wacan-berry", recomendacion: "Reduce daño supereficaz de Eléctrico" },
            { key: "rindo-berry", recomendacion: "Reduce daño supereficaz de Planta" },
            { key: "yache-berry", recomendacion: "Reduce daño supereficaz de Hielo" },
            { key: "chople-berry", recomendacion: "Reduce daño supereficaz de Lucha" },
            { key: "kebia-berry", recomendacion: "Reduce daño supereficaz de Veneno" },
            { key: "shuca-berry", recomendacion: "Reduce daño supereficaz de Tierra" },
            { key: "coba-berry", recomendacion: "Reduce daño supereficaz de Volador" },
            { key: "payapa-berry", recomendacion: "Reduce daño supereficaz de Psíquico" },
            { key: "tanga-berry", recomendacion: "Reduce daño supereficaz de Bicho" },
            { key: "charti-berry", recomendacion: "Reduce daño supereficaz de Roca" },
            { key: "kasib-berry", recomendacion: "Reduce daño supereficaz de Fantasma" },
            { key: "haban-berry", recomendacion: "Reduce daño supereficaz de Dragón" },
            { key: "colbur-berry", recomendacion: "Reduce daño supereficaz de Siniestro" },
            { key: "babiri-berry", recomendacion: "Reduce daño supereficaz de Acero" },
            { key: "roseli-berry", recomendacion: "Reduce daño supereficaz de Hada" },
            { key: "ganlon-berry", recomendacion: "Sube Defensa cuando baja de 25% PS" },
            { key: "salac-berry", recomendacion: "Sube Velocidad cuando baja de 25% PS" },
            { key: "petaya-berry", recomendacion: "Sube Ataque Especial cuando baja de 25% PS" },
            { key: "apicot-berry", recomendacion: "Sube Defensa Especial cuando baja de 25% PS" },
            { key: "liechi-berry", recomendacion: "Sube Ataque cuando baja de 25% PS" },
            { key: "starf-berry", recomendacion: "Sube una estadística al azar cuando baja de 25% PS" },
            { key: "lansat-berry", recomendacion: "Aumenta ratio de golpe crítico cuando baja de 25% PS" },
            { key: "enigma-berry", recomendacion: "Cura PS si el Pokémon recibe daño supereficaz" }
        ]
    }
];

const FALLBACK_SPRITE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect x='15' y='28' width='50' height='38' rx='6' fill='%23e0d8c8' stroke='%23999' stroke-width='2'/%3E%3Cpath d='M25 28L30 12h20l5 16' fill='%23f5f0e0' stroke='%23999' stroke-width='2'/%3E%3Ccircle cx='30' cy='48' r='4' fill='%23ddd' stroke='%23999' stroke-width='1.5'/%3E%3Ccircle cx='50' cy='48' r='4' fill='%23ddd' stroke='%23999' stroke-width='1.5'/%3E%3Crect x='34' y='40' width='12' height='16' rx='2' fill='%23ddd' stroke='%23999' stroke-width='1'/%3E%3C/svg%3E";
const ITEM_SPRITE_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/";

let itemEvoMap = null;
let itemSearchTimeout;
let itemSuggestionIndex = -1;
let todosLosItems = [];
let itemActivo = null;
let itemDetailsCache = {};
let categoriaActiva = "all";

let buscadorItems = document.querySelector("#buscadorItems");
let btnClearItemSearch = document.querySelector("#btnClearItemSearch");
let itemSuggestions = document.querySelector("#itemSuggestions");
let galeriaItems = document.querySelector("#galeriaItems");
let resultadosItems = document.querySelector("#resultadosItems");
let loadingItems = document.querySelector("#loadingItems");
let noItemResults = document.querySelector("#noItemResults");
let itemCount = document.querySelector("#itemCount");
let categoriasEl = document.querySelector("#itemCategorias");

function normalizarTexto(texto) {
    return (texto || "")
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function obtenerNombreObjeto(key) {
    return TRAD_OBJETOS[key] || key.replace(/-/g, " ");
}

function normalizarSpr(key) {
    return key.replace(/_/g, "-");
}

async function obtenerSpriteItem(key) {
    let nk = normalizarSpr(key);
    if (itemDetailsCache[key] && itemDetailsCache[key].spriteUrl) {
        return itemDetailsCache[key].spriteUrl;
    }
    try {
        let resp = await fetch("https://pokeapi.co/api/v2/item/" + nk + "/");
        if (resp.ok) {
            let data = await resp.json();
            let spriteUrl = data && data.sprites && data.sprites.default ? data.sprites.default : ITEM_SPRITE_BASE + nk + ".png";
            let efecto = "";
            if (data.flavor_text_entries && data.flavor_text_entries.length > 0) {
                let es = data.flavor_text_entries.find(function(e) { return e.language && e.language.name === "es"; });
                if (es) {
                    efecto = es.text || "";
                } else {
                    let en = data.flavor_text_entries.find(function(e) { return e.language && e.language.name === "en"; });
                    efecto = en ? en.text : (data.flavor_text_entries[0].text || "");
                }
            }
            itemDetailsCache[key] = { spriteUrl: spriteUrl, data: data, efecto: efecto };
            return spriteUrl;
        }
    } catch (error) {}
    itemDetailsCache[key] = { spriteUrl: ITEM_SPRITE_BASE + nk + ".png", data: null, efecto: "" };
    return ITEM_SPRITE_BASE + nk + ".png";
}

window.addEventListener("load", cargarTodo);

buscadorItems.addEventListener("input", function () {
    btnClearItemSearch.classList.toggle("oculto", this.value === "");
    itemSuggestionIndex = -1;
    clearTimeout(itemSearchTimeout);
    itemSearchTimeout = setTimeout(function () {
        let texto = buscadorItems.value.trim();
        if (texto) {
            let matches = buscarCoincidencias(texto);
            mostrarSugerencias(matches);
        } else {
            itemSuggestions.classList.add("oculto");
        }
        aplicarFiltro();
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
    if (!e.target.closest(".buscador-contenedor")) {
        itemSuggestions.classList.add("oculto");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === " " && event.ctrlKey) {
        event.preventDefault();
        buscadorItems.value = "";
        btnClearItemSearch.classList.add("oculto");
        itemSuggestions.classList.add("oculto");
        ocultarResultados();
        aplicarFiltro();
        buscadorItems.focus();
    }
});

btnClearItemSearch.addEventListener("click", function () {
    buscadorItems.value = "";
    btnClearItemSearch.classList.add("oculto");
    itemSuggestions.classList.add("oculto");
    ocultarResultados();
    buscadorItems.focus();
    aplicarFiltro();
});

function resaltarSugerencia(items) {
    items.forEach(function (el, i) {
        el.classList.toggle("destacado", i === itemSuggestionIndex);
    });
}

function itemsAplanados() {
    let todos = [];
    for (let cat of CATEGORIA_ITEMS) {
        for (let item of cat.items) {
            todos.push({ key: item.key, categoria: cat.id });
        }
    }
    return todos;
}

function buscarCoincidencias(texto) {
    let query = normalizarTexto(texto);
    if (!query) return [];
    let matches = [];
    for (let entry of itemsAplanados()) {
        let key = entry.key;
        let value = TRAD_OBJETOS[key] || key.replace(/-/g, " ");
        let keySearch = normalizarTexto(key);
        let valueSearch = normalizarTexto(value);
        if (keySearch.includes(query) || valueSearch.includes(query)) {
            matches.push({ key: key, value: value, keySearch: keySearch, valueSearch: valueSearch, categoria: entry.categoria });
        }
    }
    matches.sort(function (a, b) {
        let aExact = a.valueSearch === query || a.keySearch === query;
        let bExact = b.valueSearch === query || b.keySearch === query;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        let aStart = a.keySearch.startsWith(query) || a.valueSearch.startsWith(query);
        let bStart = b.keySearch.startsWith(query) || b.valueSearch.startsWith(query);
        if (aStart && !bStart) return -1;
        if (!aStart && bStart) return 1;
        return a.value.localeCompare(b.value);
    });
    return matches.slice(0, 8);
}

function mostrarSugerencias(matches) {
    itemSuggestionIndex = -1;
    if (matches.length === 0) {
        itemSuggestions.classList.add("oculto");
        return;
    }
    let fragment = document.createDocumentFragment();
    matches.forEach(function (m) {
        let option = document.createElement("div");
        option.className = "autocomplete-item";
        option.dataset.key = m.key;
        option.textContent = m.value;
        fragment.appendChild(option);
    });
    itemSuggestions.innerHTML = "";
    itemSuggestions.appendChild(fragment);
    itemSuggestions.classList.remove("oculto");
    itemSuggestions.querySelectorAll(".autocomplete-item").forEach(function (el) {
        el.addEventListener("click", function () {
            let key = this.dataset.key;
            buscadorItems.value = TRAD_OBJETOS[key] || key.replace(/-/g, " ");
            itemSuggestions.classList.add("oculto");
            btnClearItemSearch.classList.remove("oculto");
            aplicarFiltro();
            seleccionarItem(key);
            let card = document.querySelector('.item-card[data-key="' + key + '"]');
            if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    });
}

function crearCategorias() {
    let html = '<span class="tipo-filtro-badge todo activo" data-cat="all">Todos</span>';
    for (let cat of CATEGORIA_ITEMS) {
        html += '<span class="tipo-filtro-badge" data-cat="' + cat.id + '">' + cat.icono + ' ' + cat.nombre + '</span>';
    }
    categoriasEl.innerHTML = html;
    categoriasEl.addEventListener("click", function (e) {
        let badge = e.target.closest(".tipo-filtro-badge");
        if (!badge) return;
        let cat = badge.dataset.cat;
        categoriaActiva = cat;
        categoriasEl.querySelectorAll(".tipo-filtro-badge").forEach(function (b) {
            b.classList.toggle("activo", b.dataset.cat === cat);
        });
        ocultarResultados();
        aplicarFiltro();
    });
}

async function cargarTodo() {
    loadingItems.style.display = "block";
    todosLosItems = [];
    itemDetailsCache = {};
    galeriaItems.innerHTML = "";
    crearCategorias();
    let todos = itemsAplanados();
    for (let i = 0; i < todos.length; i += 20) {
        let batch = todos.slice(i, i + 20);
        let promesas = batch.map(function (entry) {
            return obtenerSpriteItem(entry.key).then(function (spriteUrl) {
                let card = crearCard(entry.key, spriteUrl);
                galeriaItems.appendChild(card);
                todosLosItems.push(card);
            });
        });
        await Promise.allSettled(promesas);
    }
    loadingItems.style.display = "none";
    actualizarContador();
}

function crearCard(key, spriteUrl) {
    let div = document.createElement("div");
    div.className = "item-card";
    div.dataset.key = key;
    let nombreLocal = TRAD_OBJETOS[key] || key.replace(/-/g, " ");
    div.dataset.name = normalizarTexto(nombreLocal);
    div.dataset.search = normalizarTexto(key + " " + nombreLocal);
    let catEntry = itemsAplanados().find(function (e) { return e.key === key; });
    div.dataset.categoria = catEntry ? catEntry.categoria : "";
    let img = document.createElement("img");
    img.alt = nombreLocal;
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
    p.textContent = nombreLocal;
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

function aplicarFiltro() {
    let texto = normalizarTexto(buscadorItems.value);
    todosLosItems.forEach(function (card) {
        let coincideTexto = texto === "" || card.dataset.search.includes(texto);
        let coincideCategoria = categoriaActiva === "all" || card.dataset.categoria === categoriaActiva;
        card.style.display = coincideTexto && coincideCategoria ? "" : "none";
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

function encontrarItemEnDB(key) {
    for (let cat of CATEGORIA_ITEMS) {
        for (let item of cat.items) {
            if (item.key === key) return { item: item, categoria: cat };
        }
    }
    return null;
}

async function procesarItem(key) {
    loadingItems.style.display = "block";
    let catInfo = encontrarItemEnDB(key);
    await construirMapaItemEvo();
    let spriteUrl = await obtenerSpriteItem(key);
    mostrarResultado(key, spriteUrl, catInfo);
    loadingItems.style.display = "none";
}

function mostrarResultado(key, spriteUrl, catInfo) {
    let nombre = TRAD_OBJETOS[key] || key.replace(/-/g, " ");
    let html = '';

    html += '<div class="item-modal-header">';
    html += '<img src="' + spriteUrl + '" alt="' + nombre + '" onerror="this.style.display=\'none\'">';
    html += '<div><h2>' + nombre + '</h2>';
    if (catInfo) {
        html += '<span class="item-cat-badge">' + catInfo.categoria.nombre + '</span>';
    }
    html += '</div></div>';

    if (catInfo && catInfo.item.tipo) {
        let tipo = catInfo.item.tipo;
        let colorTipo = {
            normal:"#A8A878",fire:"#F08030",water:"#6890F0",electric:"#F8D030",grass:"#78C850",
            ice:"#98D8D8",fighting:"#C03028",poison:"#A040A0",ground:"#E0C068",flying:"#A890F0",
            psychic:"#F85888",bug:"#A8B820",rock:"#B8A038",ghost:"#705898",dragon:"#7038F8",
            dark:"#705848",steel:"#B8B8D0",fairy:"#EE99AC"
        };
        let tradTipo = {
            normal:"Normal",fire:"Fuego",water:"Agua",electric:"Eléctrico",grass:"Planta",
            ice:"Hielo",fighting:"Lucha",poison:"Veneno",ground:"Tierra",flying:"Volador",
            psychic:"Psíquico",bug:"Bicho",rock:"Roca",ghost:"Fantasma",dragon:"Dragón",
            dark:"Siniestro",steel:"Acero",fairy:"Hada"
        };
        html += '<div class="item-recomendacion">';
        html += '<div class="item-rec-titulo">Potencia movimientos de tipo:</div>';
        html += '<span class="tipo-badge" style="background:' + (colorTipo[tipo] || "#999") + '">' + (tradTipo[tipo] || tipo) + '</span>';
        html += '<div class="item-rec-desc" style="margin-top:8px">Recomendado para cualquier Pokémon de tipo <strong>' + (tradTipo[tipo] || tipo) + '</strong> que use movimientos ofensivos de ese tipo.</div>';
        html += '</div>';
    }

    let efecto = itemDetailsCache[key] && itemDetailsCache[key].efecto;
    if (efecto) {
        html += '<div class="item-descripcion"><strong>Descripción:</strong> ' + efecto.replace(/POK\u00e9MON/g, "Pokémon").replace(/[Pp]ok\u00e9mon/g, "Pokémon") + '</div>';
    }

    if (catInfo && catInfo.categoria.id === "evolutivos") {
        let evos = itemEvoMap ? itemEvoMap[key] : null;
        if (evos && evos.length) {
            html += '<div class="item-evo-subtitulo" style="margin-top:14px">Pokémon que lo usan para evolucionar</div>';
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
            html += '</div>';
        } else {
            html += '<div class="item-no-evo" style="margin-top:10px">Ningún Pokémon usa este objeto para evolucionar</div>';
        }
    }

    if (catInfo && catInfo.item.recomendacion && catInfo.categoria.id !== "evolutivos") {
        html += '<div class="item-recomendacion"><div class="item-rec-titulo">💡 Recomendación</div><div class="item-rec-desc">' + catInfo.item.recomendacion + '</div></div>';
    }

    abrirModalItem(html);
    document.querySelectorAll("#itemModalBody .item-evo-pair").forEach(function (pair) {
        pair.addEventListener("click", function () {
            let id = this.dataset.toId;
            if (id) window.location.href = "index.html?pokemon=" + id;
        });
    });
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

let itemModal = document.querySelector("#itemModal");
let itemModalBody = document.querySelector("#itemModalBody");
let itemModalCerrar = document.querySelector("#itemModalCerrar");

itemModalCerrar.addEventListener("click", cerrarModalItem);
itemModal.addEventListener("click", function (e) {
    if (e.target === itemModal) cerrarModalItem();
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarModalItem();
});

function cerrarModalItem() {
    itemModal.classList.add("oculto");
    itemModalBody.innerHTML = "";
}

function abrirModalItem(html) {
    itemModalBody.innerHTML = html;
    itemModal.classList.remove("oculto");
}

let btnDarkItems = document.querySelector("#btnDarkModeItems");
if (btnDarkItems) {
    btnDarkItems.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark-mode");
        document.body.classList.toggle("dark-mode");
        this.classList.toggle("activo");
        localStorage.setItem("pokedex_darkmode", document.documentElement.classList.contains("dark-mode"));
    });
    if (localStorage.getItem("pokedex_darkmode") === "true") {
        document.documentElement.classList.add("dark-mode");
        document.body.classList.add("dark-mode");
        btnDarkItems.classList.add("activo");
    }
}