import { StatisticsCard } from "./components/statisticsCard";

export const Statistics = () => {
    return (
        <section className="statistics">
            <div className="statistics__header">
                <h2>advanced statistics</h2>
                <p>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
            </div>
            <div className="statistics__list">
                <StatisticsCard
                    heading="brand recognition"
                    text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                    icon="/assets/icon-brand-recognition.svg"
                />
                <StatisticsCard
                    heading="detailed records"
                    text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                    icon="/assets/icon-detailed-records.svg"
                />
                <StatisticsCard
                    heading="fully customizable"
                    text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                    icon="/assets/icon-fully-customizable.svg"
                />
            </div>
        </section>
    );
};
