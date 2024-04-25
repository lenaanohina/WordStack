//компонент, отвечающий за отображение карточки слова. Здесь должны отображаться основное значение, транскрипция, перевод.

import React, { useState } from "react";
import styles from "./wordCard.module.css";
import CardEdit from "./CardEdit";
import CardDefault from "./CardDefault";

const WordCard = ({ english, transcription, russian }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEnglish, setEditedEnglish] = useState(english);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedRussian, setEditedRussian] = useState(russian);
  const [error, setError] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (isAnyFieldEmpty) {
      setError(true);
    } else {
      // Сохранение изменений (например, вызов API для сохранения данных)
      // После успешного сохранения можно сбросить ошибку и завершить редактирование
      setError(false);
      setIsEditing(false);
    }
  };

  const isAnyFieldEmpty =
    editedEnglish.trim() === "" ||
    editedTranscription.trim() === "" ||
    editedRussian.trim() === "";

  return (
    <div className={styles.card}>
      {isEditing ? (
        <CardEdit
          editedEnglish={editedEnglish}
          editedTranscription={editedTranscription}
          editedRussian={editedRussian}
          handleSaveClick={handleSaveClick}
          setIsEditing={setIsEditing}
          isAnyFieldEmpty={isAnyFieldEmpty}
          setEditedEnglish={setEditedEnglish}
          setEditedTranscription={setEditedTranscription}
          setEditedRussian={setEditedRussian}
          error={error}
        />
      ) : (
        <CardDefault
          english={editedEnglish}
          transcription={editedTranscription}
          russian={editedRussian}
          handleEditClick={handleEditClick}
        />
      )}
    </div>
  );
};

export default WordCard;
