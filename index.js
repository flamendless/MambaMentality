$(document).ready(
function()
{
	const images = {};
	images.img_jumpshot = { original: $("#img_jumpshot").attr("src"), hovered: "assets/jumpshot_hovered.png"};

	// $(".banner").hover(
	// 	function()
	// 	{
	// 		const img = $(this).find(".image");
	// 		const id = img.attr("id");
	// 		const obj = images[id];
	// 		img.attr("src", obj.hovered);
	// 	},
	// 	function()
	// 	{
	// 		const img = $(this).find(".image");
	// 		const id = img.attr("id");
	// 		const obj = images[id];
	// 		img.attr("src", obj.original);
	// 	});
})