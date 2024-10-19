document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('welcomeMessage').style.display = 'none';  // Oculta a mensagem de boas-vindas
    document.getElementById('options').style.display = 'block'; // Mostra as opções
});

function endGame(message, imageSrc) {
    document.getElementById('options').style.display = 'none'; // Esconde as opções
    document.getElementById('gameOver').style.display = 'block'; // Mostra a tela de Game Over
    document.getElementById('gameOverMessage').textContent = message; // Atualiza a mensagem de Game Over
    document.getElementById('gameOverImage').src = imageSrc; // Define a imagem de Game Over
    document.getElementById('gameOverImage').style.display = 'block'; // Exibe a imagem
}

function restartGame() {
    document.getElementById('gameOver').style.display = 'none'; // Esconde a tela de Game Over
    document.getElementById('options').style.display = 'none'; // Esconde as opções
    document.getElementById('welcomeMessage').style.display = 'block'; // Mostra a mensagem de boas-vindas
    document.getElementById('gameOverImage').style.display = 'none'; // Esconde a imagem
}
