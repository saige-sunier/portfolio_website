import './footer.css'
export const Footer = ()=>{

    const sendEmail=() => {
        window.location.href=`mailto: saige.sunier@gmail.com`;    
    }

    const LinkedIn=() =>{
        window.open(`https://www.linkedin.com/in/saige-sunier-8a7ba4151/`)
    }

    
    return(
        <div className="footer-div">
            {/* <hr className='footer-line'></hr> */}
            <div className="contact-info">
                <button className="contact-buttons">
                    <img onClick={()=> sendEmail()} src="/portfolio_website/images/email-logo.png" className="contact-logo"></img>
                    <a className="link" href={`mailto: saige.sunier@gmail.com`}>saige.sunier@gmail.com</a>
                </button>
                <button className="contact-buttons">
                    <img onClick={()=> LinkedIn()} src="/portfolio_website/images/linkedin-logo.png" className="contact-logo"></img>
                    <a className="link" href="https://www.linkedin.com/in/saige-sunier-8a7ba4151/">linkedin/saigesunier</a>
                </button>
                <button className="contact-buttons">
                    <img src="/portfolio_website/images/resume-logo.png" className="contact-logo"></img>
                    <a className="link" href="/portfolio_website/pdf/Saige_Sunier_Resume.pdf" download>download resume</a>
                </button>
            </div>
        </div>
    )
}