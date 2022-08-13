import React from "react";
import Main from "../Main";

const GridTemplateColumns = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Grid Template Columns"
        headDesc="Utilities for specifying the columns in a grid layout."
        exData={[
          {
            exCode: "grid-cols-1",
            exProp: "grid-template-columns: repeat(1, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-cols-1">
                {[1, 2, 3, 4, 5].map((item) => {
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
            exCode: "grid-cols-2",
            exProp: "grid-template-columns: repeat(2, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-cols-2">
                {[1, 2, 3, 4, 5].map((item) => {
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
            exCode: "grid-cols-4",
            exProp: "grid-template-columns: repeat(4, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-cols-4">
                {[1, 2, 3, 4, 5].map((item) => {
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
            exCode: "grid-cols-8",
            exProp: "grid-template-columns: repeat(8, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-cols-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-12">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "grid-cols-12",
            exProp: "grid-template-columns: repeat(12, minmax(0, 1fr));",
            exHTML: (
              <div className="grid grid-cols-12">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-12">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "grid-cols-none",
            exProp: "grid-template-columns: none;",
            exHTML: (
              <div className="grid grid-cols-none">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
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

export default GridTemplateColumns;
