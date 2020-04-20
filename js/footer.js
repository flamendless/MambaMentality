$(document).ready(
function()
{
	const p_yellow = "#fdb827";
	const p_purple =  "#542583";

	$.isvg(
	function()
	{
		const svg = $("#svg_logo");
		const path = svg.find("g path");
		svg.attr("width", "64px");
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
});