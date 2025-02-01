import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function HomeLayout() {
    const { isAuthenticated, loading } = useAuth();
    return (
        <>

            {/* NavBar */}
            <header className="header fixed">
                <Link to={'/'}>
                    <div className="header-logo">
                        <h2 style={{ fontSize: "26px" }}>FuGrow</h2>
                    </div>
                </Link>
                <nav className="header-nav">
                    <a href=""> <i className="ri-stack-fill"></i> Services</a>
                    <a href=""> <i className="ri-service-fill"></i> Solutions</a>
                    <Link to='/blogs'> <i className="ri-service-fill"></i> Blogs</Link>
                    <a href=""><i className="ri-creative-commons-sa-fill"></i> Resources</a>
                </nav>
                {isAuthenticated ?
                    <div className="header-btns">
                        <Link to={'/admin'}>
                            <button className="login">Dashboard</button>
                        </Link>
                    </div> :
                    <div className="header-btns">
                        <Link to="/login" >
                            <button className="login">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="register">Register</button>
                        </Link>
                    </div>
                }
            </header>

            {/* Main Content */}
            <Outlet />

            {/* Footer */}
            <footer className="bg-[#0C321A] text-white py-10 font-poppins">
                <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-between gap-8">
                    {/* Footer Brand */}
                    <div className="max-w-[300px]">
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Fugrow is revolutionizing agriculture with innovative technology for a sustainable future.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="max-w-[200px]">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Footer Social Media */}
                    <div className="max-w-[200px]">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" className="text-white hover:text-green-500 transition-colors">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" target="_blank" className="text-white hover:text-green-500 transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank" className="text-white hover:text-green-500 transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank" className="text-white hover:text-green-500 transition-colors">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="max-w-[300px]">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-map-marker-alt mr-2 text-green-500"></i>
                                National galli, Itahari City, Nepal
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-phone mr-2 text-green-500"></i>
                                +977 980000098
                            </li>
                            <li className="flex items-center text-gray-300">
                                <i className="fas fa-envelope mr-2 text-green-500"></i>
                                info@fugrow.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-300">
                        &copy; 2025 Fugrow Agro-tech. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default HomeLayout
