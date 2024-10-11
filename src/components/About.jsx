/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
// import { getText } from '../locales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const About = ({title, desc}) => {
    return (
        <div className="about" id='about'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className='about-texts'>
                    <div className="col-md-4">
                        <h2>{title}</h2>
                    </div>
                    <div className="col-md-4">
                        <p>{desc}</p>
                    </div>
                    </div>
                    <div className="img">
                        <img className='w-100' src="img/about.png" alt="" />

                        <div className="icon">
                            <Link to="/about"><FontAwesomeIcon className='fa-gradient' icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
