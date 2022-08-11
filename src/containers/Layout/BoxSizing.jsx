import React from "react";
import Main from "../Main";

const BoxSizing = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Box Sizing"
        headDesc="Utilities for controlling how the browser should calculate an element's total size."
        exData={[
          {
            exCode: "box-border",
            exProp: "box-sizing: border-box;",
            exHTML: (
              <div className="box-border bg-blue-600 h-32 w-32 p-4 border-4"></div>
            ),
          },
          {
            exCode: "box-content",
            exProp: "box-sizing: content-box;",
            exHTML: (
              <div className="box-content bg-blue-600 h-32 w-32 p-4 border-4"></div>
            ),
          },
        ]}
      />
    </>
  );
};

export default BoxSizing;
