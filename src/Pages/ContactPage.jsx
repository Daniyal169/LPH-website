import React from 'react'
import Contact from '../components/Contact/Contact'
import ContactSection from '../components/Contact/ContactSection'
import ContactHero from '../components/Contact/ContactHero'

function ContactPage() {
    return (
        <>
            <ContactHero />
            <div className="app">
                <Contact />
                <ContactSection />
            </div>
        </>
    )
}

export default ContactPage