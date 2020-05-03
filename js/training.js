$(document).ready(
function()
{
	const modal = $("#main_modal");
	const span = $("#modal_close");
	const vid = $("#modal_video");
	const vid_src = $("#modal_video_src");
	const caption = $("#modal_caption");
	const tedx = $("#tedx");

	$(document).on("keyup",
		function(event)
		{
			if (event.keyCode == 27)
				$("#modal_close").click();
		});

	tedx.click(
		function()
		{
			vid_src.attr("src", "../assets/video/fadeaway.mp4");
			vid[0].load();
			caption.text("TedX Talk With Kobe Bryant");
			modal.fadeIn(250);
		});

	span.click(
		function()
		{
			modal.fadeOut(250);
		});
})
