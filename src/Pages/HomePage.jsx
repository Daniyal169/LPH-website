import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import Testimonial from '../components/Testimonial/Testimonial'
import Gallery from '../components/Gallery/Gallery'
import ContactSection from '../components/Contact/ContactSection'
import HomeAbout from '../components/HomeAbout/HomeAbout'

function HomePage() {
    return (
        <>
            <HomeHero />
           {/* https://www.pexels.com/video/946147/ */}
            <div className="app">
                <HomeAbout />
                <ServiceSection />
                <Gallery />
                <Testimonial />
                <ContactSection />
            </div>
        </>
    )
}

export default HomePage