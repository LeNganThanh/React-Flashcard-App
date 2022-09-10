import React, { useState } from "react";
import "../App.css";
import { nanoid } from "nanoid";
import EditCard from "./Edit.card";

export default function CardEditor({ click, data }) {
  const [row, setRow] = useState(data);
  const [addFormData, setAddFormData] = useState({
    front: "",
    back: "",
    delete: "Delete",
  });

<<<<<<< HEAD
  //Execute the new data enter
  const handleValChange = e => {
=======
  function handleValChange(e) {
>>>>>>> parent of 4a67aea... viewer card still has no Edit
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldVal = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldVal;

    setAddFormData(newFormData);
<<<<<<< HEAD
  };

  const handleAddCard = e => {
=======
  }
  function handleAddCard(e) {
>>>>>>> parent of 4a67aea... viewer card still has no Edit
    e.preventDefault();
    const newData = {
      id: nanoid(),
      front: addFormData.front,
      back: addFormData.back,
      delete: addFormData.delete,
    };
    const newDatas = [...row, newData];
    setRow(newDatas);
<<<<<<< HEAD
  };

  //Execute the editing the old data
  const handleEditCard = (e, row) => {
    e.preventDefault();
    setEditRowId(row.id);

    const formVal = {
      front: row.front,
      back: row.back,
      delete: "Delete",
    };
    setEditRowForm(formVal);
  };

  //Get the new value from input field
  const handleEditCardChange = e => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldVal = e.target.value;

    const newFormData = { ...editRowForm };
    newFormData[fieldName] = fieldVal;

    setEditRowForm(newFormData);
  };

  const handleEditCardSubmit = e => {
    e.preventDefault();
    const editRow = {
      id: editRowId,
      front: editRowForm.front,
      back: editRowForm.back,
      delete: "Delete",
    };

    const newRow = [...row];
    const idx = row.findIndex(row => row.id === editRowId);
    newRow[idx] = editRow;

    setRow(newRow);
    setEditRowId(null);
  };
  const handleCancelEdit = () => {
    setEditRowId(null);
  };
  //execute the delete
  const handleDeleteBtn = cardId => {
=======
  }
  function handleDeleteBtn(cardId) {
>>>>>>> parent of 4a67aea... viewer card still has no Edit
    const newDatas = [...row];
    const idx = row.findIndex(cardRow => row.id === cardId);
    newDatas.splice(idx, 1);

    setRow(newDatas);
<<<<<<< HEAD
  };

=======
  }
>>>>>>> parent of 4a67aea... viewer card still has no Edit
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
