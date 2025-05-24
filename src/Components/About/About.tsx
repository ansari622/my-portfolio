import "../About/About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";
function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I am a passionate Front-End Developer with a strong foundation in web technologies such as HTML, CSS,Tilwind JavaScript,  and popular frameworks like React.js. I have completed my graduation in BCA and continuously work on improving my technical skills and building responsive, user-friendly web applications. I am a quick learner, detail-oriented, and always eager to take on new challenges to grow in the field of web development.


              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                {" "}
                <p>Javascript </p>
                <hr style={{ width: "60%" }} />
              </div>
                            <div className="about-skill">
                <p>Tailwind CSS</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                {" "}
                <p>React Js</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Python</p>
                <hr style={{ width: "50%" }} />
              </div>

            </div>
          </div>
        </div>
        <div className="about-achievments">
          <div className="about-achivement">
            <h1>0+</h1>
            <p>Exprience Fresher</p>
          </div>
          <hr />
           <div className="about-achivement">
            <h1>10+</h1>
            <p>Certification </p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>10+</h1>
            <p>Projact Completed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
