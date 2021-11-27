import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type SettingsPropsType = {
    minValue: number,
    maxValue: number,
    updateNewMinValue(value:number) : void,
    updateNewMaxValue(value:number) : void,
    setSettings(): void,
    buttonSetDisable: boolean
}

export const Settings = (props: SettingsPropsType) => {

    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        props.updateNewMinValue(Number(value));
    }
    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        props.updateNewMaxValue(Number(value));
    }
    const OnClick = () => {
        props.setSettings()
    }
    return (
        <div className={"settings"}>
            <div>
                <div>Start Value<input type="number" value={props.minValue} onChange={onMinValueChange}/></div>
                <div>Max Value<input type="number" value={props.maxValue} onChange={onMaxValueChange}/></div>
            </div>
            <Button onClick={OnClick} nameBtn={"SET"} buttonSetDisable={props.buttonSetDisable}/>
        </div>
    )
}
