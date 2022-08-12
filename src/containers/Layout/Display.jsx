import React from "react";
import Main from "../Main";

const Display = () => {
  return (
    <Main
      mainTitle="Layout"
      headTitle="Display"
      headDesc="Utilities for controlling the display box type of an element."
      exData={[
        {
          exCode: "block",
          exProp: "display: block;",
          exHTML: (
            <div className="w-1/2">
              <p>
                This is example of paragraph that using{" "}
                <span className="block font-bold">display: block</span> within
                one paragraph.
              </p>
            </div>
          ),
        },
        {
          exCode: "inline-block",
          exProp: "display: inline-block;",
          exHTML: (
            <div className="w-1/2">
              <p>
                This is example of paragraph that using{" "}
                <span className="inline-block font-bold">
                  display: inline-block
                </span>{" "}
                within one paragraph.
              </p>
            </div>
          ),
        },
        {
          exCode: "inline",
          exProp: "display: inline;",
          exHTML: (
            <div className="w-1/2">
              <p>
                This is example of paragraph that using{" "}
                <span className="inline font-bold">display: inline</span> within
                one paragraph.
              </p>
            </div>
          ),
        },
        {
          exCode: "flex",
          exProp: "display: flex;",
          exHTML: (
            <div className="w-1/2 flex border-2 border-stone-400 p-2">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div className="bg-blue-600 text-white rounded-sm p-2 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
          ),
        },
        {
          exCode: "inline-flex",
          exProp: "display: inline-flex;",
          exHTML: (
            <div className="w-1/2">
              <p>
                This is example of paragraph that using{" "}
                <span className="inline-flex font-bold">
                  <div className="bg-blue-600 w-5 h-5 mr-2"></div>
                  <p>display: inline-flex</p>
                </span>{" "}
                within one paragraph.
              </p>
            </div>
          ),
        },
        {
          exCode: "table",
          exProp: "display: table;",
          exHTML: (
            <div className="table w-full">
              <div className="table-header-group">
                <div className="table-row font-bold text-xl">
                  {["Song", "Artist", "Year"].map((item) => {
                    return <div className="table-cell text-left">{item}</div>;
                  })}
                </div>
              </div>
              <div className="table-row-group">
                {[
                  { song: "Balonku Ada Lima", artist: "N/A", year: 1980 },
                  { song: "Lihat Kebunku", artist: "N/A", year: 1985 },
                  { song: "Naik Delman", artist: "N/A", year: 1970 },
                ].map((item) => {
                  return (
                    <div className="table-row">
                      <div className="table-cell">{item.song}</div>
                      <div className="table-cell">{item.artist}</div>
                      <div className="table-cell">{item.year}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ),
        },
        {
          exCode: "flow-root",
          exProp: "display: flow-root;",
          exHTML: (
            <div className="w-1/2 p-4 border-2 border-slate-400">
              <div className="flow-root">
                <div className="my-4">
                  This is document with flow-root. And the document block
                  formatting will follow the root.
                </div>
              </div>
              <div className="flow-root">
                <div className="my-4">
                  This is document with flow-root. And the document block
                  formatting will follow the root.
                </div>
              </div>
            </div>
          ),
        },
        {
          exCode: "grid",
          exProp: "display: grid;",
          exHTML: (
            <div className="grid p-4 border-2 border-slate-400">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div className="bg-blue-600 text-white border-2 border-white p-2 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
          ),
        },
        {
          exCode: "inline-grid",
          exProp: "display: inline-grid;",
          exHTML: (
            <div className="inline-grid p-4 border-2 border-slate-400">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div className="bg-blue-600 text-white border-2 border-white p-2 mr-2">
                    {item}
                  </div>
                );
              })}
            </div>
          ),
        },
        {
          exCode: "contents",
          exProp: "display: contents;",
          exHTML: (
            <div className="flex">
              <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                1
              </div>
              <div className="contents">
                <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                  2
                </div>
                <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                  3
                </div>
              </div>
              <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                4
              </div>
            </div>
          ),
        },
        {
          exCode: "list-item",
          exProp: "display: list-item;",
          exHTML: (
            <div>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div>
                    <div className="list-item font-bold">{item}</div>
                  </div>
                );
              })}
            </div>
          ),
        },
        {
          exCode: "hidden",
          exProp: "display: none;",
          exHTML: (
            <div className="flex">
              <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                1
              </div>
              <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                2
              </div>
              <div className="hidden flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                3
              </div>
              <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                4
              </div>
              <div className="flex-1 bg-blue-600 text-white text-center p-2 mr-2 rounded-md">
                5
              </div>
            </div>
          ),
        },
      ]}
    />
  );
};

export default Display;
