import {Card, Heading} from "react-bulma-components";
import Link from "next/link";
import moment from "moment";

export const ComPreview = ({com}) => {
    return (
        
            <Card style={{cursor: "pointer", marginBottom: "0.5rem"}}>
                <Card.Content>
                    <Heading className="is-4"> {com.texte}  <p>Crée {moment(com.createdAt).from()}</p></Heading>
                </Card.Content>
            </Card>
    
    )
}