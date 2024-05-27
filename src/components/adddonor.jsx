import { useState } from 'react';
import adStyle from '../assets/modules/adddonor.module.css';
import { actions } from '../redux/reducers/donorreducer';
import { useDispatch } from "react-redux";


function AddDonor(){

    let [name, setName]= useState("");
    let [email, setEmail]= useState("");
    let [contact, setContact]= useState("");
    let [bloodgroup, setBloodgroup]= useState("");
    let [age, setAge]= useState("");
    let [address, setAddress]= useState("");
    let [available, setAvailable]= useState(true);

    const dispatch=useDispatch();
    // const donors=useSelector((state)=>state.donorReducer.donors);
    // console.log("donors list");
    // console.log(donors);

    function changeAvailability(){
        setAvailable(available=>!available);
    }

    function validateEmail(){
        if(!(email.length > 5) || !email.includes('@') || !email.includes('.com'))
            return false;
        else
            return true;
    }

    function validateContact(){
        if(contact.length !== 10 || isNaN(contact)){
            return false;
        }
        else 
            return true;
    }

    function adddonor(e){
        e.preventDefault();

        if(name.length===0 || email.length===0 || contact.length===0 || bloodgroup.length===0 
            || age.length===0 || address.length===0){
            return;
        }

        if(!validateEmail()){
            setEmail("Email is Incorrect");
            return;
        }

        if(!validateContact()){
            setContact("Add Correct Contact");
            return;
        }

        dispatch(actions.add({name, email, contact, bloodgroup, age, address, available}));

        // console.log(name, email, contact, bloodgroup, age, address, available);

        setName("");
        setEmail("");
        setContact("");
        setBloodgroup("");
        setAge("");
        setAddress("");
        setAvailable(true);
    }

    return (
        <>
            <div className={adStyle.maindiv}>
            <div className={adStyle.titlediv}>
                <p>Please Fill Donor Details</p>
            </div>

            <form>
                <div className={adStyle.bbdiv}>
                <div className={adStyle.bgdiv}>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="name">Name</label> */}
                        <input className={adStyle.inputelement} 
                                type="text" 
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                        />
                    </div>
                    <br />

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="emailid">Email ID</label> */}
                        <input className={adStyle.inputelement} 
                                type="email" 
                                name="emailid" 
                                placeholder="Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                        />
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="contactNo">Contact Number</label> */}
                        <input className={adStyle.inputelement} 
                                type="tel" 
                                name="contactNo" 
                                placeholder="Contact"
                                value={contact}
                                onChange={(e)=>setContact(e.target.value)}
                                required
                        />
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="bloodGroup">Blood Group</label> */}
                        <input className={adStyle.inputelement} 
                                type="text" 
                                name="bloodGroup" 
                                placeholder="Blood Group"
                                value={bloodgroup}
                                onChange={(e)=>setBloodgroup(e.target.value)}
                                required
                        />
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="age">Age</label> */}
                        <input className={adStyle.inputelement} 
                                type="number" 
                                name="age" 
                                placeholder="Age"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                                required
                        />
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="address">Address</label> */}
                        <input className={adStyle.inputelement} 
                                type="text" 
                                name="address" 
                                placeholder="City" 
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                required
                        />
                    </div>
                    <br />
                    

                    <div className={adStyle.smdiv}>
                        <div className={adStyle.ismdiv}>
                            <label >Available for Blood Donation</label>
                        </div>
                        
                        <div className={adStyle.ismdiv}>
                            <div className={adStyle.ismdiv_i}>
                                <input type="checkbox" 
                                        name="checkbox" 
                                        onChange={changeAvailability}
                                        checked={available?true:false} 
                                /> Yes
                            </div>
                            <div className={adStyle.ismdiv_i}>
                                <input type="checkbox" 
                                        name="checkbox" 
                                        onChange={changeAvailability}
                                        checked={!available?true:false}
                                /> No
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className={adStyle.submitdiv}>
                        <button onClick={adddonor} className={adStyle.submitbutton}>Submit</button>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </>
    )
}

export default AddDonor;