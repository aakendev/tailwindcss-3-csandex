import React from "react";
import Main from "../Main";

const FlexBasis = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Flex Basis"
        headDesc="Utilities for controlling the initial size of flex items."
        exData={[
          {
            exCode: "basis-0",
            exProp: "flex-basis: 0px;",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-0 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-1",
            exProp: "flex-basis: 0.25rem; /* 4px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-1 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-5",
            exProp: "flex-basis: 1.25rem; /* 20px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-5 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-10",
            exProp: "flex-basis: 2.5rem; /* 40px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-10 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-20",
            exProp: "flex-basis: 5rem; /* 80px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-20 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-40",
            exProp: "flex-basis: 10rem; /* 160px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-40 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-80",
            exProp: "flex-basis: 20rem; /* 320px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-80 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-96",
            exProp: "flex-basis: 24rem; /* 384px */",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-96 bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-auto",
            exProp: "flex-basis: auto;",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-auto bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  3
                </div>
              </div>
            ),
          },
          {
            exCode: "basis-full",
            exProp: "flex-basis: 100%;",
            exHTML: (
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
                  1
                </div>
                <div className="basis-full bg-blue-600 text-white rounded-md p-2 text-center">
                  2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center">
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

export default FlexBasis;
