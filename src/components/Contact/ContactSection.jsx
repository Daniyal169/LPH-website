import React from 'react'
import "./Contact.css"

function ContactSection() {
    return (
        <div className="contactsection">
            <div className="projectsBox">
                <h1 className="projectHead">Completed projects</h1>
                <h3 className="projectNum">10+</h3>
                <p className="projectCont">Successfully delivered projects ranging from front-end web development to full-stack web applications.</p>

            </div>
            <div className="projectsBox">
                <h1 className="projectHead">Hours Worked</h1>
                <h3 className="projectNum">500+</h3>
                <p className="projectCont">Proud to have dedicated over 500 hours of work, delivering exceptional results to clients worldwide.</p>
            </div>

            <div className="projectsBox">
                <h1 className="projectHead">Year of experience</h1>
                <h3 className="projectNum">2.5+</h3>
                <p className="projectCont">Bringing over a decade of expertise in web development and digital solutions, ensuring innovation and exceptional service..</p>

            </div>
        </div>
    )
}

export default ContactSection