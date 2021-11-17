import './cystoscope.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

export const Cystoscope = withRouter((props) =>{

    const cystoscope='./images/cystoscope-cover.png'
    const ventilator='./images/ventilator-cover.png';
    const rigidCysto='./images/rigid_cystoscope.png';
    const lightbulb='./images/lightbulb.png';
    const sketching='./images/cysto-drawing.png';
    const scales='./images/scales.png';
    const fusionLogo='./images/fusion-logo.png';
    const cystoSketches='./images/cysto_sketches.png';
    const cystoVideo="./videos/cysto_videoV2 copy2.mp4";

    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="cystoscope-div" id="cystoscope">
            <div className="header-block-div">
                <div>
                    <h2 className="CADproject-title-sm">Adv. Design & Manufacturing:</h2> 
                    <h2 className="CADproject-title"> Cystoscope Re-Design</h2>
                </div>
            </div>
            <div className="general-format">
                <div className="CADintro-div">
                    <div className="CADintro-content">
                        <h3 className="CADsubheader">Background</h3>
                        <p className="CADintro-text">In my senior year design and manufacturing class, we were challenged to re-design a rigid cystoscope. The goal was to make the product easy-to-use, comfortable, and accurate for physician use. We also were asked to consider the patient and to design a product that was aesthetically calming for the patients. The design had to house all electronic and mechanical components and the product needed to be manufacturable on a large scale through injection molding.  </p>
                    </div>
                    <div className="CADintro-img-div">
                        <img className="CYSintro-img" src={rigidCysto}></img>
                        <p className="CADimg_description">Rigid cystoscope used to perform endoscopies.</p>
                    </div>
                </div>

                <hr className="hr-divider-pages"></hr>

                <div className="process-div">
                    <h3 className="CADsubheader">Design Process</h3>
                    <div className="process-grid">
                        <div className="process-block-area">
                            <div className="flip-block-inner-CAD">
                                <div className="flip-block-front-CAD">
                                    <p className="CADprocess-title">Inspiration</p>
                                    <img className="process-image" id="lightbulb" src={lightbulb} alt="lightbulb"/>
                                </div>
                                <div className="flip-block-back-CAD">
                                    <p className="process-description-sm">For my design, I wanted to break free from the conventional cystoscope shape and play with some new ideas.</p>
                                    <p className="process-description-sm">I looked to everyday objects for inspiration and considered objects that are comfortable to hold for long periods of time and easy-to-use.</p>
                                    <p className="process-description-sm">X-Box Controllers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-block-area">
                            <div className="flip-block-inner-CAD">
                                <div className="flip-block-front-CAD">
                                    <p className="CADprocess-title">Design Concepts</p>
                                    <img className="process-image" id="sketching" src={sketching} alt="sketching"/>
                                </div>
                                <div className="flip-block-back-CAD">
                                    <p className="process-description-sm">Sketch. Sketch. Sketch.</p>
                                    <p className="process-description-sm">I am a very visual learner. The best way for me to evaluate my ideas is to sketch it out. I also played around with clay to rapidly prototype some of my ideas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-block-area">
                            <div className="flip-block-inner-CAD">
                                <div className="flip-block-front-CAD">
                                    <p className="CADprocess-title">Trade Offs</p>
                                    <img className="process-image" id="scales" src={scales} alt="scales"/>
                                </div>
                                <div className="flip-block-back-CAD">
                                    <p className="process-description-sm">I decided to prioritize creativity and patient comfort and chose my "X-box controller" design over my other ideas. </p>
                                    <p className="process-description-sm">The device is visually familiar to appease patient anxiety and prioritizes ergonomic comfort for the physician.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-block-area">
                            <div className="flip-block-inner-CAD">
                                <div className="flip-block-front-CAD">
                                    <p className="CADprocess-title">CAD Design</p>
                                    <img className="process-image" id="fusion-logo" src={fusionLogo} alt="fusion-logo"/>
                                </div>
                                <div className="flip-block-back-CAD">
                                    <p className="process-description-sm">After playing around with typical CAD features, I realized to get the shape I wanted I had to use Fusion’s freeform tool. </p> 
                                    <p className="process-description-sm">I wanted it to be compatible with injection molding methods. I designed the device to separate along a slanted split line. I focused on draft angles and reducing slide pin requirements.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="sketches-div">
                        <h4 className="CADsubheader2">Design Sketches</h4>
                        <div className="process-sketches">
                            <img className="process-sketches-img" src={cystoSketches}></img>
                        </div>
                        <div className="sketches-descriptions"> 
                            <p className="CADimg_description">Sketches produced when brainstorming different concepts.</p>
                            <p className="CADimg_description">Rapid prototyping with clay.</p>
                        </div>
                    </div>
                </div>

                <hr className="hr-divider-pages"></hr>

                <div className="final-design-div">
                    <h3 className="CADsubheader">Final Design</h3>
                    <p className="final-design-description">Click to watch a full dissasembly animation of the design.</p>
                    <div className="final-design">
                        <div className="video-div">
                            <video id="design-video" width="700vw" controls>
                                <source src={cystoVideo} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="key-features-div">
                            <p className="key-features"><b>Key Features</b></p>
                            <p className="key-features-sub">Functionality</p>
                                <ul className="key-features-li">
                                    <li>Housing for optical components with removable sheath </li>
                                    <li>Tubing for water flow during endoscopy procedure</li>
                                    <li>Knobs to control water inflow and outflow</li>
                                </ul>
                            <p className="key-features-sub">Manufacturing</p>
                                <ul className="key-features-li">
                                    <li>Splits into two components for injection molding manufacturing</li>
                                    <li>Draft angles greater than 1 degree</li>
                                    <li>Only two slide pins required for mold, overall reducing manufacturing costs</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    
});