import './tengeru.css'
import { withRouter } from 'react-router-dom';
import { Routes } from '../../routes';
import { isConstructorDeclaration } from 'typescript';


// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import 'react-slidedown/lib/slidedown.css';

import React, { useState } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { rgbToHex, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


export const Tengeru = withRouter((props) =>{

    const TZO2repair='./images/TZ-O2repair.jpg';
    const TZworkCollage='./images/TZ-workCollage.png';
    const TZMTbefore='./images/TZ-beforePartitions.png';
    const TZdrillingWall='./images/TZ-drillingWall.png';
    const TZworkshop2='./images/TZ-workshop2.png';
    const TZpartitions='./images/TZ-partitionsGroup.png';
    const TZmeruSummit='./images/TZ-meruSummit.JPG';
    const TZSG="./images/TZ-grace_saige.png";
    const heaterRepair='./images/TZ-heater-square.png';
    const teaching='./images/TZ-teaching.png';
    const workshop='./images/TZ-workshop.png';
 
    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const [isActive, setIsActive] = useState(false);

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      borderTop: 'none',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
    //   backgroundColor: 'rgb(182, 202, 223, 0.5)',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
    //   borderTop: '3px solid rgba(7, 53, 102)',
      borderTop: '3px solid rgba(7, 53, 102)',
      marginBottom: -1,
      marginTop: -59,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0px',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
    },
  }))(MuiAccordionDetails);
  
    return (
        <div className="tengeru-div" id="tengeru">
            <div className="header-block-div">
                <div>
                    <h2 className="TZ-project-title-sm">Engineering World Health</h2> 
                    <h2 className="TZ-project-title">Biomedical Technician at Tengeru Hospital, Tanzania</h2> 
                </div>
            </div>
            <div className="general-format">
                <div className="TZbackground-div">
                    <div className="TZbackground-content">
                        <h3 className="TZsubheader">Background</h3>
                        <p className="TZbackground-text"><b>I spent the summer of 2018 in Tanzania repairing medical equipment in public hospitals as a biomedical technician with Engineering World Health. </b> I spent the first month training with a group of 14 engineers from around the world. We lived with local families and studied in a small town outside of Arusha, TZ. Through this training, I learned how to repair medical devices and equipment that are commonly seen in hospitals across the country. After the first month of technical training and Swahili lessons, <b>I moved to a small home in Machumba where I spent the next month and a half working with a fellow student at Tengeru Hospital as a biomedical technician.</b></p>
                    </div>
                    <img className="TZbackground-img" src={TZO2repair}></img>
                </div>
                <hr className="hr-divider-pages"></hr>

                <div className="TZ-work-div">
                    <h3 className="TZsubheader">Work</h3>
                    <div className="work-circles">
                        <div className="repair-circle">
                            <img className="circle1" src={heaterRepair}></img>
                            <div className="circle1-area"> </div>
                            <h4 className="TZcircle1-text">REPAIR</h4>
                            <div className="work-text-bullets">
                                <p>Repaired over 40 pieces of equipment</p>
                                <p>Expanded the electrical capacity of the neonatal ward </p>
                            </div>
                        </div>
                        <div className="repair-circle">
                            <img className="circle1" src={teaching}></img>
                            <div className="circle1-area"> </div>
                            <h4 className="TZcircle2-text">TEACH</h4>
                            <div className="work-text-bullets">
                                <p>Led training sessions on how to repair and maintain equipment</p>
                                <p>Trained Theresia, a local biomed student, on common equipment failures and repairs</p>
                            </div>
                        </div>
                        <div className="repair-circle">
                            <img className="circle1" src={workshop}></img>
                            <div className="circle1-area"> </div>
                            <h4 className="TZcircle3-text">SUSTAIN</h4>
                            <div className="work-text-bullets">
                                <p>Developed maintenance manuals in Swahili and English for over 10 devices</p>
                                <p>Installed and implemented a digital library that allows staff to access 1000+ maintenance manuals via WiFi </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="TZwork-div">
                    <div className="TZwork-content">
                        <h3 className="TZsubheader">Work</h3>
                        <p className="TZwork-text">Tengeru Hospital is a public, primary hospital located between Arusha and Moshi, the two major cities in the area. During our time there we:</p>
                        <ul className="TZwork-text-ul">
                            <li><b>Repaired over 40 pieces of equipment</b> ranging from blood pressure cuffs and space heaters to oxygen concentrators, autoclaves, and centrifuges.</li>
                            <li><b>Expanded the electrical capacity of the neonatal ward.</b> The ward had been out of service for the past six months because the equipment was drawing too much power. We installed a second circuit to increase the power capacity and get the ward up and running again. </li>
                            <li><b>Developed over 10 maintenance manuals</b> for various pieces of equipment around the hospital in Swahili and English to teach both current and future workers how to properly use and maintain the equipment.</li>
                            <li><b>Led multiple training sessions</b> to teach the hospital staff how to maintain equipment to increase device lifespan.</li>
                            <li><b>Installed and implemented a digital library</b> that can be accessed via bluetooth. It hosts hundreds of product manuals and engineering and medical textbooks. We hosted a training session with the entire hospital staff as well as individually trained staff appointed by the Head Matron. </li>
                        </ul>
                    </div>
                    <img className="TZwork-img" src={TZworkCollage}></img>
                </div>  */}

                <hr className="hr-divider-pages"></hr>
                <div className="TZpartitions-div">
                    <div className="TZpartitions-intro">
                        <h3 className="TZsubheader">Project Highlight - Partitions for the Minor Theatre</h3>
                        <h3 className="TZsubheader3">Background</h3>
                        <p className="TZpartitions-text">My partner and I wanted to make a lasting improvement to the hospital. <b>We conducted interviews and observed staff from various wards. We wanted our co-workers to be involved in the solution process, this meant finding a project that responded to a specifically expressed need.</b> Many needs were expressed but with our limited time and resources, we needed to balance impact and feasibility. After careful consideration, we decided to improve the Minor Theatre. </p>
                        <h3 className="TZsubheader3">Design Process</h3>
                    </div>

                    <div className="TZpartitions-grid">
                        <div className="TZprocess-area">
                            <div>
                            <img className="TZprocess-img" src={TZMTbefore}></img>
                                <Accordion className="TZaccordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">The Need</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <p>The Minor Theatre accepts patients with severe open wounds that can be treated without major surgery. </p>
                                    <p><b>The ward had no dividers between the patient beds.</b> While interviewing staff, Freddie, the head of the ward, expressed concern over the spread of HIV. <b>Blood splatter was common in this ward and without separation between patients there was a high risk of HIV transmission.</b></p>
                                </Typography>
                                </AccordionDetails>
                                </Accordion>
                             </div>
                        </div>
                       
                        <div className="TZprocess-area">
                            <img className="TZprocess-img" src={TZdrillingWall}></img>
                            <div>
                            
                            <Accordion className="TZaccordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">Design Features</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <ul className="TZprocess-description-list">
                                        <li className="TZ-process-description-list">
                                            Creates separation between patient beds
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Can move curtains to the side when needed  
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Blood can easily be cleaned from the separators with bleach and a cloth
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Materials for curtains and frame can be sourced locally
                                        </li>
                                    </ul>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        </div>
                        <div className="TZprocess-area">
                            <img className="TZprocess-img" src={TZworkshop2}></img> 
                            <div>
                            <Accordion className="TZaccordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">Materials & Resources</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <p>Curtains:</p>
                                    <p>The material for the curtains needed to be waterproof. We worked with the Head Matron to identify what materials we would be ideal. After searching the fabric markets in Arusha, we decided to order the material from Nairobi.</p>
                                    <p>Metal Frame:</p>
                                    <p>Across the street from Tengeru Hospital was a market where several welders worked. With design sketches and basic Swahili, we explained our needs and the welders built our frames in a few days time.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>

                        </div>

                    </div>
                    
                    <div className="TZresults-div">
                        <h3 className="TZsubheader3">Results</h3>
                        <img className="TZpartitions-img" src={TZpartitions}></img>

                    </div>

                    <hr className="hr-divider-pages"></hr>
                    <div className="TZlessons-div">
                        <div>
                            <h3 className="TZsubheader">Reflections</h3>
                            <p className="TZlessons-text">
                                Tanzania was an incredibly formative experience for me. I have always been interested in global health, but during that summer <b>I fell in love with the challenge of solving problems for low-resource settings.</b> I had the rare opportunity to fully immerse myself in a new culture, learn a new language, and work alongside locals to help improve their hospital.</p>
                            <p className="TZlessons-text">
                                At Tengeru, I embraced the <b>importance of developing relationships and connections. </b> The staff at Tengeru was incredible but we had to work hard to build their confidence in us. We developed trust through minor repairs and by slowing down to enjoy chai and stories.</p>
                            <p className="TZlessons-text">
                                On the weekends, I explored Tanzanian cities and towns and even summited Mt. Meru, the second tallest mountain in Tanzania. I gained a new sense of independence and confidence and  learned that <b>I thrive outside of my comfort zone because it is where I feel the most inspired and invigorated.</b> </p>
                            <p className="TZlessons-text">
                                I left Tanzania wanting to return and do more. There is immense opportunity for design within low-resource settings. The environment poses its own set of challenges and needs that designers and manufacturers in high-resource settings often overlook. <b> I see the intersection of design and global health as an incredibly exciting and innovative space full of opportunity to improve the world we live in. </b></p>
                        </div>
                        <div className="TZlessons-img-div">
                             <img className="TZlessons-img" src={TZmeruSummit}></img>
                             {/* <img className="TZlessons-img2" src={TZSG}></img> */}
                        </div>
                       
                    </div>


                </div>
                
            </div>
        </div>
    )
    
});