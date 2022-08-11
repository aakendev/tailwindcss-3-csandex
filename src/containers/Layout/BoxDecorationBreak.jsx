import React from "react";
import Main from "../Main";

const BoxDecorationBreak = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Box Decoration Break"
        headDesc="Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages."
        exData={[
          {
            exCode: "box-decoration-clone",
            exProp: "box-decoration-break: clone",
            exHTML: (
              <div className="box-decoration-clone bg-gradient-to-r from-red-600 to-blue-600 text-white px-2">
                AAKEN<br></br>
                Developer
              </div>
            ),
          },
          {
            exCode: "box-decoration-slice",
            exProp: "box-decoration-break: slice",
            exHTML: (
              <span className="box-decoration-slice bg-gradient-to-r from-red-600 to-blue-600 text-white px-2">
                AAKEN<br></br>
                Developer
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

export default BoxDecorationBreak;
