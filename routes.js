$(document).ready(
function()
{
	const url = window.location.pathname;
	const f = url.substring(url.lastIndexOf("/") + 1);

	let root = "";
	let webpages = "";

	if (f == "index.html")
	{
		root = "./";
		webpages = "./webpages/";
	}
	else
	{
		root = "../";
		webpages = "./";
	}

	const use_hash = true;
	const hash = "#!";
	const router = new Navigo(root, use_hash, hash);

	router
		.on("index", function()
			{
				location.replace(root + "index.html");
			})
		.on("story", function()
			{
				location.replace(webpages + "story.html");
			})
		.on("training", function()
			{
				location.replace(webpages + "training.html");
			})
		.on("merchandise", function()
			{
				location.replace(webpages + "merchandise.html");
			})
		.on("quiz", function()
			{
				location.replace(webpages + "quiz.html");
			})
		.on("about", function()
			{
				location.replace(webpages + "about.html");
			})
		.on("fadeaway", function()
			{
				location.replace(webpages + "fadeaway.html");
			})
		.resolve();
})
