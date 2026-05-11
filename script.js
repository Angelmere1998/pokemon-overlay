
const jsonURL = "https://angelmere1998.github.io/pokemon-overlay/pokemon.json";

async function loadPokemon() {

    try {

        const response = await fetch(jsonURL + "?t=" + Date.now(), {
            cache: "no-store"
        });

        const data = await response.json();

        const team = document.getElementById("team");

        team.innerHTML = "";

        data.forEach(pokemon => {

            const div = document.createElement("div");

            div.className = "pokemon";

            div.innerHTML = `
                <img src="${pokemon.image}">
                <div class="name">${pokemon.name}</div>
            `;

            team.appendChild(div);

        });

    } catch (error) {
        console.error(error);
    }

}

loadPokemon();

setInterval(loadPokemon, 2000);
