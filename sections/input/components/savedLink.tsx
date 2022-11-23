import { useEffect, useState } from "react";
import { Btn } from "../../../components/btn";

export const SavedLink = () => {
    const [copied, setCopied] = useState(false);
    const [currentTarget, setCurrentTarget] = useState("");

    function handleClick() {
        //   navigator.clipboard.writeText(copyText.value);
    }
    return (
        <div className="input__links">
            <div className="input__links--savedLink">
                <div className="input__links--savedLink--url">
                    https://www.dubsdub.com
                </div>
                <div className="input__links--savedLink--right">
                    <div className="input__links--savedLink--right-link">
                        https://rel.ink/k4lKyk
                    </div>
                    <Btn
                        text={copied == true ? "copied!" : "copy"}
                        className={
                            copied == true ? "btnInput clicked" : "btnInput"
                        }
                        // onClick={}
                        id="copyBtn1"
                    />
                </div>
            </div>
        </div>
    );
};
