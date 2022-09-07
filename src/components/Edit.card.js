import React from "react";

export default function EditCard({ row, handleDeleteBtn }) {
  return (
    <tr>
      <td>{row.front}</td>
      <td>{row.back}</td>
      <td>
        <button className="deleteBtn" onClick={() => handleDeleteBtn(row.id)}>
          {row.delete}
        </button>
      </td>
    </tr>
  );
}
