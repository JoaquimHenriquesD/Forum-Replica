import {Panel} from "react-bulma-components";
import {ForumPreviewUser} from "./forumPreviewUser";


/**
 * Le composant pour montrer les utilisateurs sous forme de liste
 * @param forums Les utilisateurs
 */
export const ForumsUserList = ({forums}) => {
    return (
        <Panel>
            {/* On veut montrer la liste d'utilisateur avec un composant <UserPreview/> par utilisateur */}
            {forums.map((forum) => <ForumPreviewUser key={forum._id} forum={forum}/>)}
        </Panel>
    );
}