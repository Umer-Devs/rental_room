import React from 'react';
import {
    Hero,
    BookingForm,
    About,
    FeaturedRooms,
    HowItWorks,
    Benefits,
    Testimonials,
    PopularCities,
    PremiumServices,
    FAQ,
    Footer
} from '../Componenets';

const Home = () => {
    return (
        <>
        <main className="w-full flex flex-col">
            <Hero />
            <BookingForm />
            <About />
            <FeaturedRooms />
            <HowItWorks />
            <Benefits />
            <Testimonials />
            <PopularCities />
            <PremiumServices />
            <FAQ />
            <Footer />
        </main>
        </>
    );
};

export default Home;