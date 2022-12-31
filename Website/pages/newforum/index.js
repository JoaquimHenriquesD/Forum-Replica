import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {ForumCreationForm} from "../../components/forums/forumCreationForm";
import ProtectedRoute from "../../components/protectedRoute";

/**
 * La page pour créer un nouvel utilisateur, c'est à dire le '/newuser'
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const NewForumPage = ({showErrorMessage, showSuccessMessage}) => {
    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <Heading className="is-3">Page pour creer un forum</Heading>
                <p className="description">n'hésitez pas a creer un forum de discussion !!</p>
                <hr/>
                <ForumCreationForm showErrorMessage={showErrorMessage} showSuccessMessage={showSuccessMessage}/>
            </Columns.Column>
        </PageWrapper>
    )
}

// On exporte la page
export default ProtectedRoute(NewForumPage,false);