$(document).ready(
function()
{
	const url = window.location.href;
	const filename = url.match(/.*\/(.*)$/)[1];

	setup_svg();
	if (filename == "index.html" || filename == "")
		setup_sticky();
});

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

function setup_svg()
{
	const p_yellow = "#fdb827";
	const p_purple =  "#542583";
	$.isvg(
		function()
		{
			const svg = $("#svg_logo_header");
			const path = svg.find("g path");
			svg.attr("height", "48px");
			path.css("fill", p_yellow);
			path.css("stroke", p_purple);

			svg.hover(
				function()
				{
					path.css("fill", p_purple);
					path.css("stroke", p_yellow);
				});

			svg.mouseleave(
				function()
				{
					path.css("fill", p_yellow);
					path.css("stroke", p_purple);
				});
		});
}
