import React from "react";
import Main from "../Main";

const Position = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Position"
        headDesc="Utilities for controlling how an element is positioned in the DOM."
        exData={[
          {
            exCode: "static",
            exProp: "position: static;",
            exHTML: (
              <div className="relative">
                <div className="static border-8 border-blue-400 bg-blue-600 text-white h-24">
                  <p>Static Parent</p>
                  <div className="absolute bottom-0 left-0 bg-red-600 text-white rounded-md p-2 flex items-center justify-center max-w-fit">
                    <p>Absolute Child</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            exCode: "fixed",
            exProp: "position: fixed;",
            exHTML: (
              <div className="relative overflow-auto h-48 border-2 border-slate-400">
                <div className="sticky top-0 bg-blue-600 text-white p-2 h-10">
                  <p>Fixed Parent</p>
                </div>
                <div className="relative p-2 text-justify">
                  <p>
                    Absolute Child using the Absolute Child. By position sticky
                    and absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute.
                  </p>
                </div>
              </div>
            ),
          },
          {
            exCode: "absolute",
            exProp: "position: absolute;",
            exHTML: (
              <div className="relative mb-28">
                <div className="absolute border-8 border-blue-400 bg-blue-600 text-white p-2 h-24">
                  <p>Absolute Parent</p>
                  <div className="absolute bottom-0 left-0 bg-red-600 text-white rounded-md p-2 flex items-center justify-center max-w-fit">
                    <p>Absolute Child</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            exCode: "relative",
            exProp: "position: relative;",
            exHTML: (
              <div className="relative">
                <div className="relative border-8 border-blue-400 bg-blue-600 text-white  h-24">
                  <p>Relative Parent</p>
                  <div className="absolute bottom-0 left-0 bg-red-600 text-white rounded-md p-2 flex items-center justify-center max-w-fit">
                    <p>Absolute Child</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            exCode: "sticky",
            exProp: "position: sticky;",
            exHTML: (
              <div className="relative overflow-auto h-48 border-2 border-slate-400">
                <div className="sticky top-0 bg-blue-600 text-white p-2 h-10">
                  <p>Sticky Parent</p>
                </div>
                <div className="relative p-2 text-justify">
                  <p>
                    Absolute Child using the Absolute Child. By position sticky
                    and absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute. Absolute Child using the
                    Absolute Child. By position sticky and absolute. Absolute
                    Child using the Absolute Child. By position sticky and
                    absolute. Absolute Child using the Absolute Child. By
                    position sticky and absolute.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Position;
