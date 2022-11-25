import { Btn } from "../../components/btn";

export const Banner = () => {
    return (
        <section className="banner">
            <h3>Boost your links today</h3>
            <Btn
                text="get started"
                className="btn"
                href="#input"
                aria-label="input"
            />
        </section>
    );
};
