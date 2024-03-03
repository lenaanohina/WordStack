//компонент, отвечающий за отображение карточки слова. Здесь должны отображаться основное значение, транскрипция, перевод и тема выбранного слова.

import React, { useState } from "react";
import "./WordCard";
import styles from "./actionButtons.module.css";
import style from "./wordCard.module.css";

const WordCard = ({ english, transcription, russian }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className={style.card}>
      {isEditing ? (
        <>
          <input className={style.input} defaultValue={english} />
          <input className={style.input} defaultValue={transcription} />
          <input className={style.input} defaultValue={russian} />
          <div className="btns">
            <button className={styles.btn_green}>Сохранить</button>
            <button
              className={styles.btn_red}
              onClick={() => setIsEditing(false)}
            >
              Отмена
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={style.item}>{english}</div>
          <div className={style.item}>{transcription}</div>
          <div className={style.item}>{russian}</div>
          <div className="btns">
            <button className={styles.btn_blue} onClick={handleEditClick}>
              Изменить
            </button>
            <button className={styles.btn_red}>Удалить</button>
          </div>
        </>
      )}
    </div>
  );
};

export default WordCard;
// const WordCard = ({ english, transcription, russian }) => {

//   return (
//     <button>Назад</button>
//     <div className="card">
//           <div className="card__item">{english}</div>
//           <div className="card__item">{transcription}</div>
//           <div className="card__item">{russian}</div>

//     </div>
//     <button>Вперёд</button>
//   );
// };
