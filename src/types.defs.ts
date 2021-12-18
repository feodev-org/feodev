export interface NetlifyForm {
	"form-name": string;

	[key: string]: string;
}

export interface ValueCardCredits {
	accountUrl: string;
	name: string;
	originName: string;
	originUrl: string;
}

export interface Value {
	id: string;
	credits: ValueCardCredits;
	image: string;
}

export interface Partner {
	id: string;
	name: string;
	link: string;
	image: string;
	description: string;
}