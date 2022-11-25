import Image from "next/image";
import { Btn } from "../../components/btn";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__left">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
                <Btn text="get started" href="#input" className="btn" />
            </div>
            <div className="hero__right">
                <Image
                    src="/assets/illustration-working.svg"
                    alt="working illustration"
                    fill
                    sizes="(max-width: 611px) 50% 51.1rem, (min-width: 612px) 60% 75rem, (min-width: 912px) 50vh 60vw"
                    priority
                />
            </div>
        </section>
    );
};
