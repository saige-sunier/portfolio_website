import './header.css'
import {useLocation, withRouter} from 'react-router-dom';
import {Link} from 'react-scroll';
import { Routes } from '../routes';
import { homedir } from 'node:os';

export const Header = withRouter((props) => {

    const currentPath = useLocation().pathname;

    const handleHeaderNav=(section: string):void =>{
        props.history.push(`${Routes.home}#${section}`)
    }

    return(
        <div className="header-div">
            <h4 className="header-title">Saige Sunier</h4>
            <img onClick={()=> props.history.push(Routes.home)} src="../../images/logo_blk.PNG" alt="SOSA" className="home-logo"/>
            <div className="header-nav-menu">
                   {currentPath == Routes.home ?
                    <>
                        <button className="header-nav-button"><Link to="about" smooth={true}>about</Link></button>
                        <button className="header-nav-button"> <Link to="projects" smooth={true}>projects</Link></button>
                        <button className="header-nav-button"> <Link to="contact" smooth={true}>contact</Link></button>
                    </>
                        :
                    <>
                        <button className="header-nav-button" onClick={()=>handleHeaderNav('about')}>about</button>
                        <button className="header-nav-button" onClick={()=>handleHeaderNav('projects')}>projects</button>
                        <button className="header-nav-button" onClick={()=>handleHeaderNav('contact')}>contact</button>
                    </>
                    }
            </div>
        </div>
    )
})