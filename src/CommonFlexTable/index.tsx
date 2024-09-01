import React from 'react';

// Define CSS styles within the JavaScript file for simplicity
const styles = `
  .flex-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .flex-table-header, .flex-table-row {
    display: flex;
  }

  .flex-table-cell {
    flex: 1;
    padding: 10px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .flex-table-cell:last-child {
    border-right: none;
  }

  .flex-table-header {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

const FlexTableCell: React.FC<{ children: React.ReactNode; colSpan?: number }> = ({ children, colSpan = 1 }) => {
  const cellStyle = {
    flex: colSpan,
  };

  return (
    <div className="flex-table-cell" style={cellStyle}>
      {children}
    </div>
  );
};

const FlexTableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex-table-header">{children}</div>;
};

const FlexTableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex-table-row">{children}</div>;
};

const CommonFlexTable: React.FC = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: 25, occupation: 'Product Manager' },
  ];

  return (
    <div className="App">
      <style>{styles}</style>
      <h1>Flexbox Table with ColSpan Example</h1>
      <div className="flex-table">
        <FlexTableHeader>
          <FlexTableCell>ID</FlexTableCell>
          <FlexTableCell>Name</FlexTableCell>
          <FlexTableCell>Age</FlexTableCell>
          <FlexTableCell colSpan={2}>Details</FlexTableCell>
        </FlexTableHeader>
        {data.map((row) => (
          <FlexTableRow key={row.id}>
            <FlexTableCell>{row.id}</FlexTableCell>
            <FlexTableCell>{row.name}</FlexTableCell>
            <FlexTableCell>{row.age}</FlexTableCell>
            <FlexTableCell>{row.age}</FlexTableCell>
            <FlexTableCell>{row.occupation}</FlexTableCell>
          </FlexTableRow>
        ))}
        <FlexTableRow>
          <FlexTableCell colSpan={4}>This row spans all columns</FlexTableCell>
        </FlexTableRow>
      </div>
    </div>
  );
};

export default CommonFlexTable;
