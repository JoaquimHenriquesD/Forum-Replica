import {Panel} from "react-bulma-components";
import {ForumPreview} from "./forumPreview";

/**
 * Le composant pour montrer les utilisateurs sous forme de liste
 * @param forums Les utilisateurs
 */
export const ForumsList = ({forums}) => {
    return (
        <Panel>
            {/* On veut montrer la liste d'utilisateur avec un composant <UserPreview/> par utilisateur */}
            {forums.map((forum) => <ForumPreview key={forum._id} forum={forum}/>)}
        </Panel>
    );
}