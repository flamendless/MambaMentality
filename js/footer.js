$(document).ready(
function()
{
	create_footer();
});

function create_footer()
{
	// const src_logo = determine_path("assets/logo.png");
	const src_logo = "../assets/logo.png";

	const main = $("#footer");
	const footer = $("<footer></footer>").addClass("footer").appendTo(main);
	const center = $("<div></div>").addClass("footer-center").appendTo(footer);
	const brand = $("<div></div>").addClass("footer-brand").appendTo(center);
	const h3 = $("<h3></h3>")
		.html(`&nbsp;&nbsp;&nbsp;&nbsp;
			Mamba
			<img id="svg_logo" src="${src_logo}">
			Mentality`)
		.appendTo(brand);
	const hr = $("<hr>").appendTo(center);
	const links = $("<p></p>").addClass("footer-links").appendTo(center);
	const a_index = $("<a></a>").attr("href", "#index").text("Home").appendTo(links);
	const a_story = $("<a></a>").attr("href", "#story").text("Story").appendTo(links);
	const a_training = $("<a></a>").attr("href", "#training").text("Training").appendTo(links);
	const a_merchandise = $("<a></a>").attr("href", "#merchandise").text("Merchandise").appendTo(links);
	const a_quiz = $("<a></a>").attr("href", "#quiz").text("Quiz").appendTo(links);
	const a_about = $("<a></a>").attr("href", "#about").text("About").appendTo(links);
	const copyright = $("<p></p>").addClass("footer-copyright").text("flamendless © 2020").appendTo(center);
	const icons = $("<div></div>").addClass("footer-icons").appendTo(center);

	const a_website = $("<a></a>").addClass("tooltip").attr("href", "https://flamendless.github.io").attr("target", "_blank").appendTo(icons);
	const i_website = $("<i></i>").addClass("fab fa-chrome").appendTo(a_website);
	const span_website = $("<span></span>").addClass("tooltip-text").text("Check my Website").appendTo(i_website);

	const a_github = $("<a></a>").addClass("tooltip").attr("href", "https://github.com/flamendless").attr("target", "_blank").appendTo(icons);
	const i_github = $("<i></i>").addClass("fab fa-github").appendTo(a_github);
	const span_github = $("<span></span>").addClass("tooltip-text").text("Check me on GitHub").appendTo(i_github);

	const a_twitter = $("<a></a>").addClass("tooltip").attr("href", "https://twitter.com/flamendless").attr("target", "_blank").appendTo(icons);
	const i_twitter = $("<i></i>").addClass("fab fa-twitter").appendTo(a_twitter);
	const span_twitter = $("<span></span>").addClass("tooltip-text").text("Follow me on Twitter").appendTo(i_twitter);

	const a_mail = $("<a></a>").addClass("tooltip").attr("href", "mailto:flamendless8@gmail.com").attr("target", "_blank").appendTo(icons);
	const i_mail = $("<i></i>").addClass("fa fa-envelope").appendTo(a_mail);
	const span_mail = $("<span></span>").addClass("tooltip-text").text("Send me an E-Mail").appendTo(i_mail);
}
