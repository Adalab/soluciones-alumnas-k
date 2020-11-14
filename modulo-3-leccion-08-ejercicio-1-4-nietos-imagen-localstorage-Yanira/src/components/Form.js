import React from "react";

const Form = (props) => {
  // Text & select Input
  const handleForm = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    props.sendForm(id, value);
  };

  // Radio Input
  const selectAge = (ev) => {
    const age = ev.target.value;
    props.sendAge(age);
  };

  // Image Input
  const posterInput = React.createRef();
  const selectPoster = () => {
    const poster = posterInput.current.files[0];
    props.sendPoster(poster);
  };

  return (
    <form className="form" onChange={handleForm}>
      {/* Text & select Input */}
      <label htmlFor="name">Nombre de la película</label>
      <input type="text" name="name" id="name" placeholder="Película" />
      <label htmlFor="description">Descripción</label>
      <textarea
        name="description"
        id="description"
        placeholder="Descripción"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="language">Idioma</label>
      <select name="language" id="language">
        <option value="Español">Español</option>
        <option value="Portugués">Portugués</option>
        <option value="Inglés">Inglés</option>
      </select>

      {/* Radio Input */}
      <label htmlFor="all-age">Todos los públicos</label>
      <input
        type="radio"
        name="age"
        id="all-age"
        onClick={selectAge}
        value="Todos los públicos"
      />
      <label htmlFor="age-15">Mayores de 15</label>
      <input
        type="radio"
        name="age"
        id="age-15"
        onClick={selectAge}
        value="Mayores de 15"
      />
      <label htmlFor="age-18">Mayores de 18</label>
      <input
        type="radio"
        name="age"
        id="age-18"
        onClick={selectAge}
        value="Mayores de 18"
      />

      {/* Image Input */}
      <label htmlFor="poster">
        Carátula
        <input
          type="file"
          name="poster"
          id="poster"
          accept="image/*"
          ref={posterInput}
          onChange={selectPoster}
        />
      </label>
    </form>
  );
};

export default Form;
