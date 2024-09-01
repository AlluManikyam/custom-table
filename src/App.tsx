import React from "react";
// import CustomFlexTable from "./CustomFlexTable/CustomFlexTable";
// import CustomFlexTable2 from "./CustomFlexTable/CustomFlexTable2";
// import CommonFlexTable from "./CommonFlexTable";

import FlexTableExample1 from "./Examples/FlexTableExample1";
import FlexTableExample2 from "./Examples/FlexTableExample2";
import FlexTableExample3 from "./Examples/FlexTableExample3";

const App: React.FC = () => {
  return (
    <>
      {/* <CustomFlexTable />
      <br />
      <br /> */}
      {/* <CustomFlexTable2 /> */}
      {/* <br/>
      <br/>
      <CommonFlexTable /> */}

      <FlexTableExample1 />
      <br />
      <br />
      <FlexTableExample2 />
      <br />
      <br />
      <FlexTableExample3 />
    </>
  );
};

export default App;
