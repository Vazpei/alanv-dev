import './../styles/Contact.css'
export default function Contact() {
    return(
        <>
        <div className="contact-title">
           <h2>Contacto</h2>
        </div>
        <div className="contact-container">
            <div className="contact-name contact-space">
                <input type="text" placeholder="Nombre"/>
            </div>
            <div className="contact-email contact-space">
                <input type="text" name="" id="" placeholder="email@example.com"/>
            </div>
            <div className="contact-message contact-space">
                <textarea name="" id="" className="contact-message" placeholder='Message'></textarea>
            </div>
            <div className="contact-button">
                <button>Enviar</button>
            </div>
        </div>
        </>
    )
};