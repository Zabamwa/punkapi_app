import {createSlice} from "@reduxjs/toolkit";
import {Beer} from "../../interfaces/IListOfBeer";

interface State {
    favouriteList:Beer[],
    isLoading:boolean
}
const initialState:State = {
    favouriteList:[],
    isLoading:false
}
const favouriteListSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addToFavourite: {
            reducer:(state:State,action:any) => {
                console.log('add',action)
                    if(!state.favouriteList.some((x:Beer) => x.id === action.payload.id)) {
                        state.favouriteList.push(action.payload.data)
                    }
            },
            prepare: (id:number,data:Beer) => {
                return {
                    payload: {id,data}
                }
            }
        },
        removeFromFavourite: {
            reducer:(state:State,action:any) => {
                const index = state.favouriteList.findIndex((x:Beer)=>x.id === action.payload);
                state.favouriteList.splice(+index,1);
            },
            prepare: (id:any) => {
                return {
                    payload: id
                }
            }
        },
    }
})

export const favouriteReducer = favouriteListSlice.reducer;
export const { addToFavourite, removeFromFavourite} = favouriteListSlice.actions;