import "./css/About.css"
import redBackground from "./assets/red-leds-background.mp4"
import portrait from "./assets/portrait.jpg"
function About() {
  return <>
    <section className="about">
       <video className="about__video"  src={redBackground} autoPlay muted loop></video>
  <div  className="about__content">
      <div className="about__content--text">
        
        
        <h1>Who am i?</h1>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur minus debitis magnam, id ipsam sint, a est assumenda molestiae, vitae repellat beatae. Perspiciatis ducimus consequatur ea eum enim expedita.</div>

        <div className="Tech Stack">
          <ul>
            <li></li>
          </ul>
        </div>
      <div className="about__content--portrait">
      <img src={portrait} alt="" />
      </div>
      </div>
    </section>
  
  </>
}

export default About;