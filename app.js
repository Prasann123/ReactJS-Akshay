import React from "react";
import ReactDOM from "react-dom";
import { Body } from "./src/Components/Body";
import { Header } from "./src/Components/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
