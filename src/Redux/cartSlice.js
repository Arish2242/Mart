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
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
              if (state[index].qty> 1) {
                state[index].qty -= 1;
              } else {
                state.splice(index, 1);
              }
            }
        },
        plus(state,action){
            const exist = state.find((ele)=> ele.id==action.payload )
            exist.qty+=1;
        },
        // minus(state,action){
        //     const exist = state.find((ele)=> ele.id==action.payload )
        //     exist.qty-=1;
        //     if(exist.qty==0){
        //         return state.filter((ele)=> ele.id !== action.payload)
        //     }
            
        // }
    }
 })

 export const{add,remove,plus,minus} =cartSlice.actions
 export default cartSlice.reducer