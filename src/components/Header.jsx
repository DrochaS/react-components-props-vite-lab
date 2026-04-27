import React from "react";

// Header component displays the blog's title
// Receives the blog name as a prop and renders it in an h1 element
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;