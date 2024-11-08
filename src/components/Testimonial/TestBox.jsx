import React from 'react'
import "./Testimonial.css"

function TestBox({ content, name, title }) {
    return (
        <div className="testBox ">
            <img src="https://cdn.prod.website-files.com/660fed9ccca978270ae11ace/6682543e1b1b7e1d3c2f477d_ic-quote.svg" alt="" className='quote' />
            <p>{content}</p>
            <div className="testCont">
                <div className="testName">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}

export default TestBox