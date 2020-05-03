$(document).ready(
function()
{
	generate_items();

	const width = $(window).width();
	const modal = $(".modal");
	const img_modal = $(".modal-img");

	const left_pos = "0px";
	const r = width * 0.6;
	const right_pos = `${r}px`

	const images = $(".merch").find(".merch-item").find(".merch-pic img");
	images.each(
		function()
		{
			const src = $(this).attr("src");
			$(this).on("mouseenter",
				function()
				{
					const pos = $(this).offset();
					if (pos.left <= width/2)
						modal.css("left", right_pos);
					else if (pos.left > width/2)
						modal.css("left", left_pos);

					img_modal.attr("src", src);
					modal.fadeIn();
				});

			$(this).on("mouseleave",
				function()
				{
					modal.fadeOut();
				});
		});
});

//Store the merchandise items to be generated
const merch_items = [
	{
		name: "The Mamba Mentality: How I Play",
		img: "book.jpg",
		buy: true,
		link: "https://www.amazon.com/Mamba-Mentality-How-Play/dp/0374201234",
		description: "A book about the personal perspective of his life and career on the basketball court and his exceptional, insightful style of playing the game—a fitting legacy from the late Los Angeles Laker superstar."
	},

	{
		name: "NBA 2K17",
		img: "2k17.jpg",
		buy: true,
		link: "https://store.steampowered.com/app/385760/NBA_2K17/",
		description: "NBA 2K17 cover shows Kobe Bryant as a tribute to his legacy."
	},

	{
		name: "Official NBA Jersey",
		buy: true,
		img: "jersey.jpg",
		link: "https://store.nba.com/kobe-bryant/a-27687993+z-9260475-3781380600",
		description: "Authentic jersey with high quality fabrics as provided by the official Nation Basketball Association (NBA)"
	},

	{
		name: "Adidas Elevation EQT",
		link: "https://www.kicksologists.com/2014/01/16/adidas-eqt-elevation-aka-crazy-97-kobe-bryants-first-nba-shoe/",
		description: "It seems like it was decades ago when a brash 17 year old rookie named Kobe Bryant came on board to lift the brand and future outlook of adidas basketball. In 1996, Kobe got his first kicks from adidas called the EQT Elevation. The athletic rising star in Bryant received an invite and made a statement in 1997 by winning the Slam Dunk Contest. With his pair of Purple Elevations, Bryant would eventually win over a new generation of basketball fans"
	},

	{
		name: "Adidas Kobe Bryant: KB8",
		link: "https://www.ebay.com/itm/NEW-Adidas-Crazy-8-PE-JEREMY-LIN-Kobe-Bryant-KB8-C77701-LAKERS-Colorway-sz-9-5/143567841715?hash=item216d4f69b3:g:90sAAOSwQYxegXUL",
		buy: true,
		description: "The KB8 was Kobe’s first true signature shoe. Although the EQT Elevations were donned in his rookie season, the KB 8 was designed with Kobe’s style of play in mind. Nearly 20 years in later, fans and athlete’s are still rocking Kobe’s first signature shoe now renamed, 'Crazy 8.'"
	},

	{
		name: "Adidas Kobe Bryant: KB8 II",
		link: "https://www.youtube.com/watch?v=-A13X_IMcfg",
		vid: true,
		description: "In Kobe’s third season, he became a household name. The KB8 II also features the popular Feet You Wear technology but due to legal issues, they would also be the last pair with the technology. Aside from Feet You Wear, the KB8 II also employed Adidas’ very own adiPRENE heel cushion support system, which was developed to counter the shock of constant impact while performing The third installment of Kobes was released during the NBA’s lockout season which was shortened to 50 games."
	},

	{
		name: "Adidas KB8 III",
		link: "https://www.kicksologists.com/2010/02/13/adidas-kb8-iii/",
		description: "The KB8 III continued to feature adidas’ adiPRENE cushioning and and was the last in the Feet You Wear campaign. As one of the lesser known models, these will be remembered as the shoes Kobe had on when he got into the scuffle with Chris Childs."
	},

	{
		name: "Adidas Kobe Bryant: The KOBE",
		link: "https://www.nicekicks.com/adidas-the-kobe-throwback-thursday/",
		description: "Many will remember these as the original space boots as they released in 2000. Its unique molded upper was designed to look like the Audi TT Roadster. Kobe would go on to average 28 points on the season and made it to the Finals against the Indiana Pacers. Jalen Rose intentionally stepping below Kobe’s feet on a jumper has to be the most infamous moment in these kicks. His ankle injury kept him out for a game but it wouldn’t be enough to keep him away from a championship ring. In these kicks, Bryant would eventually earn his first of five NBA championships. Fans seem to be either hit or miss on these. In the looks department, The KOBE has to be one of the most unique to ever see the floor. When they were retroed, adidas renamed the shoes the Crazy 1."
	},

	{
		name: "Adidas Kobe Bryant: KOBE TWO",
		link: "https://www.gq.com/story/kobe-bryant-sneakers-adidas-kobe-two-ugly",
		description: "The KOBE TWO was the second installment of the space shoes; they released in 2001.This time, the shoes weren’t as sleek or as stylish as the previous pair of Kobes. If you’re a Lakers fan, you may have already known Kobe would go on and continue winning championships but he wouldn’t do so in the KOBE TWO. He disliked the comfort of the shoe and opted to rock the original KOBE for the finals. He collected ring number two by winning in a second consecutive year."
	},

	{
		name: "Nike Zoom Air Huarache 2K4",
		link: "https://news.nike.com/news/nike-air-zoom-huarache-2k4",
		description: "Kobe’s stint with adidas ended after his unhappiness with the KOBE TWO. He knew he needed a shoe to fit his performance needs. He spent a year as a sneaker free-agent and wore kicks like player editions Jordans. Kobe signed with Nike but unfortunately his legal issues kept the Swoosh from giving him his own signature line. Kobe and the Huaraches go hand in hand. The 2K4 would mark the end of the Shaq/Kobe Lakers era as they were unsuccessful in their attempt to four-peat. It would also be the beginning of the Kobe Bryant era."
	},

	{
		name: "Nike Air Zoom Huarache 2k5",
		link: "https://www.nicekicks.com/nike-air-huarache-2k5-throwback-thursday/",
		description: "The Nike follow up after the success of their first deal with Kobe which is the Nike Zoom Air Huarache 2K4."
	},

	{
		name: "Nike Zoom Kobe I",
		link: "https://www.amazon.com/NIKE-Protro-Undefeated-Yellow-AQ2728/dp/B079YF4YFJ/ref=sr_1_13?dchild=1&keywords=nike+zoom+kobe+i&qid=1588342197&sr=8-13",
		buy: true,
		description: "After leaving Adidas, Kobe Bryant was in search of his first signature shoes going through Huarache 2k4-2k5 and then some Jordans, so once the 2005 season came around, Kobe was all ready to wear the Air Zoom Kobe 1 from Nike. You would think that winning his first scoring title where he scored an amazing 35.4 points a game, that would be enough, but nope, the Black Mamba marked the season with the second highest scoring output in NBA History by scorching the Toronto Raptors for 81 points. One more thing to add, Kobe also become the fourth player in NBA history to average more than 35 points a game."
	},

	{
		name: "Nike Zoom Kobe II",
		link: "https://www.kicksologists.com/2014/04/11/nike-air-zoom-kobe-2-shoe-history/",
		description: "This also marked Kobe’s first time getting involved with the design process, which took about 18 months to get the Kobe IIs out. In can be said that this is the first time Nike got to work with Kobe who, much like on the court, was very demanding, but was able to come up with a shoe that provided Kobe with the speed, strength, flexibility, support and traction that Kobe was looking for in his signature shoe."
	},

	{
		name: "Nike Zoom Kobe III",
		link: "https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=2&pub=5574933636&toolid=10001&campid=5337839255&customid=&mpre=https%3A%2F%2Fwww%2Eebay%2Ecom%2Fb%2FNike-Nike-Zoom-Kobe-III-Mens-Nike-Zoom%2F15709%2Fbn%5F120124582",
		buy: true,
		description: "With the building success of the Kobe 1 and Kobe 2, Nike decided to try a different path with the Nike Air Zoom Kobe 3 with a design silhouette that reminds many of the Nike Air Huarache 2k4 and 2k5, which Kobe wore prior to receiving his signature shoe line. Led by Eric Avar, the company line on the inspiration of the Kobe 3 is rooted in the Black Mamba moniker Kobe Bryant gave himself. With focus on performance above everything, Avar started with a one piece mesh upper that featured a waffle grid like design to maintain a lightweight but stable shoe. The Kobe 3 was built with comfort, breathability and clean lines in mind to pair with the Zoom Air that cushioned the heel and forefoot. A fun fact about the diamond pattern design on the upper and outsold is that it was inspired by Kobe’s daughter, Natalia Diamante Bryant."
	},

	{
		name: "Nike HyperDunk Kobe",
		link: "https://stockx.com/nike-hyperdunk-kobe-away",
		buy: true,
		description: "The Hyperdunk introduced Flywire into the basketball world. Featuring an incredibly light but supportive side panel, the shoe was the lightest high performance shoe created. Kobe was the posterboy for these as the Redeem Team captured gold in China. In case you don’t remember, Kobe jumped over an Aston Martin."
	},

	{
		name: "Nike Zoom Kobe IV",
		link: "https://solecollector.com/sd/00558/nike/nike-zoom-kobe-4-iv",
		description: "Kobe demanded for “the lowest, lightest weight basketball shoe” ever made and sparked another boom in Nike’s Innovation Kitchen."
	},

	{
		name: "Nike Zoom Kobe V",
		link: "https://www.ebay.com/itm/Nike-Kobe-2010-Zoom-V-5-All-Star-Game-West-Infrared-Size-12/124171427135?hash=item1ce9319d3f:g:FtUAAOSwiEVeqwrR",
		buy: true,
		description: "Like the Zoom Kobe IV, Nike has upped the ante with a bevy of exclusive colorways. Kobe would follow his championship performance with a repeat in the Zoom Kobe V against the Los Angeles Lakers’ arch nemesis, the Boston Celtics."
	},

	{
		name: "Nike Zoom Kobe VI",
		link: "https://sneakernews.com/tag/nike-zoom-kobe-vi/",
		description: "Once again, Nike’s Zoom Kobe 6 went with a low cut model. With a snakeskin look on the upper, there’s no denying Kobe’s alter ego. A Phylon midsole and Zoom air units in the forefoot and heel, the Kobe VI continued Kobe’s line of excellence. Nike introduced the sixth signature sneaker in Kobe’s burgeoning global brand. Mamba himself offered some insight as well saying, 'The Kobe VI is a very character driven shoe with the alter ego of the Black Mamba prominently featured. We continue to evolve the technology to make it a performance based shoe, but aesthetically you haven’t seen a shoe pop like this before. It brings to life what drives me.'"
	},

	{
		name: "Nike Zoom Kobe VII",
		link: "https://www.ebay.com/itm/Nike-Zoom-Kobe-VII-7-Supreme-Del-Sol-Black-Silver-Yellow-488244-001-Size-7-5/153844652820?hash=item23d1db1b14:g:LqIAAOSw8KxeVIJt",
		buy: true,
		description: "The Kobe 7 featured Nike Flywire and a full-length Cushlon cushioning. By going away from Zoom Air, these presented a new technology. The Kobe 7 allowed players to change insoles. There was the “Attack Fast” and the “Attack Strong”. Based on your game, the interchangeable insoles gave necessary support. Last time it was the Hyperdunk, this time the Kobe 7 accompanied Kobe to London for the 2012 Olympics, in which they captured gold."
	},

	{
		name: "Nike Zoom Kobe VIII",
		link: "https://sneakernews.com/tag/nike-zoom-kobe-viii/",
		description: "Going back to a Kobe V look, the Kobe 8 System introduced the lights signature shoe. An engineered mesh is partnered up with lunarlon cushioning to provide for a great fit. These were a step up from the Kobe 7. From an aesthetic stand point, these allowed sneaker heads to wear them on and off the basketball court."
	},

	{
		name: "Nike Zoom Kobe Venomenom IV",
		link: "https://www.youtube.com/watch?v=jBPUBrIVBWA",
		vid: true,
		description: "This Nike shoes is a tribute to the Black Mamba nickname of Kobe as a deadly and poisonous assassin in the court."
	},

	{
		name: "Nike Kobe 9 Elite",
		link: "https://www.amazon.com/Strategy-630847-303-Sequoia-Silver-Basketball/dp/B00OYPIIPQ/ref=sr_1_2?dchild=1&keywords=Nike+Kobe+9+Elite&qid=1588342597&sr=8-2",
		buy: true,
		description: "The Kobe 9s came in three different models. The Elites came in both high tops and low tops while the EM (engineered mesh) was specifically created in the lows. The Elites feature Nike’s FlyKnit material which also the first shoe to  introduce the light, strong, and supportive material to the basketball court."
	},

	{
		name: "Nike Kobe X",
		link: "https://stockx.com/nike/kobe/10",
		buy: true,
		description: "The Kobe 9 changed the Kobe line and the Kobe X followed. While they created another low model, the Kobe X brought an Elite high model which looked like the Kobe 9. Once again, Nike allowed wearers to find a model to fit their needs. The Kobe X came in a seamless textile upper, Elite Flyknit low, and an Elite Flyknit high model. The red stitches remained, this time only 4 on the left heel."
	},

	{
		name: "Nike Kobe 11",
		link: "https://news.nike.com/news/kobe-11",
		description: "The Nike Kobe 11 will forever be linked with one of the greatest final games by any athlete, period.  With the Lakers trailing most of his last game, Kobe did what only he could do — score 60 points to write his own Hollywood ending. The “Black Mamba” colorway was front and center all night with Kobe as the whole basketball world paid tribute to his all-time career.  The Kobe 11 features Elite Low and EM versions in the collection with an endless treasure trove of colorways."
	},

	{
		name: "Nike Kobe A.D. (After-Death- 1st Gen)",
		link: "https://solecollector.com/news/2016/11/nike-kobe-ad-grey-white",
		description: "Kobe may have retired but that hasn’t ceased his influence for the next generation of Mambas. His 12th shoe with Nike and the first since his retirement has been properly dubbed “After-Death” or the “AD.” Carrying the tradition of being lightweight and low-profile, the “Ruthless Precision” colorway (shown above), dons a cool grey base with an iridescent heel. Quick. Dynamic. Agile. The ADs celebrate players and athletes who exude the Mamba Mentality, the drive to constantly seek answers towards greatness."
	},

	{
		name: "Kobe AD NXT (2nd Gen)",
		link: "https://www.youtube.com/watch?v=30lMDLVfWXI",
		vid: true,
		description: "The succeeding iteration of Kobe’s post-retirement shoe, the AD NXT continues the tradition of being lightweight and low profile while pushing the limits of innovation. The AD NXT features a quick and intuitive laceless system, improved traction and base breathability. Showcasing one of Nike’s signature colorways, the Cool Greys, the AD NXT bears a simplistic beauty to it’s design, which can be used on and off the court. The Mamba’s legacy continues.."
	},

	{
		name: "Kobe AD NXT 360 (3RD Gen)",
		link: "https://runrepeat.com/nike-kobe-ad-nxt-360",
		description: "The AD NXT 360 reverts to the tradition lacing system, that was not featured in it’s predecessor. With the addition of Nike’s Lunaron technology to the shoe’s outstanding profile, have set users up with the best cushioning featured on any Kobe shoe, which in turn may have created the best basketball shoe since the Kobe 9’s."
	},
];

function generate_items()
{
	const main = $(".merch");

	let current_shoe = 1;
	for (let i = 0; i < merch_items.length; i++)
	{
		const current_item = merch_items[i];
		const str_name = current_item.name;
		const str_desc = current_item.description;
		const str_link = current_item.link;

		const base = "../assets/merchandise/";
		let src_img = ""

		if (current_item.img != null)
			src_img = base + current_item.img;
		else
		{
			src_img = base + "shoes" + current_shoe + ".png";
			current_shoe++;
		}

		const item = $("<div></div>")
			.addClass("merch-item")
			.appendTo(main);

		const pic = $("<div></div>")
			.addClass("merch-pic")
			.appendTo(item);
		const img = $("<img>")
			.attr("src", src_img)
			.appendTo(pic);

		const description = $("<div></div>")
			.addClass("merch-description")
			.appendTo(item);
		const name = $("<h1></h1>")
			.addClass("merch-name")
			.text(str_name)
			.appendTo(description);
		const hr = $("<hr>").appendTo(name);
		const p = $("<p></p>")
			.addClass("merch-desc")
			.text(str_desc)
			.appendTo(description);

		const bottom = $("<div></div>")
			.addClass("merch-bottom")
			.appendTo(item);
		const hr2 = $("<hr>").appendTo(bottom);

		if (current_item.buy)
		{
			const link = $("<a></a>")
				.addClass("merch-link")
				.attr("href", str_link)
				.attr("target", "_blank")
				.appendTo(bottom)
			const icon = $("<i></i>")
				.addClass("fa fa-shopping-cart")
				.text("  Buy")
				.appendTo(link);
		}
		else if (current_item.vid)
		{
			const link = $("<a></a>")
				.addClass("merch-link")
				.attr("href", str_link)
				.attr("target", "_blank")
				.appendTo(bottom)
			const icon = $("<i></i>")
				.addClass("fab fa-youtube")
				.text("  Watch")
				.appendTo(link);
		}
		else
		{
			const link = $("<a></a>")
				.addClass("merch-link")
				.attr("href", str_link)
				.attr("target", "_blank")
				.appendTo(bottom)
			const icon = $("<i></i>")
				.addClass("fa fa-info-circle")
				.text("  More Info")
				.appendTo(link);
		}
	}
}
