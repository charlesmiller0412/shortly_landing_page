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
                <Btn text="get started" href="#input" />
            </div>
            <div className="hero__right">
                <Image
                    src="/assets/illustration-working.svg"
                    alt="working illustration"
                    fill
                />
            </div>
        </section>
    );
};
