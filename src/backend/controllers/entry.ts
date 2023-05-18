import mongoose from 'mongoose';
import { Request, Response } from 'express';
import Entry from '../models/entryShema';



export const getAllEntries = async (req: Request, res: Response) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}


export const createEntry = async (req: Request, res: Response) => {
  const entry = req.body;
  const newEntry = new Entry(entry);
  try {
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
}