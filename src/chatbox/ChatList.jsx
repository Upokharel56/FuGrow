import React from 'react'
import Chat from './Chat'

function ChatList() {
    return (
        <>
            <div className="flex flex-col h-screen bg-gray-100">
                {/* Header */}
                <header className="flex items-center justify-between bg-white p-4 shadow-md">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                ></path>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold">QuickChat</h1>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex flex-grow">
                    {/* Sidebar */}
                    <aside className="w-64 bg-white p-6 shadow-md flex flex-col">
                        {/* User Profile */}
                        <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 p-6 rounded-lg">
                            <div className="h-20 w-20 rounded-full border overflow-hidden">
                                <img
                                    src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                    alt="Avatar"
                                    className="h-full w-full"
                                />
                            </div>
                            <div className="text-sm font-semibold mt-2">Aminos Co.</div>
                            <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
                            <div className="flex flex-row items-center mt-3">
                                <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                                    <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                                </div>
                                <div className="leading-none ml-1 text-xs">Active</div>
                            </div>
                        </div>

                        {/* Active Conversations */}
                        <div className="mt-8">
                            <h2 className="text-xs font-bold">Active Conversations</h2>
                            <div className="mt-4 space-y-2">
                                <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-xl">
                                    <div className="h-8 w-8 bg-indigo-200 rounded-full flex items-center justify-center">H</div>
                                    <span className="ml-2 text-sm font-semibold">Henry Boyd</span>
                                </button>
                                <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-xl">
                                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">M</div>
                                    <span className="ml-2 text-sm font-semibold">Marta Curtis</span>
                                    <div className="ml-auto bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">2</div>
                                </button>
                                <button className="flex items-center w-full p-2 hover:bg-gray-100 rounded-xl">
                                    <div className="h-8 w-8 bg-orange-200 rounded-full flex items-center justify-center">P</div>
                                    <span className="ml-2 text-sm font-semibold">Philip Tucker</span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Chat Area */}
                    <main className="flex flex-grow flex-col bg-white shadow-md">
                        <div className="text-center text-gray-500 text-lg">
                            <Chat />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ChatList
