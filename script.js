const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYDgYj06iQrhceVBuOyNeNDWJiZulQzONZgs9IqWSHDRz67F9YorbwzM5D6j2VD3i5X4btHYZI1-0Y/pub?output=csv";

async function loadPokemon() {

    const response = await fetch(sheetURL);
    const data = await response.text();

    const rows = data.split("\n").slice(1);

    const team = document.getElementById("team");

    team.innerHTML = "";

    rows.forEach(row => {

        const cols = row.split(",");

        const pokemon = cols[0];
        const nickname = cols[1];
        const image = cols[2];

        if (image) {

            const div = document.createElement("div");

            div.className = "pokemon";

            div.innerHTML = `
                <img src="${image}">
                <div class="name">${nickname}</div>
            `;

            team.appendChild(div);
        }

    });

}

loadPokemon();

setInterval(loadPokemon, 5000);