function Card({ img, link, title, description }) {
  return (
    <div className="card">
      <a href={link}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Card;
