import {Columns, Container, Section} from "react-bulma-components";

/**
 * Le wrapper pour "wrapper" les pages et faire en sorte qu'elles aient la même forme pour chaque page
 * @param children Le contenue de la page
 */
export const PageWrapper = ({children}) => {
    return (
        <Section>
            <Container>
                <Columns className="is-multiline" class="pageall">
                    {children}
                </Columns>
            </Container>
        </Section>
    )
}