import { IEntry } from '../context/StateContext';

export const getAllEntries = async () => {}

export const createEntry = async (entry: IEntry) => {
  const data = await fetch('http://localhost:3000/entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entry)
  });
  return data.json();
}

