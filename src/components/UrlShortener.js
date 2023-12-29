import { useState } from "react";
import styles from './UrlShortener.module.css';

// const getLocalStorage = () => {
//     let links = localStorage.getItem("links")

//     if (links) {
//         return JSON.parse(localStorage.getItem("links"))
//     } else {
//         return []
//     }
// }

export default function UrlShortener() {
    const [text, setText] = useState("")
    const [links, setLinks] = useState("")
    const [errorMsg,setErrorMsg] = useState(false)
    const [buttonText, setButtonText] = useState("Copy")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(text)

        if (!text) {
            alert("Input is empty")
        } else {
            const shortenLink = async () => {
                //eslint-disable-next-line
                const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 0efa9702ac418d2ff7724b8728e4108c77afd151`
                    },
                    body: JSON.stringify({ long_url: text })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data.link)
                        setErrorMsg(false)
                        setLinks(data.link)
                        if(!data.link) setErrorMsg(true)
                    })
                    .catch((error) => {
                        console.error(error)
                    });

                
            
                setText("")
            }
            setButtonText("Copy")
            shortenLink();
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(links);
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
        setButtonText("Copied!")
    }

    // useEffect(() => {
    //     localStorage.setItem("links", JSON.stringify(links))
    // }, [links])

    return (
        <>
            <div className="">
                <div className="shortener-box container">
                    <form className="form shortener-bar d-flex justify-content-center align-items-center p-5" onSubmit={handleSubmit}>
                        <div className="">
                            <input
                                type="url"
                                placeholder={errorMsg?"Please enter correctly! (eg:https://www.google.com)":"Shorten a link here"}
                                className={errorMsg?"w-full py-2 px-5 border-danger text-danger":"w-full py-2 px-5 border-black"}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn shortener-btn"
                                onClick={handleSubmit}
                            >
                                Shorten It!
                            </button>
                        </div>
                    </form>
                </div>

                {links && <div className={styles.container}>
                    <article className={styles.link}>
                        <ul className={styles.boxes}>
                            <li className={styles.linkbox}>
                                <span>{links}</span>
                            </li>
                            <li>
                                <button
                                    onClick={handleCopy}
                                    className={styles.linkbtn}
                                >
                                    {buttonText}
                                </button>
                            </li>
                        </ul>
                    </article>
                </div>}
            </div>
        </>
    )
}
