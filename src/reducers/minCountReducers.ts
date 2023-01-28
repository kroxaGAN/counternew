
// const initialState:number=0
import {isNumber} from "util";

export type initialStateType={
    minCount:number,
    maxCount:number,
    count:number,
    makeSettings:boolean,
    error:boolean
}
const initialState:initialStateType={
    minCount:0,
    maxCount:5,
    count:0,
    makeSettings:false,
    error:false
}

export const MinCountReducers=(state=initialState,action:setMinCountActionType):initialStateType=>{
    switch (action.type){
        case "SET-MIN-COUNT":{
            // return state=action.minCount
            return {...state,minCount:action.minCount }
        }
        default: return state
    }
}

type setMinCountActionType=ReturnType<typeof setMinCountAC>
export const setMinCountAC=(minCount:number)=>{
    return {
        type:"SET-MIN-COUNT", minCount
    }
}
