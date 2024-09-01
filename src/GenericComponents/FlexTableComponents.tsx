import React from "react";
import "./FlexTable.css";

interface FlexTableCellProps {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

const FlexTableCell: React.FC<FlexTableCellProps> = ({
  children,
  colSpan = 1,
  rowSpan = 1,
  className,
}) => {
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

interface FlexTableProps {
  children: React.ReactNode;
}

const FlexTable: React.FC<FlexTableProps> = ({ children }) => {
  return <div className="flex-table">{children}</div>;
};

interface FlexTableHeaderProps {
  children: React.ReactNode;
}

const FlexTableHeader: React.FC<FlexTableHeaderProps> = ({ children }) => {
  return <div className="flex-table-header">{children}</div>;
};

interface FlexTableRowProps {
  children: React.ReactNode;
}

const FlexTableRow: React.FC<FlexTableRowProps> = ({ children }) => {
  return <div className="flex-table-row">{children}</div>;
};

export { FlexTable, FlexTableHeader, FlexTableRow, FlexTableCell };
