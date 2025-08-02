import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { useState } from "react";

export default function CardV2() {
    const [like, setLike] = useState(0)

    function handleClick() {
        setLike(prev => prev + 1)
    }

    return (
        <div style={{
            border: "1px solid #bdc3c7", padding: "4px",
            borderRadius: "8px"
        }}>
            <CardHeader
                like={like}>
            </CardHeader>

            <button onClick={handleClick}>Like</button>
            <ul>
                <li>Lorem.</li>
                <li>Architecto!</li>
                <li>Fugit.</li>
            </ul>

            <CardFooter
                like={like} handleClick={handleClick}>
            </CardFooter>
        </div>)
}