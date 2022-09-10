import React from "react";

export default function EditCard({
  editFormData,
  handleEditFormChange,
  handleCancelEdit,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Editing..."
          name="front"
          value={editFormData.front}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Editing..."
          name="back"
          value={editFormData.back}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <div className="editBtnDiv">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}
