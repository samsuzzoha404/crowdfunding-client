import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';
import ContributorStories from '../ContributorStories/ContributorStories';
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    

    return (
        <div>
            {/* Content */}
            <section className="mb-8">
                <Zoom><Banner /></Zoom>
            </section>
            <section>
                <RunningCampaigns />
            </section>
            <section>
                <ContributorStories />
            </section>
            <section>
                <AboutUs></AboutUs>
            </section>
            <section>
                <FrequentlyAskedQuestion />
            </section>
        </div>
    );
};

export default Home;
