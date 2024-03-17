import { ReactComponent as IconError } from "../icons/error.svg";
import { Link } from "react-router-dom";
import styles from "./error.module.css";

function ErrorMessage() {
  return (
    <main className={styles.card}>
      <IconError />
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>СТРАНИЦА НЕ НАЙДЕНА</p>
      <p>
        Пожалуйста, вернитесь на <Link to="/">ГЛАВНУЮ</Link>&#128591;
      </p>
    </main>
  );
}
export default ErrorMessage;
