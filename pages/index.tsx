import Head from "next/head";
import { Banner } from "../sections/banner/banner";
import { Footer } from "../sections/footer/footer";
import { Hero } from "../sections/hero/hero";
import { SavedLink } from "../sections/input/components/savedLink";
import { Input } from "../sections/input/input";
import { MobileNav } from "../sections/mobileNav/mobileNav";
import { Navbar } from "../sections/navbar/navbar";
import { Statistics } from "../sections/statistics/statistics";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Shortly - Shorter URLs</title>
                <meta
                    name="description"
                    content="Shortly's shorter URL generator. A frontendmentor.io challnge completed by Charles Miller."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar />
                <MobileNav />
            </header>
            <main>
                <Hero />
                <Input />
                <Statistics />
                <Banner />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
