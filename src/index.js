/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
// import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <h1>Cards And Components</h1>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="8:00PM"
          comment="Nice Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="6:40PM"
          comment="Good Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sushant"
          date="2:40PM"
          comment=" Yeahh Good One Blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
