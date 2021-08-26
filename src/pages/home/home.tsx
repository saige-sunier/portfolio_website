import React, { useEffect } from 'react';
import {Link} from 'react-scroll';
import './home.css'
import {withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

export const Home = withRouter((props) =>{
    const urlHash = props.history.location.hash;
    const aboutMessage:string = 'My passion is social impact design. I love the challenge of designing solutions for low-resource settings. I have a background in biomedical engineering and global health and I combine these skills to improve healthcare in the places that need it most. Explore below to read more about me and my work!';

    const spaceMan = './images/spaceMan.JPG';
    const deepSea = './images/deepSea.JPG';
    const elephant='./images/elephant.JPG';
    const kicksinorbit='./images/kicksInOrbit.JPG';
    const ventilator='./images/ventilator-cover.png';
    const cystoscope='./images/cystoscope-cover.png'
    const TZbiomed='./images/TZ-biomedShed.png'
    const goyalmaranewborn='./images/goyalmara.png';

    const handleProjectSelect = (projectId:string) =>{
        // props.history.push(`${Routes.projects}?projectid=${projectId}`);
        props.history.push(`${Routes.cystoscope}`);
    }
    useEffect(()=>{
        if(urlHash.length > 0){
            document.getElementById(urlHash.substr(1,urlHash.length-1))?.scrollIntoView();
        }
    },[urlHash]);

    return(
        <div className="home-page-div">
            <div className="about-div">
                <div className="about-box-area">
                    <div className="about-box">
                        <h3>Hi! I'm Saige</h3>
                        <p> {aboutMessage} </p>
                    </div>
                </div>
            </div>
            <div className="about-div2" id="about">
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
            <hr/>
            <div className="projects-div" id="projects">
                <h1 className="section-header">Projects:</h1>
                <div className="projects-grid">
                    <div className="project-image-area" onClick={() => handleProjectSelect('EmergencyVentilator')}>
                        <p className="project-image-title">Emergency Ventilator</p>
                        <img className="project-image" id="ventilator" src={ventilator} alt="ventilator"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('cystoscope')}>
                        <p className="project-image-title">Cystoscope</p>
                        <img className="project-image" id="cystoscope" src={cystoscope} alt="cystoscope"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('TZ-biomed')}>
                        <p className="project-image-title">Biomed at Tengeru Hospital</p>
                        <img className="project-image" id="TZ-biomed" src={kicksinorbit} alt="TZ-biomed"/>
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