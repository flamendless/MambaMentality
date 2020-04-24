$(document).ready(
function()
{
	const url = window.location.href;
	const filename = url.match(/.*\/(.*)$/)[1];

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
