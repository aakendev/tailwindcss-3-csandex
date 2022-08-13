import React from "react";
import Main from "../Main";

const FlexWrap = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Flex Wrap"
        headDesc="Utilities for controlling how flex items wrap."
        exData={[
          {
            exCode: "flex-wrap",
            exProp: "flex-wrap: wrap;",
            exHTML: (
              <div className="flex flex-row flex-wrap w-3/4">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <div className="basis-24 bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "flex-wrap-reverse",
            exProp: "flex-wrap: wrap-reverse;",
            exHTML: (
              <div className="flex flex-row flex-wrap-reverse w-3/4">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <div className="basis-24 bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "flex-nowrap",
            exProp: "flex-wrap: nowrap;",
            exHTML: (
              <div className="flex flex-row flex-nowrap w-3/4">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <div className="basis-24 bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default FlexWrap;
