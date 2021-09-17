import './warmer_DP.css'
import {useLocation, withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { rgbToHex, withStyles } from '@material-ui/core/styles';
// import MuiAccordion from '@material-ui/core/Accordion';
// import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
// import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';

export const Warmer_DP = withRouter((props) =>{

    const logos='./images/dtmxmsf-logo.png';
    const newbornBubble='./images/newborn-bubbleWrap.png';
    const gloveWarming='./images/hotwater-glove.png';
    const incubator='./images/incubator.png';
    const kmc='./images/kmc.png';
    const thermometer='./images/thermometer.png';
    const transportWarming='./images/transport-warming.png';

return (
    <div className="warmer_DP-div" id="warmer_dp">
        <div className="header-block-div">
            <div>
                <h2 className="DTMproject-title-sm">Design that Matters</h2> 
                <h2 className="DTMproject-title">Designing Solutions for Neonatal Hypothemia</h2>
            </div>
        </div>
        <div className="general-format">
            <div className="DTM-intro-div">
                <div className="DTM-intro-content">
                    <h3 className="subheader">Background</h3>
                        <p className="DTM-intro-text">I currently work at Design that Matters, a non-profit that specializes in applying human-centered design methodologies to design products and systems for low-resource settings. We are partnered with MSF’s Japan Innovation Unit (JIU) to reduce incidences of neonatal hypothermia in MSF project sites. Our goal is to design and implement a newborn warmer to be used in low resource settings, specifically MSF projects.</p>
                    </div>
                <div className="DTM-intro-img-div">
                    <img className="DTM-intro-img" src={logos}></img>
                </div>
            </div>
            <div className="need-div">
                <h3 className="subheader">The Need</h3>
                    <div className="need-div-intro">
                        <div className="DTM-need-text">
                            <p>Every year four million babies die within the first four weeks of life, 99% of these deaths occur in low and middle-income countries. <b>Neonatal hypothermia is a major contributor to the millions of incidences of neonatal morbidity and mortality around the world.</b> It is a comorbidity factor to the main direct causes of neonatal death. </p>
                        </div>
                        <div className="DTM-need-img-div">
                            <div className="DTM-need-left">
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={incubator}></img>
                                    <p className="need-img-text"><b>Incubators</b> are expensive, fragile, and difficult to clean. </p>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={thermometer}></img>
                                    <p className="need-img-text"><b>Radiant warmers</b> are dangerous without expensive, disposable skin temperature probes. </p>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={gloveWarming}></img>
                                    <p className="need-img-text"><b>Hot water bottles and water-filled surgical gloves </b>are dangerous; a break in a glove can result in a scalded newborn.</p>
                                </div>
                            </div>
                            <div className="DTM-need-right">
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={kmc}></img>
                                    <p className="need-img-text">Breaks in <b>Kangaroo Mother Care (KMC)</b> are hard to avoid; even a 30 minute break in warming can result in the onset of hypothermia. </p>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={transportWarming}></img>
                                    <p className="need-img-text"><b>Blankets and hats </b>are not enough to prevent hypothermia during in-hospital transport.</p>
                                </div>
                            </div>
                            
                        </div>
                `   </div>
                <div className="DTM-need-statement">
                    <p className="DTM-need-text2"><b>MSF project sites</b>, and other low-resource setting hospitals, <b>that provide 24-hour care to newborn patients </b></p>
                    <p className="DTM-need-text3"> <b>NEED</b></p>
                    <p className="DTM-need-text2"><b>A durable, easy-to-clean and hand-portable single-infant warmer that is hard to use wrong, requires limited maintenance, has no consumables, and costs significantly less than a radiant warmer.</b></p>  
                </div>
            </div>
            <div className="DTM-process-div">
                <h3 className="subheader">Design Process</h3>
            </div>
        </div>
    </div>
)


})