export interface IStateContext {
  titre: string;
	heure: string;
	kilometre: string;
	day: string;
  setTitre: (titre: string) => void;
  setHeure: (heure: string) => void;
  setKilometre: (kilometre: string) => void;
  setDay: (day: string) => void;
  formEntry: IEntry;
  setFormEntry: (formEntry: IEntry) => void;
  list: IEntry[];
  setList: (list: IEntry[]) => void;
  fetchData: () => void;
}

export interface IEntry {
  titre: string;
  heure: string;
  kilometre: string;
  day: string;
}

export interface IListProps {
  data: IEntry[];
}