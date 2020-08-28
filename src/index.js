/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
// import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" date="8:00PM" />
      <CommentDetail author="Alex" date="6:40PM" />
      <CommentDetail author="Sushant" date="2:40PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
