
const jsonURL = "https://angelmere1998.github.io/pokemon-overlay/pokemon.json";

async function loadPokemon() {

    const response = await fetch(jsonURL);
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

}

loadPokemon();

setInterval(loadPokemon, 5000);
