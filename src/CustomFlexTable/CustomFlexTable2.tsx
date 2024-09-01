import React from "react";
import FlexTable from "./FlexTable";
import FlexTableHeader from "./FlexTableHeader";
import FlexTableRow from "./FlexTableRow";
import FlexTableCell from "./FlexTableCell";

const App: React.FC = () => {
  const data = [
    { id: 1, name: "John Doe", age: 28, occupation: "Developer" },
    { id: 2, name: "Jane Smith", age: 34, occupation: "Designer" },
    { id: 3, name: "Sam Johnson", age: 25, occupation: "Product Manager" },
  ];

  return (
    <div className="App">
      <h1>Flexbox Table with ColSpan Example</h1>
      <FlexTable>
        <FlexTableHeader>
          <FlexTableCell className="padding-0">
            <div className="flex-table-header-column">ID</div>
          </FlexTableCell>
          <FlexTableCell className="padding-0">
            <div className="flex-table-header-column">Name</div>
          </FlexTableCell>
          <FlexTableCell colSpan={3} className="padding-0 text-center">
            <div className="flex-table-header-column">Details</div>
          </FlexTableCell>
        </FlexTableHeader>
        {data.map((row) => (
          <FlexTableRow key={row.id}>
            <FlexTableCell>{row.id}</FlexTableCell>
            <FlexTableCell>{row.name}</FlexTableCell>
            <FlexTableCell>{row.age}</FlexTableCell>
            <FlexTableCell>{row.occupation}</FlexTableCell>
            <FlexTableCell>{row.occupation}</FlexTableCell>
          </FlexTableRow>
        ))}
      </FlexTable>
    </div>
  );
};

export default App;
