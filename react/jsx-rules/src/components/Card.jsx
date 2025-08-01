import { ImgThumbnail } from "./ImgThumbnail"

export function Card({title, imgSrc, imgAlt}) {
    const cardStyle = {
        padding: "10px",
        border: "1 px solid #bdc3c7",
        boxSizing: "border-box",
        marginBottom: "5px",
        borderRadius: "8px"
    }
    return (
        <div style={cardStyle}>
            <ImgThumbnail imgSrc={imgSrc} imgAlt={imgAlt}></ImgThumbnail>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Vel unde deserunt aliquam nam!</p>
            <p>Nemo asperiores vitae in dolorem.</p>
        </div>
    )
}



// export function ChildrenCard({title, imgSrc, imgAlt, ...rest}) {
export function ChildrenCard({title, imgSrc, imgAlt, children, ...rest}) {
    const cardStyle = {
        padding: "10px",
        border: "1 px solid #bdc3c7",
        boxSizing: "border-box",
        marginBottom: "5px",
        borderRadius: "8px"
    }
    return (
        <div style={cardStyle}>
            <ImgThumbnail imgSrc={imgSrc} imgAlt={imgAlt}></ImgThumbnail>
            <h2>{title}</h2>
            <h3>{rest.dataId}</h3>
            {/* {rest.children} */}
            {children}
        </div>
    )
}