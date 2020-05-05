$(document).ready(
function()
{
	generate_random_bg();

	const years = $(".timeline .sidebar ul li");
	let previous_year;
	years.each(
		function(i, el)
		{
			const year = $(this);
			const txt_year = year.text();

			year.on("mouseenter",
				function()
				{
				});

			year.on("mouseleave",
				function()
				{
				});

			year.click(
				function()
				{
					if (previous_year != null && (previous_year != year))
						previous_year.removeClass("active");

					year.addClass("active");
					previous_year = year;

					setup_info(i, year);
				});
		});
})

const story_data = [
	{
		title: "The Birth of Kobe Bryant",
		content: "Kobe was born on August 23, 1978 in Philadelphia, Pennsylvania. The son of NBA player Joe 'Jellybean' Bryant.",
	},
	{
		title: "Moving to Italy",
		content: "His family moved to Italy since his father, Joe Bryant left the National Basketball Association and joined the Italian Professional Basketball League.",
	},
	{
		title: "Return to United States",
		content: "After working in Italy for about 8 years, the Bryant family moved back to Philadelphia. Bryant studied at the Lower Merion High School, Ardmore; where his enormous aptitude in basketball got him a place in the high school team.",
	},
	{
		title: "The Highschool King",
		content: "Bryant’s proficiency led his team to state championship. In the same year itself, he was drafted by Charles Hornets and within 15 days, he was traded to Los Angeles Lakers. Thus, Bryant commenced his career by creating history as the second youngest player to appear in an NBA game.",
	},
	{
		title: "The Rookie",
		content: "In his very first season, Bryant swiftly earned the status of a high flyer and won the hearts of many by winning the Slam Dunk Contest.",
	},
	{
		title: "The Youngest All-Star",
		content: "He became the youngest NBA All-Star starter. He was also elected as the runner up for the NBA Sixth Man of the Year. Although his statistics were impressive, the Lakers were swept off by the San Antonio Spurs in the Western Conference semi finals.",
	},
	{
		title: "The Change",
		content: "History repeated itself for the Los Angeles Lakers as they again lost to the San Antonio Spurs, this time in the Western Conference Finals. However, with the recruitment of Phil Jackson as the Head Coach of the team, Kobe’s destiny was in line for a positive change.",
	},
	{
		title: "Player of the Month",
		content: "The onset of a new decade marked the victory of the Los Angeles Lakers in the NBA Championship with Bryant declared as the NBA Player of the Month.",
	},
	{
		title: "The 2nd Championship and the Marriage",
		content: "He was announced as the Top Vote Getter for the NBA All-Star Game. The same year, The Los Angeles Lakers won the NBA Championship second time in a row. 2001 was good on the personal front as well, as Bryant exchanged wedding rings with Vanessa Laine.",
	},
	{
		title: "The Third Time is No Charm",
		content: "Bryant’s team saw a third consecutive win in the NBA Championship.",
	},
	{
		title: "The Controversy",
		content: "The year brought in a set back to Kobe’s public image as he was arrested on charges of sexual assault on a 19 year old resort employee in Colorado.",
	},
	{
		title: "The Loss",
		content: "The Los Angeles Lakers lost the NBA Championship to the Detroit Pistons. As a repercussion, Phil Jackson was not re-signed by the Lakers and Shaquille O’Neal traded to Miami Heat. As for Bryant, the charges of sexual assault were dropped since the victim refused to testify in the trial and he got back to the game by re-signing with the Lakers.",
	},
	{
		title: "The Unstoppable Scorer",
		content: "Kobe was declared as NBA’s second leading scorer with an average of 27.6. However, that could not prevent the Lakers from missing the playoffs. This reinstated Phil Jackson as the Head Coach of the team.",
	},
	{
		title: "Still the Scoring Champion",
		content: "Kobe’s scores touched 45 points in four consecutive games, thus winning him the NBA Scoring Title. But once again, his team lost in the first round of Playoffs to Phoenix Suns. In the same year, Bryant announced the change in his jersey number from 8 to 24 and then scored 81 points against the Toronto Raptors.",
	},
	{
		title: "Win with Defeat",
		content: "The Los Angeles Lakers again lost to Phoenix Suns in the first round of Playoffs. However, Kobe won the Second NBA Scoring Title but asked for a trade.",
	},
	{
		title: "Olympic MVP",
		content: "Kobe Bryant added massively to his resume in 2008, when BBC writes he won his first Olympic gold with the U.S. men's basketball team at the Beijing Summer Olympic Games. USA beat Spain in the finals, thanks to the 'Mamba Mentality' that Bryant brought to the team as captain."
	},
	{
		title: "Breaking Another Record",
		content: "In 2009, Bryant took his fourth NBA title and was named the MVP of the finals, while also speeding past Jerry West's record of 'points scored as a Laker' (25,192)."
	},
	{
		title: "The Fifth Trophy",
		content: "2010 brought a fifth NBA title and another Finals MVP plaudit, along with a three-year contract extension that was worth $84 million. Kobe would ultimately earn $680 million in salary and endorsements over his two decade career– the most ever for a team athlete during their playing career,"
	},
	{
		title: "Another Controversy Behind the Court",
		content: "Despite putting up respectable numbers on the court, averaging 25.3 points per game and tying his career high for games started, the year 2011 was a pretty bad one for Kobe Bryant, according to the OC Register. He was in hot water with the NBA for slinging an 'anti-gay slur' at a referee, and was eventually fined $100,000. Things were hardly better on the home front, either: Bryant's wife, Vanessa, decided to file for divorce."
	},
	{
		title: "Another Olympic Gold",
		content: "In 2012, Kobe Bryant rejoined Team USA for another quest of Olympic gold, this time in London. As Olympic.org tells us, the team was just as successful as it had been four years ago, and even faced a familiar opponent in the finals. This time, Spain went down 107-100, and Bryant scored 17 points."
	},
	{
		title: "The Start of the End",
		content: "This year, OC Register tells us that Kobe Bryant managed to reconcile with his wife, Vanessa. Unfortunately, the other big Kobe news in 2013 were a mixed bag. Bryant had to file a lawsuit against his mother, Pamela, to prevent her from 'auctioning off' all sorts of things from the early days of his career. He also ruptured his Achilles' tendon in a game — a potentially career-ending injury that required surgery and sidelined him for up to nine months. However, the Lakers were still happy to give the 35-year-old player a $48.5 million contract extension."
	},
	{
		title: "Surpassing the Legend",
		content: "On December 13, 2014, Kobe Bryant finally passed Michael Jordan and gained the third place on the NBA's all-time scoring list. The impending achievement had been the talk of the basketball town for quite some time, and caused publications like Time to openly wonder which of the two players is 'the greatest of all time."
	},
	{
		title: "Farewell",
		content: "In 2016 Kobe Bryant retired from the hardwood, scoring 60 points in his farewell game as if to show basketball fans just why they loved him. But he didn't intend to rest on his laurels: As CBS News reports, the same year he embarked on a new career as a 'storyteller,' which he started by launching Granity Studios, his production company. When asked how he wanted to be remembered in fifty years, Kobe's answer demonstrated why he became more than just a sports figure, saying he hoped to be known 'as a person that was able to create stories that inspired their children and families to bond together. And for the children to dream.'"
	},
	{
		title: "No. 8 and No. 24",
		content: "It was always a given that the Los Angeles Lakers would retire Kobe Bryant's number, but which one? As Business Insider tells us, he played the first half of his career with a No. 8 jersey. Kobe had always worn jersey numbers 24 and 33 during his youth, but when he joined the Lakers, neither was an option. George McCloud wore No. 24 and No. 33 had been retired in recognition of Kareem Abdul-Jabbar. So he went with number 8, before switching to No. 24 before the 2006-2007 season. In 2017, the Lakers decided to just retire them both, and Bryant became the only man in NBA history to 'have two numbers retired by the same team.'"
	},
	{
		title: "Award from a Different Court",
		content: "Kobe Bryant wasn't joking when he said he wanted his second career to be 'storytelling,' and he has the Oscar win to prove it. As the Los Angeles Times reports, Bryant won his Academy Award for Dear Basketball, an animated short based around a poem he wrote to announce his retirement. Animator Glen Keane and famed composer John Williams helped Bryant to turn the poem into an animation, and the 2018 Academy Awards rewarded (or, rather, awarded) the project. The animated short film also won a Sports Emmy and an Annie Award. For Kobe, storytelling was another arena to excel in, and ultimately a way to inspire others. 'I love the idea of creative content whether it's mythology or animation, written or film, that can inspire people and give them something tangible they can use in their own lives,' he stated in 2018."
	},
	{
		title: "New Passion and Career",
		content: "Sports Illustrated doesn't generally write about young adult fiction, but when the author is Kobe Bryant, exceptions are clearly made. In 2019, Bryant revealed his latest career move: He was now working on a young adult book series called The Wizenard Series. The first book, Training Camp, was written by Wesley King and created by Bryant, and it focuses on a ragtag basketball team called the West Bottom Badgers and their strange wizard trainer. Bryant would state that Phil Jackson served as an inspiration for the wizard trainer, as he would often burn incense, or make the Lakers practice Tai Chi."
	},
	{
		title: "The Tragic Death",
		content: "On January 26, 2020, Kobe Bryant and his daughter, Gigi, died in a helicopter crash in Calabasas, as TMZ tells us. All nine people onboard perished, and the world was left stunned. A man who began his career as an excellent athlete ended it as an icon and inspiration to millions the world over. On the court, his name became synonymous with success, to the point that people of all ages would yell 'Kobe!' when their shot was on target. Off the court, he became a symbol of discipline and determination, and strove to lead others to a higher level. He began a second career as a storyteller, but his life itself was an epic tale bordering on myth. Though that life was tragically cut short, Kobe Bryant's legacy will live on."
	},
]

function setup_info(i, year)
{
	const txt_year = year.text();
	const info = $(".timeline .info");
	const pic = info.find(".pic");
	const title = info.find(".info-title");
	const content = info.find(".info-content");

	const data = story_data[i];
	const txt_title = data.title;
	const txt_content = data.content;
	const current = (i + 1);

	info.fadeOut(1000,
		function()
		{
			pic.attr("src", `../assets/story/${current}.jpg`);
			title.text(`${txt_year}: ${txt_title}`);
			content.text(txt_content);
		})
		.fadeIn(1000);
}
