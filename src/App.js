import React, { useEffect } from "react";
import FlexboxAndGrid from "./containers/FlexboxAndGrid";
import Layout from "./containers/Layout";

const App = () => {
  useEffect(() => {
    document.title =
      "Tailwind CSS 3 CheatSheet and Examples by AAKEN Developer";
  }, []);
  return (
    <>
      <Layout />
      <FlexboxAndGrid />
    </>
  );
};

export default App;
