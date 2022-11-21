export const Btn = (props: any) => {
    return (
        <a className="btn" href={props.href}>
            {props.text}
        </a>
    );
};
