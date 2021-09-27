import {createSlice} from "@reduxjs/toolkit";
import {Beer} from "../../interfaces/IListOfBeer";



interface State {
    listOfBeer:Beer[],
    isLoading:boolean
}
const initialState:State = {
    listOfBeer:[],
    isLoading:false
}
const listOfBeerSlice = createSlice({
    name: 'listOfBeer',
    initialState,
    reducers: {
        getList: {
            reducer: () => {},
            prepare: (params?:any) => {
                return {
                    payload:{
                        params
                    }
                }
            }
        },
        setList:(state:State,action)=>{
            action.payload.forEach((item:any)=> {
                if(!state.listOfBeer.some((x:Beer) => x.id === item.id)) {
                    state.listOfBeer.push(item)
                }
            })
        },
        resetList:(state:State) => {
            state.listOfBeer = [];
        },
        errorFetchedTable: (state:State) => {
            state.isLoading = false;
        },
        successFetchedTable: (state:State) => {
            state.isLoading = false;
        },

        pendingFetchedTable: (state) => {
            state.isLoading = true;
        },
    }
})

export const beerListReducer = listOfBeerSlice.reducer;
export const {getList, setList, resetList, errorFetchedTable, successFetchedTable, pendingFetchedTable} = listOfBeerSlice.actions;