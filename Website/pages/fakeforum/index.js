import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {LoginForm} from "../../components/users/loginForm";


// La page de test, c'est-à-dire le '/test'
const TestPage = () => {
    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <div class="centre">
                <Heading className="is-3">Bienvenue sur un faux forum pour vous montrer ce que vous ratez</Heading>
                <p className="description">Comme vous n'avez pas acces au forum vous devez tres probablement rouler en Daewoo ... </p>
                <div class="centre"><div class="logodaewoo"></div></div>               
                <p className="description">Ici seul le drift est autorisé faites attention a vous ... </p>
                <div class="imgdrift"></div>
                </div>
            </Columns.Column>
        </PageWrapper>
    )
}

// On exporte la page
export default TestPage;