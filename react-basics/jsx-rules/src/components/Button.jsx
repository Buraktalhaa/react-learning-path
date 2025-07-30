// 1. Yontem
// export function ButtonComponent(props){
//     console.log(props);
    
//     return <button className={props.className} info={props.info}>Button Component</button>
// }


// 2. Yontem
export function ButtonComponent(props){    
    const {className, info} = props
    return <button className={props.className} info={props.info}>Button Component</button>
}