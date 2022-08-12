import React from "react";
import Main from "../Main";

const Clear = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Clear"
        headDesc="Utilities for controlling the wrapping of content around an element"
        exData={[
          {
            exCode: "clear-left",
            exProp: "clear: left;",
            exHTML: (
              <div className="w-3/4 border-2 border-slate-400 p-4">
                <div className="float-left bg-blue-600 text-white w-24 h-24 flex justify-center items-center text-center text-sm mr-2">
                  Image Placeholder
                </div>
                <div className="float-right bg-blue-600 text-white w-36 h-36 flex justify-center items-center text-center text-sm ml-2">
                  Image Placeholder
                </div>
                <p className="clear-left text-justify">
                  This is Paragraph with Image Floating on Left and Right, With{" "}
                  <span className="font-bold">clear: left</span>, the image
                  float on left will be ignored. This will be happen to make
                  sure float items is ignored by clearing the float.
                </p>
              </div>
            ),
          },
          {
            exCode: "clear-right",
            exProp: "clear: right;",
            exHTML: (
              <div className="w-3/4 border-2 border-slate-400 p-4">
                <div className="float-right bg-blue-600 text-white w-24 h-24 flex justify-center items-center text-center text-sm mr-2">
                  Image Placeholder
                </div>
                <div className="float-left bg-blue-600 text-white w-36 h-36 flex justify-center items-center text-center text-sm ml-2">
                  Image Placeholder
                </div>
                <p className="clear-right text-justify">
                  This is Paragraph with Image Floating on Left and Right, With{" "}
                  <span className="font-bold">clear: right</span>, the image
                  float on right will be ignored. This will be happen to make
                  sure float items is ignored by clearing the float.
                </p>
              </div>
            ),
          },
          {
            exCode: "clear-both",
            exProp: "clear: both;",
            exHTML: (
              <div className="w-3/4 border-2 border-slate-400 p-4">
                <div className="float-right bg-blue-600 text-white w-24 h-24 flex justify-center items-center text-center text-sm mr-2">
                  Image Placeholder
                </div>
                <div className="float-left bg-blue-600 text-white w-36 h-36 flex justify-center items-center text-center text-sm ml-2">
                  Image Placeholder
                </div>
                <p className="clear-both text-justify">
                  This is Paragraph with Image Floating on Left and Right, With{" "}
                  <span className="font-bold">clear: both</span>, the image
                  float on right and left will be ignored. This will be happen
                  to make sure float items is ignored by clearing the float.
                </p>
              </div>
            ),
          },
          {
            exCode: "clear-none",
            exProp: "clear: none;",
            exHTML: (
              <div className="w-3/4 border-2 border-slate-400 p-4">
                <div className="float-right bg-blue-600 text-white w-24 h-24 flex justify-center items-center text-center text-sm mr-2">
                  Image Placeholder
                </div>
                <div className="float-left bg-blue-600 text-white w-36 h-36 flex justify-center items-center text-center text-sm ml-2">
                  Image Placeholder
                </div>
                <p className="clear-none text-justify">
                  This is Paragraph with Image Floating on Left and Right, With{" "}
                  <span className="font-bold">clear: none</span>, the image
                  float on right and left will be applied.
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Clear;
