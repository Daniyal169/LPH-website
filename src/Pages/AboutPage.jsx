import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutSection from '../components/About/AboutSection'
import Accordion from '../components/Accordion/Accordion'
import Mission from '../components/About/Mission'

function AboutPage() {
    return (
        <>
            <AboutHero />
            <div className="app">
                <AboutSection />
                <Mission />
                <Accordion />
            </div>
        </>
    )
}

export default AboutPage