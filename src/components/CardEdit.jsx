import React from "react";
import styles from "./wordCard.module.css";

const CardEdit = ({
  editedEnglish,
  editedTranscription,
  editedRussian,
  handleSaveClick,
  setIsEditing,
  isAnyFieldEmpty,
  setEditedEnglish,
  setEditedTranscription,
  setEditedRussian,
  error,
}) => {
  return (
    <>
      <input
        className={`${styles.input} ${
          editedEnglish.trim() === "" ? styles.redBorder : ""
        }`}
        value={editedEnglish}
        onChange={(e) => setEditedEnglish(e.target.value)}
      />
      <input
        className={`${styles.input} ${
          editedTranscription.trim() === "" ? styles.redBorder : ""
        }`}
        value={editedTranscription}
        onChange={(e) => setEditedTranscription(e.target.value)}
      />
      <input
        className={`${styles.input} ${
          editedRussian.trim() === "" ? styles.redBorder : ""
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
        <button className={styles.btn_red} onClick={() => setIsEditing(false)}>
          Отмена
        </button>
      </div>
      {error && (
        <p className={styles.error}>
          Пожалуйста, заполните все поля перед сохранением.
        </p>
      )}
    </>
  );
};

export default CardEdit;
