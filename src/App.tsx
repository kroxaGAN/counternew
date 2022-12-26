import React, {useState} from 'react';
import './App.css';
import {Todo} from "./Todo";
import {Led} from "./led";
import './App.css'

function App() {
    let minCount = 0
    let maxCount = 5
    let [count, setCount] = useState<any>(minCount)

    const addCount = () => {
        if (count < maxCount) {
            setCount(++count)
            console.log(count)
        } else {
            console.log('stop')
        }
    }

    return (
        <div className={'main'}>
            <div className="App">
                <div className={'inputSet'}>
                </div>
                <div className={'borderMain'}>
                    <div className={'controls'}>

                    </div>
                </div>


            </div>
            <div className="App">
                <div className={'led'}>
                    <Led count={count}/>
                </div>

                <div className={'borderMain'}>
                    <div className={'controls'}>
                        <Todo addCount={addCount}
                              setCount={setCount}
                              count={count}
                              minCount={minCount}
                              maxCount={maxCount}
                        />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
