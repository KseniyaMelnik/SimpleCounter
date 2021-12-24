import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {AppRootStateType} from "./store/store";
import {
    CounterStateType,
    IncreaseCounterAC, ResetAC,
    setSettingsAC,
    UpdateNewMaxValueAC,
    UpdateNewMinValueAC
} from "./store/counter-reduser";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const counterObj = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch();
    const error = 'Incorrect value!'

    useEffect(()=>{
        let minAsString = localStorage.getItem("min")
        if (minAsString) {
            let newMin = JSON.parse(minAsString)
            dispatch(UpdateNewMinValueAC(newMin))
            dispatch(setSettingsAC())
        }
    },[])
    useEffect(()=>{
        let maxAsString = localStorage.getItem("max")
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString)
            dispatch(UpdateNewMaxValueAC(newMax))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("min", JSON.stringify(counterObj.minValue));
    },[counterObj.minValue])
    useEffect(()=>{
        localStorage.setItem("max", JSON.stringify(counterObj.maxValue));
    },[counterObj.maxValue])


    const updateNewMinValue = (minValue: number) => {
        dispatch(UpdateNewMinValueAC(minValue))
    }
    const updateNewMaxValue = (maxValue: number) => {
        dispatch(UpdateNewMaxValueAC(maxValue))
    }
    const setSettings = () => {
        dispatch(setSettingsAC())
    }
    const increaseCounter = () => {
        dispatch(IncreaseCounterAC())
    }
    const reset = () => dispatch(ResetAC());

    return (
        <div className="App">
            <Settings setSettings={setSettings}
                      minValue={counterObj.minValue}
                      maxValue={counterObj.maxValue}
                      updateNewMinValue={updateNewMinValue}
                      updateNewMaxValue={updateNewMaxValue}
                      buttonSetDisable={counterObj.buttonDisable}/>

            <Counter counter={counterObj.counter}
                     increaseCounter={increaseCounter}
                     reset={reset}
                     max={counterObj.maxValue}
                     message={counterObj.message}
                     min={counterObj.minValue}
                     error={error}
            />
        </div>
    );
}

export default App;
