import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./Todo";
import {Led} from "./led";
import './App.css'
import {ButtonSuper} from "./ButtonSuper";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setMinCountAC} from "./reducers/minCountReducers";

function AppWithRedux() {
    let dispatch=useDispatch()
    let minCount=useSelector<AppRootStateType,number>(state=>state.minCount)
    // let [minCount, setMinCount] = useState<number>(0)
    let [maxCount, setMaxCount] = useState<number>(5)
    let [count, setCount] = useState<any>(minCount)
    let [makeSettings, setMakeSettings] = useState<boolean>(false)
    let [error, setError] = useState(false)

    useEffect(() => {
        let itemMin = localStorage.getItem('minCount')
        if (itemMin != null) {
            // setMinCount(JSON.parse(itemMin))
            dispatch(setMinCountAC(JSON.parse(itemMin)))
        } else {
            // setMinCount(0)
            dispatch(setMinCountAC(0))
        }
        let itemMax = localStorage.getItem('maxCount')
        if (itemMax != null) {
            setMaxCount(JSON.parse(itemMax))
        } else {
            setMaxCount(5)
        }
    }, [])

    const addCount = () => {
        if (count < maxCount) {
            setCount(++count)
        }
    }
    // let changeMinCount = (minNum: number) => {
    //     console.log(`inside ${minNum}`)
    //     if (minNum >= 0 && maxCount > minNum) {
    //         // setMinCount(minNum)
    //         dispatch(setMinCountAC(minNum))
    //     } else if (minNum === -1 || maxCount === minNum) {
    //         // setMinCount(minNum)
    //         dispatch(setMinCountAC(minNum))
    //         setError(true)
    //         setCount('not correct value')
    //     } else {
    //         setCount('not correct value')
    //         setError(true)
    //     }
    // }
    let changeMaxCount = (maxNum: number) => {
        console.log(`inside max ${maxNum}`)
        if (minCount < maxNum) {
            setMaxCount(maxNum)
        } else if (minCount === maxNum) {
            setMaxCount(maxNum)
            setError(true)
            setCount('not correct value')
        } else {
            setCount('not correct value')
            setError(true)
        }
    }
    let changeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCount("input value and press set")
        setError(false)
        let currentNumber = +e.currentTarget.value
        // changeMinCount(currentNumber)
        if (currentNumber >= 0 && maxCount > currentNumber) {
            // setMinCount(minNum)
            dispatch(setMinCountAC(currentNumber))
        } else if (currentNumber === -1 || maxCount === currentNumber) {
            // setMinCount(minNum)
            dispatch(setMinCountAC(currentNumber))
            setError(true)
            setCount('not correct value')
        } else {
            setCount('not correct value')
            setError(true)
        }
    }

    console.log(`min: ${minCount}`)
    console.log(`max: ${maxCount}`)

    let changeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCount("input value and press set")
        setError(false)
        changeMaxCount(+e.currentTarget.value)
    }
    let onClickSetHandler = () => {
        setCount(minCount)
        setMakeSettings(false)
        localStorage.setItem('minCount', JSON.stringify(minCount))
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
    }
    let onFocusHandler = () => {
        setMakeSettings(true)
        setCount("input value and press set")
    }

    return (
        <div className={'main'}>
            <div className="App">
                <div className={'inputSet'}>
                    <div>
                        <span>max value</span>
                        <input value={maxCount} type={'number'} onChange={changeMaxCountHandler}
                               onFocus={onFocusHandler}/>
                    </div>
                    <div>
                        <span>start value</span>
                        <input value={minCount} type={'number'} onChange={changeMinCountHandler}
                               onFocus={onFocusHandler}/>
                    </div>

                </div>
                <div className={'borderMain'}>
                    <div className={'controls'}>
                        <ButtonSuper title={'SET'} callback={onClickSetHandler} disabled={!makeSettings || error}/>
                    </div>
                </div>


            </div>
            <div className="App">
                <div className={'led'}>
                    <Led count={count} makeSettings={makeSettings} />
                </div>

                <div className={'borderMain'}>
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

export default AppWithRedux;
