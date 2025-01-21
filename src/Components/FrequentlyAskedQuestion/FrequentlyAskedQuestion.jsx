
const FrequentlyAskedQuestion = () => {
    return (
        <div className='faq py-10 mt-4 rounded-2xl'>
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div className="bg-base-200 collapse">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            How does the crowdfunding process work?
                        </div>
                        <div
                            className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Users can create a campaign by providing details about their project or cause, set a fundraising goal, and share it with others. Contributors can donate to the campaign, and funds are collected securely through the platform.</p>
                        </div>
                    </div>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div
                            className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            What types of campaigns can I create on this platform?
                        </div>
                        <div
                            className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>Campaigns can be created for personal needs (like medical expenses), creative ideas (like making a film or app), and startups (like launching a new product). </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestion;