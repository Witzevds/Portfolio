import heroVideo from "./assets/hero-video.mp4";
import test from "./assets/static-hero.png"
function Hero() {
  return (
    <>
      <section className="hero">
        <video className="hero__video video" src={heroVideo} autoPlay muted loop type="video/mp4"></video>
        <img className="image" src={test} alt="" />
        <div className="hero__text">
        <h1 className="hero__text--title">WITZE</h1>
        <h2 className="hero__text--content">Web-Design & Web Development</h2>
        </div>
      </section>
    </>
  );
}

export default Hero;
