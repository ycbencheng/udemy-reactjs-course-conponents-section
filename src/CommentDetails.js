import React from "react";

const CommentDetails = (props) => {
  return (
    <div class="comment">
      <a href="/" class="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div class="content">
        <a href="/" class="author">
          {props.author}
        </a>
        <div class="meta-data">
          <span class="date">{props.timeAgo}</span>
        </div>
        <div class="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
