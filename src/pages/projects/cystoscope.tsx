import './cystoscope.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

export const Cystoscope = withRouter((props) =>{

    const cystoscope='./images/cystoscope-cover.png'
    const lightbulb='./images/lightbulb.png'
    const sketching='./images/cysto-drawing.png'
    const scales='./images/scales.png'
    const fusionLogo='./images/fusion-logo.png'

    return (
        <div className="cystoscope-div">
            <div className="header-block-div">
                <h2>Cystoscope</h2>
            </div>
            <div className="general-format">
                <div className="intro-div">
                    <h3 className="subheader">Story:</h3>
                    <p>In a design and manufacturing class, we were challenged to re-design a cystocope. The goal was to make the product easy-to-use, comforable, and accurate for physician use but aesthetically calming for the patients. I had to ensure that the design could manufacture on a large scale. </p>
                </div>
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
                                    <p className="process-description">I started by looking at cystocopes and considered the mechanical and electrical components. For the casing, I wanted to break free from the convensional shape and play with some new ideas.</p>
                                    <p className="process-description">I looked to everyday objects for inspiration and considered what people hold for long periods of time. Xbox game controllers ended up being my inspiration.</p>
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
                                    <p className="process-description">Sketch. Sketch. Sketch.</p>
                                    <p className="process-description">I am a very visual learner. The best way for me to evaluate an idea I may have is to sketch it out. </p>
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
                                    <p className="process-description">I decided to prioritize creativity and patient comfort and chose my "X-box controller" design over more convensional shapes. </p>
                                    <p className="process-description">The device is visually familiar to appease patient anxiety and prioritizes ergonomic comfort for the physician.</p>
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
                                    <p className="process-description">In order to make the product scalable I wanted it to be compatible with injection molding methods.</p> 
                                    <p className="process-description"> The device separates along a slanted split line. I focused on draft angles and reduced manufacturing costs by requiring only two slide pins.</p>
                                    <p className="process-description">Check out the animation for a better look at the final CAD!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="final-design-div">
                    <h3 className="subheader">Final Design:</h3>
                    <div className="final-design">
                        <div className="sidebar-left">TEST1</div>
                        <div className="center-image">
                            <img className="project-image" id="cystoscope" src={cystoscope} alt="cystoscope"/>
                        </div>
                        <div className="sidebar-right">TEST2</div>    
                    </div>
                </div>
                <div className="addons-div">
            </div>
            </div>

        </div>
    )
    
});