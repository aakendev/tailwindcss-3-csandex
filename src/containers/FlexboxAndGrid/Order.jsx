import React from "react";
import Main from "../Main";

const Order = () => {
  return (
    <>
      <Main
        mainTitle="Flexbox & Grid"
        headTitle="Order"
        headDesc="Utilities for controlling the order of flex and grid items."
        exData={[
          {
            exCode: "order-1",
            exProp: "order: 1;",
            exHTML: (
              <div className="flex flex-row">
                <div className="order-1 bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 1
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 3
                </div>
              </div>
            ),
          },
          {
            exCode: "order-5",
            exProp: "order: 5;",
            exHTML: (
              <div className="flex flex-row">
                <div className="order-5 bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 1
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 3
                </div>
              </div>
            ),
          },
          {
            exCode: "order-10",
            exProp: "order: 10;",
            exHTML: (
              <div className="flex flex-row">
                <div className="order-10 bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 1
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 3
                </div>
              </div>
            ),
          },
          {
            exCode: "order-first",
            exProp: "order: -9999;",
            exHTML: (
              <div className="flex flex-row">
                <div className="order-first bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 1
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 3
                </div>
              </div>
            ),
          },
          {
            exCode: "order-last",
            exProp: "order: 9999;",
            exHTML: (
              <div className="flex flex-row">
                <div className="order-last bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 1
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 3
                </div>
              </div>
            ),
          },
          {
            exCode: "order-none",
            exProp: "order: 0;",
            exHTML: (
              <div className="flex flex-row">
                <div className="order-none bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 1
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 2
                </div>
                <div className="bg-blue-600 text-white rounded-md p-2 text-center mr-2 w-32">
                  Order 3
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Order;
