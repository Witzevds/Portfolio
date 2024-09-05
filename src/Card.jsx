function Card({ img, link, title, description }) {
  return (
    <div className="card">

        <img className="card__image" src={img} alt="" />

        <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        {link && (
      <a className="card__link" href={link} target="_blank" rel="noopener noreferrer">
        Open site
      </a>
    )}
        </div>

    </div>
  );
}

export default Card;
