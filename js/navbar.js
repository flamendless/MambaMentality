$(document).ready(
function()
{
	const url = window.location.href;
	const filename = url.match(/.*\/(.*)$/)[1];
	create_navbar();

	if (filename == "index.html" || filename == "")
		setup_sticky();
});

function create_navbar()
{
	const src_logo = determine_path("assets/logo.svg");
	const main = $("#navbar");
	const navbar = $("<div></div>").addClass("navbar").appendTo(main);
	const ul = $("<ul role='navigation'></ul>").addClass("navbar-main").appendTo(navbar);

	const li_index = $("<li></li>").appendTo(ul);
	const a_index = $("<a data-navigo></a>").attr("href", "#index").appendTo(li_index);
	const i_index = $("<i></i>").addClass("fa fa-home").appendTo(a_index);
	const span_index = $("<span></span>").text(" Home").appendTo(i_index);

	const li_story = $("<li></li>").appendTo(ul);
	const a_story = $("<a data-navigo></a>").attr("href", "#story").appendTo(li_story);
	const i_story = $("<i></i>").addClass("fa fa-book-open").appendTo(a_story);
	const span_story = $("<span></span>").text(" Story").appendTo(i_story);

	const li_training = $("<li></li>").appendTo(ul);
	const a_training = $("<a data-navigo></a>").attr("href", "#training").appendTo(li_training);
	const i_training = $("<i></i>").addClass("fa fa-dumbbell").appendTo(a_training);
	const span_training = $("<span></span>").text(" Training").appendTo(i_training);

	const li_logo = $("<li></li>").addClass("navbar-logo").appendTo(ul);
	const img_logo = $("<img>").attr("id", "svg_logo_header").attr("src", src_logo).appendTo(li_logo);

	const li_merchandise = $("<li></li>").appendTo(ul);
	const a_merchandise = $("<a data-navigo></a>").attr("href", "#merchandise").appendTo(li_merchandise);
	const i_merchandise = $("<i></i>").addClass("fa fa-basketball-ball").appendTo(a_merchandise);
	const span_merchandise = $("<span></span>").text(" Merchandise").appendTo(i_merchandise);

	const li_quiz = $("<li></li>").appendTo(ul);
	const a_quiz = $("<a data-navigo></a>").attr("href", "#quiz").appendTo(li_quiz);
	const i_quiz = $("<i></i>").addClass("fa fa-sticky-note").appendTo(a_quiz);
	const span_quiz = $("<span></span>").text(" Quiz").appendTo(i_quiz);

	const li_about = $("<li></li>").appendTo(ul);
	const a_about = $("<a data-navigo></a>").attr("href", "#about").appendTo(li_about);
	const i_about = $("<i></i>").addClass("fa fa-user").appendTo(a_about);
	const span_about = $("<span></span>").text(" About").appendTo(i_about);
}

function setup_sticky()
{
	$(window).scroll(
		function()
		{
			scroll_navbar();
		});

	const navbar = $("#navbar");
	const sticky = navbar.offset().top;
	const duration_fade = 250;

	function scroll_navbar()
	{
		const scrolltop = $(window).scrollTop();
		if (scrolltop >= sticky)
		{
			navbar.fadeIn(duration_fade);
			navbar.addClass("sticky");
		}
		else
		{
			navbar.fadeOut(duration_fade);
			navbar.removeClass("sticky");
		}
	}
}
