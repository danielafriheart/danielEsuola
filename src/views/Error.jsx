import Container from "../layout/container/Container";
import Header from "../layout/typography/Header";

export default function Example() {
    return (
        <Container title={"Page not found"}>
            <main className="grid min-h-full bg-white px-6 py-24 sm:py-32 lg:px-20">
                <div className="space-y-20 max-w-[50vw]">
                    <Header leadingText={"Oops. It looks like the page you're trying to reach"} greyText={" doesn't exist "} trailingText={'or has been moved.'} />
                </div>
            </main>
        </Container>
    )
}
