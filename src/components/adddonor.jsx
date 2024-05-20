import adStyle from '../modules/adddonor.module.css';

import { useSelector } from "react-redux";


function AddDonor(){


    const donors=useSelector((state)=>state.donorReducer.donors);
    console.log("donors list");
    console.log(donors);

    return (
        <>
            <div className={adStyle.maindiv}>
            <div className={adStyle.titlediv}>
                <p>Please fill donor details</p>
            </div>

            <form>
                <div className={adStyle.bbdiv}>
                <div className={adStyle.bgdiv}>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="name">Name</label> */}
                        <input className={adStyle.inputelement} type="text" name="name" placeholder="Name"/>
                    </div>
                    <br />

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="emailid">Email ID</label> */}
                        <input className={adStyle.inputelement} type="email" name="emailid" placeholder="Email"/>
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="contactNo">Contact Number</label> */}
                        <input className={adStyle.inputelement} type="tel" name="contactNo" placeholder="Contact"/>
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="bloodGroup">Blood Group</label> */}
                        <input className={adStyle.inputelement} type="text" name="bloodGroup" placeholder="Blood Group"/>
                    </div>
                    <br/>

                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="age">Age</label> */}
                        <input className={adStyle.inputelement} type="number" name="age" placeholder="Age"/>
                    </div>
                    <br/>


                    <div className={adStyle.smdiv}>
                        {/* <label htmlFor="address">Address</label> */}
                        <input className={adStyle.inputelement} type="text" name="address" placeholder="Address" />
                    </div>
                    <br />
                    

                    

                    <div className={adStyle.smdiv}>
                        <div className={adStyle.ismdiv}>
                            <label >Available for Blood Donation</label>
                        </div>
                        
                        <div className={adStyle.ismdiv}>
                            <div className={adStyle.ismdiv_i}>
                                <input type="checkbox" name="checkbox" value="true"/> Yes
                            </div>
                            <div className={adStyle.ismdiv_i}>
                                <input type="checkbox" name="checkbox" value="false"/> No
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className={adStyle.submitdiv}>
                        <button className={adStyle.submitbutton}>Submit</button>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </>
    )
}

export default AddDonor;