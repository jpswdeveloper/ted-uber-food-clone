import { configureStore } from '@reduxjs/toolkit'
import {

    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { combineReducers } from 'redux';
import foodReducer from './Slice/FoodRecipeSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
const rootReducer = combineReducers({
    food_slice: foodReducer
});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
            immutableCheck: false,
            serializableCheck: false,
        }),

})


