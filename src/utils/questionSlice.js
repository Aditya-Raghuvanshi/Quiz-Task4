import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name:"question",
    initialState:{
        qArr:[
            {
                question:"Which animal is known as the 'Ship of the Desert ?",
                option1:"Camel",
                option2:"Dog",
                option3:"Donkey",
                option4:"Frog",
                correctAns:"1",
            },
            {
                question:"How many days are there in a week?",
                option1:"2",
                option2:"5",
                option3:"7",
                option4:"6",
                correctAns:"3",
            },
            {
                question:"How many hours are there in a day?",
                option1:"35",
                option2:"25",
                option3:"22",
                option4:"24",
                correctAns:"4",
            },
            {
                question:"How many letters are there in the English alphabet?",
                option1:"35",
                option2:"26",
                option3:"22",
                option4:"24",
                correctAns:"2",
            },
            {
                question:"Rainbow consist of how many colours?",
                option1:"3",
                option2:"2",
                option3:"7",
                option4:"1",
                correctAns:"3",
            }
        ],
        noQ:0,
    },
    reducers:{
        pushQuestion:(state,action)=>{
            state.qArr.push(action.payload);
        },
        updateNoQuestion:(state,action)=>{
            state.noQ=action.payload;
        }
    }
})

export const {pushQuestion,updateNoQuestion} = questionSlice.actions

export default questionSlice.reducer