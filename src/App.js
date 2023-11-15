import { useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";
import { CardData } from "./CardData";
import { CardPicker } from "./CardPicker/CardPicker";

import logo from "./scorpion-1.png";

function App() {
  const [cardIndex, setCardIndex] = useState(null);

  let content;
  if (cardIndex != null) {
    content = <Card text={CardData[cardIndex]} />;
  } else {
    content = <img src={logo} className="App-logo" alt="logo" />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {content}
        <CardPicker setCardIndex={setCardIndex} />
      </header>
    </div>
  );
}

export default App;
