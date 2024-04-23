import { useSelector } from "react-redux";

function AddDonor(){


    const donors=useSelector((state)=>state.donorReducer.donors);
    console.log("donors list");
    console.log(donors);

    return (
        <>
            <h1>Add Donor Details here</h1>
        </>
    )
}

export default AddDonor;