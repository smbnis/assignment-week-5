# Application de Gestion du Lycée d'Excellence de Dakar

Il s'agit d'une application Angular simple conçue pour gérer les classes et les étudiants du Lycée d'Excellence de Dakar. L'application permet à l'utilisateur d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur les classes et les étudiants. Les données sont stockées localement dans des tableaux pour cette version prototype.

## Fonctionnalités

- Ajouter, modifier et supprimer des classes.
- Ajouter, modifier et supprimer des étudiants.
- Assigner des étudiants à des classes spécifiques.
- Voir la liste de toutes les classes et de tous les étudiants.

## Pour Commencer

Ces instructions vous permettront d'obtenir une copie du projet et de le faire fonctionner sur votre machine locale pour le développement et les tests.

### Prérequis

Vous devez avoir Node.js et Angular CLI installés sur votre machine.

- **Node.js** : Téléchargez et installez depuis [Node.js](https://nodejs.org/).
- **Angular CLI** : Installez-le globalement en utilisant npm :
  npm install -g @angular/cli


### Installation

1. Clonez le dépôt
   git clone https://github.com/votreutilisateur/lycee-dakar-management.git
   cd lycee-dakar-management


2. Installez les dépendances
   npm install


3. Lancez l'application
   ng serve


4. Ouvrez votre navigateur et naviguez vers `http://localhost:4200`

## Utilisation

### Gestion des Classes

1. **Ajouter une Classe** : Entrez le nom de la classe dans le champ de saisie et cliquez sur "Ajouter une Classe".
2. **Modifier une Classe** : Cliquez sur le bouton "Modifier" à côté d'une classe, entrez le nouveau nom, et confirmez.
3. **Supprimer une Classe** : Cliquez sur le bouton "Supprimer" à côté d'une classe.

### Gestion des Étudiants

1. **Ajouter un Étudiant** : Entrez le nom de l'étudiant et sélectionnez une classe dans le menu déroulant, puis cliquez sur "Ajouter un Étudiant".
2. **Modifier un Étudiant** : Cliquez sur le bouton "Modifier" à côté d'un étudiant, entrez le nouveau nom et la nouvelle classe, et confirmez.
3. **Supprimer un Étudiant** : Cliquez sur le bouton "Supprimer" à côté d'un étudiant.

## Structure du Code

Le projet est structuré de manière modulaire pour une meilleure organisation et maintenabilité :

### Dossiers

- `src/app/shared` : Contient les services, interfaces et composants partagés.
  - `services` : Contient les services utilisés dans l'application.
    - `class.service.ts` : Service pour gérer les données des classes.
    - `student.service.ts` : Service pour gérer les données des étudiants.
  - `interfaces` : Contient les modèles de données.
    - `class.ts` : Interface pour Class.
    - `student.ts` : Interface pour Student.
  - `components` : Contient les composants partagés (le cas échéant).

- `src/app/features` : Contient les composants spécifiques aux fonctionnalités.
  - `classe` : Contient les composants pour la gestion des classes.
    - `classe.component.ts` : Composant pour la gestion des classes.
    - `classe.component.html` : Template HTML du composant classes.
    - `classe.component.css` : Style CSS du composant classes.
  - `student` : Contient les composants pour la gestion des étudiants.
    - `student.component.ts` : Composant pour la gestion des étudiants.
    - `student.component.html` : Template HTML du composant étudiants.
    - `student.component.css` : Style CSS du composant étudiants.

### Fichiers

- `src/app/app.component.ts` : Composant principal avec navigation.
- `src/app/app.module.ts` : Module principal de l'application où les modules et composants sont déclarés.

## Style

L'application utilise Bootstrap pour le style. Les classes Bootstrap sont appliquées aux boutons et aux éléments de formulaire pour assurer un design cohérent et réactif.
