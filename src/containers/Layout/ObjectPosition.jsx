import React from "react";
import Main from "../Main";

const ObjectPosition = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Object Position"
        headDesc="Utilities for controlling how a replaced element's content should be positioned within its container."
        exData={[
          {
            exCode: "object-bottom",
            exProp: "object-position: bottom;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-bottom w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-center",
            exProp: "object-position: center;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-center w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-left",
            exProp: "object-position: left;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-left w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-left-bottom",
            exProp: "object-position: left bottom;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-left-bottom w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-left-top",
            exProp: "object-position: left top;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-left-top w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-right",
            exProp: "object-position: right;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-right w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-right-bottom",
            exProp: "object-position: right bottom;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-right-bottom w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-right-top",
            exProp: "object-position: right top;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-right-top w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-top",
            exProp: "object-position: top;",
            exHTML: (
              <div className="bg-blue-600 w-48 h-48 mx-auto flex items-center justify-center">
                <img
                  className="object-none object-top w-36"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default ObjectPosition;
