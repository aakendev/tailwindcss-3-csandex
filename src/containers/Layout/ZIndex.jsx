import React from "react";
import Main from "../Main";

const ZIndex = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Z-Index"
        headDesc="Utilities for controlling the stack order of an element"
        exData={[
          {
            exCode: "z-0",
            exProp: "z-index: 0;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-10 absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent
                </div>
                <div className="z-0 absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 0
                </div>
              </div>
            ),
          },
          {
            exCode: "z-10",
            exProp: "z-index: 10;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-0 absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent<br></br>(Z-Index 0)
                </div>
                <div className="z-10 absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 10
                </div>
              </div>
            ),
          },
          {
            exCode: "z-20",
            exProp: "z-index: 10;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-0 absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent<br></br>(Z-Index 0)
                </div>
                <div className="z-20 absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 20
                </div>
                <div className="z-10 absolute top-3 left-32 w-full h-full bg-green-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 10
                </div>
              </div>
            ),
          },
          {
            exCode: "z-30",
            exProp: "z-index: 30;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-0 absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent<br></br>(Z-Index 0)
                </div>
                <div className="z-20 absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 20
                </div>
                <div className="z-30 absolute top-3 left-32 w-full h-full bg-green-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 30
                </div>
              </div>
            ),
          },
          {
            exCode: "z-40",
            exProp: "z-index: 40;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-0 absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent<br></br>(Z-Index 0)
                </div>
                <div className="z-40 absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 40
                </div>
                <div className="z-30 absolute top-3 left-32 w-full h-full bg-green-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 30
                </div>
              </div>
            ),
          },
          {
            exCode: "z-50",
            exProp: "z-index: 50;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-0 absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent<br></br>(Z-Index 0)
                </div>
                <div className="z-40 absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 40
                </div>
                <div className="z-50 absolute top-3 left-32 w-full h-full bg-green-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index 50
                </div>
              </div>
            ),
          },
          {
            exCode: "z-auto",
            exProp: "z-index: auto;",
            exHTML: (
              <div className="relative w-36 h-36 border-2 border-slate-400 mb-28">
                <div className="z-auto absolute top-0 left-0 w-full h-full bg-blue-600 text-white font-bold flex items-center justify-center text-center">
                  Parent<br></br>(Z-Index Auto)
                </div>
                <div className="z-auto absolute top-24 left-24 w-full h-full bg-red-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index Auto
                </div>
                <div className="z-auto absolute top-3 left-32 w-full h-full bg-green-600 text-white font-bold flex items-center justify-center text-center">
                  Z-Index Auto
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default ZIndex;
