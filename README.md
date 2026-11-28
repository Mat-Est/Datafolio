# Datafolio

Portfolio de **Matéo Esteban**, étudiant en Master SIAD à l'Université de Lille et data engineer en alternance chez Decathlon Electronics.

Site en ligne : https://mat-est.github.io/Datafolio/

## Contenu

- **Projets** : analyses et applications de données (R Shiny, Python, Power BI…), chacune avec sa fiche (contexte, méthodologie, résultats) et sa galerie d'images.
- **Parcours** : expérience professionnelle et formation.
- **Compétences** : outils et méthodes, regroupés par domaine.
- **Contact** : e-mail, LinkedIn et GitHub.

Le site est disponible en français, anglais, espagnol et allemand, en thème clair ou sombre.

## Technologies

React 19, Vite, Tailwind CSS et les icônes lucide-react. Le site est publié sur GitHub Pages.

## Organisation du code

| Fichier | Rôle |
| --- | --- |
| `src/data.js` | Tous les textes : traductions, parcours, compétences et projets |
| `src/App.jsx` | Les composants de la page |
| `src/index.css` | Couleurs (clair et sombre) et styles communs |
| `public/images/` | Portrait et images des projets (un dossier par projet) |

Pour modifier un texte ou ajouter un projet, il suffit en général d'éditer `src/data.js`.

## Lancer le site en local

```bash
npm install
npm run dev
```

## Mettre le site en ligne

```bash
npm run deploy
```

Cette commande construit le site et le publie sur la branche `gh-pages`. Dans les réglages du dépôt (**Settings → Pages**), la source doit être la branche `gh-pages`, dossier `/ (root)`.

## Licence

© 2026 Matéo Esteban — tous droits réservés. Le code peut être réutilisé à des fins non commerciales en créditant l'auteur (« Basé sur Datafolio de Matéo Esteban » et un lien vers ce dépôt). La photo, les textes, les images des projets et le design ne peuvent pas être réutilisés sans autorisation. Voir le fichier [LICENSE](LICENSE).
