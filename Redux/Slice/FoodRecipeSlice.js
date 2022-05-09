import { createSlice } from '@reduxjs/toolkit'
const foodSLice = createSlice({
    name: 'food_slice',
    initialState: {
        foods: []
    },
    reducers: {
        addFood: (state, action) => {
            state.foods.push(action.payload);
        },
        resetFoods: (state, action) => {
            state.foods = []
        },
        updateFoods: (state, action) => {
            // console.log(action.payload._id)
            // state.foods.filter((item) => item.id !== action.payload.id)
            state.foods.splice(state.foods.findIndex((item) => item.id === action.payload.id), 1)
        }
    }
})
export const { addFood, resetFoods, updateFoods } = foodSLice.actions
export default foodSLice.reducer