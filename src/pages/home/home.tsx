import React, { useEffect } from 'react';
import {Link} from 'react-scroll';
import './home.css'
import {withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

export const Home = withRouter((props) =>{
    const urlHash = props.history.location.hash;
    // const aboutMessage:string = 'Hi - My name is Saige, welcome to my online portfolio! ';

    const spaceMan = './images/spaceMan.JPG';
    const deepSea = './images/deepSea.JPG';
    const elephant='./images/elephant.JPG';
    const kicksinorbit='./images/kicksInOrbit.JPG';
    const goyalmaranewborn='./images/goyalmara.png';

    const handleProjectSelect = (projectId:string) =>{
        props.history.push(`${Routes.projects}?projectid=${projectId}`);
    }
    useEffect(()=>{
        if(urlHash.length > 0){
            document.getElementById(urlHash.substr(1,urlHash.length-1))?.scrollIntoView();
        }
    },[urlHash]);

    return(
        <div className="home-page-div">
            {/*<div className="header-div">
                <p className="header-title">Saige Sunier</p>
                <h3 className="header-quote">
                    One-of-a-Kind, Custom, Hand-Painted Skis &amp; Snowboards
                </h3>
                <div className="header-nav-menu">
                    <button className="header-nav-button"><Link to="about" smooth={true}>about.</Link></button>
                    <button className="header-nav-button"><Link to="projects" smooth={true}>projects.</Link></button>
                    <button className="header-nav-button"><Link to="contact" smooth={true}>contact.</Link></button>
                </div>
            </div>*/}
            <div className="home_image"></div>
            <div className="about-div" id="about">
                <h1 className="section-header">About Me:</h1>
                <p className="aboutSection"> Hi - My name is Saige, welcome to my online portfolio.  </p>
                {/* <p className="section-content">{aboutMessage} <Link className="in-text-link" to="contact" smooth={true}>Reach out</Link> to customize yours today!</p> */}
                <hr/>
            </div>
            <hr/>
            {/* <div className="paralax-image-2"></div> */}
            <div className="projects-div" id="projects">
                <h1 className="section-header">Projects:</h1>
                <div className="projects-grid">
                    <div className="project-image-area" onClick={() => handleProjectSelect('newborn_warmer')}>
                        <p className="project-image-title">Newborn Warmer</p>
                        <img className="project-image" id="newborn_warmer" src={spaceMan} alt="newborn warmer"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('deepsea')}>
                        <p className="project-image-title">Deep Sea</p>
                        <img className="project-image" id="deep-sea" src={deepSea} alt="deepsea"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('elephant')}>
                        <p className="project-image-title">Elephant</p>
                        <img className="project-image" id="elephant" src={elephant} alt="elephant"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('kicksinorbit')}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('kicksinorbit')}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('kicksinorbit')}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('kicksinorbit')}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('kicksinorbit')}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="research-div" id="research">
                <h1 className="section-header">Research:</h1>
                <div className="research-grid">
                    <div className="research-image-area" onClick={() => handleProjectSelect('Neonatal Hypothermia in LRS')}>
                        <p className="research-image-title">Neonatal Hypothermia in LRS</p>
                        <img className="research-image" id="goyalmara-newborn" src={goyalmaranewborn} alt="goyalmara-newborn"/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="about-div">
                <h1 className="section-header">Skills and Education:</h1>
                    <h2 className="section-subheader">Duke University || Class of 2020</h2>
                    <ul className="aboutSection">
                        <li>BSE - Biomedical Engineering</li>
                        <li>Certificate - Global Development Engineering</li>
                    </ul>    
                    <h2 className="section-subheader">Skills</h2>
                    <ul className="aboutSection">
                        <li>Software Languages: Python, React, HTML, CSS, MATLAB, Arduino (Java/C)</li>
                        <li>Design Software: Fusion360 CAD, Altium PCB Designer, Mural, Meshmixer, Luban</li>
                        <li>Operating Systems: Mac OS X, Windows, Adobe Creative Suite </li>
                        <li>Languages: French (proficient), Swahili (basic)</li>
                    </ul>
                </div>
            <div className="paralax-image-3"></div>
            <div className="contact-div" id="contact">
                <h1 className="section-header">Contact:</h1>
                <div className="contact-info">
                    <button className="contact-buttons">
                        <img src="../../images/email-logo.png" className="contact-logo"></img>
                        <a href={`mailto: saige.sunier@gmail.com`}>saige.sunier@gmail.com</a>
                    </button>
                    <button className="contact-buttons">
                        <img src="../../images/linkedin-logo.png" className="contact-logo"></img>
                        <a href="https://www.linkedin.com/in/saige-sunier-8a7ba4151/">linkedin/saigesunier</a>
                    </button>
                    <button className="contact-buttons">
                        <img src="../../images/resume-logo.png" className="contact-logo"></img>
                        <a href="../../images/logo-blk.PNG" download>download resume</a>
                    </button>
                </div>
            </div>
            
        </div>
    )
});