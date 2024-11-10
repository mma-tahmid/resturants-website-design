import React from 'react';

import { Element } from 'react-scroll';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import PortfolioSection from '../Components/PortfolioSection';
import ClientsSection from '../Components/ClientsSection';
import BlogSection from '../Components/BlogSection';
import ContactSection from '../Components/ContactSection';



const FullLandingPage = () => {

    return (

        <>
            <div>
                <Element name="home" className="section">
                    <HeroSection />
                </Element>

                <Element name="about" className="section">
                    <AboutSection />
                </Element>

                <Element name="portfolio" className="section">

                    <PortfolioSection />
                </Element>

                <Element name="clients" className="section">
                    <ClientsSection />

                </Element>

                <Element name="blogs" className="section">

                    <BlogSection />
                </Element>

                <Element name="contacts" className="section">

                    <ContactSection />
                </Element>
            </div>

        </>
    );
};

export default FullLandingPage;