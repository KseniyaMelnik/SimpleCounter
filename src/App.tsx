import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
    let [counter, setCounter] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [min, setMin] = useState<number>(0)
    const [message, setMessage] = useState<string>('')

    const error = 'Incorrect value!'
    const updateNewMinValue = (value: number) => {
       value<0 || value>=max ? setMessage(error) : setMessage("enter values and press 'set'")
           setMin(value)
    }
    const updateNewMaxValue = (value: number) => {
        value<=min ? setMessage(error) : setMessage("enter values and press 'set'")
        setMax(value)
    }
    const setSettings = () => {
        setMessage('')
        setCounter(min);
    }

    const increaseCounter = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    };
    let reset = () => setCounter(min);


    return (
        <div className="App">
            <Settings setSettings={setSettings} minValue={min} maxValue={max} updateNewMinValue={updateNewMinValue} updateNewMaxValue={updateNewMaxValue}/>
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
