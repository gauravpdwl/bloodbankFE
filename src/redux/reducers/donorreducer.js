import { createSlice } from "@reduxjs/toolkit";

const initialState={
    donors:[{
        _id:1,
        name: "Gaurav",
        address: "Shirur",
        age: 25,
        bloodGroup: "O+",
        contactNo: "9975240235",
        emailid: "gauravpadwal45@gmail.com",
        isAvailable: true 
      },
      {
        _id:2,
        name: "Gaurav",
        address: "Shirur",
        age: 25,
        bloodGroup: "O+",
        contactNo: "9975240235",
        emailid: "gauravpadwal45@gmail.com",
        isAvailable: true 
      }]
}

const donorSlice=createSlice({
    name:'donor',
    initialState:initialState,
    reducers:{
        add:(state, action)=>{
            let countofdonors=state.donors.length;
            state.donors.push({
                _id:countofdonors+1,
                name:action.payload.name,
                address:action.payload.address,
                age:action.payload.age,
                bloodGroup:action.payload.bloodGroup,
                contactNo:action.payload.contactNo,
                emailid:action.payload.emailid,
                isAvailable:action.payload.isAvailable
            })
        }
    }
})

const donorReducer=donorSlice.reducer;
export default donorReducer;
export const actions=donorSlice.actions;