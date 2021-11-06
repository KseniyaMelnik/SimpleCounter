import React from "react";
import s from "./Board.module.css";

type boardPropsType = {
    counter: number
}
export const Board = (props: boardPropsType) => {
    return (
        <div className={"board"}>
            <span className={(props.counter == 5) ? s.red : s.default}>{props.counter}</span>
        </div>
    )
}