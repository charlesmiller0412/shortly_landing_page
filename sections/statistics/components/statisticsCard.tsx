import Image from "next/image";

export const StatisticsCard = (props: any) => {
    return (
        <div className="statistics__card">
            <span>
                <Image
                    src={props.icon}
                    alt={props.heading}
                    width={50}
                    height={50}
                />
            </span>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    );
};
