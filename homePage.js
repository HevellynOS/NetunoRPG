// No início do arquivo, recupere o nome do usuário do local storage
const userName = localStorage.getItem('userName');

// Verifique se o nome do usuário existe
if (userName) {
    // Se existir, atualize o texto do figcaption
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

class Character = {
    constructor(class){
    }
}
let selectClass = '';


buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();

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
    });
});

    function handleClickShowInfos(event) {
        event.preventDefault();
    
        // Obtenha os valores dos elementos usando seus IDs
        const nome = document.getElementById('nome').value;
        const classe = document.getElementById('classe').value;
        const corCabelo = document.getElementById('corCabelo').value;
        const corOlhos = document.getElementById('corOlhos').value;
        const corPele = document.getElementById('corPele').value;
        const armas = document.getElementById('armas').value;
        const montaria = document.getElementById('montaria').value;
    
        // Agora você tem os valores em variáveis que podem ser usadas conforme necessário
        console.log('Nome:', nome);
        console.log('Classe:', classe);
        console.log('Cor do Cabelo:', corCabelo);
        console.log('Cor dos Olhos:', corOlhos);
        console.log('Cor da Pele:', corPele);
        console.log('Armas:', armas);
        console.log('Montaria:', montaria);
    
        // Realize as ações necessárias com esses valores aqui
    }
    
}