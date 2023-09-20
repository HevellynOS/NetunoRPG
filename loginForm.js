
function handleClickLogin(e) {

    e.preventDefault();

    
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }


    const userData = {
        email: email,
        password: password
    };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if (response.ok) {
            alert('Login bem-sucedido!');
            window.location.href = 'profile.html';
        } else {
            alert('Login falhou. Verifique suas credenciais.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
