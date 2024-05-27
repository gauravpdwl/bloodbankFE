import aboutStyle from '../assets/modules/about.module.css';

export default function About(){

    return (
        <>
        <div className={aboutStyle.top}>
            <p className={aboutStyle.para}>Redux - State Management Library</p>
            <p className={aboutStyle.para}>Central donor state with add action to add new donor.</p>
        </div>
        </>
    )
}