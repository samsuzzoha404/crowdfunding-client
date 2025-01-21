
const ContributorStories = () => {
    return (
        <div className="contributor-stories py-10 rounded-2xl">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Contributor Stories</h2>
                <p className="text-lg lg:text-xl mx-auto mb-6 dark:text-gray-400">
                    Hear from our amazing Contributors who are making an impact every day.
                </p>
                <div className="flex justify-center gap-6 flex-col lg:flex-row w-full">
                    <div className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt=""
                                    src="https://img.freepik.com/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">John</h3>
                        <p className="dark:text-gray-400">"Your support makes a difference! Donate today and help us achieve our mission."</p>
                    </div>
                    <div className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt=""
                                    src="https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Diana</h3>
                        <p className="dark:text-gray-400">"Together, we can create change. Donate now to support our cause!"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributorStories;