import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WordList from "./components/WordList";
import BigCardList from "./components/BigCardList";
import cardsData from "./cardsData.json";

function App() {
  const [showBigCard, setShowBigCard] = useState(false);

  const toggleBigCard = () => {
    setShowBigCard(!showBigCard);
  };
  return (
    <div className="App">
      <Header onButtonClick={toggleBigCard}></Header>
      {showBigCard ? (
        <BigCardList
          words={cardsData}
          onButtonClick={toggleBigCard}
        ></BigCardList>
      ) : (
        <WordList />
      )}
    </div>
  );
}

export default App;
