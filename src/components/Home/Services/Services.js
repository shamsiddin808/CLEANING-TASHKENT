import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import Img2 from '../../../images/fresh.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    // Static data for the 4 cards
    const staticCardData = [
        {
            img: Img2,
            title: "Umumiy tozalash",
            description: "Say goodbye to wrinkles with our professional ironing services. We handle your garments with care, providing precise ironing that guarantees a crisp and polished look for your clothing."
        },
        {
            img: Img2,
            title: "Nam Tozalash",
            description: "Experience a fresh and clean environment with our advanced cleaning services, ensuring a spotless and healthy space for you and your loved ones."
        },
        {
            img: Img2,
            title: "RoboCleanda tozalash",
            description: "Our vacuuming services ensure that your carpets and floors are free from dust and allergens, making your home or office a healthier place to be."
        },
        {
            img: Img2,
            title: "Qo'shimcha hizmatlar",
            description: "Deep cleaning services to reach those hidden areas, providing a thorough cleanse that leaves your space gleaming and sanitized."
        }
    ];

    useEffect(() => {
        // Initialize AOS
        AOS.init();
    }, []);

    const getLink = (title) => {
        switch (title) {
            case "Umumiy tozalash":
                return "/general_cleaning";
            case "Nam Tozalash":
                return "/wet_cleaning";
            case "RoboCleanda tozalash":
                return "/robo_cleaning";
            case "Qo'shimcha hizmatlar":
                return "/another_cleaning";
            default:
                return "/general_cleaning";
        }
    };

    return (
        <section className='container'>
            <div className="text-center my-5 pt-5 service-title">
                <h1>Bizning tozalash <span> Xizmatlarimiz</span></h1>
                <p>Sizning xodimlaringiz, mijozlaringiz va mehmonlaringiz uchun toza va sog'lom muhitni ta'minlash uchun ko'p yillik tajribamiz, malakali xodimlarimiz va ilg'or protseduralarimizdan foydalanamiz.</p>
            </div>
            <div className="service-container">
                {serviceData.length ? serviceData.map(item => (
                    <ServiceCard key={item._id} item={item} />
                )) : (
                    staticCardData.map((card, index) => (
                        <Link
                            to={getLink(card.title)}
                            className="wrapper-div"
                            key={index}
                            data-aos="fade-down"
                        >
                            <div className="icon-wrapper">
                                <img src={card.img} alt={`${card.title} Icon`} className="img" />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
};

export default Services;
