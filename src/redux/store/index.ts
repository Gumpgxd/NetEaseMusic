import { createStore,combineReducers } from "redux"
import { persistStore,persistReducer } from "redux-persist"
import sessionStorage from "redux-persist/es/storage/session"
import reducer from "../redurce"
import language from "../ language"

const storageSession = {
    key:'message',
    storage:sessionStorage
}

const rootReducer = combineReducers({
    reducer,
    language
})

const myPersistReducer = persistReducer(storageSession,rootReducer)
const store = createStore(myPersistReducer)


export const persistor = persistStore(store)
export default store
