import React from "react";
import Main from "../Main";

const FlexShrink = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Flex Shrink"
        headDesc="Utilities for controlling how flex items shrink."
        exData={[
          {
            exCode: "shrink",
            exProp: "flex-shrink: 1;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="shrink bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "shrink-0",
            exProp: "flex-shrink: 0;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="shrink-0 bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
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

export default FlexShrink;
