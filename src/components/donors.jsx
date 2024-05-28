import Donor from "./donor";
import donorsStyle from '../assets/modules/donors.module.css';

import { useSelector } from "react-redux";

export default function Donors(){

    const donors=useSelector(state=>state.donorReducer.donors);
    // console.log(donors);

    return (
        <>
        <div className={donorsStyle.top}>
            <div className={donorsStyle.topheadline}>
                <p>Available Donors</p>
            </div>
            <div className={donorsStyle.all}>
                {donors.map((donor, i)=><Donor key={i} donor={donor} />)}
            </div>
        </div>
        </>
    )
}