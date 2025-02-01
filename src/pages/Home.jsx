import React from 'react'
import Loader from '../utils/Loader';

function Home() {
    return (
        <>
            <div>
                <div id="outer-wrapper">
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
        </>
    )
}

export default Home
