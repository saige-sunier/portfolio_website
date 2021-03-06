import './header.css'
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

    const StyledLink = styled(Link)`
        padding-right: 0rem;
        padding-left: 0rem;
        padding-bottom: 5rem;
        background: none;
        border: none;
        font-family: "Bradley Hand" !important;
        color: black;
        font-size: 18px !important;
        transition: 0.3s;
        border: none !important;
        outline: none !important;
        text-align:justify;
        `;


    return(
        <div className="header-div" id="header">
            <div className="header-topLeft">
                <img onClick={()=> returnHome()} src="../../images/saige-headshot.png" alt="SOSA" className="home-logo"/>
                <h1 onClick={()=> returnHome()} className="header-title">Saige Sunier</h1>
            </div>
           
            <div className="header-nav-menu">
                {currentPath == Routes.home ?
                <>
                    <div className="dropdown">
                        <button className="dropbtn"><img src="../../images/menu-icon.png" className="menu-icon"></img></button>
                        <div className="dropdown-content">
                            <button className="header-nav-button-home"><StyledLink to="about" offset={-100} smooth={true}>about</StyledLink></button>
                            <button className="header-nav-button-home"> <StyledLink to="projects" offset={-100} smooth={true}>projects</StyledLink></button>
                            <button className="header-nav-button-home"><StyledLink to="research" offset={-100} smooth={true}>research</StyledLink></button>
                            <button className="header-nav-button-home"> <StyledLink to="contact" offset={-100} smooth={true}>contact</StyledLink></button>
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