//компонент, отвечающий за отображение карточки слова. Здесь должны отображаться основное значение, транскрипция, перевод.

import React, { useState } from "react";
import "./WordCard";
import styles from "./actionButtons.module.css";
import style from "./wordCard.module.css";

const WordCard = ({ english, transcription, russian }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedEnglish, setEditedEnglish] = useState(english);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedRussian, setEditedRussian] = useState(russian);
  const [error, setError] = useState(false);

  const isAnyFieldEmpty =
    editedEnglish.trim() === "" ||
    editedTranscription.trim() === "" ||
    editedRussian.trim() === "";

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (isAnyFieldEmpty) {
      setError(true);
    } else {
      console.log("Параметры формы:", {
        english: editedEnglish,
        transcription: editedTranscription,
        russian: editedRussian,
      });
      setIsEditing(false);
      setError(false);
    }
  };

  return (
    <div className={style.card}>
      {isEditing ? (
        <>
          <input
            className={`${style.input} ${
              editedEnglish.trim() === "" ? style.redBorder : ""
            }`}
            value={editedEnglish}
            onChange={(e) => setEditedEnglish(e.target.value)}
          />
          <input
            className={`${style.input} ${
              editedTranscription.trim() === "" ? style.redBorder : ""
            }`}
            value={editedTranscription}
            onChange={(e) => setEditedTranscription(e.target.value)}
          />
          <input
            className={`${style.input} ${
              editedRussian.trim() === "" ? style.redBorder : ""
            }`}
            value={editedRussian}
            onChange={(e) => setEditedRussian(e.target.value)}
          />

          <div className="btns">
            <button
              className={styles.btn_green}
              onClick={handleSaveClick}
              disabled={isAnyFieldEmpty}
            >
              Сохранить
            </button>
            <button
              className={styles.btn_red}
              onClick={() => setIsEditing(false)}
            >
              Отмена
            </button>
          </div>
          {error && (
            <p className={style.error}>
              Пожалуйста, заполните все поля перед сохранением.
            </p>
          )}
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
