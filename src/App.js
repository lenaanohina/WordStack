import Header from "./components/Header";
import WordList from "./components/WordList";
import BigCardList from "./components/BigCardList";
import cardsData from "./cardsData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/game" element={<BigCardList words={cardsData} />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
