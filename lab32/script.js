const questions  = [
    {
        question: "Quantos deuses ocupam uma cadeira no olimpo?",
        answers:  ["12", "6", "10", "14"],
        correctAnswer: 0
    },
    {
        question: "Qual deus é o rei do olimpo?",
        answers:  ["Hades", "Poseidon", "Ares", "Zeus"],
        correctAnswer: 3
    },
    {
        question: "Qual deus na mitologia deu origem aos cavalos?",
        answers:  ["Hera", "Poseidon", "Atena", "Apolo"],
        correctAnswer: 1
    },
    {
        question:"Qual nome recebe o filho de um deus com um mortal?",
        answers:  ["Bastardo", "Semideus", "Minideus", "Nao tem nome"],
        correctAnswer: 1
    },
    {
        question: "Para onde os monstros vão quando morrem?",
        answers:  ["Submundo", "Elisios", "Inferno", "Tartaro"],
        correctAnswer: 3
    },
   
];

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}


function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Sua pontuação foi ${score} de ${questions.length}`;
}

window.onload = loadQuestions;

