import React from "react";
import './App.css'

type propsType={
    count:any
}

export const Led=(props: propsType)=>{

    return(
        <div className={"textDisplay"}>
            {props.count}
            {/*<textarea value={props.count} className={'textDisplay'}/>*/}
        </div>
    )
}