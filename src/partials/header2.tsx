import './header2.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link, animateScroll as scroll} from 'react-scroll';
import styled from "styled-components";
import { Routes } from '../routes';
import { homedir } from 'node:os';

export const Header = withRouter((props) => {

    const currentPath = useLocation().pathname;
    // let dropVisible = true;

    const handleHeaderNav=(section: string):void =>{
        props.history.push(`${Routes.home}#${section}`)

    }

    const returnHome=() => {
        props.history.push(`${Routes.home}`)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // const toggleDropdown=() => {
    //     dropVisible = !dropVisible
    // }

    const StyledLink = styled(Link)`
        padding-right: 0rem;
        padding-left: 0rem;
        padding-bottom: 5rem;
        background: none;
        border: none;
        font-family: "Noteworthy";
        color: black;
        font-size: 25px !important;
        transition: 0.3s;
        border: none !important;
        outline: none !important;
        text-align:justify;
        `;


    return(
        <div className="header2-div" id="header">
            <div className="header2-topLeft">
                {/* <img onClick={()=> returnHome()} src="../../images/saige-headshot.png" alt="SOSA" className="home-logo"/> */}
                <h1 onClick={()=> returnHome()} className="header2-title">Saige Sunier</h1>
            </div>
           
            <div className="header2-nav-menu">
                {currentPath == Routes.home ?
                <>
                    <div className="dropdown2">
                        <button className="dropbtn2"><img src="../../images/menu-icon.png" className="menu-icon"></img></button>
                        <div className="dropdown-content2">
                            <button className="header2-nav-button-home"> <StyledLink to="projects" offset={-100} smooth={true}>projects</StyledLink></button>
                            <button className="header2-nav-button-home"><StyledLink to="research" offset={-100} smooth={true}>research</StyledLink></button>
                            <button className="header2-nav-button-home"><StyledLink to="about" smooth={true}>about/contact</StyledLink></button>
                            {/* <button className="header2-nav-button-home"> <StyledLink to="contact" offset={-100} smooth={true}>contact</StyledLink></button> */}
                        </div>
                    </div>
                </>
                    :
                <>
                     <div className="dropdown2">
                        <button className="dropbtn2"><img src="../../images/menu-icon.png" className="menu-icon"></img></button>
                        <div className="dropdown-content2">
                            <button className="header2-nav-button" onClick={()=>handleHeaderNav('projects')}>projects</button>
                            <button className="header2-nav-button" onClick={()=>handleHeaderNav('research')}>research</button>
                            <button className="header2-nav-button" onClick={()=>handleHeaderNav('about')}>about/contact</button>
                            {/* <button className="header2-nav-button" onClick={()=>handleHeaderNav('contact')}>contact</button> */}
                        </div>
                    </div>
                </>
                }
            
            </div>
        </div>
    )
})