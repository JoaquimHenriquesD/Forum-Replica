const {getKeysNotProvided, isObjectIdStringValid} = require("../utils.js");
const {Forum} = require("../models/index.js");

/**
 * Créer un utilisateur
 * @param forum à créer
 * @returns L'utilisateur crée
 */
async function createForum(forum) {

    // On regarde déjà si tous les champs de l'utilisateur sont présents
    const neededKeys = ["title", "texte"];
    const keysNotGiven = getKeysNotProvided(neededKeys, forum);

    // Si une ou plusieurs clefs ne sont pas données alors on renvoie un message d'erreur
    if (keysNotGiven.length !== 0) {
        throw new Error(`Les informations suivantes ne sont pas fournies ou vides: '${keysNotGiven.join(', ')}'`);
    }

    // On peut essayer de créer l'utilisateur
    try {

        // On crée un utilisateur avec le model de MongoDB et les informations de l'utilisateur
        const forumToCreate = new Forum(forum);

        // Puis on le sauvegarde en n'oubliant pas le mot clef await qui va nous permettre d'attendre que l'utilisateur
        // soit sauvegarder pour nous le renvoyer
        return await forumToCreate.save();
    }

        // S'il y a une erreur lors du processus alors on renvoie un message d'erreur
    catch (e) {
        throw new Error("Une erreur s'est produite lors de la création de l'utilisateur");
    }
}


/**
 * Lire un utilisateur par son id unique créé par MongoDB
 * @param forumId L'identifiant de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function readForum(forumId) {

    // Vérifier si l'userId existe et est un id MongoBD valide
    if (forumId === undefined || !isObjectIdStringValid(forumId)) {
        throw new Error("L'id du forum n'existe pas ou n'est pas un id MongoDB");
    }


    // On veut chercher un object dans la collection "User" par son identifiant MongoDB
    const forumFound = await Forum.findById(forumId);

    // Si l'utilisateur trouvé est null c'est qu'il n'existe pas dans la base de données
    if (forumFound === null) {
        throw new Error("Le forum n'existe pas");
    }

    // Sinon c'est qu'il existe et on le renvoie
    return forumFound;
}


/**
 * Mettre à jour un utilisateur
 * @param forumId L'id de l'utilisateur à mettre à jour
 * @param forumToUpdate Les éléments de l'utilisateur à mettre à jour
 * @returns L'utilisateur modifié
 */
async function updateForum(forumId, forumToUpdate) {

    // Vérifier si l'userId existe et est un id MongoBD valide
    if (forumId === undefined || !isObjectIdStringValid(forumId)) {
        throw new Error("L'id du forum n'existe pas ou n'est pas un id MongoDB");
    }

    // Petite chose TRES importante, dans le doute où dans l'object userToUpdate se trouve une clef _id qui a été modifié par une personne malveillante
    // il faut la supprimer de l'object, car _id est un id généré automatiquement et il ne doit pas changer !

    // Attention vu qu'on ne peut pas faire confiance à l'utilisateur il faut vérifier si les champs qu'on veut modifier on bien de la donnée et qu'elle soit non vide,
    // sinon on pourrait remplacer de la donnée importante...
    if (forumToUpdate.title === "") {
        delete forumToUpdate.title;
    }

    if (forumToUpdate.texte === "") {
        delete forumToUpdate.texte;
    }


    // On demande à MongoDB de modifier les couples clefs/valeurs présents dans l'object userToUpdate de l'object qui a pour identifiant unique MongoDB 'userId'
    // Noter l'option {new: true} qui veut dire que MongoDB nous renverra l'object modifié et non l'object avant sa modification (car on veut renvoyer le user modifié à l'utilisateur)
    const forumUpdated = await User.findByIdAndUpdate(forumId, forumToUpdate, {new: true});

    // Si l'utilisateur trouvé est null c'est qu'il n'existe pas dans la base de données
    if (forumUpdated === null) {
        throw new Error("Le forum n'existe pas et n'a donc pas pû être modifié");
    }

    // Sinon c'est qu'il existe et on le renvoie
    return forumUpdated;
}


/**
 * Supprime un utilisateur
 * @param forumId L'identifiant de l'utilisateur à supprimer
 * @returns L'utilisateur qui vient d'être supprimé
 */

async function deleteForum(forumId) {

    // Vérifier si l'userId existe et est un id MongoBD valide
    if (forumId === undefined || !isObjectIdStringValid(forumId)) {
        throw new Error("L'id du forum n'existe pas ou n'est pas un id MongoDB")
    }

    // On demande à MongoDB de supprimer l'utilisateur qui a comme identifiant unique MongoDB 'userId'
    const forumDeleted = await Forum.findByIdAndDelete(forumId);

    // Si l'utilisateur trouvé est null c'est qu'il n'existe pas dans la base de données
    if (forumDeleted === null) {
        throw new Error("Le forum n'existe pas et n'a donc pas pû être supprimé");
    }
    // Sinon c'est qu'il existe et on le renvoie
    return forumDeleted;
}


/**
 * Récupère TOUS les utilisateurs depuis la base de données
 */
async function readAllForum() {

    // On essaye de récupérer TOUS les utilisateurs (donc on ne met pas de conditions lors de la recherche, juste un object vide)
    try {
        return await Forum.find({})
    }

        // S'il y a une erreur, on renvoie un message
    catch (e) {
        throw new Error("Il y a eu une erreur lors de la recuperation des Forums");
    }
}

// On exporte les modules
module.exports = {
    createForum: createForum,
    readForum: readForum,
    updateForum: updateForum,
    deleteForum: deleteForum,
    readAllForum: readAllForum
}