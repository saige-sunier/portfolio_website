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
    const testCartoon='./images/lightbulb.png';
    const DP1='./images/DesignPrinciples/Newborn-thermo-stable.png';
    const DP2='./images/DesignPrinciples/Newborn-hypothermic.png';
    const DP3='./images/DesignPrinciples/Transport-hand-carry.png';
    const DP4='./images/DesignPrinciples/whole-product-iec.png';
    const DP5='./images/DesignPrinciples/CE-mark.png';
    const DP6='./images/DesignPrinciples/Switch-On.png';
    const DP7='./images/DesignPrinciples/Lightbulb-DtM.png';
    const DP8='./images/DesignPrinciples/fmea-detection-positive.png';
    const DP9='./images/DesignPrinciples/Box-fancy.png';
    const DP10='./images/DesignPrinciples/Feels-warm.png';
    const DP11='./images/DesignPrinciples/iGadget.png';
    const DP12='./images/DesignPrinciples/Conductive-warmer-confidence.png';
    const DP13='./images/DesignPrinciples/Clinician-happy.png';
    const DP14='./images/DesignPrinciples/Guideline.png';
    const DP15='./images/DesignPrinciples/Hyperthermia.png';
    const DP16='./images/DesignPrinciples/KMC.png';
    const DP17='./images/DesignPrinciples/Patient-access.png';
    const DP18='./images/DesignPrinciples/Patient-visibility.png';
    const DP19='./images/DesignPrinciples/Newborn-isolation.png';
    const DP20='./images/DesignPrinciples/Portable.png';
    const DP21='./images/DesignPrinciples/Device-supervision.png';
    const DP22='./images/DesignPrinciples/Cleaning.png';
    const DP23='./images/DesignPrinciples/Jeep-simple.png';
    const DP24='./images/DesignPrinciples/';
    const DP25='./images/DesignPrinciples/';
    const DP26='./images/DesignPrinciples/';
    const DP27='./images/DesignPrinciples/';
    const DP28='./images/DesignPrinciples/Power-insecurity.png';
    const DP29='./images/DesignPrinciples/';
    const DP30='./images/DesignPrinciples/battery.png';
    const DP31='./images/DesignPrinciples/Relocate-device.png';
    const DP32='./images/DesignPrinciples/Limited-space.png';
    const DP33='./images/DesignPrinciples/Installation.png';
    const DP34='./images/DesignPrinciples/tco-hospital-infrastructure.png';
    const DP35='./images/DesignPrinciples/Ammeter.png';
    const DP36='./images/DesignPrinciples/Doc-Support.png';




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
                    <p className="DTM-need-text">Product requirements for medical devices made in high resource settings overlook many of the complexities that arise in the context of developing countries. The medical device industry strives to meet IEC standards and technical specifications. While all of this is important, qualitative requirements are vital for a product to be successful in a LRS. Our stakeholders helped us to identify what characteristics are necessary for a conductive warmer to be impactful in MSF project sites. </p>
                    <p className="DTM-need-text">Hover over any of the design principles to read more about the inputs that resulted in the requirement.  </p>
                    <div className="DP-div">
                        <div className="DP-containterA-div">
                            

                            {/* IS EFFECTIVE  */}
                            <div className="DP-category-div">
                                <h5 className="DP-title">Is Effective</h5>
                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" id="DP1" src={DP1} alt="DP1"/>
                                                <p className="DP-front-text">Prevents Hypothermia</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <ul className="DP-back-text">
                                                    <li>Newborns can become hypothermic with even a 30 minute break in warming.</li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP2}/>
                                                <p className="DP-front-text">Treats Mild Hypothermia</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <ul className="DP-back-text">
                                                    <li>The majority of outborn patients are hypothermic when admitted</li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP3}/>
                                                <p className="DP-front-text">Provides Warming During In-Hospital Transport</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <ul className="DP-back-text">
                                                    <li>Outdoor hallways between wards create risk for hypothermia</li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP4}/>
                                                <p className="DP-front-text">Meets IEC Specifications</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">IEC Standards document rigorous testing requirements to ensure product safety and quality.</p> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP5} />
                                                <p className="DP-front-text">Has CE Mark Certification</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">Products are required to have CE certification to be added to MSF's product catalog.</p> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP6}/>
                                                <p className="DP-front-text">Fast Warm-Up from Cold/Off State</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">Project sites experience unexpected births and newborn admissions requiring immediate warming.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* APPEARS EFFECTIVE */}
                            <div className="DP-category-div">
                                <h5 className="DP-title">Appears Effective</h5>
                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP7}/>
                                                <p className="DP-front-text">Device State is Obvious</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">Increase usability </p> 
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image"  src={DP8}/>
                                                <p className="DP-front-text">Appears Intuitive</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP9}/>
                                                <p className="DP-front-text">Appears Clean (resists stains)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP10}/>
                                                <p className="DP-front-text">Feels Warm</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP11}/>
                                                <p className="DP-front-text">Looks modern and high tech</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP12}/>
                                                <p className="DP-front-text">Looks familiar (matches medical device expectation)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                            
                    <div className="DP-containterA-div">

                            {/* USER FRIENDLY */}
                            <div className="DP-category-div">
                                <h5 className="DP-title">User Friendly</h5>
                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" id="DP1" src={DP13} alt="DP1"/>
                                                <p className="DP-front-text">Hard to Use Wrong</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <ul className="DP-back-text">
                                                    <li>Newborns can become hypothermic with even a 30 minute break in warming.</li>
                                                    <li>Preventing hypothermia reduces risk of mortality.</li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP14}/>
                                                <p className="DP-front-text">Requires minimal user training</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP15}/>
                                                <p className="DP-front-text">Limited risk of hyperthermia (over-heating)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP16}/>
                                                <p className="DP-front-text">Does not inhibit or discourage KMC</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP17} />
                                                <p className="DP-front-text">Provides warming during common patient diagnostics</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP18}/>
                                                <p className="DP-front-text">Fast warm-Up from cold/off state</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP19}/>
                                                <p className="DP-front-text">Discourages bed-sharing (infection control)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP20} />
                                                <p className="DP-front-text">Is portable (by small adult)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP21}/>
                                                <p className="DP-front-text">Requires minimal supervision</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                        {/* CONTEXT APPROPRIATE */}

                            <div className="DP-category-div">
                                <h5 className="DP-title">Context Appropriate</h5>
                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP22}/>
                                                <p className="DP-front-text">Easy to clean between patients with bleach</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image"  src={DP23}/>
                                                <p className="DP-front-text">Durable and rugged</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP24}/>
                                                <p className="DP-front-text">Low purchase price</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP25}/>
                                                <p className="DP-front-text">Stable in long term storage and shipping</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP26}/>
                                                <p className="DP-front-text">Does not require sterile, temp controlled environment for operation</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP27}/>
                                                <p className="DP-front-text">Limited consumables, maintenance</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP28}/>
                                                <p className="DP-front-text">Compatible with unstable electricity (power surges, brownouts, blackouts)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP29}/>
                                                <p className="DP-front-text">Compatible of wide range of ambient temperatures</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP30}/>
                                                <p className="DP-front-text">Internal battery backup</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP31}/>
                                                <p className="DP-front-text">Easy to relocate and reinstall device</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP32}/>
                                                <p className="DP-front-text">Limited space requirements (small/crowded wards)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP33}/>
                                                <p className="DP-front-text">Easy to deliver and reinstall</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>

                                <div className="DP-row">
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP34}/>
                                                <p className="DP-front-text">Limited infrastructure requirements</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP35}/>
                                                <p className="DP-front-text">Low wattage device (under 40W)</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="DP-block-area">
                                        <div className="flip-block-inner">
                                            <div className="flip-block-front">
                                                <img className="DP-image" src={DP36}/>
                                                <p className="DP-front-text">Easy to maintain by HCN biomed with limited tools, training</p>
                                            </div>
                                            <div className="flip-block-back">
                                                <p className="DP-back-text">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                                <p className="DP-back-text">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
)


})