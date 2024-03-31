import React, { useState, useEffect, useRef } from "react";
import "./BigCard.jsx";
import style from "./wordCard.module.css";

function BigCard({ card, resetShowTranslation, incrementWordsLearned }) {
  const [showTranslation, setShowTranslation] = useState(false);

  const buttonRef = useRef(null);

  const handleClick = () => {
    setShowTranslation(true);
    incrementWordsLearned();
  };

  const translation = showTranslation ? (
    <p>{card.russian}</p>
  ) : (
    <button ref={buttonRef} onClick={handleClick}>
      Перевод
    </button>
  );

  useEffect(() => {
    if (resetShowTranslation) {
      setShowTranslation(false);
    }
  }, [resetShowTranslation]);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return (
    <div className={style.big}>
      <p>{card.english}</p>
      <p>{card.transcription}</p>
      {translation}
    </div>
  );
}

export default BigCard;
