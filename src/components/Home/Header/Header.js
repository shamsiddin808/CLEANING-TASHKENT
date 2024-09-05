import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar />
            <div id="carouselExampleCaptions" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active slide-bg1 row">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1>Bahorgi <br />Tozalashmi? <br />Havotir olmang!</h1> <br />
                            <p>Cleaning Crafity sizlarga yordamga keladi bizlarni hizmatimizni pastdagi tugmani bosish orqali ko'ring</p> <br />
                            {/* Link ichida button ishlashi uchun */}
                            <Link to='/services' className='btn service-btn rounded-pill'>
                                Biznin Hizmatlarni Ko'ring
                            </Link> <br /><br />
                        </div>
                    </div>
                    <div className="carousel-item slide-bg2">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1>Bahorgi <br />Tozalashmi? <br />Havotir olmang!</h1> <br />
                            <p>Cleaning Crafity sizlarga yordamga keladi bizlarni hizmatimizni pastdagi tugmani bosish orqali ko'ring</p> <br />
                            <Link to='/services' className='btn service-btn rounded-pill'>
                                Biznin Hizmatlarni Ko'ring
                            </Link> <br /><br />
                        </div>
                    </div>
                    <div className="carousel-item slide-bg3">
                        <div className='col-md-6 slide-text'>
                            <br /><br /><br />
                            <h1>Bahorgi <br />Tozalashmi? <br />Havotir olmang!</h1> <br />
                            <p>Cleaning Crafity sizlarga yordamga keladi bizlarni hizmatimizni pastdagi tugmani bosish orqali ko'ring</p> <br />
                            <Link to='/services' className='btn service-btn rounded-pill'>
                                Biznin Hizmatlarni Ko'ring
                            </Link> <br /><br />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
