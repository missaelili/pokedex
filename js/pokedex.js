window.onload = fetchRandom(randomNumber());

const fetchPokemon = () => {
    const poketypes = document.getElementById("types");
    const pokeNameInput = document.getElementById("textsearch");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    if (pokeName > 898) pokeName = 898;
    else if (pokeName < 1) pokeName = 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokeInfo(data);
            pokeDescription(data);
        }
    });
    poketypes.innerHTML = "";
}


function fetchRandom(numero) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokeInfo(data);
            pokeDescription(data);
        }
    });
}

const fetchNext = () => {
    const poketypes = document.getElementById("types");
    const pokeNumber = document.getElementById("pokenumber").innerHTML;
    let number = pokeNumber.substring(1, 4);
    number++;
    if (number > 898) number = 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokeInfo(data);
            pokeDescription(data);
        }
    });
    poketypes.innerHTML = "";
}

const fetchprev = () => {
    const poketypes = document.getElementById("types");
    const pokeNumber = document.getElementById("pokenumber").innerHTML;
    let number = pokeNumber.substring(1, 4);
    number--;
    if (number < 1) number = 898;
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            pokeInfo(data);
            pokeDescription(data);
        }
    });
    poketypes.innerHTML = "";
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeInfo = (info) => {
    const section = document.getElementById("section");
    const devimg = document.getElementById("poke-img");
    const searchbtn = document.getElementById("search");

    const leftclick = document.getElementById("left-click");
    const righttclick = document.getElementById("right-click");

    const pokename = document.getElementById("pokename");
    const pokenumber = document.getElementById("pokenumber");
    const type1 = document.getElementById("type1");
    const type2 = document.getElementById("type2");
    const ability1 = document.getElementById("ability1");
    const ability2 = document.getElementById("ability2");
    const hp = document.getElementById("hp");
    const attack = document.getElementById("attack");
    const defense = document.getElementById("defense");
    const sp_attack = document.getElementById("sp-attack");
    const sp_defense = document.getElementById("sp-defense");
    const speed = document.getElementById("speed");
    const hpbar = document.getElementById("hpbar");
    const attackbar = document.getElementById("attackbar");
    const defensebar = document.getElementById("defensebar");
    const sp_attackbar = document.getElementById("sp-attackbar");
    const sp_defensebar = document.getElementById("sp-defensebar");
    const speedbar = document.getElementById("speedbar");
    const topdiv = document.getElementById("types");
    const heigh = document.getElementById("heigh");
    const weight = document.getElementById("weight");
    const xp = document.getElementById("xp");

    pokename.innerHTML = info.name;
    numero = info.id;
    if (numero < 10) {
        pokenumber.innerHTML = "#00" + numero;
    } else if (numero < 100) {
        pokenumber.innerHTML = "#0" + numero;
    } else {
        pokenumber.innerHTML = "#" + numero;
    }

    let tipos = info.types;

    for (let index = 0; index < tipos.length; index++) {
        var newDiv = document.createElement("div");
        var newtext = document.createElement("p");
        let typename = tipos[index].type.name;
        newtext.innerText = typename;
        newDiv.appendChild(newtext);
        newDiv.classList.add('pokeclass')
        newDiv.setAttribute("id", "div");
        setdivbackground(typename, newDiv);
        topdiv.appendChild(newDiv);
    }

    let tipo1 = tipos[0].type.name;

    if (tipo1 == "bug" || tipo1 == "grass") {
        devimg.style.backgroundColor = "#A9BA1E";
        section.style.backgroundColor = "#d7df9f";
        document.body.style.backgroundColor = "#edfa8b";
        searchbtn.style.backgroundColor = "#A9BA1E";
        leftclick.style.borderRight = "40px solid #A9BA1E";
        righttclick.style.borderLeft = "40px solid #A9BA1E";
    } else if (tipo1 == "normal") {
        devimg.style.backgroundColor = "#918d82";
        section.style.backgroundColor = "#cac7bf";
        document.body.style.backgroundColor = "#C5C1B5";
        searchbtn.style.backgroundColor = "#918d82";
        leftclick.style.borderRight = "40px solid #918d82";
        righttclick.style.borderLeft = "40px solid #918d82";
    } else if (tipo1 == "dragon") {
        devimg.style.backgroundColor = "#5943c4";
        section.style.backgroundColor = "#ae9ff7";
        document.body.style.backgroundColor = "#7C6AD9";
        searchbtn.style.backgroundColor = "#5943c4";
        leftclick.style.borderRight = "40px solid #5943c4";
        righttclick.style.borderLeft = "40px solid #5943c4";
    } else if (tipo1 == "electric") {
        devimg.style.backgroundColor = "#fffc2e";
        section.style.backgroundColor = "#f3f29b";
        document.body.style.backgroundColor = "#FABD1C";
        searchbtn.style.backgroundColor = "#fffc2e";
        leftclick.style.borderRight = "40px solid #fffc2e";
        righttclick.style.borderLeft = "40px solid #fffc2e";
    } else if (tipo1 == "fairy") {
        devimg.style.backgroundColor = "#f373ed";
        section.style.backgroundColor = "#fccffa";
        document.body.style.backgroundColor = "#fa8cf4";
        searchbtn.style.backgroundColor = "#f373ed";
        leftclick.style.borderRight = "40px solid #f373ed";
        righttclick.style.borderLeft = "40px solid #f373ed";
    } else if (tipo1 == "fighting") {
        devimg.style.backgroundColor = "#794836";
        section.style.backgroundColor = "#a0563b";
        document.body.style.backgroundColor = "#7F3920";
        searchbtn.style.backgroundColor = "#794836";
        leftclick.style.borderRight = "40px solid #794836";
        righttclick.style.borderLeft = "40px solid #794836";
    } else if (tipo1 == "fire") {
        devimg.style.backgroundColor = "#ee3910";
        section.style.backgroundColor = "#ecb2a4";
        document.body.style.backgroundColor = "#f57e64";
        searchbtn.style.backgroundColor = "#EE4A27";
        leftclick.style.borderRight = "40px solid #ee3910";
        righttclick.style.borderLeft = "40px solid #ee3910";
    } else if (tipo1 == "flying") {
        devimg.style.backgroundColor = "#d4d7f5";
        section.style.backgroundColor = "#737eff";
        document.body.style.backgroundColor = "#A4ABF5";
        searchbtn.style.backgroundColor = "#d4d7f5";
        leftclick.style.borderRight = "40px solid #d4d7f5";
        righttclick.style.borderLeft = "40px solid #d4d7f5";
    } else if (tipo1 == "ghost" || tipo1 == "dark") {
        devimg.style.backgroundColor = "#7a4fb3";
        section.style.backgroundColor = "#a182c9";
        document.body.style.backgroundColor = "#573a7c";
        searchbtn.style.backgroundColor = "#7a4fb3";
        leftclick.style.borderRight = "40px solid #7a4fb3";
        righttclick.style.borderLeft = "40px solid #7a4fb3";
    } else if (tipo1 == "ground" || tipo1 == "rock") {
        devimg.style.backgroundColor = "#af962f";
        section.style.backgroundColor = "#c9b877";
        document.body.style.backgroundColor = "#CBB351";
        searchbtn.style.backgroundColor = "#af962f";
        leftclick.style.borderRight = "40px solid #af962f";
        righttclick.style.borderLeft = "40px solid #af962f";
    } else if (tipo1 == "poison") {
        devimg.style.backgroundColor = "#ec60ff";
        section.style.backgroundColor = "#f8c1ff";
        document.body.style.backgroundColor = "#ee87fc";
        searchbtn.style.backgroundColor = "#ec60ff";
        leftclick.style.borderRight = "40px solid #ec60ff";
        righttclick.style.borderLeft = "40px solid #ec60ff";
    } else if (tipo1 == "psychic") {
        devimg.style.backgroundColor = "#f03e7c";
        section.style.backgroundColor = "#ffbcd3";
        document.body.style.backgroundColor = "#fc7ca8";
        searchbtn.style.backgroundColor = "#f03e7c";
        leftclick.style.borderRight = "40px solid #f03e7c";
        righttclick.style.borderLeft = "40px solid #f03e7c";
    } else if (tipo1 == "steel") {
        devimg.style.backgroundColor = "#757575";
        section.style.backgroundColor = "#cecece";
        document.body.style.backgroundColor = "#b3b1b1";
        searchbtn.style.backgroundColor = "#757575";
        leftclick.style.borderRight = "#40px solid #757575";
        righttclick.style.borderLeft = "40px solid #757575";
    } else if (tipo1 == "water" || tipo1 == "ice") {
        devimg.style.backgroundColor = "#3B9CED";
        section.style.backgroundColor = "#84b1d6";
        document.body.style.backgroundColor = "#2b5b83";
        searchbtn.style.backgroundColor = "#3B9CED";
        leftclick.style.borderRight = "#40px solid #3B9CED";
        righttclick.style.borderLeft = "40px solid #3B9CED";
    }

    stathp = info.stats[0].base_stat;
    statattack = info.stats[1].base_stat;
    statdeffense = info.stats[2].base_stat;
    statspattack = info.stats[3].base_stat;
    statspdeffense = info.stats[4].base_stat;
    statspeed = info.stats[5].base_stat;

    hp.innerHTML = stathp;
    attack.innerHTML = statattack;
    defense.innerHTML = statdeffense;
    sp_attack.innerHTML = statspattack;
    sp_defense.innerHTML = statdeffense;
    speed.innerHTML = statspeed;

    hpbar.value = stathp;
    attackbar.value = statattack;
    defensebar.value = statdeffense;
    sp_attackbar.value = statspattack;
    sp_defensebar.value = statdeffense;
    speedbar.value = statspeed;

    heigh.innerHTML = info.height + " Mts";
    weight.innerHTML = info.weight + " Kg";
    xp.innerHTML = info.base_experience + " XP";

    ability1.innerText = info.abilities[0].ability.name;
    ability2.innerText = info.abilities[1].ability.name;

}

const pokeDescription = (data) => {
    const description = document.getElementById("description-text");
    const url = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data2) => {
        if (data2) {
            let number = 0;
            let pokedescrip = data2.flavor_text_entries;
            for (let index = 0; index < pokedescrip.length; index++) {
                if (pokedescrip[index].language.name == "en") {
                    number = index;
                    break;
                }
            }
            description.innerHTML = pokedescrip[number].flavor_text
        }
    });
}



function randomNumber() {
    return Math.round(Math.random() * (898 - 1) + 1);
}

function setdivbackground(tipo1, div) {
    if (tipo1 == "bug" || tipo1 == "grass") {
        div.style.backgroundColor = "#A9BA1E";
    } else if (tipo1 == "normal") {
        div.style.backgroundColor = "#918d82";
    } else if (tipo1 == "dragon") {
        div.style.backgroundColor = "#5943c4";
    } else if (tipo1 == "electric") {
        div.style.backgroundColor = "#fffc2e";
    } else if (tipo1 == "fairy") {
        div.style.backgroundColor = "#f373ed";
    } else if (tipo1 == "fighting") {
        div.style.backgroundColor = "#794836";
    } else if (tipo1 == "fire") {
        div.style.backgroundColor = "#EE4A27";
    } else if (tipo1 == "flying") {
        div.style.backgroundColor = "#d4d7f5";
    } else if (tipo1 == "ghost" || tipo1 == "dark") {
        div.style.backgroundColor = "#7a4fb3";
    } else if (tipo1 == "ground" || tipo1 == "rock") {
        div.style.backgroundColor = "#af962f";
    } else if (tipo1 == "poison") {
        div.style.backgroundColor = "#ec60ff";
    } else if (tipo1 == "psychic") {
        div.style.backgroundColor = "#f03e7c";
    } else if (tipo1 == "steel") {
        div.style.backgroundColor = "#757575";
    } else if (tipo1 == "water" || tipo1 == "ice") {
        div.style.backgroundColor = "#3B9CED";
    }
}