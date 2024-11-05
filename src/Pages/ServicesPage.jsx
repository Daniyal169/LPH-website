import React from 'react'
import ServicesHero from '../components/Services/ServicesHero'
import AllServices from '../components/Services/AllServices'
import WorkFlow from '../components/Workflow/WorkFLow'
import ChooseUs from '../components/ChooseUs/ChooseUs'

function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <div className="app">
                <AllServices />
                <WorkFlow />
                <ChooseUs />
            </div>
        </>
    )
}

export default ServicesPage