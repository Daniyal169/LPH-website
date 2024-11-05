import React from 'react'
import "./WorkFlow.css"
import FlowCard from './FlowCard'

function WorkFlow() {
    const work = [
        {
            title: "Discussion and Implications",
            content: "We discuss the requirements of our clients, and clearly set expectations beforehand.",
        },
        {
            title: "Concepts and Initiatives",
            content: "Our IT experts come up with all kinds of creative ideas and initiatives to deliver the best results.",
        },
        {
            title: "Testing and Trying",
            content: "After agreeing on the ideas and plans, we conduct meetings as scheduled and provide feedback.",
        },
        {
            title: "Execution and Installation",
            content: "Once the final plan is approved, everything will be carried out according to the agreed contract.",
        },

    ];

    return (
        <div className="workflow">
            <h1>Our Services Approach</h1>
            {work.map((item) => (
                <FlowCard title={item.title} content={item.content} />
            ))}
        </div>
    )
}

export default WorkFlow