export interface Region {
	name: string;
	hostname: string;
	kindleUrl: string;
	notebookUrl: string;
}

export const Regions: Record<string, Region> = {
	GLOBAL: {
		name: "Global",
		hostname: "amazon.com",
		kindleUrl: "https://read.amazon.com",
		notebookUrl: "https://read.amazon.com/notebook",
	},
	UK: {
		name: "United Kingdom",
		hostname: "amazon.co.uk",
		kindleUrl: "https://read.amazon.co.uk",
		notebookUrl: "https://read.amazon.co.uk/notebook",
	},
};
