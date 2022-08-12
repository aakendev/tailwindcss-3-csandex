import React from "react";
import Main from "../Main";

const Floats = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Floats"
        headDesc="Utilities for controlling the wrapping of content around an element"
        exData={[
          {
            exCode: "float-right",
            exProp: "float: right;",
            exHTML: (
              <div className="w-1/2 border-2 border-slate-400 p-4">
                <div className="float-right bg-blue-600 text-white w-24 h-24 flex items-center text-center text-sm ml-2">
                  Image Placeholder
                </div>
                <p className="text-justify">
                  This is Paragraph with Image floating on the right. With{" "}
                  <span className="font-bold">float: right</span>, the image can
                  be flexible to swap out into right side.
                </p>
              </div>
            ),
          },
          {
            exCode: "float-left",
            exProp: "float: left;",
            exHTML: (
              <div className="w-1/2 border-2 border-slate-400 p-4">
                <div className="float-left bg-blue-600 text-white w-24 h-24 flex items-center text-center text-sm mr-2">
                  Image Placeholder
                </div>
                <p className="text-justify">
                  This is Paragraph with Image floating on the left. With{" "}
                  <span className="font-bold">float: left</span>, the image can
                  be flexible to swap out into left side.
                </p>
              </div>
            ),
          },
          {
            exCode: "float-none",
            exProp: "float: none;",
            exHTML: (
              <div className="w-1/2 border-2 border-slate-400 p-4">
                <div className="float-none bg-blue-600 text-white w-24 h-24 flex items-center text-center text-sm mr-2">
                  Image Placeholder
                </div>
                <p className="text-justify">
                  This is Paragraph with Image No floating. With{" "}
                  <span className="font-bold">float: none</span>, the image
                  can't be flexible to swap out into right 0r left side.
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Floats;
