import mongoose from 'mongoose';


// Création du schéma de données pour les entrées

const entrySchema = new mongoose.Schema({
  title: String,
  hour: String,
  date: String,
  km: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

// Création du modèle de données pour les entrées

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;