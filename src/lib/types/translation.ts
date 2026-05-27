import { getLocale } from '$lib/paraglide/runtime';

export class Translation {
	constructor(
		public en: string,
		public gr?: string
	) {}
	get(): string {
		switch (getLocale()) {
			case 'en':
				return this.en;
			case 'gr':
				return this.gr ?? this.en;
		}
	}
}
