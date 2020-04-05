import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div class="ui container comments">
      <div class="comment">
        <a href="/" class="avatar">
          <img alt="avatar" />
        </a>
        <div class="content">
          <a href="/" class="author">
            Sam
          </a>
          <div class="meta-data">
            <span class="date">Today at 6:30pm</span>
          </div>
          <div class="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
