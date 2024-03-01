import React, { useState, useEffect } from "react";
import "./BigCard.jsx";
import "../cardsData.json";
import "./global.css";

function BigCard({ cardsData }) {
  const [randomCard, setRandomCard] = useState(null);

  useEffect(() => {
    const getRandomCard = () => {
      const randomIndex = Math.floor(Math.random() * cardsData.length);
      setRandomCard(cardsData[randomIndex]);
    };

    getRandomCard();
  }, [cardsData]);

  const [showTranslation, setShowTranslation] = useState(false);
  const handleClick = () => setShowTranslation(true);

  let translation = <button onClick={handleClick}>Перевод</button>;
  if (showTranslation) {
    translation = <p>{randomCard.russian}</p>;
  }
  return (
    <div className="card__container">
      {randomCard && (
        <div>
          <p>{randomCard.english}</p>
          <p>{randomCard.transcription}</p>
          {translation}
        </div>
      )}
    </div>
  );
}

export default BigCard;
