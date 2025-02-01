import React, { useState } from 'react'
import InsertBlog from './InsertBlog';

function Blog() {
    const [isLoading, setIsLoading] = useState(false);
    const [isInsertModalOpen, setInsertModalOpen] = useState(false); // Insert modal state


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="overflow-x-auto">
                    <div className="flex justify-center min-[750px]:justify-end gap-8">
                        <button
                            onClick={() => setInsertModalOpen(true)}
                            className="bg-green-700 text-white p-4 rounded-xl flex gap-2 items-center"
                        >
                            <i className="bx bx-plus-medical"></i>Insert
                        </button>
                        {isInsertModalOpen && (
                            <InsertBlog
                                setInsertModalOpen={setInsertModalOpen}
                            />
                        )}

                    
                    </div>
                </div>
            )}
        </>
    )
};

export default Blog
