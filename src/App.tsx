import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
    let [counter, setCounter] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [min, setMin] = useState<number>(0)
    const [message, setMessage] = useState<string>('')
    const [buttonDisable, setButtonDisable] = useState(true)

    useEffect(()=>{
        let minAsString = localStorage.getItem("min")
        if (minAsString) {
            let newMin = JSON.parse(minAsString)
            setCounter(newMin)
        }
    },[])

    useEffect(()=>{
        let maxAsString = localStorage.getItem("max")
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString)
            setMax(newMax)
        }
    },[])


    useEffect(()=>{
        localStorage.setItem("min", JSON.stringify(min));
    },[min])

    useEffect(()=>{
        localStorage.setItem("max", JSON.stringify(max));
    },[max])

    const error = 'Incorrect value!'
    const updateNewMinValue = (value: number) => {
        if (value < 0 || value >= max) {
            setMessage(error);
            setButtonDisable(true);
        } else {
            setMessage("enter values and press 'set'");
            setButtonDisable(false);
        }
        setMin(value);
    }
    const updateNewMaxValue = (value: number) => {
        if (value <= min) {
            setMessage(error)
            setButtonDisable(true);

        } else {
            setMessage("enter values and press 'set'")
            setButtonDisable(false);
        }
        setMax(value)
    }
    const setSettings = () => {
        setMessage('')
        setCounter(min);
        setButtonDisable(true);
        //localStorage.setItem("max", JSON.stringify(max));
    }

    const increaseCounter = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    };
    let reset = () => setCounter(min);


    return (
        <div className="App">
            <Settings setSettings={setSettings}
                      minValue={min}
                      maxValue={max}
                      updateNewMinValue={updateNewMinValue}
                      updateNewMaxValue={updateNewMaxValue}
                      buttonDisable={buttonDisable}/>

            <Counter counter={counter}
                     increaseCounter={increaseCounter}
                     reset={reset}
                     max={max}
                     message={message}
                     min={min}
                     error={error}
            />
        </div>
    );
}

export default App;
