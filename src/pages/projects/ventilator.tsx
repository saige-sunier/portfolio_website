import './ventilator.css'
import {useLocation, withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { rgbToHex, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

export const Ventilator = withRouter((props) =>{

    const cystoscope='./images/cystoscope-cover.png';
    const ventilator='./images/ventilator-cover.png';
    const ventilatorRef='./images/ventilators-ref.jpeg';
    const ventilation='./images/ventilation.png';
    const printing='./images/3dprinting.png';
    const lightbulb='./images/lightbulb.png';
    const sketching='./images/cysto-drawing.png';
    const scales='./images/scales.png';
    const fusionLogo='./images/fusion-logo.png';
    const ventFullVideo="./videos/ventilator-full_animation.mp4";

    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


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
        <div className="ventilator-div" id="ventilator">
            <div className="header-block-div">
                <h2 className="CADproject-title">Advanced Design and Manufacturing: Emergency Ventilator</h2>
            </div>
            <div className="general-format">
                <div className="CADintro-div">
                    <div className="CADintro-content">
                        <h3 className="CADsubheader">Background</h3>
                            <p className="CADintro-text">When Covid-19 hit, it was my senior year. Instead of following the original syllabus, my professors asked us to consider the current equipment shortages that hospitals were experiencing and to design a product that could be used in place of common equipment.</p>
                            <p className="CADintro-text">Hospitals were experiencing an extreme shortage in ventilators. A typical hospital-grade ventilator cost between $25,000 and $50,000 and can take up to XX months to  manufacture and deliver. A cost effective, easy to assemble ventilator could function in place of the typical ventilator. </p>
                            <p className="CADintro-text">My goal was to design a product that cost only the fraction of the price of a hospital-grade ventilator, and could be used as a substitute when a ventilator was not available.</p>
                        </div>
                    <div className="CADintro-img-div">
                        <img className="CADintro-img" src={ventilatorRef}></img>
                        <p className="CADimg_description">Rigid cystoscope used to perform endoscopies.</p>
                    </div>
                </div>
                <div className="process-div">
                    <h3 className="CADsubheader">Design Process</h3>
                    
                    <div className="TZpartitions-grid">
                        <div className="TZprocess-area">
                            <div>
                            <img className="TZprocess-img" src={ventilation}></img>
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="TZprocess-title">The Need</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="TZprocess-text">
                                    <p>Hospitals that are experiencing ventilator shortages need a way to supply oxygen to patients who need assistance breathing.</p>
                                    <p>The product does not need to provide all of the support that a hospital-grade ventilator can. It needs to be a fast solution that can fill the need gap while manufacturers and supply chains catch up with demand.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                             </div>
                        </div>
                       
                        <div className="TZprocess-area">
                            <img className="TZprocess-img" src={ventilatorRef}></img>
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
                                            Can be constructed with materials that are easy to access
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Provides regulated breathing support  
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Compatible with equipment already in hospitals 
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Easy to use after minimal training 
                                        </li>
                                    </ul>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        </div>
                        <div className="TZprocess-area">
                            <img className="TZprocess-img" src={printing}></img> 
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
                                    <p>3D printers were rapidly recognized as a resource to be tapped into for rapidly producing equipment. I decided to use 3D printing as the main method for producing specialized parts.</p>
                                    <p>Bag-valve masks are used for manual ventilation. Manual ventilation can assist patients in breathing when ventilators are not available.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>

                        </div>

                    </div>


                    <div className="process-grid">
                        <div className="process-block-area">
                            <div className="flip-block-inner">
                                <div className="flip-block-front">
                                    <p className="process-title">Inspiration</p>
                                    <img className="process-image" id="lightbulb" src={lightbulb} alt="lightbulb"/>
                                </div>
                                <div className="flip-block-back">
                                    <p className="process-description-sm">For my design, I wanted to break free from the convensional cystoscope shape and play with some new ideas.</p>
                                    <p className="process-description-sm">I looked to everyday objects for inspiration and considered objects that are comfortable to hold for long periods of time and easy-to-use.</p>
                                    <p className="process-description-sm">X-Box Controllers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-block-area">
                            <div className="flip-block-inner">
                                <div className="flip-block-front">
                                    <p className="process-title">Design Concepts</p>
                                    <img className="process-image" id="sketching" src={sketching} alt="sketching"/>
                                </div>
                                <div className="flip-block-back">
                                    <p className="process-description-m">Sketch. Sketch. Sketch.</p>
                                    <p className="process-description-m">I am a very visual learner. The best way for me to evaluate my ideas is to sketch it out. </p>
                                </div>
                            </div>
                        </div>
                        <div className="process-block-area">
                            <div className="flip-block-inner">
                                <div className="flip-block-front">
                                    <p className="process-title">Trade Offs</p>
                                    <img className="process-image" id="scales" src={scales} alt="scales"/>
                                </div>
                                <div className="flip-block-back">
                                    <p className="process-description-sm">I decided to prioritize creativity and patient comfort and chose my "X-box controller" design over more convensional shapes. </p>
                                    <p className="process-description-sm">The device is visually familiar to appease patient anxiety and prioritizes ergonomic comfort for the physician.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-block-area">
                            <div className="flip-block-inner">
                                <div className="flip-block-front">
                                    <p className="process-title">CAD Design</p>
                                    <img className="process-image" id="fusion-logo" src={fusionLogo} alt="fusion-logo"/>
                                </div>
                                <div className="flip-block-back">
                                    <p className="process-description-sm">In order to make the product scalable I wanted it to be compatible with injection molding methods.</p> 
                                    <p className="process-description-sm"> The device separates along a slanted split line. I focused on draft angles and reduced manufacturing costs by requiring only two slide pins.</p>
                                    <p className="process-description-sm">Check out the animation for a better look at the final CAD!</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="final-design-div">
                    <h3 className="subheader">Final Design:</h3>
                    <div className="final-design">
                        <div className="video-div">
                            <video id="design-video" width="900" controls>
                                <source src={ventFullVideo} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="bonus-div">
                    <h4 className="subheader2">Additional Animations: </h4>
                    <div className="add-videos-div">
                        <video id="add-videos" width="900" controls>
                            <source src={ventFullVideo} type="wideo/mp4"></source>
                        </video>
                        <video id="add-videos" width="900" controls>
                            <source src={ventFullVideo} type="wideo/mp4"></source>
                        </video>
                        <video id="add-videos" width="900" controls>
                            <source src={ventFullVideo} type="wideo/mp4"></source>
                        </video>
                    </div>
            </div>
            </div>

        </div>
    )
    
});