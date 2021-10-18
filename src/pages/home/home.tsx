import React, { useEffect } from 'react';
import {Link} from 'react-scroll';
import './home.css'
import {withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

export const Home = withRouter((props) =>{
    const urlHash = props.history.location.hash;
    const aboutMessage:string = 'My passion is social impact design. I love the challenge of designing solutions for low-resource settings. I have a background in biomedical engineering and global health. I combine these skills to improve healthcare in the places that need it most. Explore below to read more about me and my work!';

    const kicksinorbit='./images/kicksInOrbit.JPG';
    const ventilator='./images/vent-home-img.png';
    const cystoscope='./images/cystoscope-home.png'
    const TZbiomed='./images/TZ-pulseOX_repair.png'
    const goyalmaranewborn='./images/newborn-bubbleWrap.png';
    const faceshield='./images/faceshield-solo.png';
    const EEGcircuit='./images/EEG-circuitBoard.png';
    const aboutMe='./images/aboutMe-img-temporary.png';

    const handleProjectSelect = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
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
            <div className="about-div2">
                <h2 className="section-subheader">Duke University || Class of 2020</h2>
                <div className="aboutSection">
                    <p>BSE - Biomedical Engineering</p>
                    <p>Certificate - Global Development Engineering</p>
                </div>    
                <h2 className="section-subheader">Experience</h2>
                <div className="aboutSection">
                    <p>Human Centered Design: Systems and Product Design to Design and Implement Newborn Warmer</p>
                    <p>Non-Profit Management: International Partnership Development; Internal Planning, Strategy, Networking, and Growth</p>
                    <p>Field Work: Two Months Repairing Medical Equipment in Tanzania</p>
                    <p>R&D: Signal Processing and Clinical Trial Development at a Start Up</p>
                    {/* <li>Software Languages: Python, React, HTML, CSS, MATLAB, Arduino (Java/C)</li>
                    <li>Design Software: Fusion360 CAD, Altium PCB Designer, Mural, Meshmixer, Luban</li>
                    <li>Operating Systems: Mac OS X, Windows, Adobe Creative Suite </li>
                    <li>Languages: French (proficient), Swahili (basic)</li> */}
                </div>
            </div>
           
            <div className="home-projects-div" id="projects">
                <h1 className="section-header">Projects</h1>
                <div className="projects-grid">
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.warmer_DP)}>
                        <p className="project-image-title">Designing Solutions to Neonatal Hypothermia</p>
                        <img className="project-image" id="DtM" src={goyalmaranewborn} alt="DtM"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.tengeru)}>
                        <p className="project-image-title">Biomed at Tengeru Hospital</p>
                        <img className="project-image" id="TZbiomed" src={TZbiomed} alt="TZbiomed"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.faceshields)}>
                        <p className="project-image-title">Covid-19 Faceshields</p>
                        <img className="project-image" id="kicks-in-orbit" src={faceshield} alt="kicksinorbit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.ventilator)}>
                        <p className="project-image-title">Emergency Ventilator</p>
                        <img className="project-image" id="ventilator" src={ventilator} alt="ventilator"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.cystoscope)}>
                        <p className="project-image-title">Cystoscope Redesign</p>
                        <img className="project-image" id="cystoscope" src={cystoscope} alt="cystoscope"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.EEGcircuit)}>
                        <p className="project-image-title">EEG Signal Processor</p>
                        <img className="project-image" id="EEG-circuit" src={EEGcircuit} alt="EEG-circuit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.cystoscope)}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect(Routes.cystoscope)}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                    
                </div>
            </div>
           
            <div className="research-div" id="research">
                <h1 className="section-header">Research</h1>
                <div className="research-grid">
                    <p className="research-text">I currently work at Design that Matters, a non-profit that specializes in applying human-centered design methodologies to design products and systems for low-resource settings. We are currently focused on reducing incidences of neonatal hypothermia in low-resource settings. </p>
                    <p className="research-text">For the past year and a half, I have extensively studied neonatal hypothermia, the effectivness of warming solutions, and the medical device industry in regards to low resource settings. The following documents encapsulate my years worth of research into these topics.</p>
                </div>
            </div>
            
            <div className="aboutMe-div" id="about">
                <h1 className="section-header">About Me</h1>
                <div className="aboutMe-content">
                    <img className="aboutMe-img" src={aboutMe}></img>
                    <div className="aboutMe-text-div">
                        <p className="aboutMe-text">Hi I’m Saige. I grew up in a small town just outside of New York City. Since then I have lived in North Carolina, Tanzania, France, and now Seattle, WA. </p>
                        <p className="aobutMe-text">I spend almost every weekend hiking, skiing, or running. Logging miles on my sneakers or carving the slopes has always been my way to escape to my thoughts. It is a time where I feel re-centered, challenged, and inspired. </p>
                        <p className="aboutMe-text">Despite my habit of long runs in solitude, I am a very extroverted person. I thrive in environments where I can collaborate with people to brainstorm new ideas and share various perspectives. I bring passion and energy to every project that I am on and I have always prioritized listening and learning from others.  </p>
                        <p className="aboutMe-text">I discovered the concept of designing medical devices for developing countries when I was 16 years old and since then have only grown more passionate about the intersection of global health and innovation. I want to do more than design. I want to ensure that the solutions I am a part of are developed and implemented. I am determined to solve some of the world’s most challenging problems and I hope to do so surrounded by peers and mentors with their own inspiring motivations and experiences. </p>
                    </div>
                </div>
                
            </div>
            
            {/* <div className="contact-div" id="contact">
                <h1 className="section-header">Contact</h1>
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
            </div> */}
            
        </div>
    )
});