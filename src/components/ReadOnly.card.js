import React from "react";

export default function ReadOnlyCard({ row, handleEditCard, handleDeleteBtn }) {
  return (
    <tr>
      <td>{row.front}</td>
      <td>{row.back}</td>
      <td>
        <button type="button" onClick={e => handleEditCard(e, row)}>
          Edit
        </button>
        <button className="deleteBtn" onClick={() => handleDeleteBtn(row.id)}>
          {row.delete}
        </button>
      </td>
    </tr>
  );
}
