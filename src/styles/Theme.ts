export const Colors = {
	dark: {
		text: "#eee",
		link: "lightblue",
		background: "#222",
		navBackground: "#333",
		navButtonBackground: "#444",
	},
	light: {
		text: "#333",
		link: "#30829c",
		background: "#eee",
		navBackground: "#ddd",
		navButtonBackground: "#bbb",
	},
};

export default window.matchMedia &&
window.matchMedia("prefers-color-scheme: light").matches
	? Colors.light
	: Colors.dark;
