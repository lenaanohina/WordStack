import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WordList from "./components/WordList";
import BigCard from "./components/BigCard";
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
        <BigCard cardsData={cardsData} onButtonClick={toggleBigCard}></BigCard>
      ) : (
        <WordList></WordList>
      )}
    </div>
  );
}

export default App;
