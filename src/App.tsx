import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
    const [counter, setCounter] = useState<number>(0)
    const increaseCounter = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    };
    let reset = () => setCounter(0);


    return (
        <div className="App">
            <Counter counter={counter}
                     increaseCounter={increaseCounter}
                     reset={reset}
            />
        </div>
    );
}

export default App;
