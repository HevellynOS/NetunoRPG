class User {
    constructor(name, birthday, email, password) {
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
    }
}

const handleClickRegister = (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const birthday = document.querySelector("#birthday").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    const specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    
    console.log(name);
    console.log(email);
    console.log(birthday);

    if (!name) {
        alert('Por favor, preencha o campo de nome.');
        return;
    } else if (!birthday) {
        alert('Por favor, preencha o campo de data de aniversário.');
        return;
    } else if (!password) {
        alert('A senha está em branco!');
        return;
    } else if (!containsSpecialCharacters(password)) {
        alert("A senha deve conter pelo menos um caractere especial");
        return;
    } else if (password.length < 8) {
        alert("Senha muito fraca! A senha deve ter pelo menos 8 caracteres");
        return;
    } else if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
    }
    
    console.log('Dados válidos:', name, birthday, email);
    
    function containsSpecialCharacters(password) {
        for (const char of password) {
            if (specialCharacters.includes(char)) {
                return true;
            }
        }
        return false;
    }

    const user = new User(name, birthday, email, password);

    const userData = {
        name: user.name,
        birthday: user.birthday,
        email: user.email,
    };

    fetch('http://localhost:3000/register',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (response.ok) {
            alert('User data saved successfully!');
            window.location.href = 'loginForm.html';
            
        } else {
            alert('Error while saving user data.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}