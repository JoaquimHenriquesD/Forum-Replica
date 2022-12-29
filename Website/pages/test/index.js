import {PageWrapper} from "../../components/pageWrapper";
import {Columns, Heading} from "react-bulma-components";
import {LoginForm} from "../../components/users/loginForm";


// La page de test, c'est-à-dire le '/test'
const TestPage = () => {
    return (
        <PageWrapper>
            <Columns.Column className="is-8 is-offset-2 tp-notification">
                <Heading className="is-3">Welcome to the mclaren fan boys</Heading>
                <p className="description">fuck thsi shit</p>
            </Columns.Column>

        </PageWrapper>
    )
}

// On exporte la page
export default TestPage;