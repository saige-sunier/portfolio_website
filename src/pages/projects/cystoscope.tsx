import './cystoscope.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

export const Cystoscope = withRouter((props) =>{

    const cystoscope='./images/cystoscope-cover.png'
    const ventilator='./images/ventilator-cover.png';
    const lightbulb='./images/lightbulb.png'
    const sketching='./images/cysto-drawing.png'
    const scales='./images/scales.png'
    const fusionLogo='./images/fusion-logo.png'
    const cystoVideo="./videos/cystoscope-components.mp4"

    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="cystoscope-div" id="cystoscope">
            <div className="header-block-div">
                <h2 className="project-title">Cystoscope</h2>
            </div>
            <div className="project-page-sideNav">
                    <p className="project-nav-title">More Projects:</p>
                    <img onClick={() => handleSideNavClick(Routes.cystoscope)} src={cystoscope} className="project-nav-image"></img>
                    <img onClick={() => handleSideNavClick(Routes.ventilator)} src={ventilator} className="project-nav-image"></img>
                    <img onClick={() => handleSideNavClick(Routes.cystoscope)} src={cystoscope} className="project-nav-image"></img>
                    <img className="project-nav-image" src={cystoscope}></img>
                    <img className="project-nav-image" src={cystoscope}></img>
                    <img className="project-nav-image" src={cystoscope}></img> 
            </div>
            <div className="general-format">
                <div className="intro-div">
                    <h3 className="subheader">Story:</h3>
                    <p>In a design and manufacturing class, we were challenged to re-design a cystocope. The goal was to make the product easy-to-use, comforable, and accurate for physician use but aesthetically calming for the patients. I had to ensure that the cystoscope casing could house all electronic and mechanical components and that the product could manufacture on a large scale. </p>
                </div>
                <hr/>
                <div className="process-div">
                    <h3 className="subheader">Design Process:</h3>
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
                        {/* <div className="sidebar-left">TEST1</div> */}
                        <div className="video-div">
                            <video id="design-video" width="900" controls>
                                <source src={cystoVideo} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="addons-div">
            </div>
            </div>

        </div>
    )
    
});