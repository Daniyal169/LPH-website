import React from 'react'
import "./WorkFLow.css"
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
            <h1 className="block text-center w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl mb-10">
                Our Services Approach
            </h1>
            {work.map((item) => (
                <FlowCard title={item.title} content={item.content} />
            ))}
        </div>
    )
}

export default WorkFlow