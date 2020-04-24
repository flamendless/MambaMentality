const BACKGROUNDS = [2, 3, 4, 5, 6, 7, 9, 10, 11];

function generate_random_bg()
{
	const random = Math.floor((Math.random() * BACKGROUNDS.length) + 1);
	const random_bg = `../assets/art${random}.png`;
	$("body, html").css("background-image", `url(${random_bg})`);
}
