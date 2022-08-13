import React from "react";
import { Disclosure } from "@headlessui/react";
import Examples from "../components/Examples";

const Main = ({ mainTitle, headTitle, headDesc, exData }) => {
  return (
    <div className="p-3 shadow-lg rounded-lg bg-slate-100 text-slate-900">
      <h1 className="font-bold text-2xl text-blue-600 bg-white max-w-fit p-2 rounded-md shadow-md mx-auto">
        {mainTitle}
      </h1>
      <Disclosure as="div" className="my-5 space-y-3">
        <Disclosure.Button
          as="button"
          className="bg-blue-400 hover:bg-blue-500 flex flex-col items-center justify-center mx-auto rounded-md p-2 text-white text-center w-96"
        >
          <h1 className="font-bold text-xl mb-2">{headTitle}</h1>
          <p>{headDesc}</p>
        </Disclosure.Button>
        <Disclosure.Panel as="div" className="space-y-3">
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
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Main;
