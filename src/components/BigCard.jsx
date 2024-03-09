import React, { useState, useEffect } from "react";
import "./BigCard.jsx";
import style from "./wordCard.module.css";

function BigCard({ card, resetShowTranslation }) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleClick = () => {
    setShowTranslation(true);
  };

  let translation = showTranslation ? (
    <p>{card.russian}</p>
  ) : (
    <button onClick={handleClick}>Перевод</button>
  );

  useEffect(() => {
    if (resetShowTranslation) {
      setShowTranslation(false);
    }
  }, [resetShowTranslation]);

  return (
    <div className={style.big}>
      <p>{card.english}</p>
      <p>{card.transcription}</p>
      {translation}
    </div>
  );
}

export default BigCard;
