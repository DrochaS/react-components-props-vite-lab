import React from "react";

// Article component displays individual blog post information
// Shows the post title, date, and preview text
// Uses a default date if none is provided
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;