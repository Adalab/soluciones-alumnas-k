const { default: Form } = require("./Form");

const Form2 = (props) => {
  return (
    <>
      <Form
        sendForm={props.sendForm}
        sendAge={props.sendAge}
        sendPoster={props.sendPoster}
      />
    </>
  );
};

export default Form2;
