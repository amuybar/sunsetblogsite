import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p>{blog.summary}</p>
      <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-2 inline-block">
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
