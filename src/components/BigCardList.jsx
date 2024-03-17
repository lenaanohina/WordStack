import React, { useState, useEffect, useCallback } from "react";
import BigCard from "./BigCard.jsx";
import style from "./wordCard.module.css";

const BigCardList = ({ words }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [resetShowTranslation, setResetShowTranslation] = useState();

  const handleNextCard = useCallback(() => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  const handlePrevCard = useCallback(() => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  }, [words.length]);

  const handleResetShowTranslation = () => {
    setResetShowTranslation(() => () => {});
  };

  useEffect(() => {
    setResetShowTranslation(() => handleResetShowTranslation);
  }, [currentCardIndex]);

  return (
    <div className={style.container}>
      <BigCard
        card={words[currentCardIndex]}
        resetShowTranslation={resetShowTranslation}
      />
      <div>
        <button onClick={handlePrevCard}>{"<"}</button>
        <button onClick={handleNextCard}>{">"}</button>
      </div>
    </div>
  );
};
BigCardList.defaultProps = {
  cards: [{ word: "Слово", translation: "Перевод" }],
};

export default BigCardList;
