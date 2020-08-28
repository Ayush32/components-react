/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
// import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="8:00PM"
        comment="Nice Blog Post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        date="6:40PM"
        comment="Good Blog Post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sushant"
        date="2:40PM"
        comment=" Yeahh Good One Blog!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
