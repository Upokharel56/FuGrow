import React, { useState, useEffect } from "react";
import InsertBlog from "./InsertBlog";
import customAxios from '../../utils/http';
import Loader from '../../utils/Loader';

function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const [isInsertModalOpen, setInsertModalOpen] = useState(false);
  const user_id = localStorage.getItem('userid');
  const [blogs, setBlogs] = useState([]);

  // Function to add new blog
  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
    setInsertModalOpen(false);
  };

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await customAxios.post('/blogs/postbyuser.php', { user_id });
      if (response.data.success) {
        const data = await response.data.data || []; // Assuming the backend returns an array of blogs
        console.log(data)
        // Sort blogs in descending order based on `post_date`
        const sortedBlogs = data.sort((a, b) => new Date(b.post_date) - new Date(a.post_date));

        setBlogs(sortedBlogs);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-4 py-6">
          {/* Insert Button */}
          <div className="flex justify-center md:justify-end gap-4">
            <button
              onClick={() => setInsertModalOpen(true)}
              className="bg-green-700 text-white px-4 py-2 rounded-lg flex gap-2 items-center shadow-md hover:bg-green-800 transition"
            >
              <i className="bx bx-plus-medical"></i> New Blog
            </button>
          </div>

          {/* Insert Modal */}
          {isInsertModalOpen && (
            <InsertBlog
              user_id={user_id}
              setInsertModalOpen={setInsertModalOpen}
              handleAddBlog={handleAddBlog} />
          )}

          {/* Blog List */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-4">Blog List</h1>

            {blogs.length === 0 ? (
              <p className="text-gray-500">No blogs available. Create one!</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                  <div key={index} className="p-4 bg-white border rounded-lg shadow-md cursor-pointer">
                    {/* {blog.image && (
                      <img
                        src={URL.createObjectURL(blog.image)}
                        alt={blog.title}
                        className="w-full h-40 object-cover rounded-md mb-3"
                      />
                    )} */}
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-sm text-gray-600">{blog.content.substring(0, 100)}...</p>
                    <span
                      className={`px-3 py-1 mt-2 inline-block text-sm rounded-md ${blog.status === "published"
                          ? "bg-green-100 text-green-700"
                          : blog.status === "archived"
                            ? "bg-gray-300 text-gray-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {blog.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;
