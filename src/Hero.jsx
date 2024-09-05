import heroVideo from "./assets/hero-video.mp4";

function Hero() {
  return (
    <>
      <section className="hero">
        <video className="hero__video" src={heroVideo} autoPlay muted loop type="video/mp4"></video>
        <div className="hero__text">
        <h1 className="hero__text--title">Witze</h1>
        <h2 className="hero__text--content">Web-Design & Web Development</h2>
        </div>
      </section>
    </>
  );
}

export default Hero;
