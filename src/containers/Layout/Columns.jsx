import React from "react";
import Main from "../Main";

const Columns = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Columns"
        headDesc="Utilities for controlling the number of columns within an element."
        exData={[
          {
            exCode: "columns-1",
            exProp: "columns: 1;",
            exHTML: (
              <div className="columns-1 space-y-2 text-white">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-2",
            exProp: "columns: 2;",
            exHTML: (
              <div className="columns-2 space-y-2 text-white">
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-3",
            exProp: "columns: 3;",
            exHTML: (
              <div className="columns-3 space-y-2 text-white">
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-4",
            exProp: "columns: 4;",
            exHTML: (
              <div className="columns-4 space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-5",
            exProp: "columns: 5;",
            exHTML: (
              <div className="columns-5 space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-6",
            exProp: "columns: 6;",
            exHTML: (
              <div className="columns-6 space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-7",
            exProp: "columns: 7;",
            exHTML: (
              <div className="columns-7 space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-8",
            exProp: "columns: 8;",
            exHTML: (
              <div className="columns-8 space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (item) => {
                    return (
                      <div className="bg-red-600 p-2">
                        <h1>{item}</h1>
                      </div>
                    );
                  }
                )}
              </div>
            ),
          },
          {
            exCode: "columns-9",
            exProp: "columns: 9;",
            exHTML: (
              <div className="columns-9 space-y-2 text-white">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                ].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-10",
            exProp: "columns: 10;",
            exHTML: (
              <div className="columns-10 space-y-2 text-white">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19,
                ].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-11",
            exProp: "columns: 11;",
            exHTML: (
              <div className="columns-11 space-y-2 text-white">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21,
                ].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-12",
            exProp: "columns: 12;",
            exHTML: (
              <div className="columns-12 space-y-2 text-white">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23,
                ].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-auto",
            exProp: "columns: auto;",
            exHTML: (
              <div className="columns-auto space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-3xs",
            exProp: "columns: 16rem; /* 256px */",
            exHTML: (
              <div className="columns-3xs space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-2xs",
            exProp: "columns: 18rem; /* 288px */",
            exHTML: (
              <div className="columns-2xs space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-xs",
            exProp: "columns: 20rem; /* 320px */",
            exHTML: (
              <div className="columns-xs space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-sm",
            exProp: "columns: 24rem; /* 384px */",
            exHTML: (
              <div className="columns-sm space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-md",
            exProp: "columns: 28rem; /* 448px */",
            exHTML: (
              <div className="columns-md space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-lg",
            exProp: "columns: 32rem; /* 512px */",
            exHTML: (
              <div className="columns-lg space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-xl",
            exProp: "columns: 36rem; /* 576px */",
            exHTML: (
              <div className="columns-xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-2xl",
            exProp: "columns: 42rem; /* 672px */",
            exHTML: (
              <div className="columns-2xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-3xl",
            exProp: "columns: 48rem; /* 768px */",
            exHTML: (
              <div className="columns-3xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-4xl",
            exProp: "columns: 56rem; /* 896px */",
            exHTML: (
              <div className="columns-4xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-5xl",
            exProp: "columns: 64rem; /* 1024px */",
            exHTML: (
              <div className="columns-5xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-6xl",
            exProp: "columns: 72rem; /* 1152px */",
            exHTML: (
              <div className="columns-6xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
                    </div>
                  );
                })}
              </div>
            ),
          },
          {
            exCode: "columns-7xl",
            exProp: "columns: 80rem; /* 1280px */",
            exHTML: (
              <div className="columns-7xl space-y-2 text-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <div className="bg-red-600 p-2">
                      <h1>{item}</h1>
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

export default Columns;
