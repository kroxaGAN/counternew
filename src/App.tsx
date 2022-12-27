import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Todo} from "./Todo";
import {Led} from "./led";
import './App.css'
import {ButtonSuper} from "./ButtonSuper";

function App() {
    let [minCount,setMinCount]=useState<number>(0)
    let [maxCount,setMaxCount]=useState<number>(5)
    let [count, setCount] = useState<any>(minCount)
    let [makeSettings,setMakeSettings]=useState<boolean>(false)
    let[error,setError]=useState('')

    const addCount = () => {
        if (count < maxCount) {
            setCount(++count)
        }
    }
    let changeMinCountHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if (+e.currentTarget.value>=0 && minCount<maxCount){
            setMinCount(+e.currentTarget.value)
        }else{
            setCount('not correct value')
        }
    }
    let changeMaxCountHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if (minCount<maxCount){
            setMaxCount(+e.currentTarget.value)
        }else{
            setCount('not correct value')
        }

    }
    let onClickSetHandler=()=>{
        setCount(minCount)
        setMakeSettings(false)
    }
    let onFocusHandler=()=>{
        setMakeSettings(true)
        setCount("input value and press set")
    }

    return (
        <div className={'main'}>
            <div className="App">
                <div className={'inputSet'}>
                    <div >
                        <span>max value</span>
                        <input value={maxCount} type={'number'} onChange={changeMaxCountHandler} onFocus={onFocusHandler}/>
                    </div>
                    <div >
                        <span>start value</span>
                        <input value={minCount} type={'number'} onChange={changeMinCountHandler} onFocus={onFocusHandler} />
                    </div>

                </div>
                <div className={'borderMain'}>
                    <div className={'controls'}>
                        <ButtonSuper title={'SET'} callback={onClickSetHandler} disabled={!makeSettings}/>
                    </div>
                </div>


            </div>
            <div className="App">
                <div className={'led'}>
                    <Led count={count}/>
                </div>

                <div className={'borderMain'} >
                    <div className={'controls'}>
                        <Todo addCount={addCount}
                              setCount={setCount}
                              count={count}
                              minCount={minCount}
                              maxCount={maxCount}
                              disabled={makeSettings}
                        />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
