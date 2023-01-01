const {getKeysNotProvided, isObjectIdStringValid} = require("../utils.js");
const {Com} = require("../models/index.js");

/**
 * Créer un utilisateur
 * @param comment à créer
 * @returns L'utilisateur crée
 */
async function createCom(comment) {

    // On regarde déjà si tous les champs de l'utilisateur sont présents
    const neededKeys = ["texte", "post"];
    const keysNotGiven = getKeysNotProvided(neededKeys, comment);

    // Si une ou plusieurs clefs ne sont pas données alors on renvoie un message d'erreur
    if (keysNotGiven.length !== 0) {
        throw new Error(`Les informations suivantes ne sont pas fournies ou vides: '${keysNotGiven.join(', ')}'`);
    }

    // On peut essayer de créer l'utilisateur
    try {

        // On crée un utilisateur avec le model de MongoDB et les informations de l'utilisateur
        const comToCreate = new Com(comment);
        
        // Puis on le sauvegarde en n'oubliant pas le mot clef await qui va nous permettre d'attendre que l'utilisateur
        // soit sauvegarder pour nous le renvoyer
        return await comToCreate.save();
        
    }

        // S'il y a une erreur lors du processus alors on renvoie un message d'erreur
    catch (e) {
        throw new Error("Une erreur s'est produite lors de la création du commentaire");
    }
}


/**
 * Lire un utilisateur par son id unique créé par MongoDB
 * @param comId L'identifiant de l'utilisateur à lire
 * @returns L'utilisateur trouvé
 */
async function readCom(comId) {

    // Vérifier si l'userId existe et est un id MongoBD valide
    if (forumId === undefined || !isObjectIdStringValid(comId)) {
        throw new Error("L'id du commentaire n'existe pas ou n'est pas un id MongoDB");
    }


    // On veut chercher un object dans la collection "User" par son identifiant MongoDB
    const comFound = await Com.findById(comId);

    // Si l'utilisateur trouvé est null c'est qu'il n'existe pas dans la base de données
    if (comFound === null) {
        throw new Error("Le forum n'existe pas");
    }

    // Sinon c'est qu'il existe et on le renvoie
    return comFound;
}


/**
 * Mettre à jour un utilisateur
 * @param comId L'id de l'utilisateur à mettre à jour
 * @param comToUpdate Les éléments de l'utilisateur à mettre à jour
 * @returns L'utilisateur modifié
 */
async function updateCom(comId, comToUpdate) {

    // Vérifier si l'userId existe et est un id MongoBD valide
    if (comId === undefined || !isObjectIdStringValid(forucomIdmId)) {
        throw new Error("L'id du commentaire n'existe pas ou n'est pas un id MongoDB");
    }

    // Petite chose TRES importante, dans le doute où dans l'object userToUpdate se trouve une clef _id qui a été modifié par une personne malveillante
    // il faut la supprimer de l'object, car _id est un id généré automatiquement et il ne doit pas changer !

    // Attention vu qu'on ne peut pas faire confiance à l'utilisateur il faut vérifier si les champs qu'on veut modifier on bien de la donnée et qu'elle soit non vide,
    // sinon on pourrait remplacer de la donnée importante...
    if (comToUpdate.texte === "") {
        delete comToUpdate.texte;
    }



    // On demande à MongoDB de modifier les couples clefs/valeurs présents dans l'object userToUpdate de l'object qui a pour identifiant unique MongoDB 'userId'
    // Noter l'option {new: true} qui veut dire que MongoDB nous renverra l'object modifié et non l'object avant sa modification (car on veut renvoyer le user modifié à l'utilisateur)
    const comUpdated = await User.findByIdAndUpdate(comId, comToUpdate, {new: true});

    // Si l'utilisateur trouvé est null c'est qu'il n'existe pas dans la base de données
    if (comUpdated === null) {
        throw new Error("Le commentaire n'existe pas et n'a donc pas pû être modifié");
    }

    // Sinon c'est qu'il existe et on le renvoie
    return comUpdated;
}


/**
 * Supprime un utilisateur
 * @param comId L'identifiant de l'utilisateur à supprimer
 * @returns L'utilisateur qui vient d'être supprimé
 */

async function deleteCom(comId) {

    // Vérifier si l'userId existe et est un id MongoBD valide
    if (comId === undefined || !isObjectIdStringValid(comId)) {
        throw new Error("L'id du commentaire n'existe pas ou n'est pas un id MongoDB")
    }

    // On demande à MongoDB de supprimer l'utilisateur qui a comme identifiant unique MongoDB 'userId'
    const ComDeleted = await Com.findByIdAndDelete(comId);

    // Si l'utilisateur trouvé est null c'est qu'il n'existe pas dans la base de données
    if (ComDeleted === null) {
        throw new Error("Le Commentaire n'existe pas et n'a donc pas pû être supprimé");
    }
    // Sinon c'est qu'il existe et on le renvoie
    return ComDeleted;
}


/**
 * Supprime un utilisateur
 * @param postId L'identifiant du post avec les com

 */

async function readAllCom(postId) {

    // On essaye de récupérer TOUS les utilisateurs (donc on ne met pas de conditions lors de la recherche, juste un object vide)
    try {
        return await Com.find({post: postId})
    }

        // S'il y a une erreur, on renvoie un message
    catch (e) {
        throw new Error("Il y a eu une erreur lors de la recuperation des commentaires");
    }
}

// On exporte les modules
module.exports = {
    createCom: createCom,
    readCom: readCom,
    updateCom: updateCom,
    deleteCom: deleteCom,
    readAllCom: readAllCom
}