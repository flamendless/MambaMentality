$(document).ready(
function()
{
	generate_mosaic();

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
		img: "../assets/jumpshot.png",
		alt: "Kobe on a jumpshot",
		text: "The jumpshot",
	};
	const fadeaway = {
		id: "fadeaway",
		img: "../assets/fadeaway.png",
		alt: "Kobe on a fadeaway",
		text: "The fadeaway",
	};
	const dunk = {
		id: "dunk",
		img: "../assets/dunk.png",
		alt: "Kobe on a dunk",
		text: "The dunk",
	};
	const layup = {
		id: "layup",
		img: "../assets/layup.png",
		alt: "Kobe on a layup",
		text: "The layup",
	};
	const defense = {
		id: "defense",
		img: "../assets/defense.png",
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

		tile.click(() => generate_modal(src.id, src.alt));
	}
}

const videos = {};
videos.jumpshot = {
	src: "../assets/video/jumpshot.mp4",
	info_head: "Jumpshot",
	content: `In his early years, Kobe was known for scoring with highlight dunks using his athleticism inside the rim.
		But as he developed within the league, he turned into a deadly shooter with most of his points coming from the
		perimeter. Kobe is famous for making difficult and game winning shots. He is so versatile and deadly that his
		defenders find it very hard to guard him.`,
};

videos.fadeaway = {
	src: "../assets/video/fadeaway.mp4",
	info_head: "Fadeaway",
	content: `One of Kobe's offensive arsenal is the fadeaway shot. Fadeaway shot is not an easy move to pull off.
		After all, it seems odd to shoot while inching away from the basket instead of going nearer.
		But with the difficulty of this shooting motion allows players to be more versatile, deadly, and
		harder to predict and guard. Kobe's fadeaway form is very similar and reminiscent to the Greatest Of All Time (GOAT) Michael Jordan,
		simply saying that Kobe admires and imitates his idol is an understatement. Kobe developed and practiced his fadeaway
		shot as he continued his basketball journey with the dream of surpassing his idol.`,
	links: [
		{
			link: "#fadeaway",
			text: "Click here to learn more",
		},
	]
};

videos.dunk = {
	src: "../assets/video/dunk.mp4",
	info_head: "Dunk",
	content: `From the gravity-defying leap into the air to the power and intensity of the slam has always been one of the
		most amazing and eye-catching highlight reel in any basketball match. This is no exception when it comes to Kobe Bryant,
		his dunk has left viewers gasping for air as he fearlessly leaps and dunks in every game. The motion, artistic quality, and
		finesse he displays is a must watch for every basketball fans out there.`,
};

videos.layup = {
	src: "../assets/video/layup.mp4",
	info_head: "Layup",
	content: `One of the fundamental moves in basketball is the layup. It is very basic that anyone who plays this sport knows it and
		have done it multiple times. It is the easiest way to perform, it is even easier to score a point with layup than to shoot.
		It is not as amazing as a dunk but players have found different ways to make it amazing and even harder to guard and block.
		One of the many players who excel at making difficult and acrobatic layup to stun the defenders and to entertain the crowd is
		Kobe Bryant, his layup is unpredictable and his reverse layup is smooth and precise.`,
};

videos.defense = {
	src: "../assets/video/defense.mp4",
	info_head: "Defense",
	content: `Defense is not that highly praised compared to the other end of the spectrum of strategy in basketball, which is offense.
		Defense is shy from spotlight and highlight reel but is indeed very essential skill that every player must practice and perform.
		Defense ranges from steals, blocks, and rebounds can not only prevent the opponent team from scoring, but it also demoralizes opposing
		player. Kobe Bryant is well-known also for his tight and unrelentless defense. After all, one of the most noticable personality of him
		is his competitiveness and hatred of losing. That is why when he defends, he pours as much energy into guarding his opponent as much as
		he is trying to score in offense.`,
};

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

	const random = get_random_bg();
	const random_bg = `../assets/art${random}.png`;
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

	modal.fadeIn(250,
		function()
		{
			$(this).css("display", "flex");
		});

	caption.text(alt);
	span.click(
		function()
		{
			modal.fadeOut(250);
			$(info_links).empty();
		});
}
