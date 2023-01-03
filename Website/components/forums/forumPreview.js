import {Card, Heading,Button, Form} from "react-bulma-components";
import Link from "next/link";
import moment from "moment";
import axios from "axios";
import {useState} from "react";

export const ForumPreview = ({forum}) => {
/**
     * Si une requête est en cours pour mettre les champs en disabled et loading
     */
    const [isLoading, setIsLoading] = useState(false);
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

        window.location.reload(true);
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

            // Si la suppression est un succès alors on renvoie l'utilisateur vers la page "/users" car cet utilisateur n'existe plus
            router.replace("/forums");
        }

            // Si on attrape une erreur alors on montre un message d'erreur
        catch (e) {
        }
    }

    return (
        <Link href={`/forums/${forum._id}`}>
            <Card style={{cursor: "pointer", marginBottom: "0.5rem"}}>
                <Card.Content>
                <Heading className="is-4"><div class="liste"><div><p> <span class="username">{forum.user}</span></p> <p><h1 class="titleforum"> {forum.title}</h1></p> <p class="texteforum"> {forum.texte}</p> <p class="date">Crée {moment(forum.createdAt).from()}</p></div><div>
                <Form.Field>
                <Form.Control>
                        <Button onClick={handleForumDelete} disabled={isLoading} loading={isLoading} color="danger">Supprimer le forum</Button>
                </Form.Control></Form.Field>
                    </div></div></Heading>
                </Card.Content>
            </Card>
        </Link>
    )
}