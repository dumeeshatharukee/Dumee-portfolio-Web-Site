import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg';
const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt=''/>
            <h1><span>I'm Dumeesha Tharukee </span>Software Developer </h1>
            <p>   I'm a passionate and detail-oriented software developer with experience in designing, building, and maintaining web-based applications. 
            I enjoy solving real-world problems through clean code and modern technologies. I thrive in collaborative environments and 
            continuously seek to learn and grow in the tech field. </p>

            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resumes</div>
        </div>
     </div>    
    )

}

export default Hero

