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
                <h2 className="project-title">Biomedical Technician at Tengeru Hospital, Tanzania</h2> 
            </div>
            <div className="general-format">
                <div className="TZbackground-div">
                    <div className="TZbackground-content">
                        <h3 className="TZsubheader">Background</h3>
                        <p className="TZbackground-text">I spent the summer of 2019 in Tanzania repairing medical equipment in public hospitals as a biomedical technician for Engineering World Health. I spent the first month training with a group of 14 fellow engineers from around the world. We lived with local families and studied in a small town outside of Arusha, TZ. I learned how to repair medical devices and equipment that is commonly seen in hospitals across the country. After the first month of technical training and Swahili lessons, I moved to a small home in Machumba and began work at Tengeru Hospital where I spent the next month and a half working with a fellow student as the hospital's biomedical technicians.</p>
                    </div>
                    <img className="TZbackground-img" src={TZO2repair}></img>
                </div>
                <div className="TZwork-div">
                    <div className="TZwork-content">
                        <h3 className="TZsubheader">Work</h3>
                        <p className="TZwork-text">Tengeru Hospital  is a public, primary hospital located between Arusha and Moshi, the two cities in the area. During our time there we:</p>
                        <ul className="TZwork-text-ul">
                            <li><b>Repaired over 40 pieces of equipment</b> ranging from blood pressure cuffs and space heaters to oxygen concentrators, autoclaves, and centrifuges</li>
                            <li><b>Expanded the electrical capacity of the neonatal ward.</b> The ward had been out of service for the past six months because the equipment was drawing too much power. We installed a second circuit to increase the power capacity and got the ward up and running again. </li>
                            <li><b>Developed over 10 maintenance manuals</b> for various pieces of equipment around the hospital in Swahili and English </li>
                            <li><b>Led multiple training sessions</b> to teach the hospital staff how to maintain equipment to increase device lifespan. </li>
                            <li><b>Installed and implemented a digital library</b> that hosted hundreds of product manuals and engineering and medical textbooks. We hosted a training session with the entire hospital staff as well as individually trained staff appointed by the Head Matron. </li>
                        </ul>
                    </div>
                    <img className="TZwork-img" src={TZworkCollage}></img>
                </div> 
                
                <div className="TZpartitions-div">
                    <div className="TZpartitions-intro">
                        <h3 className="TZsubheader">Project Highlight - Partitions for the Minor Theatre</h3>
                        <h3 className="TZsubheader3">Background</h3>
                        <p className="TZpartitions-text">My partner and I wanted to make a lasting impact on the hospital. We wanted to work with the staff to develop a long-term solution to an ongoing problem. We observed  and interviewed staff from all hospital wards. Various needs were expressed but we had to consider our limited time and resources to ensure our project was feasible. We chose to improve the Minor Theatre.</p>
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
                                    <p>The Minor Theatre accepts patients with severe open wounds that can be treated without major surgery.</p>
                                    <p>The ward had no dividers between the patient beds. Freddie, the head of the ward, discussed patient discomfort from watching others undergo painful suturing minutes before their own treatment would begin. He was also concerned about the spread of HIV. Blood splatter was common in this ward and they had no method of stopping blood from reaching other patient beds.</p>
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
                                    <p>The material needed to be waterproof. We asked the Head Matron for advice on where we could source the fabric needed. After hunting through the fabric markets in Arusha, we decided to order the material from Nairobi.</p>
                                    <p>Metal Frame:</p>
                                    <p>Lucky for us, there were several welders at the market near the hospital. With design sketches and our basic Swahili we successfully communicated what we needed and the pieces were ready a few days later.</p>
                                    <p>Construction:</p>
                                    <p>A few friends working at the hospital down the road had a drill that we were able to borrow for installing the rails and curtains.</p> 
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
                            Tanzania was an incredibly formative experience for me. I have always been interested in global health,  but during this summer <b>I fell in love with the challenge of solving problems for low-resource settings.</b> I had the rare opportunity to fully immerse myself in the culture, learn a new language, and work along side locals everyday to improve their hospital.</p>
                            <p className="TZlessons-text">
                                When we first got to Tengeru Hospital, very little staff admitted to having broken equipment, they did not trust us. <b>I embraced the importance of developing relationships and connections.</b> We had to work for the trust of the staff through small repairs and friendly visits. By our final weeks people would come find us and ask for help. The same relationships had to be developed in the market. We frequently had to purchase replacement parts and work with local welders. Our success in the market was a direct result of the time we spent getting to know the vendors and hearing their stories. </p>
                            <p className="TZlessons-text">
                                On the weekends I explored Tanzanian cities and towns and even summited Mt. Meru, the second tallest mountain in Tanzania. I gained a new sense of independence and confidence. I learned that <b>I thrive outside of my comfort zone, it is where I feel the most inspired and invigorated. </b> </p>
                            <p className="TZlessons-text">
                                I left Tanzania wanting to return and do more. There is an incredible space for design within low-resource settings. The environment poses its own set of challenges and needs that designers and manufacturers in high-resource settings overlook. <b>I see the intersection of design and global health as an incredibly exciting and innovative space full of opportunity to improve the world we live in. </b></p>
                        </div>
                        <img className="TZlessons-img" src={TZmeruSummit}></img>
                    </div>


                </div>
                
            </div>
        </div>
    )
    
});