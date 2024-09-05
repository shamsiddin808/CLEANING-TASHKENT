import React from 'react';
import './Reasons.css';
import modelCleaner from '../../../images/modelCleaner.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPagelines, faSuperpowers } from '@fortawesome/free-brands-svg-icons';

const Reasons = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-md-6 reason-title">
                    <h1>Bizni tanlashingizga asosiy <span> sabablar</span></h1>
                    <p className='text-dark'><small>Bizning mukammallikka bo'lgan sadoqatimiz ortida biz kim ekanligimizni va bizni boshqalardan nimasi bilan farq qilishini belgilaydigan bir nechta asosiy atributlar mavjud.</small></p>

                    <div className="characteristics">
                        <h5><FontAwesomeIcon icon={faBuilding} />Yuqori reytingli kompaniya </h5>
                        <p>Biz mijozlarimizni qondirish va ularning obligatsiya pullarini qaytarish bo'yicha muvaffaqiyatli tajribaga egamiz.</p>

                        <h5><FontAwesomeIcon icon={faSuperpowers} /> Yuqori sifat</h5>
                        <p>Binolaringizdagi chang va axloqsizlikni olib tashlash uchun biz eng zo'r sifatli asboblar va jihozlardan foydalanamiz.</p>

                        <h5><FontAwesomeIcon icon={faPagelines} /> Ekologik toza mahsulotlar</h5>
                        <p>Biz atrof-muhitga, uy hayvonlariga yoki odamlarga hech qanday zarar etkazmaydigan biologik parchalanadigan mahsulotlardan foydalanamiz.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={modelCleaner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Reasons;