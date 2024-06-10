
document.addEventListener('DOMContentLoaded', () => {
    const choiceElement = document.getElementById('choice');
    const rollDiceButton = document.getElementById('rollDice');
    const stopGameButton = document.getElementById('stopGame');
    const resultElement = document.getElementById('result');
    let isPlaying = true;

    rollDiceButton.addEventListener('click', () => {
        if (isPlaying) {
            const userChoice = choiceElement.value;
            const diceResult = Math.floor(Math.random() * 6) + 1;
            const isEven = diceResult % 2 === 0;
            const resultText = `Você escolheu ${userChoice}. O dado caiu em ${diceResult}.`;

            if ((userChoice === 'par' && isEven) || (userChoice === 'impar' && !isEven)) {
                resultElement.innerText = resultText + ' Você ganhou!';
            } else {
                resultElement.innerText = resultText + ' Você perdeu!';
            }
        }
    });

    stopGameButton.addEventListener('click', () => {
        isPlaying = false;
        resultElement.innerText = 'O jogo foi encerrado.';
    });
});
