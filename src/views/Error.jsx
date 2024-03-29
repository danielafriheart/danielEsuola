import Container from "../layout/container/Container";
import Section from "../layout/container/Section";
import Header from "../layout/typography/Header";
import Paragraph from "../layout/typography/Paragraph";

export default function Example() {
    return (
        <Container title={"Page not found"}>
            <Section className="grid lg:h-screen h-[90vh] px-6 py-24 sm:py-32 lg:px-20">
                <div className="space-y-5  my-auto">
                    <Paragraph trailingText={'404'}/>
                    <Header leadingText={"Oops. It looks like the page you're trying to reach  doesn't exist or has been moved."} />
                </div>
            </Section>
        </Container>
    )
}
