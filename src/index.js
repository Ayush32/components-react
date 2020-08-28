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
      <CommentDetail author="Sam" date="8:00PM" comment="Nice Blog Post!" />
      <CommentDetail author="Alex" date="6:40PM" comment="Good Blog Post!" />
      <CommentDetail
        author="Sushant"
        date="2:40PM"
        comment=" Yeahh Good One Blog!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
