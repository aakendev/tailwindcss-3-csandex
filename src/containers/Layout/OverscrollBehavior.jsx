import React from "react";
import Main from "../Main";

const OverscrollBehavior = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Overscroll Behavior"
        headDesc="Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area."
        exData={[
          {
            exCode: "overscroll-auto",
            exProp: "overscroll-behavior: auto;",
            exHTML: (
              <div className="overscroll-auto overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">overscroll-behavior: auto;</span>.
                  Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-contain",
            exProp: "overscroll-behavior: contain;",
            exHTML: (
              <div className="overscroll-contain overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior: contain;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-none",
            exProp: "overscroll-behavior: none;",
            exHTML: (
              <div className="overscroll-none overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">overscroll-behavior: none;</span>.
                  Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-y-auto",
            exProp: "overscroll-behavior-y: auto;",
            exHTML: (
              <div className="overscroll-y-auto overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior-y: auto;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-y-contain",
            exProp: "overscroll-behavior-y: contain;",
            exHTML: (
              <div className="overscroll-y-contain overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior-y: contain;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-y-none",
            exProp: "overscroll-behavior-y: none;",
            exHTML: (
              <div className="overscroll-y-none overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior-y: none;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-x-auto",
            exProp: "overscroll-behavior-x: auto;",
            exHTML: (
              <div className="overscroll-x-auto overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior-x: auto;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-x-contain",
            exProp: "overscroll-behavior-x: contain;",
            exHTML: (
              <div className="overscroll-x-contain overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior-x: contain;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
          {
            exCode: "overscroll-x-none",
            exProp: "overscroll-behavior-x: none;",
            exHTML: (
              <div className="overscroll-x-none overflow-auto border-2 border-slate-400 w-48 h-48">
                <p>
                  This is Overscroll Behavior. That controls the browser
                  scrolling when reaching the boundary scrolling area. And this
                  is examples when using{" "}
                  <span className="font-bold">
                    overscroll-behavior-x: none;
                  </span>
                  . Let check this examples.
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default OverscrollBehavior;
