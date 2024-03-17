import "./Header";
import { ReactComponent as IconLogo } from "../icons/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? " active" : "nav");
  return (
    <header className="header">
      <Link to="/">
        <IconLogo></IconLogo>
      </Link>
      <nav>
        <NavLink className={setActive} to="/">
          Главная
        </NavLink>
        <NavLink className={setActive} to="/game">
          Тренироваться
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
