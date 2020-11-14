import React, { useState } from "react";
import "../stylesheet/App.scss";
import Card2 from "./Card2";
import Form2 from "./Form2";

const App = () => {
  // STATES

  // Text & select Input
  const [name, setName] = useState(localStorage.getItem("name") || "Película");
  const [description, setDescription] = useState(
    localStorage.getItem("description") || "Descripción"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "Español"
  );

  // Radio Input
  const [age, setAge] = useState(
    localStorage.getItem("age") || "Todos los públicos"
  );

  // Image Input
  const [poster, setPoster] = useState(
    localStorage.getItem("poster") ||
      "https://via.placeholder.com/150x150/808080/fffffff/?text=Poster"
  );

  // FUNCTIONS

  // Text & select Input
  const handleForm = (inputId, inputValue) => {
    if (inputId === "name") {
      setName(inputValue);
      localStorage.setItem("name", inputValue);
    } else if (inputId === "description") {
      setDescription(inputValue);
      localStorage.setItem("description", inputValue);
    } else if (inputId === "language") {
      setLanguage(inputValue);
      localStorage.setItem("language", inputValue);
    }
  };

  // Radio Input
  const handleAge = (inputValue) => {
    setAge(inputValue);
    localStorage.setItem("age", inputValue);
  };

  // Image Input
  const handlePoster = (poster) => {
    const reader = new FileReader();

    reader.onload = () => {
      const posterUrl = reader.result;
      setPoster(posterUrl);
      localStorage.setItem("poster", posterUrl);
    };

    reader.readAsDataURL(poster);
  };

  return (
    <main>
      <Form2
        sendForm={handleForm}
        sendAge={handleAge}
        sendPoster={handlePoster}
      />
      <Card2
        name={name}
        description={description}
        language={language}
        age={age}
        poster={poster}
      />
    </main>
  );
};

export default App;
