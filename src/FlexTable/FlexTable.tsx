import React from 'react';
import './FlexTable.css';

// Define the type for your data rows
interface RowData {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

// Define the props type for the FlexTable component
interface FlexTableProps {
  data: RowData[];
}

const FlexTable: React.FC<FlexTableProps> = ({ data }) => {
  return (
    <div className="flex-table">
      <div className="flex-table-header">
        <div className="flex-table-cell">ID</div>
        <div className="flex-table-cell">Name</div>
        <div className="flex-table-cell">Age</div>
        <div className="flex-table-cell">Occupation</div>
      </div>
      {data.map((row) => (
        <div className="flex-table-row" key={row.id}>
          <div className="flex-table-cell">{row.id}</div>
          <div className="flex-table-cell">{row.name}</div>
          <div className="flex-table-cell">{row.age}</div>
          <div className="flex-table-cell">{row.occupation}</div>
        </div>
      ))}
    </div>
  );
};

export default FlexTable;
