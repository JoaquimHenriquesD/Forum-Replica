import {Button, Form} from "react-bulma-components";
import axios from "axios";
import {useState} from "react";
import {useRouter} from "next/router";

/**
 * Le composant pour visionner un utilisateur et le modifier si l'utilisateur en a les droits
 * @param forum Le forum
 * @param setUser La fonction pour mettre à jour l'utilisateur
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
export const Forum = ({forum, setUser, showSuccessMessage, showErrorMessage}) => {

    /**
     * Le router
     */
    const router = useRouter()

    /**
     * L'utilisateur modifiable
     */
    const [forumToUpdate, setUserToUpdate] = useState(forum);

    /**
     * Si une requête est en cours pour mettre les champs en disabled et loading
     */
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Fonction utilisée pour mettre à jour les champs
     * @param e L'événement
     */
    const updateField = (e) => {
        setUserToUpdate({
            ...forumToUpdate,
            [e.target.name]: e.target.value
        });
    }

    /**
     * Quand l'utilisateur veut supprimer un utilisateur
     * @param event L'événement
     */
    const handleForumDelete = async (event) => {
        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // On veut mettre les champs en mode disabled et loading
        setIsLoading(true);

        // On veut faire la suppression de l'utilisateur
        await deleteForum(forum);

        // Peu importe s'il y a une erreur ou un succès, on veut remettre les champs à la normale (plus en mode loading et disabled)
        setIsLoading(false);
    }

    /**
     * Quand l'utilisateur veut mettre à jour un utilisateur
     * @param event L'événement
     */
    const handleForumUpdate = async (event) => {
        // On fait en sorte que l'événement par défaut ne se déclanche pas
        event.preventDefault();

        // On veut mettre les champs en mode disabled et loading
        setIsLoading(true);

        // On veut faire la modification
        const updateForumResult = await updateForum(forumToUpdate);

        // Peu importe s'il y a une erreur ou un succès, on veut remettre les champs à la normale (plus en mode loading et disabled)
        setIsLoading(false);
    }

    /**
     * Supprime l'utilisateur
     * @param forumToDelete L'utilisateur à supprimer
     */
    const deleteForum = async (forumToDelete) => {

        // On essaye de faire la requête de suppression
        try {
            const response = await axios.delete(`/api/forum/${forumToDelete._id}`);

            // On montre un message de succès
            showSuccessMessage("La suppression du forum est un succès", `Le forum ${response.data.title} a été supprimé !`)

            // Si la suppression est un succès alors on renvoie l'utilisateur vers la page "/users" car cet utilisateur n'existe plus
            router.replace("/forums");
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la suppression du forum", e.response.data);
        }
    }

    /**
     * Met le forum à jour
     * @param forumToUpdate Le forum à mettre à jour
     */
    const updateForum = async (forumToUpdate) => {

        // On essaye de faire la requête de mise à jour
        try {
            const response = await axios.put(`/api/forum/${forumToUpdate._id}`, forumToUpdate);

            // On montre un message de succès
            showSuccessMessage("La mise à jour du forum est un succès", `Le forum ${response.data.title} a été modifié !`)

            // On veut mettre à jour l'utilisateur
            setUser(response.data);

            // On renvoie la donnée de la réponse pour permettre au composant de faire ce qu'il veut avec
            return response.data;
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
            showErrorMessage("Il y a eu une erreur lors de la mise à jour du forum", e.response.data);

            // On renvoie undefined
            return undefined;
        }
    }

    return (
        <div>
            <Form.Field>
                <Form.Control>
                    <Form.Label>Titre</Form.Label>
                    <Form.Input name="title" className="is-medium"
                                placeholder="Titre" onChange={updateField}
                                value={forumToUpdate.title} disabled={isLoading}/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>
                    <Form.Label>Texte</Form.Label>
                    <Form.Input name="texte" className="is-medium"
                                placeholder="Texte" onChange={updateField}
                                value={forumToUpdate.texte} disabled={isLoading}/>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Control>

                    <Button.Group align="right">
                        <Button onClick={handleForumDelete} disabled={isLoading} loading={isLoading} color="danger">Supprimer le forum</Button>
                        <Button onClick={handleForumUpdate} disabled={isLoading} loading={isLoading} color="success">Mettre à jour le forum</Button>
                    </Button.Group>
                </Form.Control>
            </Form.Field>
        </div>
    )
}