import React from 'react';
import './Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsWash, faStamp, faThumbsUp, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons'

const Overview = () => {
    return (
        <section className='row overview-container'>
            <div className="col-md-3 text-center py-5">
                 <FontAwesomeIcon icon={faUsers} size="6x"/> <br/>
                 <h1>1500+</h1>
                 <h5>Baxtli mijozlar</h5>
            </div>
            <div className="col-md-3 text-center py-5">
                <FontAwesomeIcon icon={faThumbsUp} size="6x"/> <br/>
                 <h1>100%</h1>
                 <h5>Qoniqish</h5>
            </div>
            <div className="col-md-3 text-center py-5">
                <FontAwesomeIcon icon={faHandsWash} size="6x"/> <br/>
                 <h1>1000+</h1>
                 <h5>Tozalash tugallandi</h5>
            </div>
            <div className="col-md-3 text-center py-5">
                <FontAwesomeIcon icon={faUsersCog} size="6x"/> <br/>
                 <h1>50+</h1>
                 <h5>Ishchilar</h5>
            </div>
        </section>
    );
};

export default Overview;