import React from "react";
import s from "./Board.module.css";

type boardPropsType = {
    counter: number
    max: number
    message?: string
    error: string
}
export const Board = (props: boardPropsType) => {
    return (
        <div className={"board"}>
            {props.message
            ? <span className={props.message===props.error ? s.redText: s.defaultText}>{props.message}</span>
            : <span className={(props.counter === props.max) ? s.red : s.default}>{props.message? props.message: props.counter}</span>}
        </div>
    )
}