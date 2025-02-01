import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import Loader from '../utils/Loader';

function Home() {
    const { isAuthenticated, loading } = useAuth();
    return (
        <>
            {loading ? <Loader /> : (
                <div>
                <div id="outer-wrapper">
                    <header className="header">
                        <div className="header-logo">
                            <h2 style={{ fontSize: "13px" }}>FuGrow</h2>
                        </div>
                        <nav className="header-nav">
                            <a href=""> <i className="ri-stack-fill"></i> Services</a>
                            <a href=""> <i className="ri-service-fill"></i> Solutions</a>
                            <a href=""><i className="ri-creative-commons-sa-fill"></i> Resources</a>
                        </nav>
                        {isAuthenticated ? <div className="header-btns">
                            <button className="login">Dashboard</button>
                        </div> :
                            <div className="header-btns">
                                <Link to="/login" >
                                    <button className="login">Login</button>
                                </Link>
                                <a href="signup.php">
                                    <button className="register">Register</button>
                                </a>
                            </div>
                        }
                    </header>
                    <main>
                        <div className="main-content">
                            <h6 className="hero-main-text"> Empowering Modern Agriculture </h6>
                            <h2 className="hero-text">Nurturing Roots, Cultivating <span className="box-hero"><i
                                className="ri-leaf-fill"></i></span> the Future.</h2>
                            <p className="hero-paragraph">
                                "Empowering farmers with a seamless digital marketplace—connecting them to buyers, tools, and resources.
                                A platform where tradition meets technology, ensuring fair trade, better profits, and sustainable growth
                                for the agricultural community."
                            </p>
                        </div>
                        <div className="main-image">
                            <div className="long-image">
                                <span className="line1">Sustainable Farming</span>
                                <span className="line2">Growing Crops</span>
                                <span className="line3">Gray Field</span>
                                <span className="line4">Greenary Power</span>
                                <span className="line5">Modern Tools</span>
                            </div>
                            <div className="main-grid-image">
                                <div>
                                    <h5>Join us in transforming the future of farming.</h5>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </main>
                    <div className="feature-container">
                        <h6 className="hero-main-text">Our Features</h6>
                        <div className="feature-list">
                            <div className="feature-box">
                                <div className="feature-name">
                                    <h2>Sustainable Farming Growth</h2>
                                    <button className="toggle-feature">01</button>
                                </div>
                                <div className="feature-lists">
                                    <p className="feature-p">
                                    </p>
                                </div>
                            </div>
                            <div className="feature-box">
                                <div className="feature-name">
                                    <h2>Modern Tools</h2>
                                    <button className="toggle-feature">02</button>
                                </div>
                                <div className="feature-lists">
                                    <p className="feature-p">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="articles-row">

                    </div>
                </div>
                </div>
            )}
        </>
    )
}

export default Home
