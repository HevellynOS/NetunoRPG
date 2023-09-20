class Character {
    constructor(className, hp, power, mana, colorEyes, colorHair, mount, skinColor) {
        this.class = className; 
        this.hp = hp;
        this.power = power;
        this.mana = mana; 
        this.colorEyes = colorEyes; 
        this.colorHair = colorHair; 
        this.skinColor = skinColor; 
        this.mount = mount;
    }
}

const handleClickShowInfos = (event) => {
    event.preventDefault();

    const className = document.querySelector(".btn-class.active").textContent;
    const hp = parseInt(document.querySelector("#table-cards td:nth-child(1)").textContent.match(/\d+/)[0]);
    const power = parseInt(document.querySelector("#table-cards td:nth-child(3)").textContent.match(/\d+/)[0]);
    const mana = parseInt(document.querySelector("#table-cards td:nth-child(5)").textContent.match(/\d+/)[0]);
    const colorEyes = document.querySelector("#eyeColor").value;
    const colorHair = document.querySelector(".hair-select.active").getAttribute("data-color");
    const skinColor = document.querySelector("#skinColor").value;
    const mount = document.querySelector("#selectMount").value;

    const character = new Character(className, hp, power, mana, colorEyes, colorHair, mount, skinColor);

    console.log(character);
}
}
