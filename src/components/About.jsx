import React from "react";

// About component displays information about the blog
// Shows the blog logo image and description text
// Uses a default placeholder image if no image prop is provided
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;