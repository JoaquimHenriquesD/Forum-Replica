import {Columns, Heading, Section} from "react-bulma-components";
import {PageWrapper} from "../../components/pageWrapper";
import {CustomPuffLoader} from "../../components/customPuffLoader";
import {useEffect, useState} from "react";
import {GoBackUrlButton} from "../../components/goBackUrlButton";
import {useRouter} from "next/router";
import {Forum} from "../../components/forums/forum";
import axios from "axios";
import ProtectedRoute from "../../components/protectedRoute";


/**
 * La page pour visionner un forum
 * @param showErrorMessage Fonction pour montrer un message d'erreur
 * @param showSuccessMessage Fonction pour montrer un message de succès
 */
const ForumEditorPage = ({showErrorMessage, showSuccessMessage}) => {

    /**
     * Le router
     */
    const router = useRouter()

    /**
     * l'id de l'utilisateur
     */
    const forumId = router.query.forumId;

    /**
     * Si la donnée de l'utilisateur a été récupérée
     */
    const [loaded, setLoaded] = useState(false);

    /**
     * L'utilisateur
     */
    const [forum, setUser] = useState(null);

    // On utilise un useEffet pour récupérer l'utilisateur
    useEffect(() => {
        (async () => {

            // On veut faire la requête une seule fois
            if (!loaded) {

                // On essaye de faire la requête pour récupérer l'utilisateur
                try {
                    const response = await axios.get(`/api/forum/${forumId}`);

                    // On met à jour l'utilisateur
                    setUser(response.data);
                }

                    // Si on attrape une erreur alors on montre un message d'erreur et on met que l'utilisateur est non défini
                catch (e) {
                    showErrorMessage("Il y a eu une erreur lors de la récupération du forum", e.response.data);

                    setUser(undefined);
                }

                // On dit que la donnée est mise à jour
                setLoaded(true);
            }
        })()
    }, [loaded]);

    // Si la donnée n'a pas encore été récupérée on montre le loader
    if (!loaded) {
        return <CustomPuffLoader/>
    }

    // Si l'utilisateur n'est pas défini ça veut dire qu'il n'existe pas et donc on veut revenir à la page des utilisateurs
    if (forum === undefined) {
        router.replace("/forums");
        return null;
    }

    return (
        <PageWrapper>
            <Columns.Column className="is-10 is-offset-1 tp-notification">
                <Columns>
                    <Columns.Column className="right">
                        <GoBackUrlButton url={"/forums"}/>
                        <div className="has-text-centered">
                            <Heading className="is-3">Gestion du Forum</Heading>
                            <p className="description">Le forum est {forum.title}</p>
                            <hr/>
                        </div>
                        <Section>
                            <Forum forum={forum} setUser={setUser} showErrorMessage={showErrorMessage} showSuccessMessage={showSuccessMessage}/>
                        </Section>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
        </PageWrapper>
    );
}

export default ProtectedRoute(ForumEditorPage, true);