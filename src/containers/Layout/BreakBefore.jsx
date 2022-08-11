import React from "react";
import Main from "../Main";

const BreakBefore = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Break Before"
        headDesc="Utilities for controlling how a column or page should break before an element."
        exData={[
          {
            exCode: "break-before-auto",
            exProp: "break-before: auto;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-auto">
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
            exCode: "break-before-avoid",
            exProp: "break-before: avoid;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-avoid">
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
            exCode: "break-before-all",
            exProp: "break-before: all;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-all">
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
            exCode: "break-before-avoid-page",
            exProp: "break-before: avoid-page;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-avoid-page">
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
            exCode: "break-before-page",
            exProp: "break-before: page;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-page">
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
            exCode: "break-before-left",
            exProp: "break-before: left;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-left">
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
            exCode: "break-before-right",
            exProp: "break-before: right;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-right">
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
            exCode: "break-before-column",
            exProp: "break-before: column;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-before-column">
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

export default BreakBefore;
