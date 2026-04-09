let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
let contenedorPokemon = document.querySelector("#contenedorPokemon");
let galeriaPokemon = document.querySelector("#galeriaPokemon");
let btnCargarMas = document.querySelector("#btnCargarMas");
let modal = document.querySelector("#modalPokemon");
let cerrar = document.querySelector(".cerrar");
let proximoPokemon = 1;

window.addEventListener("load", cargarPokemones);
btnCargarMas.addEventListener("click", cargarPokemones);
cerrar.addEventListener("click", cerrarModal);
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        cerrarModal();
    }
});

function cerrarModal() {
    modal.classList.add("oculto");
}

async function abrirModal(idPokemon) {
    try {
        let [pokemonResponse, especieResponse] = await Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon + "/"),
            fetch("https://pokeapi.co/api/v2/pokemon-species/" + idPokemon + "/")
        ]);

        let data = await pokemonResponse.json();
        let especieData = await especieResponse.json();
        let tipos = data.types.map(function (t) { return t.type.name; }).join(", ");

        document.querySelector("#nombreModal").textContent = data.name;
        document.querySelector("#imgModal").src = data.sprites.front_default;
        document.querySelector("#idModal").textContent = data.id;
        document.querySelector("#tipoModal").textContent = tipos;
        document.querySelector("#alturaModal").textContent = (data.height / 10).toFixed(1);
        document.querySelector("#pesoModal").textContent = (data.weight / 10).toFixed(1);

        let descripcion = "Sin descripción disponible.";

        if (especieData.flavor_text_entries && especieData.flavor_text_entries.length > 0) {
            let textoEspanol = especieData.flavor_text_entries.find(function (entry) {
                return entry.language.name === "es";
            });

            if (textoEspanol) {
                descripcion = textoEspanol.flavor_text.replace(/\n/g, " ");
            } else {
                descripcion = especieData.flavor_text_entries[0].flavor_text.replace(/\n/g, " ");
            }
        }

        document.querySelector("#descripcionModal").textContent = descripcion;
        modal.classList.remove("oculto");
    } catch (error) {
        console.log("Error cargando datos del pokemon:", error);
        document.querySelector("#descripcionModal").textContent = "Error al cargar la descripcion.";
        modal.classList.remove("oculto");
    }
}

async function cargarPokemones() {
    let inicio = proximoPokemon;
    let limite = proximoPokemon + 10;
    proximoPokemon += 10;

    let promesas = [];

    for (let i = inicio; i < limite; i++) {
        promesas.push(
            (async function (indice) {
                let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + indice + "/");

                if (!response.ok) {
                    throw new Error("Error HTTP " + response.status);
                }

                let data = await response.json();
                return { indice: indice, data: data };
            })(i)
        );
    }

    let resultados = await Promise.allSettled(promesas);

    resultados.forEach(function (resultado) {
        if (resultado.status === "rejected") {
            console.log("Error cargando pokemon:", resultado.reason);
            return;
        }

        let indice = resultado.value.indice;
        let data = resultado.value.data;

        let divPokemon = document.createElement("div");
        divPokemon.className = "pokemon-item";

        let img = document.createElement("img");
        img.src = data.sprites.front_default;
        img.alt = data.name;

        let nombre = document.createElement("p");
        nombre.textContent = data.name;

        divPokemon.appendChild(img);
        divPokemon.appendChild(nombre);

        divPokemon.addEventListener("click", function () {
            abrirModal(indice);
        });

        galeriaPokemon.appendChild(divPokemon);
    });
}
