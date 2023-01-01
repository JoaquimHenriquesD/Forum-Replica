import {Panel} from "react-bulma-components";
import {ComPreview} from "./comPreview";

/**
 * Le composant pour montrer les utilisateurs sous forme de liste
 * @param Coms Les commentaires
 */
export const ComsList = ({Coms}) => {
    return (
        <Panel>
            {/* On veut montrer la liste des coms avec un composant <ComPreview/> */}
            {Coms.map((com) => <ComPreview key={com._id} com={com}/>)}
        </Panel>
    );
}