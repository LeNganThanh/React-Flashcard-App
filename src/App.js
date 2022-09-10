import React, { useState } from "react";
import "./App.css";
import CardEditor from "./components/Card.editor";
import CardViewer from "./components/Card.viewer";
import dataTable from "./mock-data.json";

function App() {
  const [isOn, setIsOn] = useState(true);
  const [cards, setCards] = useState(dataTable);

  //the switch between 2 component
  const switchMode = () => {
    setIsOn(isOn => !isOn);
  };

  // adding new card
  const addCard = card => {
    setCards(cards => [...cards, card]);
  };

  //Delete some card
  const removeCard = index => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  //Submit editing data
  const editDataSubmit = (editRowId, editedCard) => {
    const newCard = [...cards];
    const idx = cards.findIndex(cards => cards.id === editRowId);
    newCard[idx] = editedCard;

    setCards(newCard);
  };

  return (
    <div className="App">
      {isOn ? (
        <CardEditor
          switchMode={switchMode}
          cards={cards}
          addCard={addCard}
          removeCard={removeCard}
          editDataSubmit={editDataSubmit}
        />
      ) : (
        <CardViewer switchMode={switchMode} cards={cards} />
      )}
    </div>
  );
}

export default App;
