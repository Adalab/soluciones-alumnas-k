const { default: Card } = require("./Card");

const Card2 = (props) => {
  return (
    <>
      <Card
        name={props.name}
        description={props.description}
        language={props.language}
        age={props.age}
        poster={props.poster}
      />
    </>
  );
};

export default Card2;
