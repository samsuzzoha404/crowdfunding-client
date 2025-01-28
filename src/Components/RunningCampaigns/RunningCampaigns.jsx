import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch running campaigns
    fetch("https://crowdfunding-server-sable.vercel.app/runningCampaigns")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch campaigns: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCampaigns(data);
        } else {
          throw new Error("Unexpected API response format");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading campaigns...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Running Campaigns
      </h1>
      {campaigns.length === 0 ? (
        <p className="text-center">No running campaigns found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 flex flex-col h-full"
              data-tooltip-id={`tooltip-${campaign._id}`}
              data-tooltip-content={`Created by ${
                campaign.name || "Unknown"
              }, Min Donation: ${campaign.minimumDonationAmount || 0} TK`}
            >
              <img
                src={campaign.photo || "https://via.placeholder.com/150"}
                alt={campaign.campaignTitle || "Campaign"}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {campaign.campaignTitle || "Untitled Campaign"}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                <strong>Type:</strong> {campaign.campaignType || "N/A"}
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                <strong>Min Donation:</strong>{" "}
                {campaign.minimumDonationAmount || 0} RM
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                <strong>Deadline:</strong>{" "}
                {campaign.deadline
                  ? new Date(campaign.deadline).toLocaleDateString()
                  : "No deadline"}
              </p>
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
          <Tooltip place="top" effect="solid" />
        </div>
      )}
    </div>
  );
};

export default RunningCampaigns;
