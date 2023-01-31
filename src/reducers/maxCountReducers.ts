
const initialState:number=0

export const MaxCountReducers=(state=initialState,action:setMaxCountActionType)=>{
    switch (action.type){
        case "SET-MAX-COUNT":{
            return state=action.maxCount
        }
        default: return state
    }
}

type setMaxCountActionType=ReturnType<typeof setMaxCountAC>
export const setMaxCountAC=(maxCount:number)=>{
    return {
        type:"SET-MAX-COUNT", maxCount
    }
}
