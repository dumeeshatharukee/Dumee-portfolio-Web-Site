import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg';


const About = () => {
    return (
<div className='about'> 
            <div className="about-titile">
                <h1> About Me</h1>
            </div>

            <div className ="about-sections"></div>
                <div className="about-left">
                    <img src={profile_img} alt=''/>
                </div>
                <div className="about-right"></div>
                    <div className="about-para">
                        <h1> Full Stack Developer ! </h1>
                            <p>I'm a motivated and adaptable Full Stack Developer with practical experience and a strong
                             foundation in modern software development. Through academic projects and hands-on work, 
                             I've built full-fledged web applications that integrate front-end design, back-end logic, UI/UX design
                             and database management.I'm passionate about continuous learning, clean code practices, and building applications that solve real-world problems. 
                            I value teamwork, adaptability, and staying updated with emerging technologies in the software engineering world.</p>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                            <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                            <div className="about-skill"><p>Node JS</p><hr style={{width:"40%"}}/></div>

                            <div className="about-skill"><p>figma Design </p><hr style={{width:"80%"}}/></div>
                            <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                            <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>
                            <div className="about-skill"><p>MySQL</p><hr style={{width:"50%"}}/></div>

                        </div>
                    </div>     
 </div>  
   
    )

}

export default About
