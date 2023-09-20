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

