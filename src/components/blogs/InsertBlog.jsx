import React, { useState } from 'react'
import customAxios from '../../utils/http';
import handleCatchError from '../../utils/handleCatchError';
import { useNavigate } from 'react-router-dom';

function InsertBlog({ setInsertModalOpen, handleAddBlog , user_id}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_id,
        title: "",
        content: "",
        image: null,
        status: "draft",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            console.log(formData);
            const response = await customAxios.post("/blogs/create.php", formData);
            if (response.data.success) {
                const dt = await response.data.data;
                handleAddBlog(dt)
                setInsertModalOpen(false);
                setIsLoading(false);
                return;
            }
        } catch (error) {
            setFormData({
                user_id,
                title: "",
                content: "",
                image: null,
                status: "draft",
            })
            handleCatchError(error, navigate);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center '>
            <div className='flex mx-auto w-full justify-center mt-[66px] max-h-[100%]'>
                <div className='w-full border bg-white sm:max-w-xl m-4 p-4 sm:m-10 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent'>
                    <div className='flex justify-end'>
                        <button
                            className="close-btn text-2xl text-indigo-700 font-extrabold hover:text-red-300"
                            onClick={() => setInsertModalOpen(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
                        <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Title */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
                                    placeholder="Enter blog title"
                                />
                            </div>

                            {/* Content */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Content</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
                                    rows="5"
                                    placeholder="Write your blog content..."
                                ></textarea>
                            </div>

                            {/* Image Upload */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Upload Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            {/* Status Dropdown */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition"
                            >
                                Submit Blog
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InsertBlog
