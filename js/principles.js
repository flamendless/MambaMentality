$(document).ready(
function()
{
	generate_random_bg();

	const row = $(".container .row");
	row.each(
		function()
		{
			const r = Math.floor((Math.random() * 3)) + 1;
			const random_bg = `url("../assets/training/bg_title${r}.png")`;
			$(this).css("background-image", random_bg);

			$(this).click(
				function()
				{
					const desc = $(this).find(".row-desc");
					const title = $(this).find(".row-title");
					const display = desc.css("display");

					if (display == "none")
					{
						$(this).find(".row-desc").slideDown();
						title.css("color", "var(--palette-lal-yellow)");
						title.css("text-decoration", "underline");
					}
					else
					{
						$(this).find(".row-desc").slideUp();
						title.css("color", "var(--palette-lal-white)");
						title.css("text-decoration", "none");
					}
				});
		});
})
