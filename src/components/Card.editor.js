import React, { useState } from "react";
import "../App.css";
import CardViewer from "./Card.viewer";
import { nanoid } from "nanoid";
import EditCard from "./Edit.card";

export default function CardEditor({ click, data }) {
  const [row, setRow] = useState(data);
  const [addFormData, setAddFormData] = useState({
    front: "",
    back: "",
    delete: "Delete",
  });

  function handleValChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldVal = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldVal;

    setAddFormData(newFormData);
  }
  function handleAddCard(e) {
    e.preventDefault();
    const newData = {
      id: nanoid(),
      front: addFormData.front,
      back: addFormData.back,
      delete: addFormData.delete,
    };
    const newDatas = [...row, newData];
    setRow(newDatas);
  }
  function handleDeleteBtn(cardId) {
    const newDatas = [...row];
    const idx = row.findIndex(cardRow => row.id === cardId);
    newDatas.splice(idx, 1);

    setRow(newDatas);
  }
  const TABLE = (
    <div>
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {row.map(rowData => (
            <tr>
              <td>{rowData.front}</td>
              <td>{rowData.back}</td>
              <td>
                <button
                  className="deleteBtn"
                  onClick={() => handleDeleteBtn(row.id)}
                >
                  {rowData.delete}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="card">
      <h1>Card Editor</h1>
      {TABLE}
      <form onSubmit={handleAddCard}>
        <input
          name="front"
          type="text"
          placeholder="Front of Card"
          onChange={handleValChange}
        />
        <input
          name="back"
          type="text"
          placeholder="Back of Card"
          onChange={handleValChange}
        />
        <button onClick={handleAddCard}>Add Card</button>
      </form>
      <hr />
      <button onClick={click}>Go to Viewer</button>
    </div>
  );
}
/* 
using an extra edit component
{row.map((rowData)=>(
    <EditCard row={rowData} handleDeleteBtn={handleDeleteBtn}/>
))}
*/
