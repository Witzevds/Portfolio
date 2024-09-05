import "./css/About.css"
import redBackground from "./assets/red-leds-background.mp4"
import portrait from "./assets/portrait.jpg"
import html from "./assets/tech-stack/html.svg"
import css from "./assets/tech-stack/css.svg"
import js from "./assets/tech-stack/javascript.svg"
import react from "./assets/tech-stack/react.svg"
import sql from "./assets/tech-stack/sql.svg"
import express from "./assets/tech-stack/express.svg"
import eleventy from "./assets/tech-stack/eleventy.svg"
function About() {
  return <>
    <section className="about" id="about">
       <video className="about__video"  src={redBackground} autoPlay muted loop></video>
  <div  className="about__content">

    <div className="about__content--left">
      <div className="about__content--text">
        
        
        <h2 className="about__content--text title">    My name is Witze,</h2>
     <br />  I’m a second-year Web Development student at Artevelde.     During my first year, I gained valuable experience in creating stylish and user-friendly websites. I'm now eager to start freelancing to further expand my knowledge and gain insight into the professional world. Additionally, I am actively seeking an internship opportunity for next year.</div>

        <div className="tech-stack">
          <ul className="tech-stack__items">
            <h2>My Tech Stack</h2>
            <li className="tech-stack__item"> <img src={html} alt="" /></li>
            <li className="tech-stack__item"><img src={css} alt="" /> </li>
            <li className="tech-stack__item"><img src={js} alt="" /> </li>
            <li className="tech-stack__item"><img src={react} alt="" /> </li>
            <li className="tech-stack__item"><img src={sql} alt="" /> </li>
            <li className="tech-stack__item"><img src={express} alt="" /> </li>
            <li className="tech-stack__item"><img src={eleventy} alt="" /> </li>
     
       
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