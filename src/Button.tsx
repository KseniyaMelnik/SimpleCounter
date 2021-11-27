import React from "react";

type buttonPropsType = {
    counter?: number
    increaseCounter?: () => void
    reset?: () => void
    max?: number
    onClick?: () => void
    nameBtn: string
    buttonDisable?: boolean
}

export const Button = (props: buttonPropsType) => {

    const onClick = props.nameBtn === "INC" ? props.increaseCounter : props.nameBtn === "RESET" ? props.reset : props.onClick;

    const disable = (props.nameBtn === "SET") && props.buttonDisable || (props.nameBtn === "INC") && (props.counter === props.max) || (props.nameBtn === "RESET") && (props.counter === 0)

    return (
        <button disabled={disable} onClick={onClick}>
            {props.nameBtn}
        </button>
    )
}