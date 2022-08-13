import React from "react";
import Main from "../Main";

const GridTemplateRows = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Grid Template Rows"
        headDesc="Utilities for specifying the rows in a grid layout."
        exData={[
          {
            exCode: "grid-rows-1",
            exProp: "grid-template-rows: repeat(1, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-rows-1 grid-flow-col overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-32">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "grid-rows-2",
            exProp: "grid-template-rows: repeat(2, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-rows-2 grid-flow-col overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-32">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "grid-rows-4",
            exProp: "grid-template-rows: repeat(4, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-rows-4 grid-flow-col overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-32">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "grid-rows-6",
            exProp: "grid-template-rows: repeat(6, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-rows-6 grid-flow-col overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-32">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "grid-rows-none",
            exProp: "grid-template-rows: none;",
            exHTML: (
              <div className="grid grid-rows-none grid-flow-col overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-32">
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

export default GridTemplateRows;
