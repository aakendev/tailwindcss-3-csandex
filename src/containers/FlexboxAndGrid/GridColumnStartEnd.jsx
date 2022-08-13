import React from "react";
import Main from "../Main";

const GridColumnStartEnd = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Grid Column Start / End"
        headDesc="Utilities for controlling how elements are sized and placed across grid columns."
        exData={[
          {
            exCode: "col-auto",
            exProp: "grid-column: auto;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-auto">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-span-1",
            exProp: "grid-column: span 1 / span 1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-span-1">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-span-2",
            exProp: "grid-column: span 2 / span 2;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-span-2">
                  4
                </div>
                {[5, 6, 7, 8].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-span-full",
            exProp: "grid-column: 1 / -1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-span-full">
                  4
                </div>
                {[5, 6, 7].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-start-1",
            exProp: "grid-column-start: 1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-start-1">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-start-3",
            exProp: "grid-column-start: 3;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-start-3">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-start-auto",
            exProp: "grid-column-start: auto;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-start-auto">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-end-1",
            exProp: "grid-column-end: 1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-end-1">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-end-3",
            exProp: "grid-column-end: 3;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-end-3">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "col-end-auto",
            exProp: "grid-column-end: auto;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 col-end-auto">
                  4
                </div>
                {[5, 6, 7, 8, 9].map((item) => {
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

export default GridColumnStartEnd;
