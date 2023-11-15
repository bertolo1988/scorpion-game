import { CardData } from "../CardData";

export function CardPicker({ setCardIndex }) {
  function setRandomCardIndex(max) {
    const result = Math.floor(Math.random() * max);
    setCardIndex(result);
  }

  return (
    <div>
      <button
        onClick={() => {
          setRandomCardIndex(CardData.length);
        }}
      >
        Clica!
      </button>
    </div>
  );
}
