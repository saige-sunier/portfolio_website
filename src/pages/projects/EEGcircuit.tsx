import './EEGcircuit.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../../routes';
import { useEffect } from 'react';

export const EEGcircuitPage = withRouter((props) =>{


    const handleSideNavClick = (projectRoute:Routes) =>{
        props.history.push(projectRoute);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="EEG-div" id="EEG">
            <div className="header-block-div">
                <div>
                    <h2 className="CADproject-title-sm">Bio-Amplifiers & Implant Devices:</h2> 
                    <h2 className="CADproject-title">EEG Signal Processor</h2>
                </div>
            </div>
        </div>
    )
});