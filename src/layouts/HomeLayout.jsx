import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function HomeLayout() {

    const { isAuthenticated, loading } = useAuth();
    return (
        <>
            {/* NavBar */}
            <header className="header">
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
                {isAuthenticated ? <div className="header-btns">
                    <button className="login">Dashboard</button>
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
        </>
    )
}

export default HomeLayout
