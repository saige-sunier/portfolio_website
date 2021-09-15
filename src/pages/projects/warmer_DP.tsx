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

    const logos='./images/dtm_msf-logos.png';

return (
    <div className="warmer_DP-div" id="warmer_dp">
        <div className="header-block-div">
            <h2 className="project-title">Design that Matters: Designing Solutions to Neonatal Hypothermia</h2>
        </div>
        <div className="general-format">
            <div className="intro-div">
                <div className="intro-content">
                    <h3 className="subheader">Background</h3>
                        <p className="intro-text">When Covid-19 hit, it was my senior year. Instead of following the original syllabus, my professors asked us to consider the current equipment shortages that hospitals were experiencing and to design a product that could be used in place of common equipment.</p>
                        <p className="intro-text">Hospitals were experiencing an extreme shortage in ventilators. A typical hospital-grade ventilator cost between $25,000 and $50,000 and can take months to  manufacture and deliver. A cost effective, easy to assemble ventilator could function in place of the typical ventilator. </p>
                        <p className="intro-text">My goal was to design a product that cost only the fraction of the price of a hospital-grade ventilator, and could be used as a substitute when a ventilator was not available.</p>
                    </div>
                <div className="intro-img-div">
                    <img className="intro-img" src={logos}></img>
                </div>
            </div>
        </div>
    </div>
)


})