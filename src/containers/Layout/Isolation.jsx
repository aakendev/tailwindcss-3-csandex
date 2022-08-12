import React from "react";
import Main from "../Main";

const Isolation = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Isolation"
        headDesc="Utilities for controlling whether an element should explicitly create a new stacking context."
        exData={[
          {
            exCode: "isolate",
            exProp: "isolation: isolate;",
            exHTML: (
              <div className="bg-blue-600 h-48 w-48">
                <div className="isolate bg-green-600 text-white p-2">
                  This will be isolate below div
                </div>
                <div className="bg-red-600  text-white">This Div</div>
              </div>
            ),
          },
          {
            exCode: "isolation-auto",
            exProp: "isolation: auto;",
            exHTML: (
              <div className="bg-blue-600 h-48 w-48">
                <div className="isolation-auto bg-green-600 text-white p-2">
                  This will be isolate below div
                </div>
                <div className="bg-red-600  text-white">This Div</div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Isolation;
