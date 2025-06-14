let personagens_container = document.getElementById("personagens-container")


    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200`)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach(cardpokemon => { 
            fetch(cardpokemon.url)
            .then((res) => res.json())
            .then((data) =>{
                console.log(data)
                const card = document.createElement("div")
                card.className = "card"
                card.innerHTML = `
                <img src="${data.sprites.versions['generation-v']['black-white'].animated.front_default}" alt="${data.name}">
                 <h2>${data.name}</h2>
                 <p>Experiência: ${data.base_experience}</p>
                 <p>Vida: ${data.stats[0].base_stat}</p>
                 <p>Ataque: ${data.stats[1].base_stat}</p>
                 <p>Defesa: ${data.stats[2].base_stat}</p>
                `
                personagens_container.appendChild(card)
            })
        });
    })





