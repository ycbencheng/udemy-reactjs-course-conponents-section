import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div class="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 2:00 pm"
          comment="Nice blog post!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
