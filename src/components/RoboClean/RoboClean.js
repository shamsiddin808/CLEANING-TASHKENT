import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Robo.css';
import { FaBroom, FaCouch, FaBath, FaWindowMaximize, FaToilet, FaMagic, FaBed } from 'react-icons/fa'; // FaMagic used as a replacement for 

const General_clearing = () => {

  const services = [
    { text: 'Polni changini olish', icon: <FaBroom /> },
    { text: 'Gilamni changini olish', icon: <FaMagic /> }, // Use FaMagic for rug cleaning
    { text: 'Oboy changini olish', icon: <FaBroom /> },
    { text: 'Qandillarning changini olish', icon: <FaCouch /> },
    { text: 'Potolok changini olish', icon: <FaBroom /> },
    { text: 'Xammom tozalash', icon: <FaBath /> },
    { text: 'Hojat hona tozalash', icon: <FaToilet /> },
    { text: 'Oynalarni tozalash', icon: <FaWindowMaximize /> },
    { text: 'Mebellarni changini olish', icon: <FaCouch /> },
    { text: 'Gilamlarni joyida yuvish', icon: <FaMagic /> }, // Use FaMagic for carpet washing
    { text: 'Divan ximchistka', icon: <FaCouch /> },
    { text: 'Matras ximchistka', icon: <FaBed /> } // Use FaBed for Matras cleaning
  ];

  return (
    <div className='container'>
      <Navbar />
      <div className='wrapper-main'>
        <div className='wrapper-text'>
          <h3 className='service-title'> <span>RoboCleanda</span> Генеральная уборкаning ichiga kiruvchi hizmat turlari ro'yxati</h3>
          <div className='services-grid'>
            {services.map((service, index) => (
              <div className='service-cardd' key={index}>
                <div className='service-icon'>{service.icon}</div>
                <div className='service-text'>{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default General_clearing;
