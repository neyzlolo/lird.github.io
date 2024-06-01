document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Informations d'identification
    const validUsername = 'theo.balducci';
    const validPassword = 'ls4lRfbs@';
    
    // Vérification des informations d'identification
    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
});