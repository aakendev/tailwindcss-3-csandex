import React from "react";
import Main from "../Main";

const TopRightBottomLeft = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Top/Right/Bottom/Left"
        headDesc="Utilities for controlling the placement of positioned elements."
        exData={[
          {
            exCode: "inset-0",
            exProp: "top: 0px; right: 0px; bottom: 0px; left: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-0",
            exProp: "left: 0px; right: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-0",
            exProp: "top: 0px; bottom: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-0",
            exProp: "top: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-0",
            exProp: "right: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-0",
            exProp: "bottom: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-0",
            exProp: "left: 0px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-px",
            exProp: "top: 1px; right: 1px; bottom: 1px; left: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-px",
            exProp: "left: 1px; right: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-px",
            exProp: "top: 1px; bottom: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-px",
            exProp: "top: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-px",
            exProp: "right: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-px",
            exProp: "bottom: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-px",
            exProp: "left: 1px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-px w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-0.5",
            exProp: "top: 2px; right: 2px; bottom: 2px; left: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-0.5",
            exProp: "left: 2px; right: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-0.5",
            exProp: "top: 2px; bottom: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-0.5",
            exProp: "top: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-0.5",
            exProp: "right: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-0.5",
            exProp: "bottom: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-0.5",
            exProp: "left: 2px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-0.5 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-1",
            exProp: "top: 4px; right: 4px; bottom: 4px; left: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-1",
            exProp: "left: 4px; right: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-1",
            exProp: "top: 4px; bottom: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-1",
            exProp: "top: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-1",
            exProp: "right: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-1",
            exProp: "bottom: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-1",
            exProp: "left: 4px;",
            exHTML: (
              <div className="relative w-32 h-32 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-1 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-48",
            exProp: "top: 192px; right: 192px; bottom: 192px; left: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-48",
            exProp: "left: 192px; right: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-48",
            exProp: "top: 192px; bottom: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-48",
            exProp: "top: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-48",
            exProp: "right: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-48",
            exProp: "bottom: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-48",
            exProp: "left: 192px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-48 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-96",
            exProp: "top: 384px; right: 384px; bottom: 384px; left: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-96",
            exProp: "left: 384px; right: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-96",
            exProp: "top: 384px; bottom: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-96",
            exProp: "top: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-96",
            exProp: "right: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-96",
            exProp: "bottom: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-96",
            exProp: "left: 384px;",
            exHTML: (
              <div className="relative w-96 h-96 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-96 w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-auto",
            exProp: "top: auto; right: auto; bottom: auto; left: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-auto",
            exProp: "left: auto; right: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-auto",
            exProp: "top: auto; bottom: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-auto",
            exProp: "top: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-auto",
            exProp: "right: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-auto",
            exProp: "bottom: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-auto",
            exProp: "left: auto;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-auto w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-full",
            exProp: "top: 100%; right: 100%; bottom: 100%; left: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-x-full",
            exProp: "left: 100%; right: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-x-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "inset-y-full",
            exProp: "top: 100%; bottom: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute inset-y-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "top-full",
            exProp: "top: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute top-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "right-full",
            exProp: "right: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute right-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "bottom-full",
            exProp: "bottom: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute bottom-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
          {
            exCode: "left-full",
            exProp: "left: 100%;",
            exHTML: (
              <div className="relative w-48 h-48 border-2 border-slate-400 mb-12">
                <div className="relative bg-red-600 flex items-center justify-center w-full h-full text-white">
                  Base
                </div>
                <div className="absolute left-full w-10 h-10 bg-blue-600 flex items-center justify-center text-white">
                  POS
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default TopRightBottomLeft;
