import {Board} from "./Board";
import React from "react";
import {Button} from "./Button";

export type counterPropsType = {
    counter: number
    increaseCounter: () => void
    reset: () => void
}

export const Counter = (props: counterPropsType) => {
    return (
        <div className={"counter"}>
            <Board counter={props.counter}/>
            <div>
                <Button increaseCounter={props.increaseCounter} counter={props.counter}/>
                <Button reset={props.reset} counter={props.counter}/>
            </div>
        </div>

    )
}