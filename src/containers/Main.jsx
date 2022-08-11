import React from "react";
import Examples from "../components/Examples";

const Main = ({ mainTitle, headTitle, headDesc, exData }) => {
  return (
    <div className="p-3 shadow-lg rounded-lg bg-slate-100 text-slate-900">
      <h1 className="font-bold text-2xl text-blue-600 bg-white max-w-fit p-2 rounded-md shadow-md">
        {mainTitle}
      </h1>
      <div className="my-5 space-y-3">
        <div>
          <h1 className="font-bold text-xl">{headTitle}</h1>
          <p>{headDesc}</p>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-xl">Examples</h1>
          <div>
            {exData.map((item) => {
              return (
                <Examples
                  exCode={item.exCode}
                  exProp={item.exProp}
                  exHTML={item.exHTML}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
