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

const TRAD_TIPO = {
    normal: "Normal", fire: "Fuego", water: "Agua",
    electric: "Eléctrico", grass: "Planta", ice: "Hielo",
    fighting: "Lucha", poison: "Veneno", ground: "Tierra",
    flying: "Volador", psychic: "Psíquico", bug: "Bicho",
    rock: "Roca", ghost: "Fantasma", dragon: "Dragón",
    dark: "Siniestro", steel: "Acero", fairy: "Hada"
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

const TYPE_CHART_DEF = {
    normal:   { weak: ["fighting"],           resist: [],                     immune: ["ghost"] },
    fire:     { weak: ["water","ground","rock"], resist: ["fire","grass","ice","bug","steel","fairy"], immune: [] },
    water:    { weak: ["electric","grass"],   resist: ["fire","water","ice","steel"], immune: [] },
    electric: { weak: ["ground"],             resist: ["electric","flying","steel"], immune: [] },
    grass:    { weak: ["fire","ice","poison","flying","bug"], resist: ["water","electric","grass","ground"], immune: [] },
    ice:      { weak: ["fire","fighting","rock","steel"], resist: ["ice"], immune: [] },
    fighting: { weak: ["flying","psychic","fairy"], resist: ["bug","rock","dark"], immune: [] },
    poison:   { weak: ["ground","psychic"],   resist: ["grass","fighting","poison","bug","fairy"], immune: [] },
    ground:   { weak: ["water","grass","ice"], resist: ["poison","rock"], immune: ["electric"] },
    flying:   { weak: ["electric","ice","rock"], resist: ["grass","fighting","bug"], immune: ["ground"] },
    psychic:  { weak: ["bug","ghost","dark"], resist: ["fighting","psychic"], immune: [] },
    bug:      { weak: ["fire","flying","rock"], resist: ["grass","fighting","ground"], immune: [] },
    rock:     { weak: ["water","grass","fighting","ground","steel"], resist: ["normal","fire","poison","flying"], immune: [] },
    ghost:    { weak: ["ghost","dark"],       resist: ["poison","bug"], immune: ["normal","fighting"] },
    dragon:   { weak: ["ice","dragon","fairy"], resist: ["fire","water","electric","grass"], immune: [] },
    dark:     { weak: ["fighting","bug","fairy"], resist: ["ghost","dark"], immune: ["psychic"] },
    steel:    { weak: ["fire","fighting","ground"], resist: ["normal","grass","ice","flying","psychic","bug","rock","dragon","steel","fairy"], immune: ["poison"] },
    fairy:    { weak: ["poison","steel"],      resist: ["fighting","bug","dark"], immune: ["dragon"] }
};

const GENERATION_LIMITS = [
    { gen: 1, min: 1, max: 151 },
    { gen: 2, min: 152, max: 251 },
    { gen: 3, min: 252, max: 386 },
    { gen: 4, min: 387, max: 493 },
    { gen: 5, min: 494, max: 649 },
    { gen: 6, min: 650, max: 721 },
    { gen: 7, min: 722, max: 809 },
    { gen: 8, min: 810, max: 905 },
    { gen: 9, min: 906, max: 1025 }
];

const STORAGE_KEY = "pokedex_fav";

let galeriaPokemon = document.querySelector("#galeriaPokemon");

let modal = document.querySelector("#modalPokemon");
let cerrar = document.querySelector("#cerrarModalBtn");
let btnClearSearch = document.querySelector("#btnClearSearch");
let buscador = document.querySelector("#buscador");
let loadingIndicator = document.querySelector("#loadingIndicator");
let noResults = document.querySelector("#noResults");
let pokemonCount = document.querySelector("#pokemonCount");
let tipoFiltrosEl = document.querySelector("#tipoFiltros");
let sortSelect = document.querySelector("#sortSelect");
let regionSelect = document.querySelector("#regionSelect");
let regionInfoText = document.querySelector("#regionInfoText");
let btnFavoritos = document.querySelector("#btnFavoritos");
let btnDarkMode = document.querySelector("#btnDarkMode");
let btnComparar = document.querySelector("#btnComparar");
let compareBar = document.querySelector("#compareBar");
let compareSlot1 = document.querySelector("#compareSlot1");
let compareSlot2 = document.querySelector("#compareSlot2");
let btnCompareGo = document.querySelector("#btnCompareGo");
let btnCompareClose = document.querySelector("#btnCompareClose");
let compareModal = document.querySelector("#compareModal");
let compareBody = document.querySelector("#compareBody");
let radarCanvas = document.querySelector("#radarChart");
let btnPrevPokemon = document.querySelector("#btnPrevPokemon");
let btnNextPokemon = document.querySelector("#btnNextPokemon");
let btnFavModal = document.querySelector("#btnFavModal");
let formasContainer = document.querySelector("#formasContainer");
let formasSeccion = document.querySelector(".formas-seccion");
let efectividadContainer = document.querySelector("#efectividadContainer");
let compararCerrar = document.querySelector(".comparar-cerrar");

let todosLosPokemon = [];
let pokemonDataCache = {};
let tiempoBusqueda;
let cacheHabilidades = {};
let cacheMovimientos = {};
let tipoFiltroActivo = null;
let regionFiltroActivo = "all";
let sortBy = "id";
let soloFavoritos = false;
let modoComparar = false;
let seleccionComparar = [];
let favoritos = cargarFavoritos();
let ultimosStats = null;


function cargarFavoritos() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
}

function guardarFavoritos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
}



function esFavorito(id) {
    return favoritos.includes(Number(id));
}

function toggleFavorito(id) {
    let num = Number(id);
    let idx = favoritos.indexOf(num);
    let añadido = false;
    if (idx > -1) {
        favoritos.splice(idx, 1);
    } else {
        favoritos.push(num);
        añadido = true;
    }
    guardarFavoritos();
    actualizarFavEstrellas(num);
    mostrarToast(añadido ? "Añadido a favoritos" : "Eliminado de favoritos");
}

function mostrarToast(mensaje) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    requestAnimationFrame(function () {
        toast.classList.add("toast-visible");
    });
    setTimeout(function () {
        toast.classList.remove("toast-visible");
        setTimeout(function () { toast.remove(); }, 300);
    }, 2000);
}

function getGeneracion(id) {
    for (let g of GENERATION_LIMITS) {
        if (id >= g.min && id <= g.max) return g.gen;
    }
    return 9;
}

function getRegion(id) {
    switch (getGeneracion(id)) {
        case 1: return "kanto";
        case 2: return "johto";
        case 3: return "hoenn";
        case 4: return "sinnoh";
        case 5: return "unova";
        case 6: return "kalos";
        case 7: return "alola";
        case 8: return "galar";
        case 9: return "paldea";
        default: return "kanto";
    }
}

function getRegionLabel(region) {
    switch (region) {
        case "kanto": return "Generación I";
        case "johto": return "Generación II";
        case "hoenn": return "Generación III";
        case "sinnoh": return "Generación IV";
        case "unova": return "Generación V";
        case "kalos": return "Generación VI";
        case "alola": return "Generación VII";
        case "galar": return "Generación VIII";
        case "paldea": return "Generación IX";
        default: return "Generación: Todas";
    }
}

function actualizarInfoRegion() {
    if (!regionInfoText) return;
    regionInfoText.textContent = regionFiltroActivo === "all" ? "Generación: Todas" : getRegionLabel(regionFiltroActivo);
}

window.addEventListener("load", cargarTodos);

cerrar.addEventListener("click", cerrarModal);
window.addEventListener("click", function (event) {
    if (event.target === modal) cerrarModal();
    if (event.target === compareModal) cerrarCompareModal();
    if (event.target === teamModal) teamModal.classList.add("oculto");
    if (event.target === teamPickerModal) teamPickerModal.classList.add("oculto");
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { cerrarModal(); cerrarCompareModal(); teamModal.classList.add("oculto"); teamPickerModal.classList.add("oculto"); }
    if (event.key === " " && event.ctrlKey) {
        event.preventDefault();
        buscador.value = "";
        btnClearSearch.classList.add("oculto");
        aplicarFiltros();
        buscador.focus();
    }
});
buscador.addEventListener("input", function () {
    btnClearSearch.classList.toggle("oculto", this.value === "");
    clearTimeout(tiempoBusqueda);
    tiempoBusqueda = setTimeout(aplicarFiltros, 150);
});

btnClearSearch.addEventListener("click", function () {
    buscador.value = "";
    btnClearSearch.classList.add("oculto");
    aplicarFiltros();
    buscador.focus();
});

sortSelect.addEventListener("change", function () {
    sortBy = this.value;
    ordenarYPintar();
    aplicarFiltros();
});

regionSelect.addEventListener("change", function () {
    regionFiltroActivo = this.value;
    actualizarInfoRegion();
    aplicarFiltros();
});

btnFavoritos.addEventListener("click", function () {
    soloFavoritos = !soloFavoritos;
    this.classList.toggle("activo");
    aplicarFiltros();
});

btnDarkMode.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    this.classList.toggle("activo");
    localStorage.setItem("pokedex_darkmode", document.documentElement.classList.contains("dark-mode"));
    if (ultimosStats) dibujarRadar(ultimosStats);
});

// Restore dark mode preference
if (localStorage.getItem("pokedex_darkmode") === "true") {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    btnDarkMode.classList.add("activo");
}

btnComparar.addEventListener("click", function () {
    modoComparar = !modoComparar;
    this.classList.toggle("activo");
    galeriaPokemon.classList.toggle("modo-comparar");
    compareBar.classList.toggle("oculto");
    if (!modoComparar) limpiarComparar();
});

btnCompareClose.addEventListener("click", function () {
    modoComparar = false;
    btnComparar.classList.remove("activo");
    galeriaPokemon.classList.remove("modo-comparar");
    compareBar.classList.add("oculto");
    limpiarComparar();
});

btnCompareGo.addEventListener("click", function () {
    if (seleccionComparar.length === 2) {
        abrirComparar(seleccionComparar[0], seleccionComparar[1]);
    }
});

compararCerrar.addEventListener("click", cerrarCompareModal);

btnPrevPokemon.addEventListener("click", function () {
    let actual = Number(document.querySelector("#idModal").textContent);
    if (actual > 1) abrirModal(actual - 1);
});

btnNextPokemon.addEventListener("click", function () {
    let actual = Number(document.querySelector("#idModal").textContent);
    abrirModal(actual + 1);
});

btnFavModal.addEventListener("click", function () {
    let id = Number(document.querySelector("#idModal").textContent);
    toggleFavorito(id);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function cerrarModal() {
    modal.classList.add("oculto");
}

function cerrarCompareModal() {
    compareModal.classList.add("oculto");
}

function limpiarComparar() {
    seleccionComparar = [];
    compareSlot1.innerHTML = '<span class="compare-slot-placeholder">#1</span>';
    compareSlot2.innerHTML = '<span class="compare-slot-placeholder">#2</span>';
    btnCompareGo.classList.add("oculto");
    document.querySelectorAll(".pokemon-compare-check.seleccionado").forEach(function (el) {
        el.classList.remove("seleccionado");
        el.textContent = "";
    });
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
        crearFiltrosTipo();
        actualizarInfoRegion();
        aplicarFiltros();

        let params = new URLSearchParams(window.location.search);
        let pokemonId = params.get("pokemon");
        if (pokemonId) {
            setTimeout(function () {
                abrirModal(parseInt(pokemonId));
                let cards = document.querySelectorAll('.pokemon-item[data-id="' + pokemonId + '"]');
                if (cards.length > 0) {
                    cards[0].scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 1000);
        }
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

function formatearNombreHabilidad(nombre) {
    if (!nombre) return "";
    return (TRAD_HABILIDAD[nombre] || nombre.replace(/-/g, " ")).replace(/\b\w/g, function (letra) {
        return letra.toUpperCase();
    });
}

function renderizarHabilidadesCard(card, data) {
    let habilidades = data.abilities || [];
    let contenedor = card.querySelector(".pokemon-abilities");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.className = "pokemon-abilities";
        card.insertBefore(contenedor, card.querySelector(".pokemon-id"));
    }

    if (!habilidades.length) {
        contenedor.innerHTML = '<span class="ability-chip ability-chip-empty">Sin habilidades</span>';
        return;
    }

    let visibles = habilidades.map(function (ability) {
        let nombre = formatearNombreHabilidad(ability.ability.name);
        return '<span class="ability-chip" title="' + nombre + (ability.is_hidden ? ' (oculta)' : '') + '">' + nombre + (ability.is_hidden ? ' <em>oculta</em>' : '') + '</span>';
    }).join("");

    contenedor.innerHTML = visibles;
}

function metodoLegible(metodo, nivel) {
    switch (metodo) {
        case "level-up": return nivel > 0 ? "Nv." + nivel : "Nv.";
        case "machine": return "MT";
        case "egg": return "Cría";
        case "tutor": return "Tutor";
        default: return metodo;
    }
}

function seleccionarMovimientosRepresentativos(data) {
    let all = (data.moves || []).map(function (m) {
        // choose the smallest level if multiple
        let detalle = (m.version_group_details || []).slice().sort(function (a, b) {
            if (a.move_learn_method.name === b.move_learn_method.name) return a.level_learned_at - b.level_learned_at;
            // prefer level-up, then machine, then tutor, then egg
            const order = { "level-up": 0, "machine": 1, "tutor": 2, "egg": 3 };
            return (order[a.move_learn_method.name] || 9) - (order[b.move_learn_method.name] || 9);
        })[0] || null;
        return {
            name: m.move.name,
            method: detalle ? detalle.move_learn_method.name : "unknown",
            level: detalle ? detalle.level_learned_at : 0
        };
    });

    // prefer moves learned by level (lowest level first), then machine, then tutor, then egg
    all.sort(function (a, b) {
        const prio = { "level-up": 0, "machine": 1, "tutor": 2, "egg": 3, "unknown": 9 };
        if ((a.method === b.method)) {
            return (a.level || 0) - (b.level || 0) || a.name.localeCompare(b.name);
        }
        return (prio[a.method] || 9) - (prio[b.method] || 9);
    });

    return all;
}

function renderizarMovimientosCard(card, data) {
    let moves = seleccionarMovimientosRepresentativos(data);
    let contenedor = card.querySelector(".pokemon-moves");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.className = "pokemon-moves";
        card.insertBefore(contenedor, card.querySelector(".pokemon-id"));
    }

    if (!moves.length) {
        contenedor.innerHTML = '<span class="move-chip move-chip-empty">Sin movimientos</span>';
        return;
    }

    // show up to 4 representative moves
    let reps = moves.slice(0, 4);
    contenedor.innerHTML = "";
    reps.forEach(function (mv) {
        let span = document.createElement('span');
        span.className = 'move-chip';
        span.textContent = mv.name.replace(/-/g, ' ');
        span.title = metodoLegible(mv.method, mv.level);
        span.style.cursor = 'pointer';
        span.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMoveDetail(card, span, mv);
        });
        contenedor.appendChild(span);

        // replace with localized name if available
        obtenerMovimiento(mv.name).then(function (info) {
            if (info && info.nombre) span.textContent = info.nombre + (mv.method === 'level-up' && mv.level ? ' (' + mv.level + ')' : '');
        }).catch(function () {});
    });

    let extra = moves.length - reps.length;
    if (extra > 0) {
        let more = document.createElement('span');
        more.className = 'move-chip move-more';
        more.textContent = '+' + extra + ' más';
        contenedor.appendChild(more);

        more.addEventListener('click', function (e) {
            e.stopPropagation();
            // toggle popup
            let existing = card.querySelector('.moves-popup');
            if (existing) { existing.remove(); return; }

            let popup = document.createElement('div');
            popup.className = 'moves-popup';
            let ul = document.createElement('ul');
            ul.className = 'moves-popup-list';
            moves.forEach(function (mv) {
                let li = document.createElement('li');
                li.className = 'moves-popup-item';
                li.textContent = mv.name.replace(/-/g, ' ');
                let badge = document.createElement('span');
                badge.className = 'moves-popup-badge';
                badge.textContent = metodoLegible(mv.method, mv.level);
                li.appendChild(badge);
                ul.appendChild(li);

                // localize name when available
                obtenerMovimiento(mv.name).then(function (info) {
                    if (info && info.nombre) li.firstChild.textContent = info.nombre + ' ';
                }).catch(function () {});
            });
            popup.appendChild(ul);
            card.appendChild(popup);

            // close on outside click
            setTimeout(function () {
                document.addEventListener('click', function closerr(event) {
                    if (!popup.contains(event.target) && !more.contains(event.target)) {
                        popup.remove();
                        document.removeEventListener('click', closerr);
                    }
                });
            }, 10);
        });
    }
}

function toggleMoveDetail(card, chip, mv) {
    // remove existing detail if present for this chip
    let existing = card.querySelector('.move-detail');
    if (existing && existing._anchor === chip) { existing.remove(); return; }
    if (existing) existing.remove();

    let popup = document.createElement('div');
    popup.className = 'move-detail';
    popup._anchor = chip;
    popup.innerHTML = '<div class="move-detail-loading">Cargando...</div>';
    card.appendChild(popup);

    // position relative to chip
    let left = chip.offsetLeft;
    let top = chip.offsetTop + chip.offsetHeight + 8;
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';

    obtenerMovimiento(mv.name).then(function (info) {
        popup.innerHTML = '';
        let title = document.createElement('h4');
        title.textContent = info.nombre || mv.name;
        popup.appendChild(title);

        let meta = document.createElement('div');
        meta.className = 'move-detail-meta';
        if (info.type) {
            let t = document.createElement('span'); t.className = 'move-meta-badge'; t.textContent = info.type.toUpperCase(); meta.appendChild(t);
        }
        if (info.power !== null && info.power !== undefined) {
            let p = document.createElement('span'); p.className = 'move-meta-badge'; p.textContent = 'Pow: ' + info.power; meta.appendChild(p);
        }
        if (info.accuracy !== null && info.accuracy !== undefined) {
            let a = document.createElement('span'); a.className = 'move-meta-badge'; a.textContent = 'Acc: ' + info.accuracy; meta.appendChild(a);
        }
        if (info.pp !== null && info.pp !== undefined) {
            let pp = document.createElement('span'); pp.className = 'move-meta-badge'; pp.textContent = 'PP: ' + info.pp; meta.appendChild(pp);
        }
        popup.appendChild(meta);

        let desc = document.createElement('p');
        desc.className = 'move-detail-desc';
        desc.textContent = info.descripcion || '';
        popup.appendChild(desc);
    }).catch(function () {
        popup.innerHTML = '<div class="move-detail-error">Error cargando movimiento</div>';
    });

    // close on outside click
    setTimeout(function () {
        function onDocClick(ev) {
            if (!popup.contains(ev.target) && ev.target !== chip) {
                popup.remove();
                document.removeEventListener('click', onDocClick);
            }
        }
        document.addEventListener('click', onDocClick);
    }, 10);
}

function crearCard(id, nombre) {
    let div = document.createElement("div");
    div.className = "pokemon-item";
    div.dataset.id = id;
    div.dataset.name = nombre;
    div.dataset.gen = getGeneracion(Number(id));
    div.dataset.region = getRegion(Number(id));

    let check = document.createElement("span");
    check.className = "pokemon-compare-check";
    div.appendChild(check);

    let img = document.createElement("img");
    img.alt = nombre;
    img.loading = "lazy";
    img.src = FALLBACK_SPRITE;
    div.appendChild(img);

    let p = document.createElement("p");
    p.textContent = nombre;
    div.appendChild(p);

    div.addEventListener("click", function (e) {
        if (e.target.closest(".pokemon-compare-check")) return;
        if (modoComparar) {
            toggleComparar(this, Number(this.dataset.id), this.dataset.name);
            return;
        }
        let cryUrl = this.dataset.cryUrl;
        if (cryUrl) {
            let audio = new Audio(cryUrl);
            audio.volume = 0.06;
            audio.play().catch(function () {});
        }
        abrirModal(parseInt(this.dataset.id));
    });

    check.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleComparar(div, Number(div.dataset.id), div.dataset.name);
    });

    return div;
}

function toggleComparar(card, id, nombre) {
    let idx = seleccionComparar.indexOf(id);
    let check = card.querySelector(".pokemon-compare-check");

    if (idx > -1) {
        seleccionComparar.splice(idx, 1);
        check.classList.remove("seleccionado");
        check.textContent = "";
    } else if (seleccionComparar.length < 2) {
        seleccionComparar.push(id);
        check.classList.add("seleccionado");
        check.textContent = seleccionComparar.length;
    } else {
        return;
    }

    actualizarSlotsComparar();
}

function actualizarSlotsComparar() {
    let slots = [compareSlot1, compareSlot2];
    for (let i = 0; i < 2; i++) {
        let slot = slots[i];
        if (i < seleccionComparar.length) {
            let id = seleccionComparar[i];
            slot.innerHTML = "";
            let img = document.createElement("img");
            img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            img.onerror = function () { this.src = FALLBACK_SPRITE; };
            slot.appendChild(img);
        } else {
            slot.innerHTML = '<span class="compare-slot-placeholder">#' + (i + 1) + '</span>';
        }
    }
    btnCompareGo.classList.toggle("oculto", seleccionComparar.length < 2);
}

function abrirComparar(id1, id2) {
    compareBody.innerHTML = "";
    let promesas = [id1, id2].map(function (id) {
        return fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/").then(function (r) { return r.json(); });
    });
    Promise.all(promesas).then(function (datos) {
        datos.forEach(function (data) {
            let col = document.createElement("div");
            col.className = "compare-col";

            let sprite = obtenerSprite(data);
            let img = document.createElement("img");
            img.src = sprite || FALLBACK_SPRITE;
            col.appendChild(img);

            let h3 = document.createElement("h3");
            h3.textContent = "#" + data.id + " " + data.name;
            col.appendChild(h3);

            let tipos = data.types.map(function (t) {
                var c = COLORES_TIPO[t.type.name] || "#999";
                var n = TRAD_TIPO[t.type.name] || t.type.name;
                return '<span class="tipo-badge" style="background:' + c + '">' + n + "</span>";
            }).join(" ");
            let pTipos = document.createElement("p");
            pTipos.innerHTML = "<strong>Tipo:</strong> " + tipos;
            col.appendChild(pTipos);

            let pAltura = document.createElement("p");
            pAltura.innerHTML = "<strong>Altura:</strong> " + (data.height / 10).toFixed(1) + " m";
            col.appendChild(pAltura);

            let pPeso = document.createElement("p");
            pPeso.innerHTML = "<strong>Peso:</strong> " + (data.weight / 10).toFixed(1) + " kg";
            col.appendChild(pPeso);

            let statsDiv = document.createElement("div");
            statsDiv.style.marginTop = "10px";
            data.stats.forEach(function (s) {
                let item = document.createElement("div");
                item.className = "stat-item";
                let lbl = document.createElement("span");
                lbl.className = "stat-nombre";
                lbl.textContent = NOMBRES_STATS[s.stat.name] || s.stat.name;
                let val = document.createElement("span");
                val.className = "stat-valor";
                val.textContent = s.base_stat;
                let barra = document.createElement("div");
                barra.className = "stat-barra";
                let relleno = document.createElement("div");
                relleno.className = "stat-barra-relleno";
                var pct = Math.min((s.base_stat / 255) * 100, 100);
                relleno.style.width = pct + "%";
                relleno.style.background = obtenerColorStat(pct);
                barra.appendChild(relleno);
                item.appendChild(lbl);
                item.appendChild(barra);
                item.appendChild(val);
                statsDiv.appendChild(item);
            });
            col.appendChild(statsDiv);

            compareBody.appendChild(col);
        });
        compareModal.classList.remove("oculto");
    });
}

async function cargarSpritesEnLotes(lista) {
    for (let i = 0; i < lista.length; i += 20) {
        let lote = lista.slice(i, i + 20);
        let promesas = lote.map(function (item) {
            let id = extraerId(item.url);
            let cards = galeriaPokemon.querySelectorAll('.pokemon-item[data-id="' + id + '"]');

            return fetch(item.url)
                .then(function (r) {
                    if (!r.ok) throw new Error("HTTP " + r.status);
                    return r.json();
                })
                .then(function (data) {
                    pokemonDataCache[id] = data;
                    let mejorSprite = obtenerSprite(data);
                    let cryUrl = data.cries && (data.cries.latest || data.cries.legacy);
                    cards.forEach(function (card) {
                        if (cryUrl) card.dataset.cryUrl = cryUrl;
                        card.dataset.types = data.types.map(function (t) { return t.type.name; }).join(",");
                        let img = card.querySelector("img");
                        img.onerror = function () {
                            this.src = FALLBACK_SPRITE;
                            this.onerror = null;
                        };
                        img.src = mejorSprite || FALLBACK_SPRITE;
                    });
                    return fetch("https://pokeapi.co/api/v2/pokemon-species/" + id + "/");
                })
                .catch(function () {});
        });
        await Promise.allSettled(promesas);
        if (i % 100 === 0) actualizarContador();
        await new Promise(function (r) { setTimeout(r, 5); });
    }
    actualizarContador();
}

function actualizarContador() {
    let total = todosLosPokemon.length;
    let visible = total - galeriaPokemon.querySelectorAll('.pokemon-item[style*="display: none"]').length;
    pokemonCount.textContent = visible + " / " + total + " Pok\u00e9mon";
}

function crearFiltrosTipo() {
    let html = '<span class="tipo-filtro-badge todo activo" data-tipo="">Todos</span>';
    for (let tipo in TRAD_TIPO) {
        var color = COLORES_TIPO[tipo] || "#999";
        html += '<span class="tipo-filtro-badge" data-tipo="' + tipo + '" style="background:' + color + '">' + TRAD_TIPO[tipo] + "</span>";
    }
    tipoFiltrosEl.innerHTML = html;

    tipoFiltrosEl.addEventListener("click", function (e) {
        let badge = e.target.closest(".tipo-filtro-badge");
        if (!badge) return;
        tipoFiltrosEl.querySelectorAll(".tipo-filtro-badge").forEach(function (b) { b.classList.remove("activo"); });
        badge.classList.add("activo");
        tipoFiltroActivo = badge.dataset.tipo || null;
        aplicarFiltros();
    });
}

function aplicarFiltros() {
    let texto = buscador.value.toLowerCase().trim();

    todosLosPokemon.forEach(function (item) {
        let nombre = item.dataset.name.toLowerCase();
        let id = item.dataset.id;
        let regionCard = item.dataset.region;

        let coincideTexto = texto === "" || nombre.includes(texto) || id.includes(texto);

        let coincideTipo = true;
        if (tipoFiltroActivo && item.dataset.types) {
            coincideTipo = item.dataset.types.split(",").indexOf(tipoFiltroActivo) > -1;
        }

        let coincideRegion = true;
        if (regionFiltroActivo !== "all") {
            coincideRegion = regionCard === regionFiltroActivo;
        }

        let coincideFav = true;
        if (soloFavoritos) {
            coincideFav = esFavorito(Number(id));
        }

        var mostrar = coincideTexto && coincideTipo && coincideRegion && coincideFav;
        item.style.display = mostrar ? "" : "none";
    });

    let visible = galeriaPokemon.querySelectorAll('.pokemon-item[style*="display: none"]');
    let algunVisible = todosLosPokemon.length > visible.length;
    let hayFiltrosActivos = texto !== "" || tipoFiltroActivo || regionFiltroActivo !== "all" || soloFavoritos;
    if (hayFiltrosActivos && !algunVisible) {
        noResults.classList.remove("oculto");
    } else {
        noResults.classList.add("oculto");
    }

    actualizarContador();
}

function ordenarYPintar() {
    todosLosPokemon.sort(function (a, b) {
        var idA = Number(a.dataset.id), idB = Number(b.dataset.id);
        var nameA = a.dataset.name, nameB = b.dataset.name;

        switch (sortBy) {
            case "id": return idA - idB;
            case "nombre": return nameA.localeCompare(nameB);
            case "nombre-desc": return nameB.localeCompare(nameA);
            case "tipo": {
                var tA = a.dataset.types || "";
                var tB = b.dataset.types || "";
                return tA.localeCompare(tB) || idA - idB;
            }
            default: return idA - idB;
        }
    });

    todosLosPokemon.forEach(function (item) {
        galeriaPokemon.appendChild(item);
    });
}

function obtenerHabilidad(url) {
    if (cacheHabilidades[url]) return Promise.resolve(cacheHabilidades[url]);
    return fetch(url)
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            var nombreEs = data.names.find(function (n) { return n.language.name === "es"; });
            if (!nombreEs && TRAD_HABILIDAD[data.name]) {
                nombreEs = { name: TRAD_HABILIDAD[data.name] };
            }
            var desc = DESC_HABILIDAD[data.name] || null;
            if (!desc) {
                var flavor = data.flavor_text_entries && data.flavor_text_entries.find(function (e) { return e.language.name === "es"; });
                if (flavor) desc = flavor.flavor_text.replace(/[\n\f]/g, " ");
            }
            if (!desc) {
                var eff = data.effect_entries && data.effect_entries.find(function (e) { return e.language.name === "es"; });
                if (eff) desc = eff.short_effect || eff.effect;
            }
            if (!desc) {
                var flavor = data.flavor_text_entries && data.flavor_text_entries.find(function (e) { return e.language.name === "en"; });
                if (flavor) desc = flavor.flavor_text.replace(/[\n\f]/g, " ");
            }
            if (!desc) {
                var eff = data.effect_entries && data.effect_entries.find(function (e) { return e.language.name === "en"; });
                if (eff) desc = eff.short_effect || eff.effect;
            }
            cacheHabilidades[url] = {
                nombre: nombreEs ? nombreEs.name : data.name,
                descripcion: desc || "Sin descripción disponible."
            };
            return cacheHabilidades[url];
        })
        .catch(function () {
            return { nombre: "Desconocido", descripcion: "Error al cargar." };
        });
}

function obtenerMovimiento(nombre) {
    if (cacheMovimientos[nombre]) return Promise.resolve(cacheMovimientos[nombre]);
    return fetch("https://pokeapi.co/api/v2/move/" + nombre + "/")
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            var nombreEs = data.names.find(function (n) { return n.language.name === "es"; });
            var efecto = data.flavor_text_entries.find(function (e) { return e.language.name === "es"; });
            if (!efecto) efecto = data.flavor_text_entries.find(function (e) { return e.language.name === "en"; });
            if (!efecto) {
                var eff = data.effect_entries.find(function (e) { return e.language.name === "es"; });
                if (eff) efecto = { flavor_text: eff.short_effect || eff.effect };
            }
            if (!efecto) {
                var eff = data.effect_entries.find(function (e) { return e.language.name === "en"; });
                if (eff) efecto = { flavor_text: eff.short_effect || eff.effect };
            }
            cacheMovimientos[nombre] = {
                nombre: nombreEs ? nombreEs.name : nombre,
                descripcion: efecto ? efecto.flavor_text.replace(/[\n\f]/g, " ") : "Sin descripción.",
                type: data.type ? data.type.name : null,
                power: data.power !== null ? data.power : null,
                accuracy: data.accuracy !== null ? data.accuracy : null,
                pp: data.pp !== null ? data.pp : null
            };
            return cacheMovimientos[nombre];
        })
        .catch(function () {
            return { nombre: nombre, descripcion: "Error al cargar." };
        });
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
        document.querySelector("#genModal").textContent = getGeneracion(data.id);

        let rarezaEl = document.querySelector("#rarezaModal");
        if (especieData.is_legendary) {
            rarezaEl.textContent = "Legendario";
            rarezaEl.style.color = "#ffd700";
        } else if (especieData.is_mythical) {
            rarezaEl.textContent = "Mítico";
            rarezaEl.style.color = "#ff69b4";
        } else if (esPseudoLegendario(data)) {
            rarezaEl.textContent = "Pseudolegendario";
            rarezaEl.style.color = "#00bcd4";
        } else {
            rarezaEl.textContent = "Normal";
            rarezaEl.style.color = "#999";
        }

        actualizarFavEstrellas(data.id);

        let promesasHabilidades = data.abilities.map(function (a) {
            return obtenerHabilidad(a.ability.url);
        });
        let habilidadesData = await Promise.all(promesasHabilidades);

        let habilidadesContainer = document.querySelector("#habilidadesContainer");
        habilidadesContainer.innerHTML = "";

        habilidadesData.forEach(function (h, i) {
            let btn = document.createElement("button");
            btn.className = "collapsible";
            btn.textContent = h.nombre + (data.abilities[i].is_hidden ? " (oculta)" : "");

            let contentDiv = document.createElement("div");
            contentDiv.className = "content";
            contentDiv.textContent = h.descripcion;

            habilidadesContainer.appendChild(btn);
            habilidadesContainer.appendChild(contentDiv);
        });

        var habilidadBtns = habilidadesContainer.querySelectorAll(".collapsible");
        for (var hi = 0; hi < habilidadBtns.length; hi++) {
            habilidadBtns[hi].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

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

        dibujarRadar(data.stats);
        ultimosStats = data.stats;

        cargarEvoluciones(especieData);
        cargarFormas(especieData);
        cargarEfectividad(data.types);

        let movimientosContainer = document.querySelector("#movimientosContainer");
        movimientosContainer.innerHTML = "";

        data.moves.forEach(function (m) {
            let btn = document.createElement("button");
            btn.className = "collapsible";
            btn.textContent = m.move.name.replace(/-/g, " ");
            btn.dataset.moveName = m.move.name;

            let contentDiv = document.createElement("div");
            contentDiv.className = "content";
            contentDiv.innerHTML = '<div class="move-loading">Cargando...</div>';

            movimientosContainer.appendChild(btn);
            movimientosContainer.appendChild(contentDiv);
        });

        var collBtns = movimientosContainer.querySelectorAll(".collapsible");
        for (var ci = 0; ci < collBtns.length; ci++) {
            collBtns[ci].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

        var moveBtns = movimientosContainer.querySelectorAll(".collapsible");
        moveBtns.forEach(function (btn) {
            var name = btn.dataset.moveName;
            obtenerMovimiento(name).then(function (info) {
                btn.textContent = info.nombre;
                var content = btn.nextElementSibling;
                var html = "";
                if (info.type) {
                    var color = COLORES_TIPO[info.type] || "#999";
                    var tipoEs = TRAD_TIPO[info.type] || info.type;
                    html += '<span class="tipo-badge" style="background:' + color + '">' + tipoEs + "</span> ";
                }
                if (info.power !== null && info.power !== undefined) {
                    html += '<span class="move-meta-badge">Potencia: ' + info.power + "</span> ";
                }
                if (info.accuracy !== null && info.accuracy !== undefined) {
                    html += '<span class="move-meta-badge">Precisión: ' + info.accuracy + "</span> ";
                }
                if (info.pp !== null && info.pp !== undefined) {
                    html += '<span class="move-meta-badge">PP: ' + info.pp + "</span>";
                }
                html += '<p class="move-detail-desc" style="margin-top:8px;color:var(--muted);font-size:0.85rem">' + (info.descripcion || "") + "</p>";
                content.innerHTML = html;
            });
        });

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

    } catch (error) {
        console.log("Error cargando datos del pokemon:", error);
        document.querySelector("#descripcionModal").textContent = "Error al cargar los datos.";
        modal.classList.remove("oculto");
    }
}

function actualizarFavEstrellas(id) {
    document.querySelectorAll('.pokemon-fav[data-id="' + id + '"]').forEach(function (el) {
        el.classList.toggle("fav-activo", esFavorito(id));
    });
    var modalId = document.querySelector("#idModal");
    if (modalId && Number(modalId.textContent) === Number(id)) {
        btnFavModal.classList.toggle("fav-activo", esFavorito(id));
    }
}

function dibujarRadar(stats) {
    let canvas = radarCanvas;
    if (!canvas) return;
    let ctx = canvas.getContext("2d");
    let w = canvas.width, h = canvas.height;
    let cx = w / 2, cy = h / 2;
    let radio = 80;
    let numStats = 6;
    let anguloInicio = -Math.PI / 2;
    let oscuro = document.documentElement.classList.contains("dark-mode");

    ctx.clearRect(0, 0, w, h);

    function punto(i, r) {
        var ang = anguloInicio + (2 * Math.PI * i) / numStats;
        return { x: cx + r * Math.cos(ang), y: cy + r * Math.sin(ang) };
    }

    for (let nivel = 1; nivel <= 5; nivel++) {
        let r = (radio / 5) * nivel;
        ctx.beginPath();
        for (let i = 0; i <= numStats; i++) {
            var p = punto(i % numStats, r);
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = oscuro ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    for (let i = 0; i < numStats; i++) {
        var p = punto(i, radio);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = oscuro ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
        ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i <= numStats; i++) {
        var s = stats[i % numStats];
        var val = s.base_stat / 255;
        var r = Math.max(5, radio * val);
        var p = punto(i % numStats, r);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fillStyle = oscuro ? "rgba(239, 83, 80, 0.25)" : "rgba(204, 0, 0, 0.2)";
    ctx.fill();
    ctx.strokeStyle = oscuro ? "#EF5350" : "#cc0000";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = "bold 8px 'Press Start 2P', monospace";
    ctx.fillStyle = oscuro ? "#c8cad0" : "#333";
    ctx.textAlign = "center";
    var labels = ["PS", "ATAQUE", "DEFENSA", "AT.ESP", "DEF.ESP", "VEL."];
    for (let i = 0; i < numStats; i++) {
        var p = punto(i, radio + 14);
        ctx.fillText(labels[i], p.x, p.y + 3);
    }
}

function cargarEfectividad(types) {
    let multiplicadores = {};
    let tiposPokemon = types.map(function (t) { return t.type.name; });

    for (let atacante in TYPE_CHART_DEF) {
        let mult = 1;
        tiposPokemon.forEach(function (tipoPokemon) {
            var def = TYPE_CHART_DEF[tipoPokemon];
            if (def.immune.indexOf(atacante) > -1) mult = 0;
            if (mult !== 0) {
                if (def.weak.indexOf(atacante) > -1) mult *= 2;
                if (def.resist.indexOf(atacante) > -1) mult *= 0.5;
            }
        });
        if (mult !== 1 || mult === 0) {
            multiplicadores[atacante] = mult;
        }
    }

    efectividadContainer.innerHTML = "";
    var orden = Object.keys(multiplicadores).sort(function (a, b) { return multiplicadores[b] - multiplicadores[a]; });

    orden.forEach(function (tipo) {
        var mult = multiplicadores[tipo];
        if (mult === 1) return;

        var item = document.createElement("div");
        var clase = mult > 1 ? "efectividad-debil" : mult === 0 ? "efectividad-inmune" : "efectividad-resist";
        item.className = "efectividad-item " + clase;

        var badge = document.createElement("span");
        badge.className = "tipo-badge";
        badge.style.background = COLORES_TIPO[tipo] || "#999";
        badge.textContent = TRAD_TIPO[tipo] || tipo;
        item.appendChild(badge);

        var multSpan = document.createElement("span");
        multSpan.className = "efectividad-mult";
        multSpan.textContent = mult === 0 ? "INMUNE" : "x" + mult;
        item.appendChild(multSpan);

        efectividadContainer.appendChild(item);
    });
}

function cargarFormas(especieData) {
    formasContainer.innerHTML = "";
    let variedades = especieData.varieties;
    if (!variedades || variedades.length <= 1) {
        formasSeccion.classList.add("oculto");
        return;
    }

    let formasVisibles = [];
    variedades.forEach(function (v) {
        if (v.is_default) return;
        let id = extraerId(v.pokemon.url);
        if (id && id !== String(extraerId(especieData.varieties.find(function (x) { return x.is_default; }).pokemon.url))) {
            formasVisibles.push({ id: id, nombre: v.pokemon.name, url: v.pokemon.url });
        }
    });

    if (formasVisibles.length === 0) {
        formasSeccion.classList.add("oculto");
        return;
    }

    formasSeccion.classList.remove("oculto");

    formasVisibles.forEach(function (f) {
        let item = document.createElement("div");
        item.className = "forma-item";

        let img = document.createElement("img");
        img.loading = "lazy";
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + f.id + ".png";
        img.onerror = function () { this.src = FALLBACK_SPRITE; this.onerror = null; };
        item.appendChild(img);

        let nombre = document.createElement("span");
        nombre.textContent = f.nombre.replace(/-/g, " ");
        item.appendChild(nombre);

        item.addEventListener("click", function () {
            cerrarModal();
            setTimeout(function () {
                let cards = document.querySelectorAll('.pokemon-item[data-id="' + f.id + '"]');
                if (cards.length > 0) {
                    cards[0].scrollIntoView({ behavior: "smooth", block: "center" });
                }
                abrirModal(parseInt(f.id));
            }, 300);
        });

        formasContainer.appendChild(item);
    });
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

function cargarEvoluciones(especieData) {
    let container = document.querySelector("#evolucionesContainer");
    container.innerHTML = "";

    if (!especieData.evolution_chain || !especieData.evolution_chain.url) {
        container.innerHTML = '<span class="evo-placeholder">No tiene evoluciones</span>';
        return;
    }

    fetch(especieData.evolution_chain.url)
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            let cadena = data.chain;
            let niveles = [];
            extraerNiveles(cadena, niveles, 0, []);

            if (niveles.length <= 1) {
                container.innerHTML = '<span class="evo-placeholder">No tiene evoluciones</span>';
                return;
            }

            niveles.forEach(function (nivel, i) {
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
            });
        })
        .catch(function () {
            container.innerHTML = '<span class="evo-placeholder">Error al cargar evoluciones</span>';
        });
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
        if (detalle.min_level) return "Nv. " + detalle.min_level;
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
    if (trigger === "shed") return "Evolución";
    if (trigger === "spin") return "Girar";
    if (trigger === "level-up-happiness") return "Amistad Nv." + (detalle.min_level || "");
    if (trigger === "three-critical-hits") return "3 críticos";
    if (trigger === "take-damage") return "Daño recibido";
    if (trigger === "tower-of-darkness") return "Torre Oscuridad";
    if (trigger === "tower-of-waters") return "Torre Agua";
    if (trigger === "level-up-night") {
        if (detalle.min_level) return "Noche Nv. " + detalle.min_level;
        return "Noche";
    }
    if (trigger === "level-up-day") {
        if (detalle.min_level) return "Día Nv. " + detalle.min_level;
        return "Día";
    }
    if (trigger === "friendship") return "Amistad";
    if (trigger === "beauty") return "Belleza";
    if (trigger === "agile-style") return "Estilo ágil";
    if (trigger === "defeat-leader") return "Derrotar líder";
    if (trigger === "defeat-agatha") return "Derrotar a Ágatha";
    if (trigger === "defeat-primeape") return "Derrotar ×20 Primeape";
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
    if (trigger === "recoil-damage") return "Daño retroceso";
    if (trigger === "crit-count") return "Críticos en combate";
    return trigger ? trigger.replace(/-/g, " ") : "Evolución";
}

function esPseudoLegendario(data) {
    let bst = data.stats.reduce(function (sum, s) { return sum + s.base_stat; }, 0);
    return bst === 600;
}

// Team Builder

let btnTeam = document.querySelector("#btnTeam");
let teamModal = document.querySelector("#teamModal");
let teamCerrar = document.querySelector("#teamCerrar");
let teamSlots = document.querySelector("#teamSlots");
let teamInfo = document.querySelector("#teamInfo");
let teamPickerModal = document.querySelector("#teamPickerModal");
let teamPickerCerrar = document.querySelector("#teamPickerCerrar");
let teamPickerSearch = document.querySelector("#teamPickerSearch");
let teamPickerList = document.querySelector("#teamPickerList");
let teamSelector = document.querySelector("#teamSelector");
let teamNewBtn = document.querySelector("#teamNewBtn");
let teamRenameBtn = document.querySelector("#teamRenameBtn");
let teamDeleteBtn = document.querySelector("#teamDeleteBtn");
let equipoSlotSeleccionado = null;
let equiposGuardados = {};
let equipoActivo = null;

function cargarEquipos() {
    let oldData = localStorage.getItem("pokedex_team");
    if (oldData) {
        try {
            let arr = JSON.parse(oldData);
            if (Array.isArray(arr)) {
                equiposGuardados = { "Equipo 1": arr };
                equipoActivo = "Equipo 1";
                guardarEquipos();
                localStorage.removeItem("pokedex_team");
                return;
            }
        } catch {}
    }
    try {
        let data = JSON.parse(localStorage.getItem("pokedex_teams")) || {};
        equiposGuardados = data.teams || {};
        equipoActivo = data.activeTeam || null;
    } catch { 
        equiposGuardados = {};
        equipoActivo = null;
    }
    if (Object.keys(equiposGuardados).length === 0) {
        equiposGuardados = { "Equipo 1": [] };
        equipoActivo = "Equipo 1";
        guardarEquipos();
    }
    if (!equipoActivo || !equiposGuardados[equipoActivo]) {
        equipoActivo = Object.keys(equiposGuardados)[0];
    }
}

function guardarEquipos() {
    localStorage.setItem("pokedex_teams", JSON.stringify({ teams: equiposGuardados, activeTeam: equipoActivo }));
}

function getEquipo() {
    return equiposGuardados[equipoActivo] || [];
}

cargarEquipos();

btnTeam.addEventListener("click", function () {
    renderizarSelectorEquipos();
    renderizarEquipo();
    teamModal.classList.remove("oculto");
});

teamCerrar.addEventListener("click", function () {
    teamModal.classList.add("oculto");
});

teamPickerCerrar.addEventListener("click", function () {
    teamPickerModal.classList.add("oculto");
});

teamPickerSearch.addEventListener("input", function () {
    renderizarPickerList(this.value.toLowerCase().trim());
});

teamSelector.addEventListener("change", function () {
    equipoActivo = this.value;
    guardarEquipos();
    renderizarEquipo();
});

teamNewBtn.addEventListener("click", function () {
    let max = 0;
    Object.keys(equiposGuardados).forEach(function (k) {
        let m = k.match(/^Equipo (\d+)$/);
        if (m) max = Math.max(max, parseInt(m[1]));
    });
    let nombre = "Equipo " + (max + 1);
    equiposGuardados[nombre] = [];
    equipoActivo = nombre;
    guardarEquipos();
    renderizarSelectorEquipos();
    renderizarEquipo();
});

teamDeleteBtn.addEventListener("click", function () {
    let keys = Object.keys(equiposGuardados);
    if (keys.length <= 1) {
        mostrarToast("Debe haber al menos un equipo");
        return;
    }
    delete equiposGuardados[equipoActivo];
    equipoActivo = Object.keys(equiposGuardados)[0];
    guardarEquipos();
    renderizarSelectorEquipos();
    renderizarEquipo();
});

teamRenameBtn.addEventListener("click", function () {
    let nuevo = prompt("Nuevo nombre para el equipo:", equipoActivo);
    if (!nuevo || nuevo.trim() === "" || nuevo.trim() === equipoActivo) return;
    nuevo = nuevo.trim();
    if (equiposGuardados[nuevo]) {
        mostrarToast("Ya existe un equipo con ese nombre");
        return;
    }
    equiposGuardados[nuevo] = equiposGuardados[equipoActivo];
    delete equiposGuardados[equipoActivo];
    equipoActivo = nuevo;
    guardarEquipos();
    renderizarSelectorEquipos();
    renderizarEquipo();
});

teamSlots.addEventListener("click", function (e) {
    let slot = e.target.closest(".team-slot");
    if (!slot) return;
    let index = parseInt(slot.dataset.index);
    let eq = getEquipo();
    if (e.target.closest(".team-slot-remove")) {
        eq.splice(index, 1);
        guardarEquipos();
        renderizarEquipo();
        return;
    }
    equipoSlotSeleccionado = index;
    teamPickerSearch.value = "";
    renderizarPickerList("");
    teamPickerModal.classList.remove("oculto");
    teamPickerSearch.focus();
});

function renderizarSelectorEquipos() {
    teamSelector.innerHTML = "";
    Object.keys(equiposGuardados).forEach(function (nombre) {
        let opt = document.createElement("option");
        opt.value = nombre;
        opt.textContent = nombre;
        if (nombre === equipoActivo) opt.selected = true;
        teamSelector.appendChild(opt);
    });
}

function renderizarEquipo() {
    let eq = getEquipo();
    let slots = teamSlots.querySelectorAll(".team-slot");
    slots.forEach(function (slot, i) {
        let pkm = eq[i];
        if (pkm) {
            slot.classList.add("ocupado");
            let id = pkm.id;
            slot.innerHTML = "";
            let img = document.createElement("img");
            img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            img.onerror = function () { this.src = FALLBACK_SPRITE; };
            slot.appendChild(img);
            let nombre = document.createElement("span");
            nombre.className = "team-slot-nombre";
            nombre.textContent = pkm.nombre;
            slot.appendChild(nombre);
            if (pkm.tipos) {
                let tiposDiv = document.createElement("div");
                tiposDiv.className = "team-slot-tipos";
                pkm.tipos.forEach(function (t) {
                    let badge = document.createElement("span");
                    badge.className = "tipo-badge";
                    badge.style.background = COLORES_TIPO[t] || "#999";
                    badge.textContent = TRAD_TIPO[t] || t;
                    tiposDiv.appendChild(badge);
                });
                slot.appendChild(tiposDiv);
            }
            let remove = document.createElement("span");
            remove.className = "team-slot-remove";
            remove.textContent = "\u00D7";
            remove.title = "Quitar del equipo";
            slot.appendChild(remove);
        } else {
            slot.classList.remove("ocupado");
            slot.innerHTML = '<span class="team-slot-placeholder">#' + (i + 1) + "</span>";
        }
    });
    actualizarAnalisisEquipo();
}

function renderizarPickerList(filtro) {
    let eq = getEquipo();
    teamPickerList.innerHTML = "";
    let items = todosLosPokemon.filter(function (card) {
        if (eq.length >= 6) return false;
        let nombre = card.dataset.name.toLowerCase();
        let id = card.dataset.id;
        if (filtro && !nombre.includes(filtro) && !id.includes(filtro)) return false;
        return true;
    }).slice(0, 50);
    if (items.length === 0) {
        teamPickerList.innerHTML = '<div class="no-resultados" style="padding:20px">No se encontraron Pokémon</div>';
        return;
    }
    items.forEach(function (card) {
        let id = card.dataset.id;
        let item = document.createElement("div");
        item.className = "team-picker-item";
        item.dataset.id = id;
        let img = document.createElement("img");
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        img.onerror = function () { this.src = FALLBACK_SPRITE; };
        item.appendChild(img);
        let nameSpan = document.createElement("span");
        nameSpan.className = "picker-name";
        nameSpan.textContent = card.dataset.name;
        item.appendChild(nameSpan);
        let idSpan = document.createElement("span");
        idSpan.className = "picker-id";
        idSpan.textContent = "#" + id;
        item.appendChild(idSpan);
        item.addEventListener("click", function () {
            agregarAlEquipo(id, card.dataset.name);
        });
        teamPickerList.appendChild(item);
    });
}

function agregarAlEquipo(id, nombre) {
    let eq = getEquipo();
    if (eq.length >= 6) return;
    let data = pokemonDataCache[id];
    let tipos = [];
    if (data && data.types) {
        tipos = data.types.map(function (t) { return t.type.name; });
    }
    if (equipoSlotSeleccionado !== null && equipoSlotSeleccionado < eq.length) {
        eq[equipoSlotSeleccionado] = { id: Number(id), nombre: nombre, tipos: tipos };
    } else {
        eq.push({ id: Number(id), nombre: nombre, tipos: tipos });
    }
    guardarEquipos();
    teamPickerModal.classList.add("oculto");
    renderizarEquipo();
}

function actualizarAnalisisEquipo() {
    let eq = getEquipo();
    if (eq.length === 0) {
        teamInfo.innerHTML = '<p class="team-info-empty">Haz clic en un slot para a\u00F1adir un Pok\u00E9mon</p>';
        return;
    }

    let tiposEquipo = [];
    eq.forEach(function (pkm) {
        (pkm.tipos || []).forEach(function (t) {
            if (tiposEquipo.indexOf(t) === -1) tiposEquipo.push(t);
        });
    });

    let ofensivo = calcularCoberturaOfensiva(tiposEquipo);
    let defensivo = calcularCoberturaDefensiva(tiposEquipo);

    let html = '<div class="team-coverage-grid">';

    html += '<div class="team-coverage-section">';
    html += '<h4 style="color:var(--success)">\u2714 Ofensivo: supereficaz contra</h4>';
    html += '<div class="team-coverage-tags">';
    ofensivo.superEficaces.forEach(function (t) {
        let c = COLORES_TIPO[t] || "#999";
        let n = TRAD_TIPO[t] || t;
        html += '<span class="tipo-badge super-effective" style="background:' + c + '">' + n + "</span>";
    });
    if (ofensivo.superEficaces.length === 0) html += '<span style="color:var(--muted);font-size:0.85rem">Ninguno</span>';
    html += "</div></div>";

    html += '<div class="team-coverage-section">';
    html += '<h4 style="color:#c62828">\u2718 Defensivo: debil contra</h4>';
    html += '<div class="team-coverage-tags">';
    defensivo.debil.forEach(function (t) {
        let c = COLORES_TIPO[t] || "#999";
        let n = TRAD_TIPO[t] || t;
        html += '<span class="tipo-badge not-very" style="background:' + c + '">' + n + "</span>";
    });
    if (defensivo.debil.length === 0) html += '<span style="color:var(--muted);font-size:0.85rem">Ninguno</span>';
    html += "</div></div>";

    html += '<div class="team-coverage-section">';
    html += '<h4 style="color:var(--success)">\u2714 Defensivo: resistente contra</h4>';
    html += '<div class="team-coverage-tags">';
    defensivo.resistente.forEach(function (t) {
        let c = COLORES_TIPO[t] || "#999";
        let n = TRAD_TIPO[t] || t;
        html += '<span class="tipo-badge" style="background:' + c + '">' + n + "</span>";
    });
    if (defensivo.resistente.length === 0) html += '<span style="color:var(--muted);font-size:0.85rem">Ninguno</span>';
    html += "</div></div>";

    html += '<div class="team-coverage-section">';
    html += '<h4 style="color:#7b1fa2">\u2716 Defensivo: inmune contra</h4>';
    html += '<div class="team-coverage-tags">';
    defensivo.inmune.forEach(function (t) {
        let c = COLORES_TIPO[t] || "#999";
        let n = TRAD_TIPO[t] || t;
        html += '<span class="tipo-badge immune" style="background:' + c + '">' + n + "</span>";
    });
    if (defensivo.inmune.length === 0) html += '<span style="color:var(--muted);font-size:0.85rem">Ninguno</span>';
    html += "</div></div>";

    html += "</div>";

    html += '<div class="team-pros-cons">';
    if (ofensivo.superEficaces.length >= 6) {
        html += '<p class="pro">\u2714 Buena cobertura ofensiva: tu equipo cubre ' + ofensivo.superEficaces.length + " tipos</p>";
    } else {
        html += '<p class="con">\u2718 Cobertura ofensiva limitada: solo cubre ' + ofensivo.superEficaces.length + " tipos</p>";
    }
    if (defensivo.debil.length <= 3) {
        html += '<p class="pro">\u2714 Defensivamente s\u00F3lido: solo ' + defensivo.debil.length + " debilidad" + (defensivo.debil.length === 1 ? "" : "es") + "</p>";
    } else {
        html += '<p class="con">\u2718 Muchas debilidades: ' + defensivo.debil.length + ' tipos te golpean fuerte</p>';
    }
    if (defensivo.inmune.length > 0) {
        html += '<p class="pro">\u2714 Inmunidades: ' + defensivo.inmune.length + ' tipo' + (defensivo.inmune.length === 1 ? '' : 's') + ' no te afectan</p>';
    }
    html += "</div>";

    teamInfo.innerHTML = html;
}

function calcularCoberturaOfensiva(tiposEquipo) {
    let superEficaces = [];
    for (let defensor in TYPE_CHART_DEF) {
        for (let i = 0; i < tiposEquipo.length; i++) {
            let atacante = tiposEquipo[i];
            let def = TYPE_CHART_DEF[defensor];
            if (def.weak.indexOf(atacante) > -1) {
                if (superEficaces.indexOf(defensor) === -1) superEficaces.push(defensor);
                break;
            }
        }
    }
    superEficaces.sort();
    return { superEficaces: superEficaces };
}

function calcularCoberturaDefensiva(tiposEquipo) {
    let multiplicadores = {};
    for (let atacante in TYPE_CHART_DEF) {
        let mult = 1;
        tiposEquipo.forEach(function (tipoPokemon) {
            var def = TYPE_CHART_DEF[tipoPokemon];
            if (def.immune.indexOf(atacante) > -1) mult = 0;
            if (mult !== 0) {
                if (def.weak.indexOf(atacante) > -1) mult *= 2;
                if (def.resist.indexOf(atacante) > -1) mult *= 0.5;
            }
        });
        multiplicadores[atacante] = mult;
    }
    let debil = [];
    let resistente = [];
    let inmune = [];
    for (let tipo in multiplicadores) {
        let mult = multiplicadores[tipo];
        if (mult >= 2) debil.push(tipo);
        else if (mult <= 0.5 && mult > 0) resistente.push(tipo);
        else if (mult === 0) inmune.push(tipo);
    }
    debil.sort();
    resistente.sort();
    inmune.sort();
    return { debil: debil, resistente: resistente, inmune: inmune };
}


