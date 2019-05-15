let section = document.querySelector('section');
let requestUrl = 'https://gist.githubusercontent.com/LeandroDCI/697427913933937f714dc9c4e728d1c7/raw/ce065f1a72d937eade74e5523d68d834ec2b5304/Heroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = function () {
    let superHeroes = request.response;
    console.log(superHeroes);
    showHeroes(superHeroes);
}

const showHeroes = (heroes) => heroes.map(hero => {
    let Article = document.createElement('article');
    let Hero = document.createElement('h1');
    let Info1 = document.createElement('p');
    let Info2 = document.createElement('p');
    let Info3 = document.createElement('p');
    let Info4 = document.createElement('p');

    // characters array
    let array = hero.characters.split(",");
    console.log(array);


    Hero.textContent = hero.superhero;
    Info1.textContent = `Publisher: ${hero.publisher}`;
    Info2.textContent = `Alter Ego: ${hero.alter_ego}`;
    Info3.textContent = `First Appearance: ${hero.first_appearance}`;
    Info4.textContent = `Characters:`;

    Article.appendChild(Hero);
    Article.appendChild(Info1);
    Article.appendChild(Info2);
    Article.appendChild(Info3);
    Article.appendChild(Info4);
    for (let i = 0; i < array.length; i++) {
        let List = document.createElement('li');
        List.textContent = array[i];
        Article.appendChild(List);
    }
    section.appendChild(Article);
})