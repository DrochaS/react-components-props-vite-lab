import blogData from "./data/blog";

function App() {
  return (
    <div className="App">
      <header>
        <h1>{blogData.name}</h1>
      </header>
      <aside>
        <img src={blogData.image} alt="blog logo" />
        <p>{blogData.about}</p>
      </aside>
      <main>
        {blogData.posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <small>{post.date || "January 1, 1970"}</small>
            <p>{post.preview}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
