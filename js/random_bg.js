$(document).ready(
function()
{
	const backgrounds = [2, 3, 4, 5, 6, 7, 9, 10, 11];
	const random = Math.floor((Math.random() * backgrounds.length) + 1);
	const random_bg = `../assets/art${random}.png`;
	$("body, html").css("background-image", `url(${random_bg})`);
});
