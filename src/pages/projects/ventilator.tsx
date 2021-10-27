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
                <div>
                    <h2 className="CADproject-title-sm">Adv. Design & Manufacturing:</h2> 
                    <h2 className="CADproject-title">Emergency Ventilator</h2>
                </div>
            </div>
            <div className="general-format">
                <div className="CADintro-div">
                    <div className="CADintro-content">
                        <h3 className="CADsubheader">Background</h3>
                            <p className="CADintro-text">When Covid-19 hit, it was my senior year. Instead of following the original syllabus, my professors asked us to consider the current equipment shortages that hospitals were experiencing and to design a product that could be used in place of common equipment.</p>
                            <p className="CADintro-text">Hospitals were experiencing an extreme shortage in ventilators. A typical hospital-grade ventilator cost between $25,000 and $50,000 and can take months to  manufacture and deliver. A cost effective, easy to assemble ventilator could function in place of the typical ventilator. </p>
                            <p className="CADintro-text">My goal was to design a product that cost only the fraction of the price of a hospital-grade ventilator, and could be used as a substitute when a ventilator was not available.</p>
                        </div>
                    <div className="CADintro-img-div">
                        <img className="CADintro-img" src={ventilatorRef}></img>
                        <p className="CADimg_description">Typical hospital-grade ventilators.</p>
                    </div>
                </div>
                <div className="process-div">
                    <h3 className="CADsubheader">Design Process</h3>
                    <p className="CADintro-text">Healthcare personnel perform manual ventilation using bag-valve masks when not using ventilators. If the manual ventilation process is automated, the healthcare staff would be able to care for more patients. </p>
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
                                    <p>Hospitals that are experiencing ventilator shortages need a way to supply oxygen to patients who need assistance breathing.</p>
                                    <p>The product does not need to provide all of the support that a hospital-grade ventilator can. It needs to be a fast solution that can fill the need gap while manufacturers and supply chains catch up with demand.</p>
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
                                            Can be constructed with materials that are easy to access
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Provides regulated breathing support  
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Compatible with equipment already in hospitals 
                                        </li>
                                        <li className="TZ-process-description-list">
                                            Compresses resuscitation bag evenly as bag deforms
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
                                    <p>I decided to use 3D printing as the main method for producing specialized parts. 3D printing is incredibly useful for rapid prototyping and a viable substitute when mass manufacturing is not an option.</p>
                                    <p>Bag-valve masks are used for manual ventilation. Manual ventilation can assist patients in breathing when ventilators are not available.</p>
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
                <div className="final-design-div">
                    <h3 className="CADsubheader">Final Design</h3>
                    <div className="final-design">
                        <div className="video-div">
                            <video id="design-video" width="750vw" controls>
                                <source src={ventFullVideo} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="key-features-div">
                            <p className="key-features"><b>Key Features</b></p>
                                <ul className="key-features-li">
                                    <li>Two 3D printable compressors with blunt tips for even compression of the resuscitator bag even as the bag deforms.</li>
                                    <li>Arduino positioned in control box and connected to motor. Arduino can be coded to control motor.</li>
                                    <li>3D printed Arduino casing with gap for LCD screen. LCD will display respiratory rate and tidal volume.</li>
                                    <li>2000 Series Dual Mode Servo with various speeds and rpm adjusted by Arduino.</li>
                                    <li>Gear shaft moves down a T-slotted aluminum rod.</li>
                                    <li>Components secure to wood block, an easy to procure resource.</li>
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