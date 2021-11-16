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
    // const ventNeed='./images/ventNeed-cartoon.png';
    const printerCartoon='./images/printer-cartoon.png';
    const covidCartoon='./images/covid-cartoon.png';
    const ventCartoon='./images/ventilator-cartoon.png';
    const manualVent='./images/bagMask.png';
    const printing='./images/3dprinting.png';
    const ventSketches='./images/vent_designSketches.png';
    const ventFullVideo="./videos/ventilator-full_animation.mp4";
    const ventVid1='./videos/full assembly.mp4';
    const ventVid2='./videos/compressor A assembly.mp4';
    const ventVid3='./videos/control_box_assembly.mp4';

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
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
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
        <div className="ventilator-div" id="ventilator">
            <div className="header-block-div">
                <div>
                    <h2 className="CADproject-title-sm">Adv. Design & Manufacturing:</h2> 
                    <h2 className="CADproject-title">Emergency Ventilator</h2>
                </div>
            </div>
            <div className="general-format">
                <div className="vent-intro-div">
                    <div className="CADintro-content">
                        <h3 className="CADsubheader">Background</h3>
                        <p className="CADintro-text">It was my senior year at Duke when Covid-19 hit. Instead of following the original syllabus, my professors asked us to design a product that could be used in place of common hospital equipment in order to address the equipment shortages being faced throughout the world. I chose to focus my project on ventilators as they were in extremely high demand throughout the pandemic. </p>
                        <p className="CADintro-text">A typical hospital-grade ventilator costs between $25,000 and $50,000 and can take months to manufacture and deliver. <b>My goal was to design a product that cost a fraction of the price of a hospital-grade ventilator and could be used as a substitute when a ventilator was not readily available.</b></p>
                    </div>
                    <div className="CADintro-img-div">
                        <img className="CADintro-img" src={ventilatorRef}></img>
                        <p className="CADimg_description">Drawings of typical hospital-grade ventilators.</p>
                    </div>
                </div>

                <hr className="hr-divider-pages"></hr>

                <div className="CADprocess-div">
                    <h3 className="CADsubheader">Design Process</h3>
                    <p className="vent-process-text">Healthcare personnel commonly perform manual ventilation using bag-valve masks in substitution of a ventilator. If this manual ventilation process were automated, the lack of hospital-grade ventilators would not place as much strain on hospitals as the equipment shortage does today. </p>
                    <div className="partitions-grid">
                        <div className="process-area">
                            <img className="process-img" src={covidCartoon}></img>
                            <div>    
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">The Need</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="process-text">
                                    <p><b>Hospitals that are experiencing ventilator shortages need a way to supply oxygen to patients who require assistance breathing.</b></p>
                                    <p>The solution does not need to provide all of the features that a hospital-grade ventilator does. Instead, it needs to be a solution that can quickly fill the need gap while manufacturers and supply chains catch up with demand for hospital-grade ventilators.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                             </div>
                        </div>
                       
                        <div className="process-area">
                            <img className="process-img" src={ventCartoon}></img>
                            <div>
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">Design Qualities</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="process-text">
                                    <ul className="process-description-list">
                                        <li className="TZ-process-description-list">
                                            Can be constructed with easily obtainable materials
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Provides accurate and consistant ventilation 
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Compresses resuscitation bag evenly as the bag deforms
                                        </li>
                                    </ul>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        </div>
                        <div className="process-area">
                            <img className="process-img" src={printerCartoon}></img> 
                            <div>
                            <Accordion className="accordion-div">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography className="process-title">Materials & Resources</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="process-text">
                                    <p>I 3D printed the specialized parts needed to fabricate my ABVM (automated bag valve mask). The other materials are had to be easily obtainable or already available in hospitals. See more detail in the Key Features section below.</p>
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>

                        </div>
                    </div>
                    <div className="sketches-div">
                        <h4 className="CADsubheader2">Design Sketches</h4>
                        <div className="process-sketches">
                            <img className="process-sketches-img" src={ventSketches}></img>
                        </div>
                        <div className="sketches-descriptions"> 
                            <p className="CADimg_description">Sketches produced when brainstorming different concepts.</p>
                            <p className="CADimg_description">CAD design attempts.</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-divider-pages"></hr>

                <div className="final-design-div">
                    <h3 className="CADsubheader">Final Design</h3>
                    <div className="final-design">
                        <div className="video-div">
                            <video id="design-video" width="650vw" controls>
                                <source src={ventFullVideo} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="key-features-div">
                            <p className="key-features"><b>Key Features</b></p>
                                <ul className="key-features-li">
                                    <li>Two 3D printed compressor heads with blunt tips for even compression of the resuscitator bag even as the bag deforms.</li>
                                    <li>Arduino and positioned in control box and connected to the motor. Arduino is coded to control motor and movement of the compressors.</li>
                                    <li>3D printed Arduino casing with gap for LCD screen. LCD will display respiratory rate and tidal volume.</li>
                                    <li>2000 Series Dual Mode Servo motor with rpm controlled by Arduino.</li>
                                    <li>Gear shaft moves down a T-slotted aluminum rod.</li>
                                    <li>Components secured to a wood block.</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="bonus-div">
                    <h4 className="CADsubheader2">Additional Animations</h4>
                    <div className="add-videos-div">
                        <video id="add-videos" width="380vw" controls>
                            <source src={ventVid1} type="video/mp4"></source>
                        </video>
                        <video id="add-videos" width="380vw" controls>
                            <source src={ventVid2} type="video/mp4"></source>
                        </video>
                        <video id="add-videos" width="380vw" controls>
                            <source src={ventVid3} type="video/mp4"></source>
                        </video>
                    </div>
            </div>
            </div>

        </div>
    
    )
    
});