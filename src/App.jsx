import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { useFetch } from "./hooks/useFetch.js";
import { createPortal } from "react-dom";

function App() {
  return (
    <div
      style={{
        height: 300,
        overflowY: "scroll",
        background: "#EEE",
        margin: 20,
        position: "relative",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        temporibus recusandae doloremque odit iusto explicabo expedita modi
        optio dolorem delectus! Pariatur, repellat aut. Neque autem possimus
        odit quasi iure non magnam ut voluptates, iusto saepe sapiente id cum
        hic rem deleniti cupiditate amet quidem, aliquid nemo pariatur. Nam,
        assumenda excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        temporibus recusandae doloremque odit iusto explicabo expedita modi
        optio dolorem delectus! Pariatur, repellat aut. Neque autem possimus
        odit quasi iure non magnam ut voluptates, iusto saepe sapiente id cum
        hic rem deleniti cupiditate amet quidem, aliquid nemo pariatur. Nam,
        assumenda excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        temporibus recusandae doloremque odit iusto explicabo expedita modi
        optio dolorem delectus! Pariatur, repellat aut. Neque autem possimus
        odit quasi iure non magnam ut voluptates, iusto saepe sapiente id cum
        hic rem deleniti cupiditate amet quidem, aliquid nemo pariatur. Nam,
        assumenda excepturi.
      </p>
      <Modal />
    </div>
  );
}

function Modal() {
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        padding: 10,
        border: "solid 1px grey",
        background: "#FFF",
      }}
    >
      Je suis une modale
    </div> , document.body
  );
}

export default App;
