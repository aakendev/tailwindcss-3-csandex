import React from "react";
import Main from "../Main";

const FlexDirection = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Flex Direction"
        headDesc="Utilities for controlling the direction of flex items."
        exData={[
          {
            exCode: "flex-row",
            exProp: "flex-direction: row;",
            exHTML: (
              <div className="flex flex-row space-x-2">
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "flex-row-reverse",
            exProp: "flex-direction: row-reverse;",
            exHTML: (
              <div className="flex flex-row-reverse">
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center ml-2">
                  1
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center ml-2">
                  2
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "flex-col",
            exProp: "flex-direction: column;",
            exHTML: (
              <div className="flex flex-col space-y-2">
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "flex-col-reverse",
            exProp: "flex-direction: column-reverse;",
            exHTML: (
              <div className="flex flex-col-reverse">
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center mt-2">
                  1
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center mt-2">
                  2
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
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

export default FlexDirection;
