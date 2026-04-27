import React from "react";
import Article from "./Article";

// ArticleList component renders a list of Article components
// Receives an array of posts as props and maps each post to an Article component
// Each Article gets a unique key based on the post's id for React's reconciliation
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map(post => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
}

export default ArticleList;