import React, { useState } from "react";
import "./App.css";
import CardEditor from "./components/Card.editor";
import CardViewer from "./components/Card.viewer";
import { dataTable } from "./data";

function App() {
  const [view, setView] = useState(dataTable);
  const [isOn, setIsOn] = useState(true);
  const [screen, setScreen] = useState(<CardEditor />);

  function handleCardChange() {
    setScreen(<CardViewer />);
    setIsOn(isOn => !isOn);
  }
  function handleChangeToEditor() {
    setScreen(<CardEditor />);
    setIsOn(isOn => !isOn);
  }

  return (
    <div>
      {isOn ? (
        <CardEditor click={handleCardChange} data={dataTable} />
      ) : (
        <CardViewer click={handleChangeToEditor} view={dataTable} />
      )}
    </div>
  );
}

export default App;
