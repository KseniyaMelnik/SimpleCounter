import {Board} from "./Board";
import React from "react";
import {Button} from "./Button";

export type counterPropsType = {
    counter:  number
    message?: string
    increaseCounter: () => void
    reset: () => void
    max: number
    min: number
    error: string
}

export const Counter = (props: counterPropsType) => {
    return (
        <div className={"counter"}>
            <Board error = {props.error} message={props.message} counter={props.counter} max={props.max}/>
            <div>
                <Button max={props.max} increaseCounter={props.increaseCounter} counter={props.counter} nameBtn={"INC"}/>
                <Button max={props.max} reset={props.reset} counter={props.counter} nameBtn={"RESET"}/>
            </div>
        </div>

    )
}