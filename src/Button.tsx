import React from "react";

type buttonPropsType = {
    counter: number
    increaseCounter?: () => void
    reset?: () => void
}

export const Button = (props: buttonPropsType) => {

    const changeCounter = props.increaseCounter ? props.increaseCounter : props.reset;

    const nameBtn = props.increaseCounter ? "INC" : "RESET"
    const disable = (nameBtn === "INC") && (props.counter === 5) || (nameBtn === "RESET") && (props.counter === 0)

    return (
        <button disabled={disable} onClick={changeCounter}>
            {nameBtn}
        </button>
    )
}