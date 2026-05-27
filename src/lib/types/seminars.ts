import type { Translation } from './translation';

export interface Seminar {
	name: Translation;
	organization: string;
	date: Date;
	location: Translation;
	short_description?: Translation;
}
