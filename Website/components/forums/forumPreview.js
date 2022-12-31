import {Card, Heading} from "react-bulma-components";
import Link from "next/link";
import moment from "moment";

export const ForumPreview = ({forum}) => {
    return (
        <Link href={`/forums/${forum._id}`}>
            <Card style={{cursor: "pointer", marginBottom: "0.5rem"}}>
                <Card.Content>
                    <Heading className="is-4"> {forum.title}, {forum.texte} . <p>Crée {moment(forum.createdAt).from()}</p></Heading>
                </Card.Content>
            </Card>
        </Link>
    )
}