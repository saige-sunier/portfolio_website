import './footer.css'
export const Footer = ()=>{

    const sendEmail=() => {
        window.location.href=`mailto: saige.sunier@gmail.com`;    
    }

    const LinkedIn=() =>{
        window.location.href="https://www.linkedin.com/in/saige-sunier-8a7ba4151/"
    }

    
    return(
        <div className="footer-div">
            <div className="contact-info">
                <button className="contact-buttons">
                    <img onClick={()=> sendEmail()} src="../../images/email-logo.png" className="contact-logo"></img>
                    <a className="link" href={`mailto: saige.sunier@gmail.com`}>saige.sunier@gmail.com</a>
                </button>
                <button className="contact-buttons">
                    <img onClick={()=> LinkedIn()} src="../../images/linkedin-logo.png" className="contact-logo"></img>
                    <a className="link" href="https://www.linkedin.com/in/saige-sunier-8a7ba4151/">linkedin/saigesunier</a>
                </button>
                <button className="contact-buttons">
                    <img src="../../images/resume-logo.png" className="contact-logo"></img>
                    <a className="link" href="../../pdf/Saige Sunier Resume.pdf" download>download resume</a>
                </button>
            </div>
        </div>
    )
}