import { createContext, ReactNode, useContext, useState } from 'react';
import { set } from 'react-native-reanimated';


export interface IStateContext {
  titre: string;
	heure: string;
	kilometre: string;
	today: string;
  setTitre: (titre: string) => void;
  setHeure: (heure: string) => void;
  setKilometre: (kilometre: string) => void;
  setToday: (today: string) => void;
  formEntry: IEntry;
  setFormEntry: (formEntry: {}) => void;
  list: IEntry[];
  setList: (list: IEntry[]) => void;
}

export interface IEntry {
  titre: string;
  heure: string;
  kilometre: string;
  today: string;
}

export class ClassEntry implements IEntry {
  constructor(
    public today: string,
    public titre: string,
    public heure: string,
    public kilometre: string
  ){}
}

export const Context = createContext({} as IStateContext);

export const StateContext = ({ children }: {children: ReactNode}) => {

  const [titre, setTitre] = useState<string>('');
	const [heure, setHeure] = useState<string>('');
	const [kilometre, setKilometre] = useState<string>('');
	const [today, setToday] = useState<string>('');
  const [formEntry, setFormEntry] = useState({});
  const [list, setList] = useState<IEntry[]>([]);

  const stateContextData: IStateContext = {
    titre: titre,
    heure: heure,
    kilometre: kilometre,
    today: today,
    setTitre: setTitre,
    setHeure: setHeure,
    setKilometre: setKilometre,
    setToday: setToday,
    formEntry: formEntry as IEntry,
    setFormEntry: setFormEntry,
    list: list,
    setList: setList,
  };

  return (
    <Context.Provider value={stateContextData}>{children}</Context.Provider>
  );
};


export const useStateContext = () => useContext(Context);