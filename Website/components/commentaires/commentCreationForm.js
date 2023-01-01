import {Button, Form, Heading} from "react-bulma-components";
import {useState} from "react";
import axios from "axios";

/**
 * Le composant pour créer un utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
export const ComCreationForm = ({showErrorMessage, showSuccessMessage,postId}) => {

    /**
     * Les données pour la création d'un compte utilisateur
     */
    const [newComData, setNewComData] = useState({
        texte: "",
        post: postId.toString()
    })

    /**
     * Fonction utilisée pour mettre à jour les champs, soit le type d'input est une checkbox où alors la valeur sera stockée dans l'attribut checked et non value
     * @param e L'événement
     */
    const updateField = (e) => {
        setNewComData({
            ...newComData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
    }

    /**
     * Fonction pour créer un compte utilisateur
     * @param event L'événement du click du button
     */
    const signComUp = async (event) => {

        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // Nous vérifions d'abord que tous les champs ont été remplis, sinon nous affichons un message
        for (const key in newComData) {
            if (newComData[key] === '') {
                return showErrorMessage(`Une ou plusieurs valeur n'ont pas été remplie`, "Veuillez recommencer");
            }
        }


        // On essaye de créer un compte utilisateur
        try {
            const response = await axios.post('/api/comup', {
                texte: newComData.texte,
                post: newComData.post
            });

            // Comme on est arrivé là, c'est que la création a fonctionné et on peut donc loe dire à l'utilisateur
            showSuccessMessage("Le commentaire a été créé avec succès.");
            
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la création du commentaire", e.response.data);
        }
    }

    /**
     * Fonction qui s'exécute si un utilisateur appuie sur la touche entrée (pour que ça soit plus rapide que de cliquer sur le bouter de connexion)
     * @param event L'événement
     */
    const handleKeyDown = (event) => {

        // La touche 13 est la touche "entrer"
        if (event.keyCode === 13 && event.shiftKey === false) {
            signComUp(event);
        }
    }

    return (
        <form>

            <Heading className="is-4">Dite leurs !</Heading>

            <Form.Field>
                <Form.Control>
                    <Form.Input name="texte" className="is-medium" type="text"
                                placeholder="message" onKeyDown={handleKeyDown}
                                onChange={updateField} value={newComData.texte} />
                </Form.Control>
            </Form.Field>

            <Button onClick={signComUp} className="is-block is-primary is-fullwidth is-medium">Envoyer le commentaire</Button>
        </form>
    )
}