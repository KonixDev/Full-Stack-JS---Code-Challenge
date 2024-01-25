import Table from "react-bootstrap/Table";

import React from "react";

const DataTable = ({ data }) => {
  return (
    <Table
      className="mx-auto p-2"
      style={{ width: "75%" }}
      striped
      bordered
      hover
    >
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.length > 0 &&
          data.map((fileData) =>
            fileData.lines.map((line, index) => (
              <tr key={`${fileData.file}_${index}_${line.text}_${line.number}`}>
                <td>{fileData.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )}
      </tbody>
    </Table>
  );
};

export default DataTable;
