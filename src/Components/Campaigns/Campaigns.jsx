import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loading from "../../Pages/Loading/Loading";
import { AuthContext } from "../../provider/AuthProvider";

const Campaigns = () => {
    const campaignsData = useLoaderData(); // Load campaigns data from loader
    const [campaigns, setCampaigns] = useState(campaignsData); // State to manage campaigns
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (campaignsData) {
            setCampaigns(campaignsData);
            setLoading(false); // Set loading to false after data is loaded
        }
    }, [campaignsData]);

    // Function to sort campaigns in ascending order
    const handleSort = () => {
        const sortedCampaigns = [...campaigns].sort(
            (a, b) => a.minimumDonationAmount - b.minimumDonationAmount
        );
        setCampaigns(sortedCampaigns);
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="container mx-auto min-h-screen py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">All Campaigns</h1>
            <div className="flex justify-between items-center mb-4">
                <button
                    className="btn btn-primary"
                    onClick={handleSort}
                >
                    Sort (Ascending)
                </button>
            </div>
            {user && (
                <>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border">#</th>
                                    <th className="px-4 py-2 border">Title</th>
                                    <th className="px-4 py-2 border">Type</th>
                                    <th className="px-4 py-2 border">Min Donation</th>
                                    <th className="px-4 py-2 border">Deadline</th>
                                    <th className="px-4 py-2 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns.map((campaign, index) => (
                                    <tr key={campaign._id} className="text-center hover:bg-gray-100 dark:hover:bg-black">
                                        <td className="px-4 py-2 border">{index + 1}</td>
                                        <td className="px-4 py-2 border">{campaign.campaignTitle}</td>
                                        <td className="px-4 py-2 border">{campaign.campaignType}</td>
                                        <td className="px-4 py-2 border">{campaign.minimumDonationAmount} RM</td>
                                        <td className="px-4 py-2 border">{new Date(campaign.deadline).toLocaleDateString()}</td>
                                        <td className="px-4 py-2 border">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => navigate(`/campaign/${campaign._id}`)}
                                            >
                                                See More
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            {!user && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {campaigns.map((campaign) => (
                            <div
                                key={campaign._id}
                                className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 flex flex-col h-full"
                            >
                                <img
                                    src={campaign.photo}
                                    alt={campaign.campaignTitle}
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <h3 className="text-lg md:text-xl font-semibold mb-2">{campaign.campaignTitle}</h3>
                                <p className="text-gray-700 dark:text-gray-400">
                                    <strong>Type:</strong> {campaign.campaignType}
                                </p>
                                <p className="text-gray-700 dark:text-gray-400">
                                    <strong>Min Donation:</strong>{" "}
                                    {campaign.minimumDonationAmount} RM
                                </p>
                                <p className="text-gray-700 dark:text-gray-400">
                                    <strong>Deadline:</strong>{" "}
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </p>
                                {/* Spacer pushes button to the bottom */}
                                <div className="mt-auto">
                                    <button
                                        className="mt-4 w-full btn btn-primary"
                                        onClick={() => navigate(`/campaign/${campaign._id}`)}
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};

export default Campaigns;
