import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const name = "DEVersity";

root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {getYear()}</p>
  </div>
);

function getYear() {
  let year = new Date().getFullYear();
  return year;
}
