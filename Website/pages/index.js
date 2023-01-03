import {PageWrapper} from "../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";

// La page de l'index, c'est à dire le '/'
const IndexPage = () => {
    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <div class="centre">
                <Heading className="is-3">Hey yo tu veux rejoindre le forum des fans de voiture ?</Heading></div>
                <div class="center"><p class="titleforum" className="description">Impossible</p></div>
                <hr/>
                <div class="center"><p>Il faut se faire creer un compte par quelqu'un qui possede deja un compte !</p>
                <br/>
                
                
                <div class="voiture"></div>
                
                <br/>
                <p>Aurevoir !</p></div>
            </Columns.Column>
        </PageWrapper>
    )
}

// On exporte la page
export default IndexPage;