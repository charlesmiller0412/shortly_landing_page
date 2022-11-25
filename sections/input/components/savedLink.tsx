import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Btn } from "../../../components/btn";

export const SavedLink = (props: any) => {
    const [copied, setCopied] = useState(false);

    function handleClick() {
        navigator.clipboard.writeText(props.newLink);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }

    return (
        <div className="input__links--savedLink">
            <div className="input__links--savedLink--url">
                <span className="input__links--savedLink--url-text">
                    {props.oldLink}
                </span>
                <button
                    className="deleteThis"
                    onClick={props.deleteThis}
                    id={props.oldLink}
                >
                    Delete...
                </button>
            </div>
            <div className="input__links--savedLink--right">
                <div className="input__links--savedLink--right-link">
                    <a href={props.newLink} target="_blank" rel="noreferrer">
                        {props.newLink}
                    </a>
                </div>
                <Btn
                    text={copied == true ? "copied!" : "copy"}
                    className={copied == true ? "btnInput clicked" : "btnInput"}
                    onClick={handleClick}
                    id="copyBtn1"
                />
            </div>
        </div>
    );
};
