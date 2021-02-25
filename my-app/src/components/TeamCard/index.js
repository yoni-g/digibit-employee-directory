import React from 'react';
import Image from "react-bootstrap/Image";
import LazyLoad from 'react-lazyload';
import { FaPhoneAlt, FaEnvelope, FaIndustry, FaUserCircle, FaSpinner } from 'react-icons/fa';

import './style.css';



function TeamCard({ name, company, industry, phone, email, userimageurl }) {

    return (

        <div className="card-container">
            <div className="card-intro text-color">
            { userimageurl && (
                <LazyLoad height="41">
                    <Image 
                        src={userimageurl} 
                        roundedCircle 
                        alt={name}
                        style={{maxHeight : "11rem"}}
                    />
                </LazyLoad >
            )}
            { !userimageurl && <FaUserCircle size={"9rem"}/> }

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