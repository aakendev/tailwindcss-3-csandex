import React from "react";
import Main from "../Main";

const ObjectFit = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Object Fit"
        headDesc="Utilities for controlling how a replaced element's content should be resized."
        exData={[
          {
            exCode: "object-contain",
            exProp: "object-fit: contain;",
            exHTML: (
              <div className="bg-blue-600 w-1/2 mx-auto">
                <img
                  className="object-contain h-48 mx-auto"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-cover",
            exProp: "object-fit: cover;",
            exHTML: (
              <div className="bg-blue-600 w-1/2 mx-auto">
                <img
                  className="object-cover h-48 mx-auto"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-fill",
            exProp: "object-fit: fill;",
            exHTML: (
              <div className="bg-blue-600 w-1/2 mx-auto">
                <img
                  className="object-fill h-48 mx-auto"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-none",
            exProp: "object-fit: none;",
            exHTML: (
              <div className="bg-blue-600 w-1/2 mx-auto">
                <img
                  className="object-none h-48 mx-auto"
                  src="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
                  alt="Scenery"
                />
              </div>
            ),
          },
          {
            exCode: "object-scale-down",
            exProp: "object-fit: scale-down;",
            exHTML: (
              <div className="bg-blue-600 w-1/2 mx-auto">
                <img
                  className="object-scale-down h-48 mx-auto"
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

export default ObjectFit;
