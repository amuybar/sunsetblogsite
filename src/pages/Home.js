import BlogCard from "../components/BlogCard";

function Home() {
  const sampleBlogs = [
    { id: 1, title: "First Blog", summary: "This is the first blog." },
    { id: 2, title: "Second Blog", summary: "This is the second blog." },
  ];

  return (
    <div className="home_container">
      <div className="blog_grid">
        {sampleBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
