import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../products/interfaces/Product";

interface ProductState{
  cart:Product[];
  count: number;
  total: number;
}

const initialState:ProductState = {
  cart:[],
  count:0,
  total:0
}

export const productSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart: (state, action)=>{
        const productExist = state.cart.some(product=>product.id===action.payload.id);
        if(!productExist){
          state.cart.push({...action.payload, qty:1})
        }else{
          const index = state.cart.findIndex(product=>product.id===action.payload.id)
          state.cart[index].qty+=1
        }
        state.total = state.total + action.payload.price;
        state.count +=1
      },
      removeFromCart: (state, action)=>{
      const productExist = state.cart.some(product=>product.id===action.payload.id);
      if(productExist){
        const index = state.cart.findIndex(product=>product.id===action.payload.id)
        if(state.cart[index].qty>1){
          state.cart[index].qty--
        }else{
          state.cart.splice(index, 1)
        }
      }
      state.total = state.total - action.payload.price;
      state.count -=1
    },
    removeAllCart: (state)=>{
      state.cart = []
      state.count = 0
      state.total = 0
    }
  }
})

export const {addToCart, removeFromCart, removeAllCart} = productSlice.actions
export default productSlice.reducer