function Card({ img, link, title, description }) {
  return (
    <div className="card">
      <a className="card__link" href={link}>
        <img className="card__image" src={img} alt="" />

        <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
