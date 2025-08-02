import Counter from "./components/Counter";
import MultipleImages from "./components/MultipleImages";
import CardWithState from './components/CardWithState'

export default function AppWithState() {
    return (
        <>
            <h1>State konusunu burada isliyoruz... </h1>
            <Counter />
            <hr />
            <MultipleImages></MultipleImages>
            <hr />
            <CardWithState></CardWithState>
        </>
    )
}
