//nano id is used for generating unique ids
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos:[{id:"1",text:"Learn Redux Toolkit"}]
}
//slice - almost eak reducer ka bada version hota hai
//reducer - ek function hota hai jo state ko modify karta hai based on action
export const todoSlice = createSlice({
  name:"todo",
  initialState,

  //reducers me aati hai properties and functions

  reducers:{
    //hamesa do chize milti hai action and state
    //state : at a point of time state me kaya kaya hai woska access degi
    //action is an object that contains a type and payload
    //The action parameter represents the action object that is dispatched to trigger the reducer. Actions are plain JavaScript objects that typically have a type field to indicate the action type and may include other data relevant to the action.You use the action.type to determine what kind of action is being performed, and you can also access the payload or other properties of the action object to make decisions on how to update the state.
    addTodo:(state,action)=>{
      const newTodo = {
        id:nanoid(),
        text: action.payload}
      state.todos.push(newTodo)
    },
    removeTodo:(state,action)=>{
      state.todos=state.todos.filter((eachTodo)=>eachTodo.id !== action.payload)
    },
    updateTodo:(state,action)=>{
      const id=action.payload.id
      //Action ke andar jo id bheja gaya hai, usko extract kar liya.
      const existingTodo=state.todos.find((eachTodo)=>eachTodo.id===id)
      if(existingTodo){
        existingTodo.text=action.payload.text
      }
  }
}
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer


//context api me sirf declaration likte the while redux me define v karte hai

//Redux Toolkit internally Immer use karta hai jo mutation ko allow karta hai, but actually immutable updates banata hai background me.
//Immer ka kaam hai → tumko lagta hai tum mutation kar rahe ho, lekin wo andar hi andar immutable copy bana deta hai.


