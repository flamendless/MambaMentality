$(document).ready(
function()
{
	generate_mosaic();

	const main = $("#main");
	const mosaic = $("#mosaic");
	const btn_minimize = $("#minimize");
	const btn_maximize = $("#maximize");

	const default_size = "repeat(4, 10vw)";
	const max_size = "repeat(4, 1fr)";

	btn_minimize.click(
		function()
		{
			mosaic.css("grid-template-columns", default_size);
			mosaic.addClass("center-grid");
		});

	btn_maximize.click(
		function()
		{
			mosaic.css("grid-template-columns", max_size);
			mosaic.removeClass("center-grid");
		});

	$(document).on("keyup",
		function(event)
		{
			if (event.keyCode == 27)
				$("#modal_close").click();
		});
});

function generate_mosaic()
{
	const jumpshot = {
		id: "jumpshot",
		img: "assets/jumpshot.png",
		alt: "Kobe on a jumpshot",
		text: "The jumpshot",
	};
	const fadeaway = {
		id: "fadeaway",
		img: "assets/fadeaway.png",
		alt: "Kobe on a fadeaway",
		text: "The fadeaway",
	};
	const dunk = {
		id: "dunk",
		img: "assets/dunk.png",
		alt: "Kobe on a dunk",
		text: "The dunk",
	};
	const layup = {
		id: "layup",
		img: "assets/layup.png",
		alt: "Kobe on a layup",
		text: "The layup",
	};
	const defense = {
		id: "defense",
		img: "assets/defense.png",
		alt: "Kobe on a defense",
		text: "The defense",
	};

	const images = [jumpshot, fadeaway, dunk, layup, defense];
	const mosaic = $("#mosaic");

	for (let i = 0; i < images.length; i++)
	{
		const src = images[i];
		const tile = $("<div></div>")
			.addClass("mosaic-tile flip")
			.appendTo(mosaic);
		const flip_inner = $("<div></div>")
			.addClass("flip-inner")
			.appendTo(tile);
		const flip_front = $("<div></div>")
			.addClass("flip-front")
			.appendTo(flip_inner);
		const img = $("<img>")
			.attr("id", "img_" + src.id)
			.attr("src", src.img)
			.attr("alt", src.alt)
			.appendTo(flip_front);
		const flip_back = $("<div></div>")
			.addClass("flip-back")
			.appendTo(flip_inner);
		const img_back = $("<img>")
			.attr("id", "img_" + src.id)
			.attr("src", src.img)
			.attr("alt", src.alt)
			.appendTo(flip_back);
		const container = $("<div></div>")
			.addClass("container-overlay")
			.appendTo(flip_back);
		const overlay = $("<div></div>")
			.addClass("overlay")
			.appendTo(container);
		const text = $("<div></div>")
			.addClass("overlay-text")
			.text(src.text)
			.appendTo(overlay);

		// tile.click(function() { generate_modal(src.id, src.alt); });
		tile.click(() => generate_modal(src.id, src.alt));
	}
}

const videos = {};
videos.jumpshot = {
	src: "assets/video/jumpshot.mp4",
	info_head: "Jumpshot",
	content: `In his early years, Kobe was known for scoring with highlight dunks using his athleticism inside the rim.
		But as he developed within the league, he turned into a deadly shooter with most of his points coming from the
		perimeter. Kobe is famous for making difficult and game winning shots. He is so versatile and deadly that his
		defenders find it very hard to guard him.`,
	links: [
		{
			link: "./webpages/jumpshot.html",
			text: "Learn here about the shooting form",
		},
	]
};

videos.fadeaway = {
	src: "assets/video/fadeaway.mp4",
	info_head: "Fadeaway",
	content: "",
};
videos.dunk = {
	src: "assets/video/dunk.mp4",
	info_head: "Dunk",
	content: "",
};
videos.layup = {
	src: "assets/video/layup.mp4",
	info_head: "Layup",
	content: "",
};
videos.defense = {
	src: "assets/video/defense.mp4",
	info_head: "Defense",
	content: "",
};

const backgrounds = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];

function generate_modal(id, alt)
{
	const modal = $("#mosaic_modal");
	const span = $("#modal_close");
	const caption = $("#modal_caption");
	const vid = $("#modal_video");
	const vid_src = $("#modal_video_src");
	const info_head = $("#modal_info .info-head");
	const info_content = $("#modal_info .info-content");
	const info_content_p = $("#modal_info .info-content p");
	const info_links = $("#modal_info .info-links");

	const random = Math.floor((Math.random() * backgrounds.length) + 1);
	const random_bg = `assets/art${random}.png`;
	modal.css("background-image", `url(${random_bg})`);

	const vids = videos[id];
	vid_src.attr("src", vids.src);
	vid[0].load();

	info_head.text(vids.info_head);
	info_content_p.text(vids.content);

	if (vids.links)
	{
		for (let i = 0; i < vids.links.length; i++)
		{
			const data = vids.links[0];
			const link = $("<li></li>").appendTo(info_links);
			const a = $("<a></a>")
				.text(data.text)
				.attr("href", data.link)
				.appendTo(link);
		}
	}

	modal.fadeIn(250);
	caption.text(alt);
	span.click(
		function()
		{
			modal.fadeOut(250);
			$(info_links).empty();
		});
}