$(document).ready(
function()
{
	generate_quiz();

	const submit = $("#submit")
		.click(function(){
			const flag = confirm("Are you sure you want to submit the quiz?");
			if (flag)
			{
				const result = check_quiz();
				change_view();
				show_score(result);
			}
		});

	const retake = $("#retake")
		.click(function()
			{
				const flag = confirm("Are you sure you want to retake the quiz?");
				if (flag)
					location.reload();
			});
})

function change_view(view)
{
	const submit = $("#submit").addClass("hidden");
	const retake = $("#retake").removeClass("hidden");
	const main = $("#quiz").addClass("hidden");
	const direction = $(".direction").addClass("hidden");
	const note = $(".note").addClass("hidden");
	const bottom_hr = $(".bottom-hr").addClass("hidden");
}

//The list of data (question, choices, answer) that will be randomized every time the page is loaded
const quiz_content = [
	{
		question: "What is the full name of the Black Mamba?",
		choices: [
			"choice1",
			"choice2",
			"choice3",
			"choice4",
		],
		answer: "choice4"
	},

	{
		question: "Why is Kobe called the 'Black Mamba'?",
		choices: [
			"choice1",
			"choice2",
			"choice3",
			"choice4",
		],
		answer: "choice4"
	},

	{
		question: "What is the total career points of Kobe Bryant in the NBA",
		choices: [
			"choice1",
			"choice2",
			"choice3",
			"choice4",
		],
		answer: "choice4"
	},

	{
		question: "How many times have Kobe been awarded MVP during his NBA career?",
		choices: [
			"choice1",
			"choice2",
			"choice3",
			"choice4",
		],
		answer: "choice4"
	},

	{
		question: "What is the story behind his jersey number '24'?",
		choices: [
			"choice1",
			"choice2",
			"choice3",
			"choice4",
		],
		answer: "choice4"
	},
]

function generate_quiz()
{
	const main = $("#quiz");

	const n = quiz_content.length;
	for (let i = 0; i < n; i++)
	{
		const r = Math.floor((Math.random() * quiz_content.length));
		const current = quiz_content.splice(r, 1)[0];
		const number = i + 1;
		const text_question = current.question;
		const choices = current.choices;
		const answer = current.answer;

		const question = $("<div></div>")
			.addClass("quiz-question")
			.attr("data-answer", answer)
			.appendTo(main);
		const num = $("<h3></h3>")
			.addClass("number")
			.text(number + ".")
			.appendTo(question);
		const q = $("<h3></h3>")
			.addClass("question")
			.text(text_question)
			.appendTo(question);
		const br = $("<div></div>")
			.addClass("content-break")
			.appendTo(question);

		const container_choices = $("<div></div>")
			.addClass("quiz-choices")
			.appendTo(question);
		const form = $("<form></form>")
			.appendTo(container_choices);

		generate_choices(choices, form);
	}
}

//Randomize the choices as well
function generate_choices(choices, form)
{
	const n_choices = choices.length;
	for (let c = 0; c < n_choices; c++)
	{
		const r = Math.floor((Math.random() * choices.length));
		const text_choice = choices.splice(r, 1)[0];
		const number = c + 1;
		const div = $("<div></div>")
			.addClass("choice")
			.appendTo(form);
		const input = $("<input type='radio' name='input-choice'>")
			.appendTo(div);
		const span = $("<span></span>")
			.text(text_choice)
			.appendTo(div);
	}
}

function check_quiz()
{
	const main = $("#quiz");
	const questions = $(".quiz-question");

	const total = questions.length;
	let score = 0;

	for (let i = 0; i < questions.length; i++)
	{
		const current = questions[i];
		const correct_answer = $(current).attr("data-answer");
		const form = $(current).find("form");
		const user_answer = $(form).find("input[name='input-choice']:checked").parent().find("span").text();
		if (correct_answer == user_answer)
			score++;
	}

	return [score, total];
}

function show_score(data)
{
	const score = data[0];
	const total = data[1];

	const quiz_score = $("#quiz_score");
	quiz_score.removeClass("hidden");

	const text = $("<h2></h2>")
		.addClass("score-text")
		.text(`${score} / ${total}`)
		.appendTo(quiz_score);

	//generate number of stars
	const stars = $("<div></div>").addClass("stars").appendTo(quiz_score);
	for (let i = 0; i < total; i++)
	{
		const star = $("<i></i>")
			.addClass("fa fa-star")
			.appendTo(stars);

		if (i < score)
			star.addClass("star-correct");
	}
}
