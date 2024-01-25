import react from "react";
import { useAppSelector } from "../app/hooks";


export const Test = ()=>{
    const count = useAppSelector(event=> event.counter)
    return (
        <div>
        <h1>My Count is {count}</h1>
        </div>
    )
}