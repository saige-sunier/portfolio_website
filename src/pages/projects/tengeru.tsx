import './tengeru.css'
import {useLocation, withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

export const Tengeru = withRouter((props) =>{

    const cystoscope='./images/cystoscope-cover.png';
    const ventilator='./images/ventilator-cover.png';
    const TZBiomed='./images/TZ-biomedShed.png';
    const TZcollage='./images/TZ-collage.png';
    const TZpartition1='./images/TZ-OT_dividers.png';
    const TZpartition2='./images/TZ-partitions2.png';
    const TZpartition3='./images/TZ-partitions3.png';
    const TZtengeruMap='./images/TZ-tengeruMap.png';

    const spaceHeater='./images/TZ-spaceHeaters.png';
    const fusionLogo='./images/fusion-logo.png';
    const ventFullVideo="./videos/ventilator-full_animation.mp4";


    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="tengeru-div" id="tengeru">
            <div className="header-block-div">
                <h2 className="project-title">Biomedical Technician at Tengeru Hospital, Tanzania</h2> 
            </div>
            <div className="project-page-sideNav">
                    <p className="project-nav-title">More Projects:</p>
                    <img onClick={() => handleSideNavClick(Routes.cystoscope)} src={cystoscope} className="project-nav-image"></img>
                    <img onClick={() => handleSideNavClick(Routes.ventilator)} src={ventilator} className="project-nav-image"></img>
                    <img onClick={() => handleSideNavClick(Routes.tengeru)} src={TZBiomed} className="project-nav-image"></img>
                    <img className="project-nav-image" src={cystoscope}></img>
                    <img className="project-nav-image" src={cystoscope}></img>
                    <img className="project-nav-image" src={cystoscope}></img> 
                    <img className="project-nav-image" src={cystoscope}></img>
                    <img className="project-nav-image" src={cystoscope}></img>
            </div>
            <div className="general-format">
                <div className="TZ-intro-div">
                    <h3 className="subheader">Story:</h3>
                    <p>I spent the summer of 2019 in Tanzania repairing medical equipment in public hospitals as a biomedical technician for Engineering World Health. </p>
                    <p>I trained with a group of 14 fellow engineers from around the world. We lived with local families and studied in a small town outside of Arusha. We learned how to repair medical devices and equipment that is commonly seen in hospitals across the country. After the first month of technical training and Swahili lessons, I moved to a small home in Machumba and began work at Tengeru Hospital where I spent the next month and a half working with a fellow student as the hospital's technicians.</p>
                    <p>By the end of our time at Tengeru, we had repaired over 40 pieces of equipment. We tackled a variety of devices and improvement projects around the hospital. Repairs ranged from bloodpressure cuff patches and troubleshooting electrical issues to installing partitions in the emergency room and expanding the electrical capacity of the neonatal ward. Our goal was not only to repair equipment, but to establish long term improvements. I led several meetings with the entire hospital staff, teaching them how to maintain and prolong the lifespan of autoclaves, oxygen concentrators, and scales. </p>
                    <p>This experience was incredibly formative for me. I have always been interested in global health but spending the summer living in Tanzania, immersing myself in the culture, and improving Tengeru Hospital's capabilities solidified my passion to pursue social impact as a career. I fell in love with the people and the work, but more importantly I fell in love with the challenge. I had to be creative, flexible, and develop solutions for the hospital by listening and learning from the staff.</p>
                    <img className="TZcollage" src={TZcollage}></img>
                </div>
                <hr/>
                <div className="TZprojects-div">
                    <h3 className="subheader">Project Highlights:</h3>
                    <div className="partitions-div">
                        <h4 className="TZsubheader2">Partitions for the Minor Theatre</h4>
                        <h4 className="TZsubheader3">Design Process</h4>
                        <div className="TZprocess-grid">
                            <div className="TZprocess-block-area">
                                <div className="flip-block-inner">
                                    <div className="flip-block-front">
                                        <p className="TZprocess-title">Needs Finding</p>
                                        <img className="TZprocess-image" id="tengeruMap" src={TZtengeruMap} alt="tengeruMap"/>
                                    </div>
                                    <div className="flip-block-back">
                                        <p className="TZprocess-description-sm">We observered and conducted interviews with staff from each hospital ward. Our goal was to identify areas of need and work towards a long term solution.</p>
                                        <p className="TZprocess-description-sm">The staff expressed various needs but with limited time and resources we had choose one project that we could successfully accomplish. We chose to work in the minor theatre where patients go for wound care and sutures.</p>
                                        <p className="TZprocess-description-sm">Patients, with open wounds, are cared for without any separation between beds. Aside from patient comfort, the head of the ward expressed concerns about the spread of HIV from blood splatter.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="TZprocess-block-area">
                                <div className="flip-block-inner">
                                    <div className="flip-block-front">
                                        <p className="TZprocess-title">Design Considerations</p>
                                        <img className="TZprocess-image" id="lightbulb" src={TZBiomed} alt="lightbulb"/>
                                    </div>
                                    <div className="flip-block-back">
                                        <p className="TZprocess-description-sm">Need: Partitions that create separation between patients. They must increase patient comfort and reduce HIV transmission through blood splatters.</p>
                                        <p className="TZprocess-description-sm">Design Qualities:</p>
                                        <ul className="TZprocess-description-list">
                                            <li className="TZ-process-description-list">
                                                Creates separation between 3 patient beds
                                            </li>
                                            <li className="TZ-process-description-list">
                                                Can move curtains to the side when needed  
                                            </li>
                                            <li className="TZ-process-description-list">
                                                Blood can easily be cleaned from the separators with bleach and a cloth
                                            </li>
                                            <li className="TZ-process-description-list">
                                                Staff can easily move from patient to patient
                                            </li>
                                            <li className="TZ-process-description-list">
                                                Can be constructed using local materials
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="TZprocess-block-area">
                                <div className="flip-block-inner">
                                    <div className="flip-block-front">
                                        <p className="TZprocess-title">Materials & Capabilities</p>
                                        <img className="TZprocess-image" id="lightbulb" src={TZBiomed} alt="lightbulb"/>
                                    </div>
                                    <div className="flip-block-back">
                                        <p className="TZprocess-description-sm">For my design, I wanted to break free from the convensional cystoscope shape and play with some new ideas.</p>
                                        <p className="TZprocess-description-sm">I looked to everyday objects for inspiration and considered objects that are comfortable to hold for long periods of time and easy-to-use.</p>
                                        <p className="TZprocess-description-sm">X-Box Controllers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="TZprocess-block-area">
                                <div className="flip-block-inner">
                                    <div className="flip-block-front">
                                        <p className="TZprocess-title">Construction & Installation</p>
                                        <img className="TZprocess-image" id="lightbulb" src={TZBiomed} alt="lightbulb"/>
                                    </div>
                                    <div className="flip-block-back">
                                        <p className="TZprocess-description-sm">For my design, I wanted to break free from the convensional cystoscope shape and play with some new ideas.</p>
                                        <p className="TZprocess-description-sm">I looked to everyday objects for inspiration and considered objects that are comfortable to hold for long periods of time and easy-to-use.</p>
                                        <p className="TZprocess-description-sm">X-Box Controllers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="TZpartitions-results">
                             <h4 className="TZsubheader3">Results</h4>
                             <div className="TZpartitions-grid">
                                 <img className="TZpartitions-img" id="partitions" src={TZpartition1} alt="partitions"/>
                                 <img className="TZpartitions-imgT" id="partitions" src={TZpartition3} alt="partitions"/>
                                 <img className="TZpartitions-img" id="partitions" src={TZpartition2} alt="partitions"/>
                             </div>
                            
                        </div>
                    </div>   
                </div> 
            </div>
        </div>
    )
    
});