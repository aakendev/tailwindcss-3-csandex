import React from "react";
import Main from "../Main";

const Container = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Container"
        headDesc="A component for fixing an element's width to the current breakpoint."
        exData={[
          {
            exCode: "container",
            exProp:
              "None: width: 100%; sm: max-width: 640px; md: max-width: 768px; lg: max-width: 1024px; xl: max-width: 1280px; 2xl: max-width: 1536px;",
            exHTML: (
              <div className="bg-red-600">
                <div className="container mx-auto bg-blue-600 text-white">
                  <h1>This is Container</h1>
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Container;
