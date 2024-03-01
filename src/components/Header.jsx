import "./Header";

const Header = ({ onButtonClick }) => {
  return (
    <header>
      <button onClick={onButtonClick}>Тренироваться</button>
    </header>
  );
};

export default Header;
