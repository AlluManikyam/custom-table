import React from "react";
import FlexTable from "../GenericComponents/FlexGenericTable";

const FlexTableExample2: React.FC = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      occupation: "Developer",
      location: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      occupation: "Designer",
      location: "San Francisco",
    },
    {
      id: 3,
      name: "Sam Johnson",
      age: 25,
      occupation: "Product Manager",
      location: "Los Angeles",
    },
  ];

  const columns = [
    { header: "ID", accessor: "id" }, // 'id' key in User
    {
      header: "Name & Location",
      accessor: "name,location",
      clasName: "padding-0",
      colSpan: 2,
    },
    { header: "Age", accessor: "age" }, // 'age' key in User
    { header: "Occupation", accessor: "occupation" }, // 'occupation' key in User
  ];

  return (
    <div className="FlexTableExample1">
      <h1>Flexbox Table With ColSpan Enable</h1>
      <FlexTable data={data} columns={columns} isColSpanEnable={true} />
    </div>
  );
};

export default FlexTableExample2;
