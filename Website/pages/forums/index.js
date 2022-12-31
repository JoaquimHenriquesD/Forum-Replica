import {Columns, Heading} from "react-bulma-components";
import {PageWrapper} from "../../components/pageWrapper";
import {useEffect, useState} from "react";
import axios from "axios";
import {ForumsList} from "../../components/forums/forumsList";
import ProtectedRoute from "../../components/protectedRoute";

/**
 * La page pour visionner les Forums "/users"
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const ForumsPage = ({showErrorMessage}) => {

    /**
     * Variable pour savoir si la donnée a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    /**
     * Les utilisateurs
     */
    const [forums, setUsers] = useState([]);

    // On utilise un useEffet pour récupérer les utilisateurs
    useEffect(() => {
        (async () => {

            // On veut faire la requête une seule fois
            if (!loaded) {

                // On essaye de faire la requête pour récupérer les utilisateurs
                try {
                    const response = await axios.get(`/api/lesforums`);

                    // On met à jour les utilisateurs
                    setUsers(response.data);
                }

                    // Si on attrape une erreur alors on montre un message d'erreur
                catch (e) {
                    showErrorMessage("Il y a eu une erreur lors de la récupération des forums", e.response.data);
                }

                // On dit que la donnée est mise à jour
                setLoaded(true);
            }
        })()
    }, [loaded]);

    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <Columns>
                    <Columns.Column className="right">
                        <Heading className="is-3">Liste des Forums</Heading>
                        <Heading className="subtitle">Clicker dessus pour y accéder</Heading>
                        <hr/>
                        <ForumsList forums={forums}/>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
        </PageWrapper>
    );
}

export default ProtectedRoute(ForumsPage,true);