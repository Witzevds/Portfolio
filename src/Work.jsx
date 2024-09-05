import Card from "./Card";
import neonArrow from "./assets/bright-neon-colors-illuminated-arrow.jpg";
import gentseFeesten from "./assets/projects/gentse-feesten.png";
import studioClean from "./assets/projects/studio-clean.png";
import clar from "./assets/projects/clar.png";
import recipes from "./assets/projects/recipes.png";
import "./css/Work.css";
function Work() {
  return (
    <section className="work" id="work">
      <h2 className="work__title flicker">Projects</h2>

      <div className="work__cards">
        <Card
          img={gentseFeesten}
          link="https://pgmgent-atwork-1.github.io/opdracht-2-gentse-feesten-Witzevds/"
          title="Gentse Feesten"
          description="A school project where we recreated the Gentse Feesten 2023 website, focusing on design and functionality. (Mobile still in progress))"

        />

        <Card
          img={clar}
          link="https://witzevds.github.io/clar-copy/"
          title="Clar"
          description="A school assignment introducing GSAP for animations, where we built a clean and dynamic website interface."
        />

        <Card
          img={recipes}
          title="Recipe App"
          description="A web application project that allows users to create, edit, and delete recipes. The server backend was built using JSON."
        />

        <Card
          img={studioClean}
          title="Studio Clean"
          description="This project involved using Eleventy, a static site generator, to easily create and manage content across multiple pages."
        />
      </div>
 <span className="span__center">More Projects (coming)<svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="hsla(282, 100%, 80%, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </span>
    </section>
  );
}

export default Work;
