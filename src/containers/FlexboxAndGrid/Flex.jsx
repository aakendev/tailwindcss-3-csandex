import React from "react";
import Main from "../Main";

const Flex = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Flex"
        headDesc="Utilities for controlling how flex items both grow and shrink."
        exData={[
          {
            exCode: "flex-1",
            exProp: "flex: 1 1 0%;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="flex-1 bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "flex-auto",
            exProp: "flex: 1 1 auto;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="flex-auto bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "flex-initial",
            exProp: "flex: 0 1 auto;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="flex-initial bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "flex-none",
            exProp: "flex: none;",
            exHTML: (
              <div className="flex flex-row">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  1
                </div>
                <div className="flex-none bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
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

export default Flex;
