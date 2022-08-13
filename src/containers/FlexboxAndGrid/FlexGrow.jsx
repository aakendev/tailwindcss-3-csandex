import React from "react";
import Main from "../Main";

const FlexGrow = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Flex Grow"
        headDesc="Utilities for controlling how flex items grow."
        exData={[
          {
            exCode: "grow",
            exProp: "flex-grow: 1;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="grow bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "grow-0",
            exProp: "flex-grow: 0;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="grow-0 bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
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

export default FlexGrow;
