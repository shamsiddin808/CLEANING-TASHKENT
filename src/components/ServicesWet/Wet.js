import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Wet.css';
import { FaBroom, FaCouch, FaBath, FaWindowMaximize,FaChair} from 'react-icons/fa'; // FaMagic used as a replacement for 

const General_clearing = () => {

  const services = [
    { text: 'Polni changini olish', icon: <FaBroom /> },
    { text: 'Gilamni changini olish', icon: <FaCouch /> },
    { text: 'Oynalarni tozalash', icon: <FaWindowMaximize /> },
    { text: 'Sanuzel tozalash', icon: <FaBath /> },
    { text: 'Mebellarni changini olish', icon: <FaChair /> }
  ];

  return (
    <div className='container'>
      <Navbar />
      <div className='wrapper-main'>
        <div className='wrapper-text'>
          <h3 className='service-title'><span>Влажная уборка</span> ichiga kiruvchi xizmat turlari ro'yxati</h3>
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
