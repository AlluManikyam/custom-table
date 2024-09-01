import React, { ReactNode } from "react";
import {
  FlexTable,
  FlexTableRow,
  FlexTableCell,
  FlexTableHeader,
} from "./FlexTableComponents";

// Define the type for column configuration
interface ColumnConfig {
  header: string;
  accessor: string | ((row: any) => ReactNode);
  colSpan?: number;
}

// Define the type for the generic table props
interface FlexTableProps {
  data: { [key: string]: any }[];
  columns: ColumnConfig[];
  enableHeaders: boolean;
  isColSpanEnable: boolean;
}

// Function to split columns based on colSpan
function splitColumns(columns: ColumnConfig[]): ColumnConfig[] {
  return columns.flatMap((column) => {
    if (
      column.colSpan &&
      typeof column.accessor === "string" &&
      column.accessor.includes(",")
    ) {
      const accessors = column.accessor.split(",");

      return accessors.map((accessor) => ({
        header: column.header,
        accessor,
        colSpan: 1,
      }));
    }

    // Return the column unchanged if it doesn't need splitting
    return [column];
  });
}

// Generic FlexTable component
const FlexGenericTable = ({
  data,
  columns,
  isColSpanEnable,
  enableHeaders,
}: FlexTableProps) => {
  return (
    <FlexTable>
      {enableHeaders && (
        <FlexTableHeader>
          {columns.map((col, index) => (
            <FlexTableCell
              key={index}
              className={isColSpanEnable ? "padding-0" : ""}
              colSpan={col.colSpan}
            >
              {isColSpanEnable ? (
                <div
                  className={`flex-table-header-column ${
                    col.colSpan ? "text-center" : ""
                  }`}
                >
                  {col.header}
                </div>
              ) : (
                col.header
              )}
            </FlexTableCell>
          ))}
        </FlexTableHeader>
      )}
      {data.map((row, rowIndex) => (
        <FlexTableRow key={rowIndex}>
          {splitColumns(columns).map((col, colIndex) => (
            <FlexTableCell key={colIndex}>
              {typeof col.accessor === "function"
                ? col.accessor(row)
                : row[col.accessor]}
            </FlexTableCell>
          ))}
        </FlexTableRow>
      ))}
    </FlexTable>
  );
};

FlexGenericTable.defaultProps = {
  isColSpanEnable: false,
  enableHeaders: true,
};

export default FlexGenericTable;
