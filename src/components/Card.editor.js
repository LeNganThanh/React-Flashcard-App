import React, { useState } from "react";
import "../App.css";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import EditCard from "./Edit.card";
import ReadOnlyCard from "./ReadOnly.card";

export default function CardEditor({
  switchMode,
  cards,
  addCard,
  removeCard,
  editDataSubmit,
}) {
  const [front, setFront] = useState(""); //front card
  const [back, setBack] = useState(""); //back card

  const [editRowId, setEditRowId] = useState(null); //get row id for update the edit
  const [editFormData, setEditFormData] = useState({
    front: "",
    back: "",
  }); //handle the changing data in the row

  //handle input changing by adding data
  const handleChange = e => {
    e.preventDefault();
    const inputName = e.target.getAttribute("name");
    if (inputName === "front") {
      setFront(e.target.value);
    } else {
      setBack(e.target.value);
    }
  };

  //adding the data
  const createCard = () => {
    const newId = cards.length;
    addCard({
      id: newId,
      front,
      back,
    });
    setBack("");
    setFront("");
  };

  //execute the editing
  const handleEditFormChange = e => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldVal = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldVal;
    setEditFormData(newFormData);
  };

  const handleEditClick = (e, card) => {
    e.preventDefault();
    setEditRowId(card.id);

    const formVal = {
      front: card.front,
      back: card.back,
    };
    setEditFormData(formVal);
  };

  const handleEditFormSubmit = e => {
    e.preventDefault();
    const editedCard = {
      id: editRowId,
      front: editFormData.front,
      back: editFormData.back,
    };

    editDataSubmit(editRowId, editedCard);
    setEditRowId("");
  };

  const handleCancelEdit = () => {
    setEditRowId("");
  };

  return (
    <div className="card">
      <h2>Card Editor</h2>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr key={nanoid}>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, id) => (
              <Fragment>
                {editRowId === id ? (
                  <EditCard
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelEdit={handleCancelEdit}
                  />
                ) : (
                  <ReadOnlyCard
                    card={card}
                    removeCard={removeCard}
                    id={id}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div>
        <input
          type="text"
          name="front"
          onChange={handleChange}
          value={front}
          placeholder="Front of card"
        />
        <input
          type="text"
          name="back"
          onChange={handleChange}
          value={back}
          placeholder="Back of card"
        />
        <button onClick={createCard}>Add Card</button>
      </div>
      <hr />
      <button onClick={switchMode}>Go to Viewer</button>
    </div>
  );
}
