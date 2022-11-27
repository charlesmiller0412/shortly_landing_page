import { useEffect, useState } from "react";
import { Btn } from "../../components/btn";
import { SavedLink } from "./components/savedLink";
import { v4 as uuidv4 } from "uuid";

export const Input = () => {
    const [updating, setUpdating] = useState(false);
    const [links, setLinks] = useState<any>([]);
    const [link, setLink] = useState<any>("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Please add a link");

    // * save to local storage
    function saveStorage() {
        localStorage.setItem("links", JSON.stringify(links));
    }

    // * get local storage on load
    function getLocal() {
        const storedData = localStorage.getItem("links");
        if (storedData !== null) {
            setLinks(JSON.parse(storedData));
        }
    }

    //  * fetch link from input with error handling
    const fetchLink = async () => {
        if (link !== "") {
            try {
                const response = await fetch(
                    "https://api.shrtco.de/v2/shorten?url=" + link
                );
                const json = await response.json();
                if (!json.ok) {
                    setErrorMsg(json.error);
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 10000);
                } else {
                    setLinks([
                        ...links,
                        {
                            newLink: "https://" + json.result.short_link,
                            oldLink: json.result.original_link,
                        },
                    ]);
                    setError(false);
                    setUpdating(true);
                    setLink("");
                    return;
                }
            } catch (err: any) {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 5000);
            }
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
        setUpdating(false);
    };

    //  * saves input on keydown
    function handleChange(e: any) {
        setLink(e.target.value);
    }

    // *  submits input on press of enter
    function handleKeyPress(e: any) {
        if (e.key === "Enter") {
            e.preventDefault();
            fetchLink();
        }
    }

    //  * delete entire array
    function clearAll() {
        setLinks([]);
        localStorage.setItem("links", JSON.stringify([]));
    }

    // * load local storage on load
    useEffect(() => {
        getLocal();
    }, []);

    // * allows list to update dependant on fetchLink being ran but wont overwrite array on load
    useEffect(() => {
        if (updating === true) {
            saveStorage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchLink]);

    function deleteThis(e: any) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].oldLink === e.target.id) {
                setLinks(links.splice(i, 1));
                saveStorage();
            }
        }
        getLocal();
        console.log(links);
    }

    return (
        <section className="input" id="input">
            <div className="block"></div>
            <div className="input__entry">
                <form>
                    <input
                        type="text"
                        placeholder="Shorten a link here..."
                        className={error ? "error" : ""}
                        value={link}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        onKeyDown={(e) => {
                            handleKeyPress(e);
                        }}
                    />
                    <span
                        id="errorMsg"
                        className={error ? "error__text show" : "error__text"}
                    >
                        {errorMsg}
                    </span>

                    <button
                        id="formSubmit"
                        className="btnInput"
                        onClick={(e) => {
                            e.preventDefault();
                            fetchLink();
                        }}
                    >
                        Shorten It!
                    </button>
                </form>
                <div className="input__links" id="linkList">
                    {links.map((link: any) => (
                        <SavedLink
                            key={uuidv4()}
                            oldLink={link.oldLink}
                            newLink={link.newLink}
                            deleteThis={deleteThis}
                            id={link.oldLink}
                        />
                    ))}
                    {links.length > 0 ? (
                        <button className="btn" onClick={clearAll}>
                            clar all links
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};
