import React, { useState, Fragment } from "react";
import "../App.css";
import CardViewer from "./Card.viewer";
import { nanoid } from "nanoid";
import EditCard from "./Edit.card";
import ReadOnlyCard from "./ReadOnly.card";

export default function CardEditor({ click, data }) {
  const [row, setRow] = useState(data);
  const [addFormData, setAddFormData] = useState({
    front: "",
    back: "",
    delete: "Delete",
  });
  const [editRowId, setEditRowId] = useState(null);
  const [editRowForm, setEditRowForm] = useState({
    front: "",
    back: "",
    delete: "Delete",
  });

  //Execute the new data enter
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

  //Execute the editing the old data
  function handleEditCard(e, row) {
    e.preventDefault();
    setEditRowId(row.id);

    const formVal = {
      front: row.front,
      back: row.back,
      delete: "Delete",
    };
    setEditRowForm(formVal);
  }

  //Get the new value from input field
  function handleEditCardChange(e) {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldVal = e.target.value;

    const newFormData = { ...editRowForm };
    newFormData[fieldName] = fieldVal;

    setEditRowForm(newFormData);
  }

  function handleEditCardSubmit(e) {
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
  }
  function handleCancelEdit() {
    setEditRowId(null);
  }
  //execute the delete
  function handleDeleteBtn(cardId) {
    const newDatas = [...row];
    const idx = row.findIndex(cardRow => row.id === cardId);
    newDatas.splice(idx, 1);

    setRow(newDatas);
  }

  const TABLE = (
    <div>
      <form onSubmit={handleEditCardSubmit}>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {row.map((rowData, idx) => (
              <Fragment>
                {editRowId === idx ? (
                  <EditCard
                    editRowForm={editRowForm}
                    handleEditCardChange={handleEditCardChange}
                    handleCancelEdit={handleCancelEdit}
                  />
                ) : (
                  <ReadOnlyCard
                    row={rowData}
                    handleDeleteBtn={handleDeleteBtn}
                    handleEditCard={handleEditCard}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
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
using an external edit component
{row.map((rowData)=>(
    <EditCard row={rowData} handleDeleteBtn={handleDeleteBtn}/>
))}

//inside code
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
*/
