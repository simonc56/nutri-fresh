# Nutri Fresh 🥗🍹

Site de vente de repas en ligne réalisé avec React / SASS / Context / Firebase.

![image](https://raw.github.com/simonc56/nutri-fresh/main/public/images/screenshot.webp)

## Fonctionnalités

- Ajouter/supprimer des articles au panier
- Accès administrateur pour ajouter, modifier, supprimer des articles
- Sauvegarder les modifications de menu proposées (prix, photos, etc...)

## Installation

Cloner le repo :

```shell
git clone git@github.com:simonc56/nutri-fresh.git
```

Installer les dépendances :

```shell
pnpm install
```

Utiliser un compte [Firebase](https://firebase.google.com/) pour créer une base de données [Firestore](https://firebase.google.com/docs/firestore?hl=fr) et en obtenir les clés d'accès.

Copier le `.env.exemple` en `.env` et compléter les variables d'environnement fournies par votre projet Firestore :

```javascript
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```

Puis build :

```shell
pnpm build
```

Le site est prêt dans le répertoire `/dist`.

Vous pouvez le tester avec :

```shell
pnpm preview
```
