module.exports = {
	name: "aurora-nz", // optional, falls back to object key
	description: "Aurora NZ's website colelction",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
    freshChrome: "run"
	},
	urls: [
		"https://beautyquip.kiwi/",
    "http://www.auroratables.co.nz/",
    "http://www.auroranz.com/",
    "http://www.purefx.co.nz/",
    "https://www.getyourcrafton.co.nz"
	]
};