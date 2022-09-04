module.exports = {
	name: "client-research", // optional, falls back to object key
	description: "Sites of existing and prospective clients",
	options: {
		frequency: 60 * 12,
		freshChrome: "run"
	},
	urls: [
		"https://www.kats.co.nz",
		"https://www.vess.co.nz",
		"https://www.terotek.co.nz",
		"https://taikata.co.nz",
		"https://www.beckenhambeauty.co.nz"
	]
};