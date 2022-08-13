import React from "react";
import Main from "../Main";

const GridRowStartEnd = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Grid Row Start / End"
        headDesc="Utilities for controlling how elements are sized and placed across grid rows."
        exData={[
          {
            exCode: "row-auto",
            exProp: "grid-row: auto;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-auto">
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
            exCode: "row-span-1",
            exProp: "grid-row: span 1 / span 1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-span-1">
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
            exCode: "row-span-2",
            exProp: "grid-row: span 2 / span 2;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-span-2">
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
            exCode: "row-span-full",
            exProp: "grid-row: 1 / -1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-span-full">
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
            exCode: "row-start-1",
            exProp: "grid-row-start: 1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-start-1">
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
            exCode: "row-start-3",
            exProp: "grid-row-start: 3;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-start-3">
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
            exCode: "row-start-auto",
            exProp: "grid-row-start: auto;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-start-auto">
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
            exCode: "row-end-1",
            exProp: "grid-row-end: 1;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-end-1">
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
            exCode: "row-end-3",
            exProp: "grid-row-end: 3;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-end-3">
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
            exCode: "row-end-auto",
            exProp: "grid-row-end: auto;",
            exHTML: (
              <div className="grid grid-cols-3">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 w-24">
                      {item}
                    </div>
                  );
                })}
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 mb-2 row-end-auto">
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

export default GridRowStartEnd;
