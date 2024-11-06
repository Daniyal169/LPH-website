import React from 'react'
import HardwareHero from '../components/Hardware/HardwareHero'
import HardwareSection from '../components/Hardware/HardwareSection'
import ContactDetail from '../components/Contact/ContactDetail'

function HardwarePage() {
    return (
        <>
            <HardwareHero />
            <div className="app">
                <HardwareSection />
                <ContactDetail />
            </div>
        </>
    )
}

export default HardwarePage