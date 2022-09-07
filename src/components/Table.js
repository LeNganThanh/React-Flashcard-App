import React from "react";
import "../App.css";

export default function Table({
  data,
  dataH,
  width = "auto",
  height = "auto",
}) {
  return (
    <div>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {dataH.map((item, idx) => (
                <th key={idx}>{item} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((obj, idx) => (
              <tr key={idx}>
                {Object.values(obj).map((val, idx2) => (
                  <td key={idx2}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
