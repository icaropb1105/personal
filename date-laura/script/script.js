const questions = [
    {
        question: "Você está em uma floresta. Você vai para a esquerda (A) ou para a direita (B)?",
        options: {
            A: "Você encontra um rio.",
            B: "Você encontra uma caverna."
        }
    },
    {
        question: "Você quer nadar no rio (A) ou explorar a caverna (B)?",
        options: {
            A: "Você encontra um tesouro submerso.",
            B: "Você encontra um dragão!"
        }
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionA = document.querySelector(".option:nth-child(1)");
    const optionB = document.querySelector(".option:nth-child(2)");

    questionElement.textContent = questions[currentQuestion].question;
    optionA.textContent = "A: " + questions[currentQuestion].options.A;
    optionB.textContent = "B: " + questions[currentQuestion].options.B;
}

function selectOption(option) {
    if (option === 'A') {
        currentQuestion++;
    } else {
        currentQuestion += 2; // avança 2 para uma nova pergunta
    }

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("game").innerHTML = "<h1>Fim da História!</h1>";
    }
}

loadQuestion();
