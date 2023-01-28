
const initialState:number=0

export const MinCountReducers=(state=initialState,action:setMinCountActionType)=>{
    switch (action.type){
        case "SET-MIN-COUNT":{
            return state=action.minCount
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
