import React from 'react';
import './FlexTable.css';

interface FlexTableCellProps {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

const FlexTableCell: React.FC<FlexTableCellProps> = ({ children, colSpan = 1, rowSpan = 1, className }) => {
  return (
    <div
      className={`flex-table-cell ${className}`}
      style={{
        flex: colSpan,
        height: rowSpan > 1 ? `${rowSpan * 50}px` : undefined, // Assuming each row height is 50px
      }}
    >
      {children}
    </div>
  );
};

export default FlexTableCell;
