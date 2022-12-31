import {Button, Form, Heading} from "react-bulma-components";
import {useState} from "react";
import axios from "axios";

/**
 * Le composant pour créer un utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
export const ForumCreationForm = ({showErrorMessage, showSuccessMessage}) => {

    /**
     * Les données pour la création d'un compte utilisateur
     */
    const [newForumData, setNewForumData] = useState({
        title: "",
        texte: ""
    })

    /**
     * Fonction utilisée pour mettre à jour les champs, soit le type d'input est une checkbox où alors la valeur sera stockée dans l'attribut checked et non value
     * @param e L'événement
     */
    const updateField = (e) => {
        setNewForumData({
            ...newForumData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    }

    /**
     * Fonction pour créer un compte utilisateur
     * @param event L'événement du click du button
     */
    const signForumUp = async (event) => {

        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // Nous vérifions d'abord que tous les champs ont été remplis, sinon nous affichons un message
        for (const key in newForumData) {
            if (newForumData[key] === '') {
                return showErrorMessage(`Une ou plusieurs valeur de connexion n'a pas été remplie`, "Veuillez recommencer");
            }
        }


        // On essaye de créer un compte utilisateur
        try {
            const response = await axios.post('/api/forumup', {
                title: newForumData.title,
                texte: newForumData.texte
            });

            // Comme on est arrivé là, c'est que la création a fonctionné et on peut donc loe dire à l'utilisateur
            showSuccessMessage("Le forum a été créé avec succès.");
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la création du forum", e.response.data);
        }
    }

    /**
     * Fonction qui s'exécute si un utilisateur appuie sur la touche entrée (pour que ça soit plus rapide que de cliquer sur le bouter de connexion)
     * @param event L'événement
     */
    const handleKeyDown = (event) => {

        // La touche 13 est la touche "entrer"
        if (event.keyCode === 13 && event.shiftKey === false) {
            signForumUp(event);
        }
    }

    return (
        <form>

            <Heading className="is-4">Allez y !</Heading>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="title" className="is-medium" type="text"
                                placeholder="Titre" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newForumData.title} />
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="texte" className="is-medium" type="text"
                                placeholder="Texte" onKeyDown={handleKeyDown} onChange={updateField}
                                value={newForumData.texte} />
                </Form.Control>
            </Form.Field>



            <Button onClick={signForumUp} className="is-block is-primary is-fullwidth is-medium">Créer le Forum</Button>
        </form>
    )
}