import React from "react";
import Main from "./containers/Main";

const App = () => {
  return (
    <>
      <div className="p-4">
        <Main
          mainTitle="Layout"
          headTitle="Aspect Ratio"
          headDesc="Utilities for controlling the aspect ratio of an element."
          exData={[
            {
              exCode: "aspect-ratio",
              exProp: "Properties: aspect-ratio: auto;",
              exHTML: (
                <iframe
                  className="w-full aspect-auto"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="RickAstley-NeverGonnaGiveYouUp"
                ></iframe>
              ),
            },
            {
              exCode: "aspect-square",
              exProp: "Properties: aspect-ratio: 1/1;",
              exHTML: (
                <iframe
                  className="w-full aspect-square"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="RickAstley-NeverGonnaGiveYouUp"
                ></iframe>
              ),
            },
            {
              exCode: "aspect-video",
              exProp: "Properties: aspect-ratio: 16/9;",
              exHTML: (
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="RickAstley-NeverGonnaGiveYouUp"
                ></iframe>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default App;
