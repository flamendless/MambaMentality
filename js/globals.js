const BACKGROUNDS = [2, 3, 4, 5, 6, 7, 9, 10, 11];

function get_random_bg()
{
	const r = Math.floor((Math.random() * BACKGROUNDS.length));
	const random = BACKGROUNDS[r];
	return random;
}

function generate_random_bg()
{
	const random = get_random_bg();
	const random_bg = `../assets/art${random}.png`;
	$("body, html").css("background-image", `url(${random_bg})`);
}
