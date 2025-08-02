// useState example
import { useState } from "react";
import { ImgThumbnail } from "./ImgThumbnail";

export default function MultipleImages() {
    const [imageCounter, setImageCounter] = useState(1)

    // function addImage(){
    //     setImageCounter(prev => prev + 1)
    // }

    // function substractImage(){
    //     setImageCounter(imageCounter - 1)
    // }

    function handleClick(event){
        console.log(event.target.id);

        if(event.target.id === "add"){
            setImageCounter(prev => prev + 1)
        }

        else if(event.target.id === "substract"){
            setImageCounter(imageCounter - 1)
        }
    }

    return (<>
        {
            [...Array(imageCounter)].map((item, index) =>
                <ImgThumbnail
                    key={index}
                    imgSrc={`https://picsum.photos/id/${100 + index}/200/300`}>
                </ImgThumbnail>)
        }
        <ImgThumbnail imgAlt=''></ImgThumbnail>
        <hr />

        <button id="add" onClick={handleClick}>Add</button>
        <button id="substract" onClick={handleClick}>Delete</button>
    </>)
}