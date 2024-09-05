import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import logo from '../../../images/bg1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const contacts = [
    { name: "UNIVERSAL CLEANING TASHKENT", link: "https://t.me/universal_cleaning_tashkentbot" }
];

const cleaningServices = [
    { name: "Commercial Cleaning", link: "/services" },
    { name: "Apartment Cleaning", link: "/services" },
    { name: "Window Cleaning", link: "/services" },
    { name: "Office Cleaning", link: "/services" },
    { name: "Car Wash", link: "/services" },
    { name: "After Renovation", link: "/services" },
    { name: "Move In / Move out", link: "/services" }
];

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5 footer_wrapp">
                    <div className="col-md-6">
                        <img className='img-fluid w-50' src={logo} alt="" /> <br /> <br /> <br />
                        <p>Biz tabiiy va ekologik toza tozalash vositalaridan foydalanamiz va mijozlar ehtiyojini qondirish kafolatiga egamiz.</p>
                        <p>Bizning onlayn rejalashtirish va to'lov tizimimiz xavfsiz.</p>
                        <a href="https://t.me/universal_cleaning_tashkentbot">
                        <button
                            className="btn btn-outline-primary rounded-pill border border-5 border-primary">Xizmatlarimizdan
                            foydalaning
                        </button></a>
                    </div>
                    <FooterCol key={2} menuTitle="Telegram" menuItems={contacts}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item text-primary"><a href="https://taplink.cc/universal_cleaning_tashkent?from=qr"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item text-primary"><a href="https://taplink.cc/universal_cleaning_tashkent?from=qr"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item text-primary"><a href="https://taplink.cc/universal_cleaning_tashkent?from=qr"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            <li className="list-inline-item text-primary"><a href="https://taplink.cc/universal_cleaning_tashkent?from=qr"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                        <div className='pt-3'>
                            <h6>Kontaktlar</h6>
                            <h3 className='text-primary'>+998 77 040 44 34</h3>
                            <h3 className='text-primary'>+998 77 080  88 48</h3>
                        </div>
                    </FooterCol>    
                </div>
                <div className="copyRight text-center">
                    <hr />
                    <p>Copyright {(new Date()).getFullYear()}, Clean Crafty - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
