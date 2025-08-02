export default function CardFooter(props) {
    return (<>
        <h2>
            Card Footer  ({props.like})
        </h2>
        <button onClick={props.handleClick}>Footer Like</button>
    </>)
}