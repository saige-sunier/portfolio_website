import './footer.css'
export const Footer = ()=>{
    
    return(
        <div className="footer-div">
            <div className="contact-info">
                <button className="contact-buttons">
                    <img src="../../images/email-logo.png" className="contact-logo"></img>
                    <a href={`mailto: saige.sunier@gmail.com`}>saige.sunier@gmail.com</a>
                </button>
                <button className="contact-buttons">
                    <img src="../../images/linkedin-logo.png" className="contact-logo"></img>
                    <a href="https://www.linkedin.com/in/saige-sunier-8a7ba4151/">linkedin/saigesunier</a>
                </button>
                <button className="contact-buttons">
                    <img src="../../images/resume-logo.png" className="contact-logo"></img>
                    <a href="../../images/logo-blk.PNG" download>download resume</a>
                </button>
            </div>
        </div>
    )
}