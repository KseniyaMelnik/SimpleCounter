
export type ActionsType = UpdateNewMinValue
    | UpdateNewMaxValue
    | SetSettings
    | IncreaseCounter
    | Reset


type UpdateNewMinValue = {
    type: "UPDATE-NEW-MIN-VALUE",
    minValue: number,
}

type UpdateNewMaxValue = {
    type: "UPDATE-NEW-MAX-VALUE",
    maxValue: number,
}
type SetSettings = {
    type: "SET-SETTINGS"
}
type IncreaseCounter = {
    type: "INCREASE-COUNTER",
}
type Reset = {
    type: "RESET",
}

export type CounterStateType = {
    minValue: number,
    maxValue: number,
    counter: number,
    message: string,
    buttonDisable: boolean;
}

const initialState = {
    maxValue: 0,
    minValue: 0,
    buttonDisable: true,
    message: "Incorrect value!",
    counter: 0,

}

export const counterReducer = (state= initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MIN-VALUE":
            if (action.minValue < 0 || action.minValue >= state.maxValue) {
                return {...state, message: 'Incorrect value!', buttonDisable : true, minValue: action.minValue}
            } else {
                return {...state, message: "enter values and press 'set'", buttonDisable : false, minValue: action.minValue}
            }
            //return {...state, minValue: action.minValue}
        case "UPDATE-NEW-MAX-VALUE":
            if (action.maxValue <= state.minValue) {
                return {...state, message: 'Incorrect value!', buttonDisable : true, maxValue: action.maxValue}
            } else {
                return {...state, message: "enter values and press 'set'", buttonDisable : false, maxValue: action.maxValue}
            }
           // return {...state, maxValue: action.maxValue}

        case "SET-SETTINGS":
            return {...state, message: '', counter: state.minValue, buttonDisable: true}

        case "INCREASE-COUNTER":
            if (state.counter < state.maxValue) {
                let newCounter = state.counter + 1
                return {...state, counter: newCounter}
            }
            return state
        case "RESET":
            return {...state, counter: state.minValue}

        default:
            return state
    }
}

export const UpdateNewMinValueAC = (minValue: number): UpdateNewMinValue => {
    return { type: 'UPDATE-NEW-MIN-VALUE', minValue} as const
}
export const UpdateNewMaxValueAC = (maxValue: number): UpdateNewMaxValue => {
    return { type: "UPDATE-NEW-MAX-VALUE", maxValue}
}
export const setSettingsAC = (): SetSettings => {
    return { type: "SET-SETTINGS"}
}
export const IncreaseCounterAC = (): IncreaseCounter => {
    return { type: "INCREASE-COUNTER" }
}
export const ResetAC = (): Reset => {
    return { type: "RESET" }
}
