import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1dc66f10-fcb7-46be-ac22-4ae82d384517");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message envoyé!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Contactez-nous <img src={msg_icon} alt="contactez nous" /></h3>
            <p>Vous avez des questions ? N'hésitez pas à nous contacter</p>
        <ul>
            <li> <img src={mail_icon} alt="email"/>Contact@Edusity.dev</li>
            <li><img src={phone_icon} alt="téléphone"/>+33 6 12 34 56 78</li>
            <li><img src={location_icon} alt="adresse"/>1 rue de la Paix, 75000 Paris</li>
        </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Votre nom</label>
                <input type="text" name="name" placeholder='Nom' required/>
                <label>Numéro de téléphone</label>
                <input type="tel" name="téléphone" placeholder='Numéro de téléphone' required />
                <label>Message</label>
                <textarea name='message' rows="6" placeholder='Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Envoyer <img src={white_arrow} alt="fléche" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact