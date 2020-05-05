$(document).ready(
function()
{
	generate_random_bg();

	const fade_time = 200;

	const cards = $(".container .row .card");
	cards.each(
		function()
		{
			$(this)
				.on("mouseenter",
					function()
					{
						$(this).find(".caption").slideDown("slow",
							function()
							{
								$(this).css("display", "flex");
							});
						const img = $(this).find("img");
						const img_class = img.attr("class");
						let new_src;
						if (img_class == "forearm")
							new_src = "../assets/training/anatomy1_hovered.png";
						else if (img_class == "hip")
							new_src = "../assets/training/anatomy2_hovered.png";
						else if (img_class == "foot")
							new_src = "../assets/training/anatomy3_hovered.png";

						img.fadeOut(fade_time,
							function()
							{
								img.attr("src", new_src);
							})
							.fadeIn(fade_time);
					})
				.on("mouseleave",
					function()
					{
						$(this).find(".caption").slideUp();
						const img = $(this).find("img");
						const img_class = img.attr("class");
						let new_src;
						if (img_class == "forearm")
							new_src = "../assets/training/anatomy1.png";
						else if (img_class == "hip")
							new_src = "../assets/training/anatomy2.png";
						else if (img_class == "foot")
							new_src = "../assets/training/anatomy3.png";

						img.fadeOut(fade_time,
							function()
							{
								img.attr("src", new_src);
							})
							.fadeIn(fade_time);
					});
		});
})
