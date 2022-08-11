import React from "react";

const Examples = ({ exCode, exProp, exHTML }) => {
  return (
    <div className="mb-5">
      <p className="mb-1">{exCode}</p>
      <p className="bg-black text-white rounded-sm p-1 mb-1 max-w-fit">
        <code>Properties: {exProp}</code>
      </p>
      {exHTML}
    </div>
  );
};

export default Examples;
