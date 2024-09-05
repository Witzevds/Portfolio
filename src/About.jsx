import "./css/About.css"
import redBackground from "./assets/red-leds-background.mp4"
import portrait from "./assets/portrait.jpg"
import html from "./assets/tech-stack/html.svg"
import css from "./assets/tech-stack/css.svg"
import js from "./assets/tech-stack/javascript.svg"
import react from "./assets/tech-stack/react.svg"
import sql from "./assets/tech-stack/sql.svg"
import express from "./assets/tech-stack/express.svg"

function About() {
  return <>
    <section className="about">
       <video className="about__video"  src={redBackground} autoPlay muted loop></video>
  <div  className="about__content">

    <div className="about__content--left">
      <div className="about__content--text">
        
        
        <h1>Who am i?</h1>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur minus debitis magnam, id ipsam sint, a est assumenda molestiae, vitae repellat beatae. Perspiciatis ducimus consequatur ea eum enim expedita.</div>

        <div className="tech-stack">
          <ul className="tech-stack__items">
            <li className="tech-stack__item"> <img src={html} alt="" /></li>
            <li className="tech-stack__item"><img src={css} alt="" /> </li>
            <li className="tech-stack__item"><img src={js} alt="" /> </li>
            <li className="tech-stack__item"><img src={react} alt="" /> </li>
            <li className="tech-stack__item"><img src={sql} alt="" /> </li>
            <li className="tech-stack__item"><img src={express} alt="" /> </li>
     
       
          </ul>

          </div>
        </div>
      <div className="about__content--portrait">
      <img src={portrait} alt="" />
      </div>
      </div>
    </section>
  
  </>
}

export default About;