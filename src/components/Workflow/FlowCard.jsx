import React from 'react'
import "./WorkFlow.css"

function FlowCard({ hour, title, content }) {
    return (
        <div className="flowCard border-neutral-800 bg-neutral-900/50">
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}

export default FlowCard