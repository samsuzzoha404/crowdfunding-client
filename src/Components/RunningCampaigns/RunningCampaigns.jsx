import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const RunningCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch running campaigns (limited to 6 by the backend)
        fetch("https://crowdfunding-server-sable.vercel.app/runningCampaigns")
            .then((res) => res.json())
            .then((data) => setCampaigns(data))
            .catch((err) => console.error("Error fetching campaigns:", err));
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">Running Campaigns</h1>
            {campaigns.length === 0 ? (
                <p className="text-center">No running campaigns found!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {campaigns.map((campaign) => (
                        <div
                            key={campaign._id}
                            className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 flex flex-col h-full"
                            data-tooltip-id={`tooltip-${campaign._id}`}
                            data-tooltip-content={`Created by ${campaign.name}, Min Donation: ${campaign.minimumDonationAmount} TK`}
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
                    {/* Render the Tooltip once globally */}
                    <Tooltip place="top" effect="solid" />
                </div>
            )}
        </div>
    );
};

export default RunningCampaigns;
