import { createContext, ReactNode, useContext, useState } from 'react';

import { IEntry, IStateContext } from '../utils/constants/interfaces';

export const Context = createContext({} as IStateContext);


const encodeQueryString = (params: Record<string, string>) => {
const queryString = Object.keys(params)
  .map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  )
  .join('&');

return queryString;
};


export const StateContext = ({ children }: {children: ReactNode}) => {

  const [titre, setTitre] = useState<string>('');
	const [heure, setHeure] = useState<string>('');
	const [kilometre, setKilometre] = useState<string>('');
	const [day, setDay] = useState<string>('');
  const [formEntry, setFormEntry] = useState<IEntry>({} as IEntry);
  const [list, setList] = useState<IEntry[]>([]);

  const fetchData = async () => {
  const BASE_URI = 'https://nil5e2e2.api.sanity.io/v2021-10-21/data/query/production?';
  const GROQ = `*[_type == "entry"]`;
  const params = encodeQueryString({ query: GROQ });

  try {
    const response = await fetch(`${BASE_URI}${params}`);
    const data = await response.json();
    const result: IEntry[] = data.result;
    setList(result);
  } catch (error) {
    console.error('Error fetching data from Sanity.io:', error);
  }
};

  const stateContextData: IStateContext = {
    titre: titre,
    heure: heure,
    kilometre: kilometre,
    day: day,
    setTitre: setTitre,
    setHeure: setHeure,
    setKilometre: setKilometre,
    setDay: setDay,
    formEntry: formEntry as IEntry,
    setFormEntry: setFormEntry,
    list: list,
    setList: setList,
    fetchData: fetchData,
  };

  return (
    <Context.Provider value={stateContextData}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);