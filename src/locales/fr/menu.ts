import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const menu: SimpleTranslationEntries = {
  "cancel": "Annuler",
  "continue": "Continuer",
  "dailyRun": "Défi du jour (Bêta)",
  "loadGame": "Charger la partie",
  "newGame": "Nouvelle partie",
  "settings": "Paramètres",
  "selectGameMode": "Sélectionnez un mode de jeu.",
  "logInOrCreateAccount": "Connectez-vous ou créez un compte pour commencer. Aucun e-mail requis !",
  "username": "Nom d’utilisateur",
  "password": "Mot de passe",
  "login": "Connexion",
  "register": "S’inscrire",
  "emptyUsername": "Le nom d’utilisateur est manquant",
  "invalidLoginUsername": "Le nom d’utilisateur n’est pas valide",
  "invalidRegisterUsername": "Le nom d’utilisateur ne doit contenir que\ndes lettres, chiffres ou traits bas",
  "invalidLoginPassword": "Le mot de passe n’est pas valide",
  "invalidRegisterPassword": "Le mot de passe doit contenir 6 caractères ou plus",
  "usernameAlreadyUsed": "Le nom d’utilisateur est déjà utilisé",
  "accountNonExistent": "Le nom d’utilisateur n’existe pas",
  "unmatchingPassword": "Le mot de passe n’est pas correct",
  "passwordNotMatchingConfirmPassword": "Les mots de passe ne correspondent pas",
  "confirmPassword": "Confirmer le MDP",
  "registrationAgeWarning": "Vous confirmez en vous inscrivant que vous avez 13 ans ou plus.",
  "backToLogin": "Retour",
  "failedToLoadSaveData": "Échec du chargement des données. Veuillez recharger\nla page. Si cela persiste, contactez l’administrateur.",
  "sessionSuccess": "Session chargée avec succès.",
  "failedToLoadSession": "Vos données de session n’ont pas pu être chargées.\nElles pourraient être corrompues.",
  "boyOrGirl": "Es-tu un garçon ou une fille ?",
  "boy": "Garçon",
  "girl": "Fille",
  "evolving": "Quoi ?\n{{pokemonName}} évolue !",
  "stoppedEvolving": "Hein ?\n{{pokemonName}} n’évolue plus !",
  "pauseEvolutionsQuestion": "Mettre en pause les évolutions pour {{pokemonName}} ?\nElles peuvent être réactivées depuis l’écran d’équipe.",
  "evolutionsPaused": "Les évolutions ont été mises en pause pour {{pokemonName}}.",
  "evolutionDone": "Félicitations !\n{{pokemonName}} a évolué en {{evolvedPokemonName}} !",
  "dailyRankings": "Classement du Jour",
  "weeklyRankings": "Classement de la Semaine",
  "noRankings": "Pas de Classement",
  "loading": "Chargement…",
  "playersOnline": "Joueurs Connectés",
  "empty":"Vide",
  "yes":"Oui",
  "no":"Non",
  "disclaimer": "DISCLAIMER",
  "disclaimerDescription": "This game is an unfinished product; it might have playability issues (including the potential loss of save data),\n change without notice, and may or may not be updated further or completed.",
  "overwriteTheData": "Overwrite the data in the selected slot?"
} as const;
