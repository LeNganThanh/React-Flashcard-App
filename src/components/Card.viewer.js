import React, { useState } from "react";

export default function CardViewer({ switchMode, cards }) {
  const [current, setCurrent] = useState(0);
  const [frontSide, setFrontSide] = useState(true);
  const showNext = () => {
    const next = (current + 1) % cards.length;
    setCurrent(next);
    setFrontSide(true);
  };

  const flipCard = () => {
    setFrontSide(frontSide => !frontSide);
  };
  if (cards.length > 0) {
    return (
      <div className="card">
        <h2> Viewer </h2>
        <div className="cardViewer" onClick={flipCard}>
          <div>{frontSide ? cards[current].front : cards[current].back}</div>
        </div>
        <button onClick={showNext}>Next Card</button>
        <hr />
        <button onClick={switchMode}>Go to Editor</button>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h2>Error</h2>
        <div className="cardViewer">
          <div>
            <p>You have to create a new card</p>
            <p>Go back to Editor and create a card</p>
          </div>
        </div>
        <hr />
        <button onClick={switchMode}>Go to Editor</button>
      </div>
    );
  }
}
/* export default function CardViewer({ switchMode, cards }) {
  const [flip, setFlip] = useState(false);
  const [step, setStep] = useState(0);
  function flashCard() {
    setFlip(flip => !flip);
  }
  function getToNextCard() {
    step < cards.length - 1 ? setStep(step => step + 1) : setStep(0);
  }
  return (
    <div className="card">
      <h1>Card Viewer</h1>
      <div className="cardViewer" onClick={flashCard}>
        {flip ? cards[step].back : cards[step].front}
      </div>
      <button onClick={getToNextCard}>Next Card</button>
      <hr />
      <button onClick={switchMode}>Go to editor</button>
    </div>
  );
}
 */
