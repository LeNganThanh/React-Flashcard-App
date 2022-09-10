import React, { useState } from "react";
import CardEditor from "./Card.editor";
export default function CardViewer({ click, view }) {
  const [flip, setFlip] = useState(false);
  const [step, setStep] = useState(0);
  function flashCard() {
    setFlip(flip => !flip);
  }
  function getToNextCard() {
    step < view.length - 1 ? setStep(step => step + 1) : setStep(0);
  }
  return (
    <div className="card">
      <h1>Card Viewer</h1>
      <div className="cardViewer" onClick={flashCard}>
        {flip ? view[step].back : view[step].front}
      </div>
      <button onClick={getToNextCard}>Next Card</button>
      <hr />
      <button onClick={click}>Go to editor</button>
    </div>
  );
}
