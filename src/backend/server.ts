import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import entriesRoute from './routes/entries';

const app = express();
const PORT = 3000;

dotenv.config();

// Middleware pour le corps des requêtes en JSON
app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDB avec Mongoose
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données', error);
  });

// Exemple de route
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue à la maison !');
});

// Routes
app.use('/entries', entriesRoute);


// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});
