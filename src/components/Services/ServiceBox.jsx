import React from 'react'
import "./ServiceBox.css"
import design2 from "../../asserts/img/design2.png";

function ServiceBox() {
    return (
        <div className="serviceBox">
            <img src={design2} alt="" />
            <h2>Robotic Process Automation</h2>
            <p>Automate business processes with software robots for faster and more accurate execution of repetitive tasks.</p>
        </div>
    )
}

export default ServiceBox