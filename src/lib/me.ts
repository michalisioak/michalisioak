import type { Education } from './types/education';
import { m } from './paraglide/messages';
import type { Seminar } from './types/seminars';
import { Translation } from './types/translation';

const eece: Education = {
	name: m.eece,
	website: 'https://www.ee.duth.gr/',
	start: new Date('2020'),
	end: new Date('2026'),
	university: m.duth
};

const debug: Seminar = {
	name: new Translation('D.E.B.U.G.'),
	date: new Date('2025-05'),
	location: new Translation('Bucharest, Romania', 'Βουκουρέστι, Ρουμανία'),
	organization: 'EESTEC',
	short_description: new Translation('Cybersecurity Workshop', 'Εργαστήριο Κυβερνοασφάλειας')
};

const rust: Seminar = {
	name: new Translation('Rust Advanced Workshop'),
	date: new Date('2022-05'),
	location: new Translation('Zurich, Switzerland', 'Ζυρίχη, Ελβετία'),
	organization: 'EESTEC'
};

const it_sprint: Seminar = {
	name: new Translation('IT Sprint'),
	date: new Date('2021-12'),
	location: new Translation('Porto, Portugal', 'Πόρτο, Πορτογαλία'),
	organization: 'EESTEC',
	short_description: new Translation('Web Development Workshop', 'Εργαστήριο Ανάπτυξης Ιστοσελίδων')
};

const first_aid: Seminar = {
	name: new Translation('First Aid Training', 'Εκπαίδευση Πρώτων Βοηθειών'),
	date: new Date('2019-03'),
	location: new Translation('Thessaloniki, Greece', 'Θεσσαλονίκη, Ελλάδα'),
	organization: 'Red Cross'
};

export const me = {
	key_skills: [
		'Rust',
		'Python',
		'JavaScript',
		'TypeScript',
		'C++',
		'C#',
		'Java',
		'HTML/CSS',
		'SQL',
		'Dart/Flutter'
	],
	languages: [m.english(), m.greek()],
	programming_languages: ['Rust', 'Dart', 'Python'],
	location: m.thessaloniki(),
	study: m.eece(),
	education: [eece],
	seminars: [debug, rust, it_sprint, first_aid],
	email: 'ioakimidismichalis@gmail.com'
};
