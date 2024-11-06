import React from 'react'
import SoftwareHero from '../components/Software/SoftwareHero'
import SoftwareSection from '../components/Software/SoftwareSection'
import ContactDetail from '../components/Contact/ContactDetail'

function SoftwarePage() {
    return (
        <>
            <SoftwareHero />
            <div className="app">
                <SoftwareSection />
                <ContactDetail />
            </div>
        </>
    )
}

export default SoftwarePage