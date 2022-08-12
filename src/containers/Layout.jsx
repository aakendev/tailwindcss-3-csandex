import React from "react";
import AspectRatio from "./Layout/AspectRatio";
import BoxDecorationBreak from "./Layout/BoxDecorationBreak";
import BoxSizing from "./Layout/BoxSizing";
import BreakAfter from "./Layout/BreakAfter";
import BreakBefore from "./Layout/BreakBefore";
import BreakInside from "./Layout/BreakInside";
import Clear from "./Layout/Clear";
import Columns from "./Layout/Columns";
import Container from "./Layout/Container";
import Display from "./Layout/Display";
import Floats from "./Layout/Floats";
import Isolation from "./Layout/Isolation";
import ObjectFit from "./Layout/ObjectFit";
import ObjectPosition from "./Layout/ObjectPosition";
import Overflow from "./Layout/Overflow";
import OverscrollBehavior from "./Layout/OverscrollBehavior";
import Position from "./Layout/Position";

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
      <Display />
      <Floats />
      <Clear />
      <Isolation />
      <ObjectFit />
      <ObjectPosition />
      <Overflow />
      <OverscrollBehavior />
      <Position />
    </div>
  );
};

export default Layout;
