import { useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";
import { CardData } from "./CardData";
import { CardPicker } from "./CardPicker/CardPicker";

import logo from "./images/scorpion-3.jpeg";

function App() {
  const [cardIndex, setCardIndex] = useState(null);

  let content;
  if (cardIndex != null) {
    content = <Card text={CardData[cardIndex]} />;
  } else {
    content = <img src={logo} className="App-logo" alt="logo" />;
  }

  return (
    <div className="App full-height">
      <header className="App-header full-height">
        {content}
        <CardPicker setCardIndex={setCardIndex} />
      </header>
      <footer>Wonder Conclusion, Lda</footer>
    </div>
  );
}

export default App;
