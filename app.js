const BaseUrl = "https://superheroapi.com/api.php/161226216699561";
let imgUrl = "";
let heroName = "";
let powerStat = {};
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("search");
console.log(searchBtn);
const heroImgDiv = document.getElementById("heroImgDiv");
let heroNameDiv = document.getElementById("hero-name");
let powerStatDiv = document.getElementById("powerStat");

let btn = document.getElementById("btn");
const getSuperHero = (id) => {
  fetch(`${BaseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      // let powerstat = getStatsHTML(json);
      console.log(json);
      imgUrl = json.image.url;
      heroName = json.name;
      powerStat = json.powerstats;
      getstatsHTML(powerStat);

      console.log(imgUrl);
      heroImgDiv.innerHTML = `<img src="${imgUrl}" height=200 width=150/>`;
      heroNameDiv.innerHTML = `<h3>${heroName}</h3>`;
    });

  // const getStatsHTML = (character) => {
  //  const stats = Object.keys(character.powerstats).map(stat => {
  //    return `<p>${stat}: ${character.powerstats[stat]} </p>`
  //  })
  //  console.log(stats);
  // }
};

searchBtn.onclick = () => {
  let searchInput = searchBar.value;
  console.log(searchInput);
  getHeroByName(searchInput);
};
const getHeroByName = (name) => {
  fetch(`${BaseUrl}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      imgUrl = json.results[0].image.url;
      console.log(imgUrl);
      namUrl = json.results[0].name;
      powerStat = json.results[0].powerstats;
      console.log(powerStat);
      getstatsHTML(powerStat);
      // powerStat = getStatsHTML(json.results[0]);
      heroImgDiv.innerHTML = `<img src="${imgUrl}" height=200 width=150/>`;
      heroNameDiv.innerHTML = `<h3>${namUrl}</h3>`;
      // powerStatDiv.innerHTML = `<h3>${powerStat}</h3>`
    });
};
const emoji = {
  intelligence: "🧠",
  strength: "💪",
  combat: "⚔️",
  speed: "⚡",
  durability: "🏋️",
  power: "💪🏾",
};
const getstatsHTML = (powerstat) => {
  for (let stat in powerstat) {
    console.log(stat, powerstat[stat]);
    
    powerStatDiv.innerHTML += `<p>${emoji[stat]} ${stat.toUpperCase()} : ${powerstat[stat]}</p>`;
  }
};

const randomHero = () => {
  let randomHeroId = Math.floor(Math.random() * 730 + 1);
  return randomHeroId;
};
btn.onclick = () => getSuperHero(randomHero());
