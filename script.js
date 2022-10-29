const pokemon_container = document.querySelector(".pokemon_container");
//const sppiner = document.querySelector
let limit = 8;
let offset = 1;
function fetchpokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
    
create_Pokemon(data);})
}
function fetchpokemons(number){
  for (let i = 1;i<=number; i++){
    fetchpokemon(i);
  }

}
function create_Pokemon(pokemon){


    const card =document.createElement("div");
    card.classList.add("pokemon-block");
    const spritecontainer = document.createElement("div");
    spritecontainer.classList.add("img-container");
    const sprite = document.createElement("img");
sprite.src =pokemon.sprites.front_default
spritecontainer.appendChild(sprite);
const number = document.createElement("p")
number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;


const name = document.createElement("p");
name.classList.add("name");
name.textContent = pokemon.name
card.appendChild(spritecontainer);
card.appendChild(number);
card.appendChild(name);


pokemon_container.appendChild(card)
}
fetchpokemons(6) ;
