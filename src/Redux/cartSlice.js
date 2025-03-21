import { createSlice } from "@reduxjs/toolkit";

 const cartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){ 
            const exist = state.find((ele)=> ele.id==action.payload.id )
            if(exist){
                exist.qty+=1;
            }
            else{
                state.push({...action.payload,qty:1})
            }
        },
        remove(state,action){
           return state.filter((ele)=>
            ele.id !==action.payload)
        }
    }
 })

 export const{add,remove} =cartSlice.actions
 export default cartSlice.reducer