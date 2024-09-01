import React from 'react';
import './FlexTable.css';

interface FlexTableProps {
  children: React.ReactNode;
}

const FlexTable: React.FC<FlexTableProps> = ({ children }) => {
  return <div className="flex-table">{children}</div>;
};

export default FlexTable;
