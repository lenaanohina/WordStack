//компонент, отвечающий за отображение списка всех существующих слов.

import React from "react";
import WordCard from "./WordCard";
import cardsData from "../cardsData.json";
import style from "./wordCard.module.css";

const WordList = () => {
  return (
    <div className={style.container}>
      {cardsData.map((card, id) => (
        <WordCard
          key={id}
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
        />
      ))}
    </div>
  );
};

export default WordList;
