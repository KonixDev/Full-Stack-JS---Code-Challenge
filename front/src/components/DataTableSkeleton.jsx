import Placeholder from "react-bootstrap/Placeholder";
import Table from "react-bootstrap/Table";

const DataTableSkeleton = () => {
  return (
    <Table
      responsive
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
        {Array.from({ length: 40 }).map((_, index) => (
          <tr key={index}>
            <td>
              <Placeholder as="div" animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="div" animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="div" animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
            <td>
              <Placeholder as="div" animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTableSkeleton;
