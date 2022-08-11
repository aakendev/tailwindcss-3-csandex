import React from "react";
import AspectRatio from "./Layout/AspectRatio";
import BoxDecorationBreak from "./Layout/BoxDecorationBreak";
import BoxSizing from "./Layout/BoxSizing";
import BreakAfter from "./Layout/BreakAfter";
import BreakBefore from "./Layout/BreakBefore";
import BreakInside from "./Layout/BreakInside";
import Columns from "./Layout/Columns";
import Container from "./Layout/Container";

const Layout = () => {
  return (
    <div className="p-4">
      <AspectRatio />
      <Container />
      <Columns />
      <BreakAfter />
      <BreakBefore />
      <BreakInside />
      <BoxDecorationBreak />
      <BoxSizing />
    </div>
  );
};

export default Layout;
