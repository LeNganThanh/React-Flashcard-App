import React, { useState } from "react";
import "./App.css";
import CardEditor from "./components/Card.editor";
import CardViewer from "./components/Card.viewer";
import dataTable from "./mock-data.json";

function App() {
  const [isOn, setIsOn] = useState(true);

  const handleSwitchMode = () => {
    setIsOn(isOn => !isOn);
  };
  return (
    <div>
      {isOn ? (
        <CardEditor click={handleSwitchMode} data={dataTable} />
      ) : (
        <CardViewer click={handleSwitchMode} view={dataTable} />
      )}
    </div>
  );
}

export default App;
