// import { combineReducers, createStore } from 'redux'
import {MinCountReducers} from "../reducers/minCountReducers";
import {combineReducers, legacy_createStore} from "redux";
import {MaxCountReducers} from "../reducers/maxCountReducers";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    minCount:MinCountReducers,
    maxCount:MaxCountReducers
    // tasks: tasksReducer,
    // todolists: todolistsReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
