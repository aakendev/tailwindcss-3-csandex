import React from "react";
import Main from "../Main";

const Overflow = () => {
  return (
    <>
      <Main
        mainTitle="Layout"
        headTitle="Overflow"
        headDesc="Utilities for controlling how an element handles content that is too large for the container."
        exData={[
          {
            exCode: "overflow-auto",
            exProp: "overflow: auto;",
            exHTML: (
              <div className="overflow-auto w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow: auto</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-hidden",
            exProp: "overflow: hidden;",
            exHTML: (
              <div className="overflow-hidden w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow: hidden</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-clip",
            exProp: "overflow: clip;",
            exHTML: (
              <div className="overflow-clip w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow: clip</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-visible",
            exProp: "overflow: visible;",
            exHTML: (
              <div className="overflow-visible w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow: visible</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-scroll",
            exProp: "overflow: scroll;",
            exHTML: (
              <div className="overflow-scroll w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow: scroll</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-x-auto",
            exProp: "overflow-x: auto;",
            exHTML: (
              <div className="overflow-x-auto w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-x: auto</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-y-auto",
            exProp: "overflow-y: auto;",
            exHTML: (
              <div className="overflow-y-auto w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-y: auto</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-x-hidden",
            exProp: "overflow-x: hidden;",
            exHTML: (
              <div className="overflow-x-hidden w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-x: hidden</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-y-hidden",
            exProp: "overflow-y: hidden;",
            exHTML: (
              <div className="overflow-y-hidden w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-y: hidden</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-x-clip",
            exProp: "overflow-x: clip;",
            exHTML: (
              <div className="overflow-x-clip w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-x: clip</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-y-clip",
            exProp: "overflow-y: clip;",
            exHTML: (
              <div className="overflow-y-clip w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-y: clip</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-x-visible",
            exProp: "overflow-x: visible;",
            exHTML: (
              <div className="overflow-x-visible w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-x: visible</span>. We
                  will wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-y-visible",
            exProp: "overflow-y: visible;",
            exHTML: (
              <div className="overflow-y-visible w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-y: visible</span>. We
                  will wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-x-scroll",
            exProp: "overflow-x: scroll;",
            exHTML: (
              <div className="overflow-x-scroll w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-x: scroll</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
          {
            exCode: "overflow-y-scroll",
            exProp: "overflow-y: scroll;",
            exHTML: (
              <div className="overflow-y-scroll w-48 h-48 border-2 border-slate-400">
                <p className="text-justify">
                  This is paragraph that using{" "}
                  <span className="font-bold">overflow-y: scroll</span>. We will
                  wrote paragraph that make the div is fully enough and the
                  scrollbar has been arised. If it wasn't enough, we will add
                  another paragraph or sentences to make it fully enough.
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Overflow;
