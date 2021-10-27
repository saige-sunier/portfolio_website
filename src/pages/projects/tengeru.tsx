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
      backgroundColor: 'rgb(182, 202, 223, 0.5)',
      borderTop: '3px solid rgba(7, 53, 102)',
      marginBottom: -1,
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
                        <p className="TZbackground-text">I spent the summer of 2018 in Tanzania repairing medical equipment in public hospitals as a biomedical technician with Engineering World Health. I spent the first month training with a group of 14 engineers from around the world. We lived with local families and studied in a small town outside of Arusha, TZ. Through this training, I learned how to repair medical devices and equipment that are commonly seen in hospitals across the country. After the first month of technical training and Swahili lessons, I moved to a small home in Machumba where I spent the next month and a half working with a fellow student at Tengeru Hospital as a biomedical technician.</p>
                    </div>
                    <img className="TZbackground-img" src={TZO2repair}></img>
                </div>
                <div className="TZwork-div">
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
                </div> 
                
                <div className="TZpartitions-div">
                    <div className="TZpartitions-intro">
                        <h3 className="TZsubheader">Project Highlight - Partitions for the Minor Theatre</h3>
                        <h3 className="TZsubheader3">Background</h3>
                        <p className="TZpartitions-text">In addition to repairing equipment and working with the hospital staff, my partner and I wanted to make a lasting improvement to the hospital. We conducted interviews and observed staff from various wards. It was important that the project be focused on a specifically expressed need and that we avoided imposing any external assumptions that we may have had about the hospital. We asked our co-workers to describe their issues and what solutions they would like to see. Many needs were expressed but with our limited time and resources, we needed to balance impact and feasibility. After careful consideration, we decided to improve the Minor Theatre. </p>
                        <h3 className="TZsubheader3">Design Process</h3>
                    </div>

                    <div className="TZpartitions-grid">
                        <div className="TZprocess-area">
                            <div>
                            <img className="TZprocess-img" src={TZMTbefore}></img>
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="TZprocess-title">The Need</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <p>The Minor Theatre accepts patients with severe open wounds that can be treated without major surgery. Physicians will use this ward to treat cuts, burns, lacerations, etc. </p>
                                    <p>The ward had no dividers between the patient beds. While interviewing staff, Freddie, the head of the ward, discussed patient discomfort from being in the same room as other patients while their wounds were cared for. He also expressed concern about the spread of HIV as blood splatter was common in this ward and the lack of dividers allowed for blood to occasionally reach neighboring beds.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                             </div>
                        </div>
                       
                        <div className="TZprocess-area">
                            <img className="TZprocess-img" src={TZdrillingWall}></img>
                            <div>
                            
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="TZprocess-title">Design Qualities</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <ul className="TZprocess-description-list">
                                        <li className="TZ-process-description-list">
                                            Creates separation between three patient beds
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
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="TZprocess-title">Materials & Resources</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <p>Curtains:</p>
                                    <p>The material for the curtains needed to be waterproof. We asked the Head Matron for advice on where we could source the fabric needed. After hunting through the fabric markets in Arusha, we decided to order the material from Nairobi.</p>
                                    <p>Metal Frame:</p>
                                    <p>Tengeru Hospital is right across the street from a market where there are several welders. With our design sketches and basic Swahili, we successfully communicated what we needed and the pieces for the metal frame were ready a few days later.</p>
                                    <p>Construction:</p>
                                    <p>A few friends working at the hospital down the road had a drill that we were able to borrow to instal the metal rails and curtains.</p> 
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

                    <div className="TZlessons-div">
                        <div>
                            <h3 className="TZsubheader">Lessons Learned</h3>
                            <p className="TZlessons-text">
                                Tanzania was an incredibly formative experience for me. I have always been interested in global health, but during that summer <b>I fell in love with the challenge of solving problems for low-resource settings.</b> I had the rare opportunity to fully immerse myself in the culture, learn a new language, and work alongside locals everyday to help improve their hospital.</p>
                            <p className="TZlessons-text">
                                When we first got to Tengeru Hospital, we quickly learned the <b>importance of developing relationships and connections. </b>The staff at Tengeru was incredibly welcoming and kind, but they did not yet feel comfortable giving us equipment to repair. We worked hard to build the staff’s confidence in us through minor repairs and friendly conversations. By our final weeks, we had made incredible friends and had established a sense of trust. People would come find us in our workshop to give us equipment to fix and invite us to come enjoy some chai.</p>
                            <p className="TZlessons-text">
                                On the weekends, I explored Tanzanian cities and towns and even summited Mt. Meru, the second tallest mountain in Tanzania. I gained a new sense of independence and confidence and  learned that <b>I thrive outside of my comfort zone because it is where I feel the most inspired and invigorated.</b> </p>
                            <p className="TZlessons-text">
                                I left Tanzania wanting to return and do more. There is an incredible space and need for design within low-resource settings. The environment poses its own set of challenges and needs that designers and manufacturers in high-resource settings often overlook. <b> I see the intersection of design and global health as an incredibly exciting and innovative space full of opportunity to improve the world we live in. </b></p>
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