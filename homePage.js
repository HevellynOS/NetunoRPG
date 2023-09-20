let className = "";

const selectedOptions = {
    colorEyes: "",
    skinColor: "",
    mount: "",
    colorHair: "",
    character: {
        hp: "",
        mana: "",
        power: ""
    }
};

class CharacterClasses {
    constructor (hp, mana , power){
     this.hp = hp;
     this.mana = mana;
     this.power = power;
    }
 }
 
 class Paladino extends CharacterClasses {
     constructor(){
         super(630, 50, 540);
     }
 }
 
 class Atirador extends CharacterClasses {
     constructor(){
         super(800, 450, 25);
     }
 }
 
 class Guerreiro extends CharacterClasses{
     constructor(){
         super(770, 30, 650);
     }
 }
 
 class Barbaro extends CharacterClasses{
     constructor(){
         super(800, 15, 450);
     }
 }
 
 class Arqueiro extends CharacterClasses{
     constructor(){
         super(500, 35, 630)
     }
 }
 
 const characterClasses = {
    Paladino: new Paladino(),
    Atirador: new Atirador(),
    Guerreiro: new Guerreiro(),
    Barbaro: new Barbaro(),
    Arqueiro: new Arqueiro(),
};

 
 class Character {
     constructor(className, colorEyes, colorHair, mount, skinColor) {
         this.class = className; 
         this.colorEyes = colorEyes; 
         this.colorHair = colorHair; 
         this.skinColor = skinColor; 
         this.mount = mount;
     }
     setCharacterStats(stats) {
         this.hp = stats.hp;
         this.power = stats.power;
         this.mana = stats.mana;
     }
 
 }

 document.querySelector("#eyeColor").addEventListener("change", function() {
    selectedOptions.colorEyes = this.value;
});

document.querySelector("#skinColor").addEventListener("change", function() {
    selectedOptions.skinColor = this.value;
});

document.querySelector("#selectMount").addEventListener("change", function() {
    selectedOptions.mount = this.value;
});


const hairRed = document.getElementById("hair-red");
const hairWhite = document.getElementById("hair-white");
const hairGreen = document.getElementById("hair-green");


hairRed.addEventListener("click", function() {
    selectedHairColor = "red";
    updateCharacterPreview(); 
    console.log("Cabelo Vermelho");

});

hairWhite.addEventListener("click", function() {
    selectedHairColor = "white";
    updateCharacterPreview(); 
    console.log("Cabelo Branco");

});

hairGreen.addEventListener("click", function() {
    selectedHairColor = "green";
    updateCharacterPreview(); 
    console.log("Cabelo Verde");

});

function updateCharacterPreview() {
    const hairColorElement = document.querySelector(".hair-select.active");
    
    if (hairColorElement) {
        hairColorElement.setAttribute("data-color", selectedHairColor);
    }
}

 
const handleClickShowInfos = (event) => {
    event.preventDefault();
    console.log(selectedOptions)
    const choosedCharacter = document.querySelector("#choosed");
    choosedCharacter.innerHTML = ""; 

    const colorEyesElement = document.createElement("p");
    colorEyesElement.textContent = `Cor dos olhos: ${selectedOptions.colorEyes}`;
    choosedCharacter.appendChild(colorEyesElement);

    const skinColorElement = document.createElement("p");
    skinColorElement.textContent = `Cor da pele: ${selectedOptions.skinColor}`;
    choosedCharacter.appendChild(skinColorElement);

    const mountElement = document.createElement("p");
    mountElement.textContent = `Montaria: ${selectedOptions.mount}`;
    choosedCharacter.appendChild(mountElement);

    if (selectedOptions.colorHair !== "") {
        const colorHairElement = document.createElement("p");
        colorHairElement.textContent = `Cor do cabelo: ${selectedOptions.colorHair}`;
        choosedCharacter.appendChild(colorHairElement);
    }

    if (selectedOptions.character.hp !== "") {
        const characterElement = document.createElement("p");
        characterElement.textContent = `Classe do personagem: ${selectedOptions.class}`;
        choosedCharacter.appendChild(characterElement);

        const hpElement = document.createElement("p");
        hpElement.textContent = `HP: ${selectedOptions.character.hp}`;
        choosedCharacter.appendChild(hpElement);

        const manaElement = document.createElement("p");
        manaElement.textContent = `Mana: ${selectedOptions.character.mana}`;
        choosedCharacter.appendChild(manaElement);

        const powerElement = document.createElement("p");
        powerElement.textContent = `Poder: ${selectedOptions.character.power}`;
        choosedCharacter.appendChild(powerElement);
    }
}


window.onload = function() {

    const userName = localStorage.getItem('userName');

    if (userName) {
        const figcaption = document.querySelector(".perfil figcaption");
        figcaption.textContent = userName;
    }
    
    const userPerfil = localStorage.getItem('userName');

    if (userPerfil) {
        const figcaption = document.querySelector(".perfil figcaption");
        figcaption.textContent = userPerfil;
    }

    const buttons = document.querySelectorAll('.btn-class');
    const selectWeapons = document.querySelector("#selectWeapons");

    buttons.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();

            const className = btn.getAttribute("data-class");


            selectWeapons.innerHTML = '<option value="">Escolha uma arma</option>';

            if (btn.textContent === 'Paladino') {
                const weapons = ['Lança', 'Escudo'];
                
                weapons.forEach(function(weapon) {
                    const option = document.createElement('option');
                    option.value = weapon;
                    option.textContent = weapon;
                    selectWeapons.appendChild(option);
                });
            }
            else if (btn.textContent === 'Atirador') {
                const weapons = ['Arma'];
                
                weapons.forEach(function(weapon) {
                    const option = document.createElement('option');
                    option.value = weapon;
                    option.textContent = weapon;
                    selectWeapons.appendChild(option);
                });
            }
            else if (btn.textContent === 'Guerreiro') {
                const weapons = ['Espada', 'Escudo'];
                
                weapons.forEach(function(weapon) {
                    const option = document.createElement('option');
                    option.value = weapon;
                    option.textContent = weapon;
                    selectWeapons.appendChild(option);
                });
            }
            else if (btn.textContent === 'Barbaro') {
                const weapons = ['Machado', 'Marreta'];
                
                weapons.forEach(function(weapon) {
                    const option = document.createElement('option');
                    option.value = weapon;
                    option.textContent = weapon;
                    selectWeapons.appendChild(option);
                });
            }
            else if (btn.textContent === 'Arqueiro') {
                const weapons = ['Arco'];
                
                weapons.forEach(function(weapon) {
                    const option = document.createElement('option');
                    option.value = weapon;
                    option.textContent = weapon;
                    selectWeapons.appendChild(option);
                });
            } else {
                console.log(`Você não selecionou nenhuma opção`);
            }
            alert(`Classe selecionada: ${btn.textContent}`);
        });
    });

}

