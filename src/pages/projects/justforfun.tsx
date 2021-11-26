import './justforfun.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

const catan='./images/catan-board.png';
const website='./images/website-screenshot.png';
const ornaments='./images/ornaments.png';
const chair='./images/armchair.png';

const img1='./images/DSC00059.jpeg';
const img2='./images/DSC00004.jpeg';
const img3='./images/DSC00022.jpeg';
const img4='./images/DSC00040.jpeg';
const img5='./images/DSC00116.jpeg';
const img6='./images/DSC00433.jpeg';
const img7='./images/DSC00659.jpeg';
const img8='./images/DSC00742.jpeg';
const img9='./images/DSC00870.jpeg';
const img10='./images/DSC00918.jpeg';
const img11='./images/DSC09573.jpeg';
const img12='./images/DSC09756.jpeg';


export const JustForFun = withRouter((props) =>{
 

    return (
        <div className="fun-div" id="just_for_fun">
            <div className="FUNheader-block-div">
                <div>
                    <h2 className="FUNproject-title-sm">Just for Fun</h2> 
                    <h2 className="FUNproject-title">Small Projects Made by Me</h2>
                </div>
            </div>
            <div className="general-format">
                <div className="projects-flex-div">
                    <div className="project">
                        <img className="project-img" src={catan}></img>
                        <h4 className="proj-title">Custom Catan Board</h4>
                        <p className="proj-text">My boyfriend is obsessed with Settlers of Catan so for Christmas/Hanukkah last year I made him a custom Catan board. I used Adobe illustrator to design the board. I laser cut the board pieces and stained the wood to add an extra touch. I 3D printed and painted the building components. Finally, I designed and laser cut a custom box for a great Christmas Day surprise.</p>
                    </div>
                    <div className="project">
                        <img className="project-img" src={website}></img>
                        <h4 className="proj-title">My Portfolio Website</h4>
                        <p className="proj-text">I haven’t coded in about a year and building my portfolio website seemed like a great opportunity to freshen up my skills. Instead of using a website builder, I decided to teach myself React/CSS and code my website from scratch. I had a lot of fun diving back into the coding world again!</p>
                    </div>
                    <div className="project">
                        <img className="project-img" src={ornaments}></img>
                        <h4 className="proj-title">Pet Lover’s Ornaments</h4>
                        <p className="proj-text">My sister is the quintessential millennial dog-mom. Her 7-lb dog dresses better than I do and reigns supreme over her 14-lb cat… and she just so happens to collect Christmas ornaments. To add to her collection, I designed these 3D printed figurines using Fusion360 and Meshmixer and hand painted them to bring them to life!</p>
                    </div>
                    <div className="project">
                        <img className="project-img" src={chair}></img>
                        <h4 className="proj-title">Chair Makeover</h4>
                        <p className="proj-text">In the middle of the pandemic I had the crazy idea that I was going to master the art of furniture flipping. I purchased a chair for $5 and refurbished it with the initial plan of selling it. Turns out I liked it too much to sell… maybe furniture “flipping” is not quite for me but I definitely had a lot of fun giving this chair a makeover.</p>
                    </div>
                    

                </div>
                <div className="images-div">
                    <h3 className="subheader3">Photography</h3>
                    <p className= "images-intro-text">I am far from a professional photographer but it’s a new skill I have been working on this past year. I love to adventure and will gladly wander into the woods for days at a time. My love for the outdoors is a huge part of me and with each new trip I get a little bit better at sharing nature’s wonders. </p>
                    <div className="photos-flex-div">
                        <img className="photo" src={img1}></img>
                        <img className="photo" src={img9}></img>
                        <img className="photo" src={img3}></img>
                        <img className="photo" src={img12}></img>
                        <img className="photo" src={img5}></img>
                        <img className="photo" src={img10}></img>
                        <img className="photo" src={img8}></img>
                        <img className="photo" src={img4}></img>
                        <img className="photo" src={img11}></img>
                        <img className="photo" src={img2}></img>
                        <img className="photo" src={img6}></img>
                        <img className="photo" src={img7}></img>
                    </div>
                </div>
            </div>
        </div>
    )
})