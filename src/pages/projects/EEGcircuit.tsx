import './EEGcircuit.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

export const EEGcircuitPage = withRouter((props) =>{
 
    const p300='./images/P300speller.png';

    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="EEG-div" id="EEG">
            <div className="EEGheader-block-div">
                <div>
                    <h2 className="CADproject-title-sm">Bio-Amplifiers & Implant Devices:</h2> 
                    <h2 className="CADproject-title">EEG Signal Processor</h2>
                </div>
            </div>
            <div className="general-format">
                <div className="CADintro-div">
                    <div className="CADintro-content">
                        <h3 className="CADsubheader">Background</h3>
                        <p className="CADintro-text">This project explores the design and assembly of a functional 2-channel scalp EEG signal processing system. <b>I collaborated with a fellow student to design a circuit that successfully filtered and amplified neural signals gathered from a 2-channel scalp EEG system. </b> The EEG system is designed to be used with P300 speller, a brain computer interface (BCI) that allows people to “type” with their thoughts. P300 Spellers are commonly used to help patients with Amyotrophic Lateral Sclerosis (ALS) communicate. </p>
                        <p className="CADintro-text">The final circuit was designed and tested on Altium PCB designer. After optimizing for manufacturing cost, we assembled and tested the system on a 2-layer printed circuit board. <b>Our final product was one of two within the class to successfully detect neurological signals. </b></p>
                    </div>
                    <div className="CADintro-img-div">
                        <img className="EEGintro-img" src={p300}></img>
                        <p className="CADimg_description">P300 Speller interface. EEG signals are processed to help patients with ALS communicate. </p>
                    </div>
                </div>
                <div className="EEG-designReqs">
                    <h3 className="CADsubheader">Design Process</h3>
                    <h4 className="CADsubheader2">System Requirements:</h4>
                    <ul className="EEG-designReqs-list">
                        <li>Noise: &lt; 2 μV RMS total noise in band from 0.1 Hz to 50 Hz</li>
                        <li>Bandwidth: 0.1 Hz to 50 Hz</li>
                        <li>Input Voltage Range: At least +/- 250 μV or 500 μV peak to peak</li>
                        <li>Gain: Determined optimal gain of ~1500</li>
                        <li>Input Offset Range: +/- 150 mV without saturating</li>
                        <li>Power Consumption: &lt; 5 mA</li>
                        <li>Power Source: One 3V CR123A battery</li>
                        <li>Distortion: &lt; 1%</li>
                        <li>Safety: No potential for leakage currents into the subject &gt; 1 μA</li>
                        <li>Size: PCB as small as reasonably possible, ideally &lt; 5 cm x 10 cm</li>
                        <li>Ease of Manufacturing: 2-layer, within guidelines of the Advanced Circuits $33 each or $66 each special</li>
                        <li>Cost: &lt; $50 per unit (based on a volume of 100 units), excluding data acquisition system</li>

                    </ul>
                </div>
            </div>
        </div>
    )
});