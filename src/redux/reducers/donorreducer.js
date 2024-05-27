import { createSlice } from "@reduxjs/toolkit";

const initialState={
    donors:[
        {
          _id: 1,
          name: "Gaurav",
          address: "Shirur",
          age: 25,
          bloodgroup: "O+",
          contact: "9977552200",
          email: "gauravpadwal@gmail.com",
          available: true 
        },
        {
          _id: 2,
          name: "Dhananjay",
          address: "Shivajinagar",
          age: 24,
          bloodgroup: "AB-",
          contact: "8575953515",
          email: "dhananjay@gmail.com",
          available: true 
        },
        {
          _id: 3,
          name: "Anjali",
          address: "Kothrud",
          age: 28,
          bloodgroup: "A+",
          contact: "9156473820",
          email: "anjali@example.com",
          available: true 
        },
        {
          _id: 4,
          name: "Rohit",
          address: "Viman Nagar",
          age: 30,
          bloodgroup: "B+",
          contact: "9988776655",
          email: "rohit@example.com",
          available: false 
        },
        {
          _id: 5,
          name: "Sneha",
          address: "Baner",
          age: 22,
          bloodgroup: "O-",
          contact: "9234567890",
          email: "sneha@example.com",
          available: true 
        },
        {
          _id: 6,
          name: "Vikas",
          address: "Aundh",
          age: 26,
          bloodgroup: "AB+",
          contact: "9123456789",
          email: "vikas@example.com",
          available: false 
        },
        {
          _id: 7,
          name: "Pooja",
          address: "Hinjewadi",
          age: 29,
          bloodgroup: "B-",
          contact: "9876543210",
          email: "pooja@example.com",
          available: true 
        },
        {
          _id: 8,
          name: "Raj",
          address: "Kalyani Nagar",
          age: 31,
          bloodgroup: "A-",
          contact: "9101234567",
          email: "raj@example.com",
          available: true 
        },
        {
          _id: 9,
          name: "Priya",
          address: "Hadapsar",
          age: 23,
          bloodgroup: "O+",
          contact: "9988772233",
          email: "priya@example.com",
          available: true 
        },
        {
          _id: 10,
          name: "Suresh",
          address: "Pimpri",
          age: 27,
          bloodgroup: "B+",
          contact: "9123454321",
          email: "suresh@example.com",
          available: false 
        },
        {
          _id: 11,
          name: "Neha",
          address: "Wakad",
          age: 24,
          bloodgroup: "A+",
          contact: "9876123450",
          email: "neha@example.com",
          available: true 
        },
        {
          _id: 12,
          name: "Arjun",
          address: "Balewadi",
          age: 28,
          bloodgroup: "AB-",
          contact: "9123450987",
          email: "arjun@example.com",
          available: true 
        },
        {
          _id: 13,
          name: "Kiran",
          address: "Kharadi",
          age: 26,
          bloodgroup: "O-",
          contact: "9876098765",
          email: "kiran@example.com",
          available: false 
        },
        {
          _id: 14,
          name: "Swati",
          address: "Karve Nagar",
          age: 25,
          bloodgroup: "A+",
          contact: "9123456788",
          email: "swati@example.com",
          available: true 
        },
        {
          _id: 15,
          name: "Amit",
          address: "Pashan",
          age: 29,
          bloodgroup: "B+",
          contact: "9988776654",
          email: "amit@example.com",
          available: true 
        },
        {
          _id: 16,
          name: "Mona",
          address: "Magarpatta",
          age: 27,
          bloodgroup: "O+",
          contact: "9123456782",
          email: "mona@example.com",
          available: false 
        },
        {
          _id: 17,
          name: "Kunal",
          address: "Camp",
          age: 31,
          bloodgroup: "AB+",
          contact: "9876543212",
          email: "kunal@example.com",
          available: true 
        },
        {
          _id: 18,
          name: "Rita",
          address: "Deccan",
          age: 24,
          bloodgroup: "A-",
          contact: "9123456781",
          email: "rita@example.com",
          available: true 
        },
        {
          _id: 19,
          name: "Sameer",
          address: "Bavdhan",
          age: 30,
          bloodgroup: "B-",
          contact: "9876123490",
          email: "sameer@example.com",
          available: false 
        },
        {
          _id: 20,
          name: "Pankaj",
          address: "Dhankawadi",
          age: 28,
          bloodgroup: "O+",
          contact: "9988776653",
          email: "pankaj@example.com",
          available: true 
        },
        {
          _id: 21,
          name: "Tina",
          address: "Parvati",
          age: 22,
          bloodgroup: "B+",
          contact: "9123456783",
          email: "tina@example.com",
          available: true 
        },
        {
          _id: 22,
          name: "Vivek",
          address: "Pune Station",
          age: 27,
          bloodgroup: "A+",
          contact: "9876543211",
          email: "vivek@example.com",
          available: true 
        }
      ]
}

const donorSlice=createSlice({
    name:'donor',
    initialState:initialState,
    reducers:{
        add:(state, action)=>{
            let countofdonors=state.donors.length;
            state.donors.push({...action.payload, _id:countofdonors+1});
        }
    }
})

const donorReducer=donorSlice.reducer;
export default donorReducer;
export const actions=donorSlice.actions;