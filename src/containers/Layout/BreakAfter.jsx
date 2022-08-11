import React from "react";
import Main from "../Main";

const BreakAfter = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Break After"
        headDesc="Utilities for controlling how a column or page should break after an element."
        exData={[
          {
            exCode: "break-after-auto",
            exProp: "break-after: auto;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-auto">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-avoid",
            exProp: "break-after: avoid;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-avoid">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-all",
            exProp: "break-after: all;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-all">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-avoid-page",
            exProp: "break-after: avoid-page;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-avoid-page">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-page",
            exProp: "break-after: page;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-page">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-left",
            exProp: "break-after: left;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-left">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-right",
            exProp: "break-after: right;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-right">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
          {
            exCode: "break-after-column",
            exProp: "break-after: column;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-after-column">
                  Hello, This is Second Paragraph...
                </p>
                <p>Hello, This is Third Paragraph...</p>
                <p>Hello, This is Fourth Paragraph...</p>
                <p>Hello, This is Fifth Paragraph...</p>
                <p>Hello, This is Sixth Paragraph...</p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default BreakAfter;
