import React from 'react';
import './style.css';
import { FaPhoneAlt, FaEnvelope, FaIndustry, FaUserCircle, FaSpinner } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';



function TeamCard({ name, company, industry, phone, email, img }) {

    return (

        <div className="card-container">
            <div className="card-intro text-color">
            { img && (
                <LazyLoad height="41">
                    <img src={img} alt={name} />
                </LazyLoad >
            )}
            { !img && <FaUserCircle size={"8rem"}/> }

                <h2>{name}</h2>
                <h3>{company}</h3>
            </div>
            <hr />
            
            <div className="card-contact">
                <ul>
                    <li><FaIndustry /> {industry}</li>
                    <li><FaPhoneAlt /> <a href={`tel:${phone}`}>{phone}</a></li>
                    <li><FaEnvelope /> <a href={`mailto:${email}`}>Send Email</a></li>
                </ul>
            </div>
        </div>

    )
}


export default TeamCard;