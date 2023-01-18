import React from "react";
import {ButtonSuper} from "./ButtonSuper";

type propsType = {
    addCount: () => void
    setCount: (count: number) => void
    count: number
    minCount: number
    maxCount: number
    disabled: boolean
}

export const Todo = (props: propsType) => {
    const addClickHandler = () => {
        props.addCount()
        console.log(props.count)
    }
    const clickResetHandler = () => {
        props.setCount(props.minCount)
    }

    return (
        <div>
            <div>
                <ButtonSuper title={'INC'} callback={addClickHandler}
                             disabled={props.count > (props.maxCount - 1) || props.disabled}/>
                <ButtonSuper title={'RESET'} callback={clickResetHandler}
                             disabled={props.count === props.minCount || props.disabled}/>
            </div>

        </div>

    )
}