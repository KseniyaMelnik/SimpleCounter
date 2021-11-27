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
                <Button max={props.max} min={props.min} increaseCounter={props.increaseCounter} counter={props.counter} nameBtn={"INC"} message={props.message}/>
                <Button max={props.max} min={props.min} reset={props.reset} counter={props.counter} nameBtn={"RESET"} message={props.message}/>
            </div>
        </div>

    )
}