import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


function Contact() {

  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); 

  // fatching data in form
  const formData = new FormData(event.target as HTMLFormElement);

  // Web3Forms ka access key 
  formData.append("access_key", "d5a16fb0-044d-4597-bb6e-5c31e5beb084");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(res => res.json());

   
    if (res.success) {
      alert("Email successfully send ");
        (event.target as HTMLFormElement).reset();
; 
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Try again.");
  }
};



  return (
    <>
      <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let's talk</h1>
                <p>I'm Ansari Zahid Raza, currently seeking a job in Frontend Developer role.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img className='mail-icon' src={mail_icon} alt="" /> <p>ansarizahidraza31@gmail.com</p>
                    </div>
                     <div className="contact-detail">
                       <img src={call_icon} alt="" /> <p>+91-8007674515</p>
                    </div>
                     <div className="contact-detail">
                       <img src={location_icon} alt="" /> <p>Bhiwandi,Thane,Maharashtra</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required/>
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' required/>
                <label htmlFor="">Write your mesage here</label>
                <textarea name="message" rows={8} placeholder='Enter your message' required></textarea>
                <button type='submit' className="submit">Submit Now</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact
