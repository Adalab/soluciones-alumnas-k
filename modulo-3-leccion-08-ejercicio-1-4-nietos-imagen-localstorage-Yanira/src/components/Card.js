const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card__name">{props.name}</h2>
      <p className="card__description">{props.description}</p>
      <img className="card__poster" src={props.poster} alt="" />
      <p className="card__language">{props.language}</p>
      <p className="card__age">{props.age}</p>
    </div>
  );
};

export default Card;
