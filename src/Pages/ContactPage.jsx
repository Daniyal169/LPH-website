import React from 'react'
import Contact from '../components/Contact/Contact'
import ContactSection from '../components/Contact/ContactSection'
import ContactHero from '../components/Contact/ContactHero'
import ContactDetail from '../components/Contact/ContactDetail'

function ContactPage() {
    return (
        <>
            <ContactHero />
            <div className="app">
                <Contact />
                <ContactDetail />
            </div>
        </>
    )
}

export default ContactPage