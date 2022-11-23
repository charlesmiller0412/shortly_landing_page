export const Btn = (props: any) => {
    return (
        <a
            className={props.className}
            href={props.href}
            onClick={props.onClick}
            id={props.id}
        >
            {props.text}
        </a>
    );
};
