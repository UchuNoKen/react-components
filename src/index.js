import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45pm" content="Nice post!" />
      <CommentDetail author="Alex" timeAgo="Today at 12:00pm" content="Keep up the good work!" />
      <CommentDetail author="Jane" timeAgo="Today at 8:05am" content="How the..." />
      <CommentDetail author="Will" timeAgo="Yesterday at 11:55pm" content="You rock!" />
      <CommentDetail author="Joe" timeAgo="Yesterday at 7:31pm" content="Who is here?" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
