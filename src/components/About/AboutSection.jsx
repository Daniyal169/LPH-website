import React from 'react'
import "./AboutSection.css"
import logo from "../../asserts/img/logo.png"

function AboutSection() {
    return (
        <div className="aboutHero">
            <div className="aboutCont">
                <div className="aboutLeft">
                    <div className="aboutText">
                        <h3>Welcome to Launch Point Holdings (LPH), a hub of innovative and comprehensive solutions designed to empower businesses across the globe. At LPH, we believe in creating a seamless bridge between visionary ideas and practical solutions that drive success</h3>
                        <h3> Founded on principles of trust, innovation, and customer satisfaction, we strive to lead the industry with unparalleled services in IT hardware, software solutions, and digital transformation consulting.</h3>
                    </div>
                    <div className="aboutImg">
                        <div className="mainImg">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="imgContent">
                            <img src={logo} alt="" />
                            <h3>+92 3254881328</h3>
                            <h3>lph@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className="aboutRight">
                    <div className="aboutRightUp">
                        <img src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <h3>2.5+</h3>
                        <p>Years of Experience</p>
                        <h3>4.7%</h3>
                        <p>Average Client Rating</p>
                    </div>
                    <div className="aboutRightDown">
                        <a
                            className="btn"
                        >
                            Collaborate <span aria-hidden="true" className='ml-2'> ↓ </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection