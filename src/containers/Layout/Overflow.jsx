import React from "react";
import Main from "../Main";

const Overflow = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Overflow"
        headDesc="Utilities for controlling how an element handles content that is too large for the container."
        exData={[
          {
            exCode: "overflow-auto",
            exProp: "overflow: auto;",
            exHTML: (
              <div className="overflow-auto w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow: auto</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Overflow;
