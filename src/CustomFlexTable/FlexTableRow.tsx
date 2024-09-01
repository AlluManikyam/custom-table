import React from 'react';
import './FlexTable.css';

interface FlexTableRowProps {
  children: React.ReactNode;
}

const FlexTableRow: React.FC<FlexTableRowProps> = ({ children }) => {
  return <div className="flex-table-row">{children}</div>;
};

export default FlexTableRow;
