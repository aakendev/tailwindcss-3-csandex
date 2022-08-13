import React from "react";
import Flex from "./FlexboxAndGrid/Flex";
import FlexBasis from "./FlexboxAndGrid/FlexBasis";
import FlexDirection from "./FlexboxAndGrid/FlexDirection";
import FlexGrow from "./FlexboxAndGrid/FlexGrow";
import FlexShrink from "./FlexboxAndGrid/FlexShrink";
import FlexWrap from "./FlexboxAndGrid/FlexWrap";
import GridColumnStartEnd from "./FlexboxAndGrid/GridColumnStartEnd";
import GridRowStartEnd from "./FlexboxAndGrid/GridRowStartEnd";
import GridTemplateColumns from "./FlexboxAndGrid/GridTemplateColumns";
import GridTemplateRows from "./FlexboxAndGrid/GridTemplateRows";
import Order from "./FlexboxAndGrid/Order";

const FlexboxAndGrid = () => {
  return (
    <div className="p-4">
      <FlexBasis />
      <FlexDirection />
      <FlexWrap />
      <Flex />
      <FlexGrow />
      <FlexShrink />
      <Order />
      <GridTemplateColumns />
      <GridColumnStartEnd />
      <GridTemplateRows />
      <GridRowStartEnd />
    </div>
  );
};

export default FlexboxAndGrid;
