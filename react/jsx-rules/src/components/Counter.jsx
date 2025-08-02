import { useState } from "react";
// useState signal gibi 

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter + 1)
        console.log(counter + 1);
    }

    return (
        <>
            <h2>Counter : {counter}</h2>
            <button onClick={increase}>Counter bilgisini artir</button>
            {/* increase() yaparsan button olusturulurken render edilir ve cagirlir */}
        </>
    )
}