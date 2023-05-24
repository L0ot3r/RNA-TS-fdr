import { createContext, ReactNode, useContext, useState } from 'react';

import { IEntry, IStateContext } from '../utils/constants/interfaces';

export const Context = createContext({} as IStateContext);


export const StateContext = ({ children }: { children: ReactNode }) => {
	const [titre, setTitre] = useState<string>('');
	const [heure, setHeure] = useState<string>('');
	const [kilometre, setKilometre] = useState<string>('');
	const [day, setDay] = useState<string>('');
	const [formEntry, setFormEntry] = useState<IEntry>({} as IEntry);
	const [list, setList] = useState<IEntry[]>([]);
	
	const encodeQueryString = (params: Record<string, string>) => {
		const queryString = Object.keys(params)
			.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
			.join('&');
		return queryString;
	};

	const fetchData = async () => {
		const BASE_URI = 'https://nil5e2e2.api.sanity.io/v2023-05-24/data/query/production?';
		const query = '*[_type == "entry"]';

		const result: IEntry[] = await fetch(`${BASE_URI}query=${query}`)
			.then((res) => res.json())
			.then((data) => {
				return data.result;
			});
		setList(result);
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
		encodeQueryString: encodeQueryString,
	};

	return (
		<Context.Provider value={stateContextData}>{children}</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
