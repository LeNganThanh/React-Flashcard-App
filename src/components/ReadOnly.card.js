import React from "react";

export default function ReadOnlyCard({
  card,
  removeCard,
  id,
  handleEditClick,
}) {
  return (
    <tr key={id}>
      <td>{card.front}</td>
      <td>{card.back}</td>
      <td>
        <button type="button" onClick={e => handleEditClick(e, card)}>
          Edit
        </button>
        <button
          className="deleteBtn"
          type="button"
          onClick={() => removeCard(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
