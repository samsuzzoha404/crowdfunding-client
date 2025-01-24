import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [campaign, setCampaign] = useState(null);

    useEffect(() => {
        // Fetch campaign details by ID
        fetch(`https://crowdfunding-server-sable.vercel.app/campaigns/${id}`)
            .then((res) => res.json())
            .then((data) => setCampaign(data))
            .catch((err) => console.error('Error fetching campaign:', err));
    }, [id]);

    const handleDonate = () => {
        if (!user) {
            Swal.fire({
                title: 'Login Required',
                text: 'You need to be logged in to donate.',
                icon: 'warning',
                confirmButtonText: 'Login',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
            return;
        }

        const currentDate = new Date();
        const deadlineDate = new Date(campaign.deadline);

        if (currentDate > deadlineDate) {
            Swal.fire({
                title: 'Campaign Closed',
                text: 'The deadline for this campaign has passed. Donations are no longer accepted.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        // Collect donation data
        const donationData = {
            campaignTitle: campaign?.campaignTitle,
            campaignType: campaign?.campaignType,
            description: campaign?.description,
            minimumDonationAmount: campaign?.minimumDonationAmount,
            deadline: campaign?.deadline,
            photo: campaign?.photo,
            userName: user.displayName,
            userEmail: user.email,
        };

        // Save donation data to the database
        fetch('https://crowdfunding-server-sable.vercel.app/donations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donationData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Thank You!',
                        text: 'Your donation was successful.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            })
            .catch((err) => {
                console.error('Error making donation:', err);
                Swal.fire({
                    title: 'Error',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };


    if (!campaign) {
        return <p className="text-center py-10">Loading campaign details...</p>;
    }

    return (
        <div className="container mx-auto py-10 w-full">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-6">{campaign.campaignTitle}</h1>
            <div className="flex flex-col items-start md:items-center gap-6 w-4/5 lg:w-2/5 mx-auto">
                <div className="w-full">
                    <img
                        src={campaign.photo}
                        alt={campaign.campaignTitle}
                        className="rounded-2xl w-full object-cover"
                    />
                </div>
                <div className="w-full space-y-4">
                    <p className="text-gray-700 text-lg dark:text-gray-400">
                        <strong>Description: </strong>
                        {campaign.description}
                    </p>
                    <p className="text-gray-700 text-lg dark:text-gray-400">
                        <strong>Type: </strong>
                        {campaign.campaignType}
                    </p>
                    <p className="text-gray-700 text-lg dark:text-gray-400">
                        <strong>Minimum Donation: </strong>{campaign.minimumDonationAmount} RM
                    </p>
                    <p className="text-gray-700 text-lg dark:text-gray-400">
                        <strong>Deadline: </strong>
                        {new Date(campaign.deadline).toLocaleDateString()}
                    </p>
                    <button onClick={handleDonate} className="btn btn-primary w-full">
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
