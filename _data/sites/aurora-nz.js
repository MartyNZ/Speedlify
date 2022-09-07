module.exports = {
	name: "aurora-nz", // optional, falls back to object key
	description: "Aurora NZ's website collection",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
    freshChrome: "run"
	},
	urls: [
		"https://beautyquip.kiwi/",
    "https://www.auroratables.co.nz/",
    "https://www.auroranz.com/",
    "https://www.purefx.co.nz/",
    "https://www.getyourcrafton.co.nz"
	]
};