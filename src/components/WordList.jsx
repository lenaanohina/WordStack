//компонент, отвечающий за отображение списка всех существующих слов. Здесь должны быть реализованы функции добавления, удаления и редактирования слов.

import React from "react";
import WordCard from "./WordCard";
import cardsData from "../cardsData.json";
import "./global.css";

const WordList = () => {
  return (
    <div className="card__container">
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
