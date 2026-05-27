export interface Education {
	name: () => string;
	website: string;
	start: Date;
	end: null | Date;
	university: () => string;
}
