const quizData = [
	{
		question: 'Em que ano a Beep Saúde foi criada?',
		a: '2020',
		b: '2005',
		c: '2016',
		d: '2012',
		correct: 'c'
	}, {
		question: 'Em qual desses estados a Beep não está presente?',
		a: 'Bahia',
		b: 'São Paulo',
		c: 'Rio de Janeiro',
		d: 'Paraná',
		correct: 'a'
	}, {
		question: 'Quem é fundou a Beep Saúde?',
		a: 'Jeff Bezos',
		b: 'Vander Corteze',
		c: 'David Veléz',
		d: 'Fábio Coelho',
		correct: 'b'
	}, {
		question: 'Em que cidade foi criada a Beep?',
		a: 'São Paulo',
		b: 'Brasília',
		c: 'Florianópolis',
		d: 'Rio de Janeiro',
		correct: 'd'
	},
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if(answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected();

	if(answer) {
		if(answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if(currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = 
			`<h2>Você acertou ${score}/${quizData.length} questões!</h2>

			<button onclick="location.reload()">Recarregar</button>
			`;
		}	
	}
		
});