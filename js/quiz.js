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
			"Kobe Bean Bryant",
			"Kobe Michael Bryant",
			"Kobe Andrew Bryant",
			"Kobe Jackson Bryant",
		],
		answer: "Kobe Bean Bryant"
	},

	{
		question: "Why is Kobe called the 'Black Mamba'?",
		choices: [
			"He was inspired by the movie 'Kill Bill' wherein an assassin uses a black mamba snake to kill",
			"He was once bitten by a black mamba snake which nearly killed him",
			"He was in loved with a book title 'The Way of the Assassin' which has the black mamba logo",
		],
		answer: "He was inspired by the movie 'Kill Bill' wherein an assassin uses a black mamba snake to kill",
	},

	{
		question: "For how long did Kobe Bryant played in the NBA?",
		choices: [
			"17 years",
			"20 years",
			"24 years",
			"30 years",
		],
		answer: "20 years"
	},

	{
		question: "What is the total career points of Kobe Bryant in the NBA",
		choices: [
			"33, 643 points",
			"34, 629 points",
			"32, 636 points",
			"33, 640 points",
		],
		answer: "33, 643 points"
	},

	{
		question: "How many times have Kobe been awarded All-Star MVP?",
		choices: [
			"4 times",
			"5 times",
			"6 times",
			"7 times",
		],
		answer: "4 times"
	},

	{
		question: "What is the story behind his jersey number '24'?",
		choices: [
			"Symbolizes 24 hours of a day meaning to take full advantage without wasting a second.",
			"One over Michael Jordan's 23 meaning to surpass MJ",
			"He wore the number 24 during his childhood days a sign of rebuilding one's self for a new identity",
		],
		answer: "He wore the number 24 during his childhood days a sign of rebuilding one's self for a new identity",
	},

	{
		question: "How many times did Kobe Bryant practice during weekdays as a teen?",
		choices: [
			"2 hours a day",
			"3 hours a day",
			"4 hours a day",
			"5 hours a day",
		],
		answer: "4 hours a day",
	},

	{
		question: "Kobe won an academy award for best short animated film titled?",
		choices: [
			"Dear Basketball",
			"The Mamba Mentality",
			"Basketball",
			"The Game I Live To Love",
		],
		answer: "Dear Basketball",
	},

	{
		question: "How many made shots in practice did Kobe make before stopping practice?",
		choices: [
			"240",
			"300",
			"400",
			"500",
		],
		answer: "400",
	},

	{
		question: "What piano piece did Kobe teach himself by ear for his wife",
		choices: [
			"Moonlight Sonata",
			"Nocturne",
			"Pathetique",
			"Bumblebee",
		],
		answer: "Moonlight Sonata",
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
		else
			console.log(user_answer, correct_answer)
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
