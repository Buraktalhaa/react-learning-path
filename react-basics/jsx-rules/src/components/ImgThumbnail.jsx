// Bu sekilde yazarak birden fazla yerde kullanabiliriz
// function buyuk harfle baslamali
export function ImgThumbnail(props) {
    const { imgSrc, imgAlt } = props
    return (
        <img
            src={imgSrc}
            alt={imgAlt}
            style={{
                padding: "4px", 
                border: "1px solid #bdc3c7",
                borderRadius: "8px",
                marginBottom: "5px"
            }} />)
}

export const IMAGES = [
    "https://picsum.photos/id/232/600/300",
    "https://picsum.photos/id/233/600/300",
    "https://picsum.photos/id/234/600/300",
    "https://picsum.photos/id/235/600/300",
    "https://picsum.photos/id/236/600/300",
    "https://picsum.photos/id/242/600/300",
]