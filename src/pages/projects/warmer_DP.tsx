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
    const circle1='./images/circle1.png';
    const circle2='./images/circle2.png';
    const circle3='./images/circle3.png';
    const patientJourney='./images/patient-journey-marked.png';
    const designPrinciples='./images/design-principles.png';

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
                <h3 className="subheader">The Need: Neonatal Hypothermia</h3>
                    <div className="need-div-intro">
                        <div className="DTM-need-text">
                            <p>Every year four million babies die within the first four weeks of life, 99% of these deaths occur in low and middle-income countries. <b>Neonatal hypothermia is a major contributor to the millions of incidences of neonatal morbidity and mortality around the world.</b> It is a comorbidity factor to the main direct causes of neonatal death. </p>
                        </div>
                `   </div>
                <div className="DTM-need-statement">
                    <p className="DTM-need-text2"><b>MSF project sites</b>, and other low-resource setting hospitals, <b>that provide 24-hour care to newborn patients </b></p>
                    <p className="DTM-need-text3"> <b>NEED</b></p>
                    <p className="DTM-need-text2"><b>A durable, easy-to-clean and hand-portable single-infant warmer that is hard to use wrong, requires limited maintenance, has no consumables, and costs significantly less than a radiant warmer.</b></p>  
                </div>
            </div>
            <div className="DTM-process-div">
                <h3 className="subheader">Developing Design Principles</h3>
                <p className="DTM-need-text"> Over the past year and a half I have collaborated with MSF personnel located in Japan, Barcelona, Democratic Republic of Congo, Kenya, Yemen,  India, and Senegal. We have brought together a wide range of stakeholders to develop product requirements and specifications for a newborn warmer. </p>
                <p className="DTM-need-text">We have hosted four Workshops with our stakeholders, performed several exit interviews with MSF staff, and conducted one-on-one and small group interviews with various stakeholders. </p>
                <p className="DTM-need-text">Our goals throughout this process were:</p>
                <div className="process-circle-div">
                    <div className="process-circle">
                        <img className="number-circle" src={circle1}></img>
                        <p className="number-text">Identify warming gaps in the patient’s journey from admittance to discharge </p>
                    </div>
                    <div className="process-circle">
                        <img className="number-circle" src={circle2}></img>
                        <p className="number-text">Identify current warming solutions and the barriers to their implementation</p>
                    </div>
                    <div className="process-circle">
                        <img className="number-circle" src={circle3}></img>
                        <p className="number-text"> Define qualitative design principles for a newborn warmer </p>
                    </div>
                </div>
                <div className="patient-journey-map-div">
                    <h4 className="subheader2">Patient Journey Map</h4>
                    <p className="DTM-need-text">DtM conducted a field visit in February 2020 at Goyalmara Hospital in Bangladesh. I joined the team in the Summer of 2020 and  contributed to the post study analysis. The field study gave us insight on the prevalence of hypothermia as well as the needs for a supplemental warming device. Our findings were presented at MSF’s 2021 Virtual Pediatric Days. I was a co-author on the report <a href='https://www.researchgate.net/publication/351152859_Neonatal_Hypothermia_A_Solution-Focused_Field_Assessment_in_Bangladesh'>Neonatal Hypothermia: A Solution-Focused Field Assessment in Bangladesh. </a> </p>
                    <p className="DTM-need-text">The patient journey map demonstrates when and where newborns experience gaps in warming. Goyalmara staff expressed that the newborn unit had a significant gap in warming. High patient load, cultural resistance to KMC, and unstable electricity result in a need for supplemental warming resources within the hospital setting. </p>
                    <img className="patient-journey" src={patientJourney}></img>
                    <p className="DTM-need-text">Warming gaps occur at various stages within a newborn's journey from admittance to discharge. We recognize that we will not be able to solve all warming gaps with one solution, instead various solutions will need to be developed to combat all warming gaps. </p>
                    <p className="DTM-need-text">DtM and MSF stakeholders decided that addressing the warming gaps in neonatal units and during transport within hospitals is a feasible and meaningful problem to focus on. </p>
                </div>   
                <div className="current-warming-div">
                    <h4 className="subheader2">Current Warming Solutions</h4>
                    <p className="DTM-need-text">Interviews with MSF staff, the field visit to Goyalmara Hospital in Bangladesh, and workshops with various MSF stakeholders have concluded that: </p>
                    <div className="DTM-need-img-div">
                            <div className="DTM-need-left">
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={incubator}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Incubators</b> are expensive, fragile, and difficult to clean and maintain. Bed sharing in incubators is common due to high patient to equipment ratios, increasing the risk of infection spread amongst unstable newborns.  </p>
                                    </div>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={thermometer}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Radiant warmers</b>  are dangerous without expensive, disposable skin temperature probes. They draw large amounts of current, making them incompatible with electrically insecure areas. </p>
                                    </div>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={gloveWarming}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Hot water bottles and water-filled surgical gloves </b>are dangerous; a break in a glove can result in a scalded newborn. Unregulated temperatures can result in hypothermia or hyperthermia.</p>
                                    </div>  
                                </div>
                            </div>
                            <div className="DTM-need-right">
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={kmc}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text">Breaks in <b>Kangaroo Mother Care (KMC)</b> are hard to avoid; even a 30 minute break in warming can result in the onset of hypothermia. KMC uptake is difficult after complex births and in areas with cultural barriers. </p>
                                    </div>
                                </div>
                                <div className="DTM-need-area">
                                    <img className="DTM-need-img" src={transportWarming}></img>
                                    <div className="need-img-text-area">
                                        <p className="need-img-text"><b>Blankets and hats </b>are not enough to prevent hypothermia during in-hospital transport. They can prevent heat loss but do not provide heat to already hypothermic newborns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
                <div className="design-principles-div">
                    <h4 className="subheader2">Design Principles</h4>
                    <img className="DP-img" src={designPrinciples}></img>
                </div>
            </div>
        </div>
    </div>
)


})