import React from "react";
import './App.css'

type propsType={
    count:number | string
    makeSettings:boolean
}

export const Led=(props: propsType)=>{

    return(
        props.makeSettings
            ?<span className={"textDisplayError"}>{props.count}</span>
            :<div className={"textDisplay"}>
                {props.count}
            </div>
    )
}
