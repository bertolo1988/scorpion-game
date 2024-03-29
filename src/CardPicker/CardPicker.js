import { CardData } from "../CardData";

export function CardPicker({ setCardIndex }) {
  function setRandomCardIndex(max) {
    const result = Math.floor(Math.random() * max);
    setCardIndex(result);
  }

  return (
    <div>
      <button
        className="button-20"
        onClick={() => {
          setRandomCardIndex(CardData.length);
        }}
      >
        Carta !
      </button>
    </div>
  );
}
