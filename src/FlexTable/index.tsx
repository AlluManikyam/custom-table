import React from 'react';
import FlexTable from './FlexTable';

const App: React.FC = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, occupation: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, occupation: 'Designer' },
    { id: 3, name: 'Sam Johnson', age: 25, occupation: 'Product Manager' },
  ];

  return (
    <div className="App">
      <h1>Custom Flexbox Table</h1>
      <FlexTable data={data} />
    </div>
  );
};

export default App;
