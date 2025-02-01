import React, { useEffect, useState } from 'react'
import customAxios from '../utils/http';

function Blogs() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Simulating fetching data
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setIsLoading(true);
            const response = await customAxios.post('/blogs/getlatestblogs.php'); // Replace with your actual API URL
            if (response.data.success) {
                const data = await response.data.data;
                setBlogs(data);
                setIsLoading(false);
            } else {
                console.error("Failed to fetch blogs");
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setIsLoading(false);
        }
    };
    return (
        <>
            <div className="max-w-3xl mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
                {blogs.length === 0 ? (
                    <p className="text-gray-500">No blogs available. Create one!</p>
                ) : (
                    <ul className="space-y-4">
                        {blogs.map((blog) => (
                            <li key={blog.id} className="p-4 border rounded-lg shadow-md bg-white">
                                <h3 className="text-xl font-semibold">{blog.title}</h3>
                                <p className="text-gray-700">{blog.content}</p>
                                <span className="text-sm text-gray-500">Posted on: {blog.post_date}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default Blogs
