import "../Hero/Hero.css";
import profile_img from  '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <>
      <div id="home" className="hero">
        <img src={profile_img} alt="profile photo" />
        <h1><span>I' am Ansari Zahid Raza</span>, frontend developer</h1>
        <p> I'm Ansari Zahid Raza, currently seeking a Frontend Developer role as a fresher.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">Download Resume</div>
        </div>
      </div>
    </>
  );
}

export default Hero;
