import React from "react";
import Main from "../Main";

const Visibility = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Visibility"
        headDesc="Utilities for controlling the visibility of an element"
        exData={[
          {
            exCode: "visible",
            exProp: "visibility: visible;",
            exHTML: (
              <div className="w-48 h-48 space-y-2">
                <div className="bg-blue-600 text-white font-bold p-4 rounded-md">
                  1
                </div>
                <div className="visible bg-blue-600 text-white font-bold p-4 rounded-md">
                  2
                </div>
                <div className="bg-blue-600 text-white font-bold p-4 rounded-md">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "invisible",
            exProp: "visibility: hidden;",
            exHTML: (
              <div className="w-48 h-48 space-y-2">
                <div className="bg-blue-600 text-white font-bold p-4 rounded-md">
                  1
                </div>
                <div className="invisible bg-blue-600 text-white font-bold p-4 rounded-md">
                  2
                </div>
                <div className="bg-blue-600 text-white font-bold p-4 rounded-md">
                  3
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Visibility;
