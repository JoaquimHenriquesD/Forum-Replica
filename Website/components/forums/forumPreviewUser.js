import {Card, Heading} from "react-bulma-components";
import Link from "next/link";
import moment from "moment";

export const ForumPreviewUser = ({forum}) => {
    return (
        <Link href={`/forumsUser/${forum._id}`}>
            <Card style={{cursor: "pointer", marginBottom: "0.5rem"}}>
                <Card.Content>
                    <Heading className="is-4"><p> <span class="username">{forum.user}</span></p> <p><h1 class="titleforum"> {forum.title}</h1></p> <p class="texteforum"> {forum.texte}</p> <p class="date">Crée {moment(forum.createdAt).from()}</p></Heading>
                </Card.Content>
            </Card>
        </Link>
    )
}