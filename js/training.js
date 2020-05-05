$(document).ready(
function()
{
	const modal = $("#main_modal");
	const span = $("#modal_close");

	generate_tedx(modal);
	generate_academy(modal);

	span.click(
		function()
		{
			modal.fadeOut(255);
		});

	$(".container .row a")
		.on("mouseenter",
			function()
			{
				$(this).find("h4").slideDown();
			})
		.on("mouseleave",
			function()
			{
				$(this).find("h4").slideUp();
			});

	$(document).on("keyup",
		function(event)
		{
			if (event.keyCode == 27)
				$("#modal_close").click();
		});
})

function generate_tedx(modal)
{
	const span = $("#modal_close");
	const carousel = $("#carousel");
	const vid = $("#modal_video");
	const vid_src = $("#modal_video_src");
	const caption = $("#modal_caption");
	const tedx = $("#tedx");

	tedx.click(
		function()
		{
			carousel.hide();
			vid_src.attr("src", "../assets/video/tedx.mp4");
			vid[0].load();
			caption.text("TedX Talk With Kobe Bryant");
			vid.show();
			modal.fadeIn(250);
		});
}

function generate_academy(modal)
{
	const carousel = $("#carousel");
	const vid = $("#modal_video");
	const caption = $("#modal_caption");
	const academy = $("#academy")

	academy.click(
		function()
		{
			vid.hide();

			setup_carousel(carousel);

			$("<h4></h4>")
				.addClass("academy-info")
				.text("Mamba Sports Academy is a full-circle facility designed to update the way men, women and youth approach human performance, by creating a multi-platform environment that activates, educates and provides an opportunity for humans to unlock their full potential. We provide effective, safe and transparent human performance training to develop athletes to the peak of their potential. The Academy enlists diverse experts to support youth, amateur and elite athletes with a full-circle approach that includes body, performance and cognitive training. Mamba Sports Academy operates three distinct business units: Sport-specific physical training academies; a sports-focused venture lab, and a charitable foundation, called the Mamba & Mambacita Sports Foundation. Mamba Sports Academy launched in 2018 as a joint business venture in holistic athletic training between NBA legend Kobe Bryant and Sports Academy’s CEO Chad Faulkner.")
				.appendTo(caption);

			$("<a></a>")
				.addClass("academy-link")
				.attr("href", "https://mambasportsacademy.com/")
				.attr("target", "_blank")
				.text("Visit The Mamba Academy Here")
				.appendTo(caption);

			carousel.show();
			modal.fadeIn(250);
		});
}

const carousel_data = [
	{
		caption: "Sports-Specific Training",
		image: "../assets/training/academy1.png",
	},
	{
		caption: "Adult Athletes",
		image: "../assets/training/academy2.png",
	},
	{
		caption: "Youth Programs",
		image: "../assets/training/academy3.png",
	},
	{
		caption: "The Campus",
		image: "../assets/training/academy4.png",
	},
];

function setup_carousel(carousel)
{
	const main = $("<div></div>")
		.addClass("slideshow-main")
		.appendTo(carousel);

	for (let i = 0; i < carousel_data.length; i++)
	{
		const data = carousel_data[i];

		const slide = $("<div></div>")
			.addClass("slide fade")
			.appendTo(main);
		const img = $("<img>")
			.addClass("slide-image")
			.attr("src", data.image)
			.appendTo(slide);
		const caption = $("<div></div>")
			.addClass("slide-caption")
			.text(data.caption)
			.appendTo(slide);
	}
	carousel_slide();
}

let current_slide = 0;
function carousel_slide()
{
	let slides = $(".slide");

	for (let i = 0; i < slides.length; i++)
		$(slides[i]).hide();

	current_slide++;
	if (current_slide > slides.length)
		current_slide = 1;

	$(slides[current_slide - 1]).css("display", "flex");
	setTimeout(carousel_slide, 3000);
}
