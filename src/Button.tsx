import React from "react";

type buttonPropsType = {
    counter?: number
    increaseCounter?: () => void
    reset?: () => void
    max?: number
    min?: number
    onClick?: () => void
    nameBtn: string
    buttonSetDisable?: boolean
    message?: string
}

export const Button = (props: buttonPropsType) => {

    const onClick = props.nameBtn === "INC" ? props.increaseCounter : props.nameBtn === "RESET" ? props.reset : props.onClick;
    const disable = props.buttonSetDisable
        || (props.nameBtn === "INC") && (props.counter === props.max)
        || (props.nameBtn === "RESET") && (props.counter === props.min)
        || !!props.message && (props.nameBtn === "INC")
        || !!props.message && (props.nameBtn === "RESET")

    return (
        <button disabled={disable} onClick={onClick}>
            {props.nameBtn}
        </button>
    )
}