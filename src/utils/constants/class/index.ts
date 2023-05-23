import { IEntry } from '../interfaces';

export class ClassEntry implements IEntry {
	constructor(
		public day: string,
		public titre: string,
		public heure: string,
		public kilometre: string
	) {}
}
