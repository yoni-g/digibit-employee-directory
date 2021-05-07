import React from 'react';
import Image from "react-bootstrap/Image";
import LazyLoad from 'react-lazyload';
import { FaPhoneAlt, FaEnvelope, FaIndustry, FaUserCircle, FaLink } from 'react-icons/fa';

import './style.css';



function TeamCard({ name, company, industry, phone, email, userimageurl, website }) {
    
    const defaultImageSize = "10rem"
    
    return (

        <div className="card-container" dir="rtl">
            <div className="card-intro text-color">
            { userimageurl ? 
                <LazyLoad height="41">
                    <Image 
                        src={userimageurl} 
                        roundedCircle 
                        alt={name}
                        style={{maxHeight : defaultImageSize}}
                    />
                </LazyLoad >
                : 
                <FaUserCircle size={defaultImageSize}/> 
            }

                <h2>{name}</h2>
                <h3>{company}</h3>
            </div>
            <hr />
            
            <div className="card-contact">
                <ul>
                    { industry && <li><FaIndustry /> {industry}</li> }
                    <li><FaPhoneAlt /> <a href={`tel:${phone}`}>{phone}</a></li>
                    <li><FaEnvelope /> <a href={`mailto:${email}`}>אימייל</a></li>
                    { website && <li><FaLink /> <a href={website}>אתר</a></li> }
                </ul>
            </div>
        </div>

    )
}


export default TeamCard;