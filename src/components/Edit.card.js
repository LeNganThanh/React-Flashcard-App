import React from "react";

export default function EditCard({editRowForm, handleEditCardChange, handleCancelEdit}) {
  return (
    <tr>
      <td>
        <input type="text" name="front" placeholder="Editing...." value={editRowForm.front} onChange={handleEditCardChange} />
      </td>
      <td>
        <input type="text" name="back" placeholder="Editing...." value={editRowForm.back} onChange={handleEditCardChange} />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type=" button" onClick={handleCancelEdit}>Cancel</button>
      </td>
    </tr>
  );
}
