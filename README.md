# 🛠 Backend - Le Bon Coin MERN

Ce dépôt contient le **backend** de l'application MERN "Le Bon Coin", un clone simplifié de la plateforme de petites annonces.

## 🚀 Technologies

- Node.js + Express.js
- MongoDB (via Mongoose)
- Authentification avec JWT + bcrypt
- API REST

## 📦 Fonctionnalités

- Inscription et connexion avec protection des mots de passe
- Génération de tokens JWT pour authentifier les utilisateurs
- CRUD complet pour les annonces
- Association automatique des annonces avec l’utilisateur connecté via le token
- Filtres par catégorie (bonus)

## ▶️ Lancement local

Le serveur tourne par défaut sur `http://localhost:5000`


# Installer les dépendances
npm install

# Créer un fichier .env avec :
# MONGO_URI=<votre URI MongoDB>
# JWT_SECRET=<votre clé secrète>

# Lancer le serveur
npm run dev
