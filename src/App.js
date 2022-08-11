import React, { useEffect } from "react";
import Layout from "./containers/Layout";

const App = () => {
  useEffect(() => {
    document.title =
      "Tailwind CSS 3 CheatSheet and Examples by AAKEN Developer";
  }, []);
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
