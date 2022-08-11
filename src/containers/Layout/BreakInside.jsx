import React from "react";
import Main from "../Main";

const BreakInside = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Break Inside"
        headDesc="Utilities for controlling how a column or page should break within an element."
        exData={[
          {
            exCode: "break-inside-auto",
            exProp: "break-inside: auto;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-inside-auto">
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
            exCode: "break-inside-avoid",
            exProp: "break-inside: avoid;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-inside-avoid">
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
            exCode: "break-inside-avoid-page",
            exProp: "break-inside: avoid-page;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-inside-avoid-page">
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
            exCode: "break-inside-avoid-column",
            exProp: "break-inside: avoid-column;",
            exHTML: (
              <div className="columns-2">
                <p>Hello, This is First Paragraph...</p>
                <p className="break-inside-avoid-column">
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

export default BreakInside;
