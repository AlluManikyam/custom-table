import React from 'react';
import './FlexTable.css';

interface FlexTableHeaderProps {
  children: React.ReactNode;
}

const FlexTableHeader: React.FC<FlexTableHeaderProps> = ({ children }) => {
  return <div className="flex-table-header">{children}</div>;
};

export default FlexTableHeader;
