import { NetlifyForm } from "./types.defs";

export const isNullOrUndefined = (text: string | undefined | null): boolean => {
	return text === null || text === undefined;
};

export const toBinary = (text: string): string => {
	return text.split("").slice(0, 5).map(char => char.charCodeAt(0).toString(2) + " ").join("");
};

export const scrollToElementWithId = (elementId: string) => {
	const domAnchor = document.querySelector(`#${elementId}`);
	domAnchor?.scrollIntoView({
		behavior: "smooth",
		block: "start",
		inline: "nearest"
	});
};

export const encodeFormData = <T extends NetlifyForm>(data: T) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};