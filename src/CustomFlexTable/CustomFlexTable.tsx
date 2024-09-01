import React from 'react';
import FlexTable from './FlexTable';
import FlexTableHeader from './FlexTableHeader';
import FlexTableRow from './FlexTableRow';
import FlexTableCell from './FlexTableCell';

interface RowData {
  id: number;
  name: string;
  age: number;
  occupation: string;
  location: string;
}

const App: React.FC = () => {
  const data: RowData[] = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Developer', location: 'New York' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer', location: 'San Francisco' },
    { id: 3, name: 'Sam Johnson', age: 25, occupation: 'Product Manager', location: 'Los Angeles' },
  ];

  return (
    <div className="App">
      <h1>Custom Flexbox Table</h1>
      <FlexTable>
        <FlexTableHeader>
          <FlexTableCell>ID</FlexTableCell>
          <FlexTableCell>Name & Location</FlexTableCell>
          <FlexTableCell>Age</FlexTableCell>
          <FlexTableCell>Occupation</FlexTableCell>
        </FlexTableHeader>
        {data.map((row) => (
          <FlexTableRow key={row.id}>
            <FlexTableCell>{row.id}</FlexTableCell>
            <FlexTableCell>
              <span>{row.name}</span>
              <span>{row.location}</span>
            </FlexTableCell>
            <FlexTableCell>{row.age}</FlexTableCell>
            <FlexTableCell>{row.occupation}</FlexTableCell>
          </FlexTableRow>
        ))}
      </FlexTable>
    </div>
  );
};

export default App;
