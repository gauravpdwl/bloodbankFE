import myImage from '/blood-donation.png';
import homestyle from '../assets/modules/home.module.css';

function Home(){
    return (
        <>
        <div className={homestyle.topdiv}>
            {/* <h1>Home Page</h1> */}
            <div className={homestyle.imagecontainer}>
                <img src={myImage} className={homestyle.imagestyle} alt="My Image Description" />
            </div>
            <p className={homestyle.para}>{`"A single drop of your blood could be a drop of life for someone else."`}</p>
        </div>
        </>
    )
}

export default Home;