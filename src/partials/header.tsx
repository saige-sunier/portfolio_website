import './header.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link, animateScroll as scroll} from 'react-scroll';
import { Routes } from '../routes';
import { homedir } from 'node:os';

export const Header = withRouter((props) => {

    const currentPath = useLocation().pathname;
    // let dropVisible = true;

    const handleHeaderNav=(section: string):void =>{
        props.history.push(`${Routes.home}#${section}`)
        // props.history.push(`${Routes.home}`);
        // <Link to={section} offset={-100} smooth={true}></Link>;

    }

    const returnHome=() => {
        props.history.push(`${Routes.home}`)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // const toggleDropdown=() => {
    //     dropVisible = !dropVisible
    // }

    return(
        <div className="header-div" id="header">
            <h1 onClick={()=> returnHome()} className="header-title">Saige Sunier</h1>
            <img onClick={()=> returnHome()} src="../../images/saige-headshot.png" alt="SOSA" className="home-logo"/>
            <div className="header-nav-menu">
                {currentPath == Routes.home ?
                <>
                    <div className="dropdown">
                        <button className="dropbtn"><img src="../../images/menu-icon.png" className="menu-icon"></img></button>
                        <div className="dropdown-content">
                            <button className="header-nav-button"><Link to="about" offset={-100} smooth={true}>about</Link></button>
                            <button className="header-nav-button"> <Link to="projects" offset={-100} smooth={true}>projects</Link></button>
                            <button className="header-nav-button"><Link to="research" offset={-100} smooth={true}>research</Link></button>
                            <button className="header-nav-button"> <Link to="contact" offset={-100} smooth={true}>contact</Link></button>
                        </div>
                    </div>
                </>
                    :
                <>
                     <div className="dropdown">
                        <button className="dropbtn"><img src="../../images/menu-icon.png" className="menu-icon"></img></button>
                        <div className="dropdown-content">
                            <button className="header-nav-button" onClick={()=>handleHeaderNav('about')}>about</button>
                            <button className="header-nav-button" onClick={()=>handleHeaderNav('projects')}>projects</button>
                            <button className="header-nav-button" onClick={()=>handleHeaderNav('research')}>research</button>
                            <button className="header-nav-button" onClick={()=>handleHeaderNav('contact')}>contact</button>
                        </div>
                    </div>
                </>
                }
            
            </div>
        </div>
    )
})