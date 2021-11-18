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
    const TZbiomed='./images/TZ-pulseOx_repair.png'
    const goyalmaranewborn='./images/newborn-bubbleWrap.png';
    const faceshield='./images/faceshield-solo.png';
    const EEGcircuit='./images/EEG-circuitBoard.png';
    const justforfun='./images/catan-square.png';
    const aboutMe='./images/aboutme-img.png';
    const headshot='./images/headshot.jpeg';

    const handleProjectSelect = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    useEffect(()=>{
        if(urlHash.length > 0){
            document.getElementById(urlHash.substr(1,urlHash.length-1))?.scrollIntoView();
        }
    },[urlHash]);

    const pdfDownload = (pdf: string) => {
        window.open(`${pdf}`);
    }

    return(
        <div className="home-page-div">
            <div className="intro-content-box">
                <div className="about-div">
                {/* <div className="about-box-area">
                    <div className="about-box">
                        <h3>Hi! I'm Saige</h3>
                        <p> {aboutMessage} </p>
                    </div>
                </div> */}
                <img className="headshot" src={headshot}></img>
                <div className="home-intro-text-div">
                    <h2 className="home-intro-ses">Hi! I'm Saige</h2>
                    <p className="home-intro-text"> {aboutMessage}</p>
                </div>
                </div>
            </div>
            
            {/* <div className="about-div2">
                <h2 className="section-subheader">Duke University || Class of 2020</h2>
                <div className="aboutSection">
                    <p>BSE - Biomedical Engineering</p>
                    <p>Certificate - Global Development Engineering</p>
                </div>    
                <h2 className="section-subheader">Experience</h2>
                <div className="aboutSection">
                    <p>Human Centered Design - Systems and Product Design for a LRS Specific Newborn Warmer</p>
                    <p>Non-Profit Management - International Partnership Development; Internal Strategy, Networking, and Growth</p>
                    <p>Field Work - Two Months Repairing Medical Equipment in Tanzania</p>
                    <p>R&D - Signal Processing and Clinical Trial Development at a Start Up</p>
                </div>
            </div> */}
           
            <hr className="hr-divider"></hr>
            <div className="home-projects-div" id="projects">
                <h1 className="section-header">Projects</h1>
                {/* <div className="projects-grid"> */}
                <ul id="hexGrid">
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.warmer_DP)}>
                            <img className="project-image" id="DtM" src={goyalmaranewborn} alt="DtM"/>
                            <h1>Designing Solutions to Neonatal Hypothermia</h1>
                            <p>Aug 2020 - Present</p>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.tengeru)}>
                            <img className="project-image" id="TZbiomed" src={TZbiomed} alt="TZbiomed"/>
                            <h1>Biomed at Tengeru Hospital</h1>
                            <p>Jun 2018 - Aug 2018</p>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.faceshields)}>
                            <img className="project-image" id="faceshield" src={faceshield} alt="kicksinorbit"/>
                            <h1>Covid-19 Faceshields</h1>   
                            <p>Aug 2020 - Dec 2020</p> 
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.ventilator)}>
                            <img className="project-image" id="ventilator" src={ventilator} alt="ventilator"/>
                            <h1>Emergency Ventilator</h1>
                            <p>Mar 2020 - Apr 2020</p>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.cystoscope)}>
                            <img className="project-image" id="cystoscope" src={cystoscope} alt="cystoscope"/>
                            <h1>Cystoscope Redesign</h1>
                            <p>Jan 2020 - Feb 2020</p>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.EEGcircuit)}>
                            <img className="project-image" id="EEG-circuit" src={EEGcircuit} alt="EEG-circuit"/>
                            <h1>EEG Signal Processor</h1>
                            <p>Oct 2019 - Dec 2019</p>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn" onClick={() => handleProjectSelect(Routes.justforfun)}>
                            <img className="project-image" id="kicks-in-orbit" src={justforfun} alt="kicksinorbit"/>
                            <h1>Just for Fun</h1>
                            <p>2020 - 2021</p>
                        </div>
                    </li>
                </ul>
                {/* </div> */}
            </div>
           
            <hr className="hr-divider"></hr>
            <div className="research-div" id="research">
                <h1 className="section-header">Research</h1>
                <p className="research-text">For the past year and a half, I have extensively studied neonatal hypothermia. The following documents explore the harm caused by neonatal hypothermia as well as builds a case for the positioning of a new conductive warmer in the global health markets. I am the main author on the first four documents. The final document was written in collaboration with stakeholders from Design that Matters and Médecins Sans Frontières (MSF). This paper and was presented and published as part of MSF's 2021 Paediatric Days Symposium. </p>

                <div className="research-grid">
                    <div className="paperBox" onClick={()=> pdfDownload('./pdf/201109_Prevalence_and_Risks_of_Neonatal_Hypothermia.pdf')}>
                        <h4 className="paper-title">Prevalence and Risks of Neonatal Hypothermia</h4>
                        <p className="paper-description">Literature review analyzing the neonatal mortality and morbidity as a result of hypothermia. Discussion of current warming solutions used in LRS and the need for supplemental warming.</p>
                        <p className="paper-date">Nov 9, 2020</p>
                    </div>
                    <div className="paperBox" onClick={()=> pdfDownload('./pdf/210902_Effectiveness_of_Conductive_Warming_to_Treat_Hypothermia.pdf')}>
                        <h4 className="paper-title">Effectiveness of Using Conductive Warming To Treat and Prevent Hypothermia</h4>
                        <p className="paper-description">Literature review of prior studies researching the effectiveness of conductie warming. Concludes it non-inferior to Standard of Care methods: KMC, incubators, radiant warmers.</p>
                        <p className="paper-date">Sept 2, 2021</p>
                    </div>
                    <div className="paperBox" onClick={()=> pdfDownload('./pdf/210621_Warmer_Product_Requirements_and_Specifications.pdf')}>
                        <h4 className="paper-title">MSF Newborn Warmer Product Requirements and Specifications</h4>
                        <p className="paper-description">Technical specifications for the design and development of a newborn warmer to be used in MSF project sites and other LRS hospitals.</p>
                        <p className="paper-date">June 21, 2021</p>
                    </div>
                    <div className="paperBox" onClick={()=> pdfDownload('./pdf/210621_Newborn_Warmer_Market_Study.pdf')}>
                        <h4 className="paper-title">Market Research: Newborn Warming Devices</h4>
                        <p className="paper-description">Product Placement Research. Study of products on the market and their compatibility with MSF requirements. This study concludes that there is no warmer on the market that meets all of MSF needs.</p>
                        <p className="paper-date">June 21, 2021</p>
                    </div>
                    <div className="paperBox" onClick={()=> pdfDownload('./pdf/210415_A_Solution_Focused_Field_Assessment_in_Bangladesh.pdf')}>
                        <h4 className="paper-title2">Neonatal Hypothermia: A Solution-Focused Field Assessment in Bangladesh</h4>
                        <p className="paper-description">Summary of our findings from a field visit to a MSF hospital in Cox's Bazar, Bangaldesh. Our goal was to better understand challenges in neonatal hypothermia management that MSF staff face.</p>
                        <p className="paper-date">April 15, 2021</p>
                    </div>

                </div>
                
            </div>
            
            <hr className="hr-divider"></hr>
            <div className="aboutMe-div" id="about">
                <h1 className="section-header">About Me</h1>
                <div className="aboutMe-content">
                    <img className="aboutMe-img" src={aboutMe}></img>
                    <div className="aboutMe-text-div">
                        <div className="text-subdiv">
                            <p className="aboutMe-text">I grew up in a small town just outside of New York City in a hectic household with three older siblings and six pets. I am no stranger to chaos and thrive in environments where I am surrounded by new people and new perspectives.</p>
                            <p className="aboutMe-text">I studied Biomedical Engineering at Duke University with a concentration in Global Development Engineering. As a student, I pursued opportunities to challenge myself through experiences. I spent a summer working in Tanzania repairing medical equipment then flew off to Europe to study and live in Metz, France. After graduating I followed my passions out to Seattle to work at a small non-profit.</p>
                            <p className="aboutMe-text">My goal in life is to improve health outcomes in low-resource settings. I want to do more than design. I want to ensure the solutions I am a part of are developed and implemented. I am determined to solve some of the world’s most challenging problems and I hope to do so surrounded by peers and mentors with their own inspiring motivations and experiences. </p> 
                        </div>
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