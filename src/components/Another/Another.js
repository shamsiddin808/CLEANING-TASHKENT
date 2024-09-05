import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Another.css';
import { FaUtensils, FaTshirt, FaWarehouse, FaCouch, FaTachometerAlt, FaWater, FaBroom, FaTree, FaBuilding, FaSprayCan, FaAlignJustify } from 'react-icons/fa'; // Replaced FaLawnMower with FaTree

const Another_clearing = () => {

  const additionalServices = [
    { text: 'Posudalarni yuvish', icon: <FaUtensils /> },
    { text: 'Kiyimlarni tartibga keltirish', icon: <FaTshirt /> },
    { text: 'Podvalni tartibga keltirish', icon: <FaWarehouse /> },
    { text: 'Buyumlarni tartibga keltirish', icon: <FaCouch /> },
    { text: 'Kiyimlarni dazmollash', icon: <FaTachometerAlt /> }, // Replaced FaIron with FaTachometerAlt
    { text: 'Bruschatka yuvish', icon: <FaWater /> },
    { text: 'Alikafon tozalash', icon: <FaBroom /> },
    { text: 'Gazonokosilka', icon: <FaTree /> }, // Replaced FaLawnMower with FaTree
    { text: 'Fasad yuvish', icon: <FaBuilding /> },
    { text: 'Dezinfektsiya', icon: <FaSprayCan /> },
    { text: 'Pardalarni yuvib dazmollash', icon: <FaAlignJustify /> }
  ];

  return (
    <div className='container'>
      <Navbar />
      <div className='wrapper-main'>
        <div className='wrapper-text'>
          <h3 className='service-title'> <span>Qo'shimcha</span> Tozalashning ichiga kiruvchi hizmat turlari ro'yxati</h3>
          <div className='services-grid'>
            {additionalServices.map((service, index) => (
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

export default Another_clearing;
