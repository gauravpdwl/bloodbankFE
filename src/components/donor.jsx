
import donorStyle from '../assets/modules/donor.module.css';

function Donor({donor}){
    
    return (
        <>
            <div className={donorStyle.donorcomponent}>
                <div className={donorStyle.partone}>
                    <div className={donorStyle.para}>{donor.bloodgroup}</div>
                </div>
                <div className={donorStyle.parttwo}>
                    <div className={donorStyle.parttwodiv}>
                        <p className={donorStyle.para}>{donor.name}</p>
                        <p className={donorStyle.para}>{donor.address}</p>
                        <p className={donorStyle.para}>{donor.contact}</p>
                        <p className={donor.available? donorStyle.availableyes:donorStyle.availableno}></p>
                        {/* <button>Delete</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donor;