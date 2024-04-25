import React from "react";
import styles from "./wordCard.module.css";

const CardDefault = ({ english, transcription, russian, handleEditClick }) => {
  return (
    <>
      <div className={styles.item}>{english}</div>
      <div className={styles.item}>{transcription}</div>
      <div className={styles.item}>{russian}</div>
      <div className="btns">
        <button className={styles.btn_blue} onClick={handleEditClick}>
          Изменить
        </button>
        <button className={styles.btn_red}>Удалить</button>
      </div>
    </>
  );
};

export default CardDefault;
