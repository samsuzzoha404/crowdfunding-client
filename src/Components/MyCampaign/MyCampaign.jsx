import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Loading/Loading';

const MyCampaign = () => {
    const { user } = useContext(AuthContext);
    const [myCampaigns, setMyCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://crowdfunding-servercd.vercel.app/myCampaign?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyCampaigns(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user campaigns:', error);
                setLoading(false);
            });
    }, [user.email]);

    if (loading) {
        return <Loading></Loading>;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this campaign!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://crowdfunding-servercd.vercel.app/campaigns/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your campaign has been deleted.', 'success');
                            setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
                        }
                    });
            }
        });
    };

    if (myCampaigns.length === 0) {
        return <p className="text-center py-10 min-h-screen">No campaigns found!</p>;
    }

    return (
        <div className="container mx-auto min-h-screen py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">My Campaigns</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Title</th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">Min Donation</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCampaigns.map((campaign, index) => (
                            <tr key={campaign._id} className="text-center hover:bg-gray-100 dark:hover:bg-black">
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{campaign.campaignTitle}</td>
                                <td className="px-4 py-2 border">{campaign.campaignType}</td>
                                <td className="px-4 py-2 border">{campaign.minimumDonationAmount} RM</td>
                                <td className="px-4 py-2 border space-y-3">
                                    <Link to={`/updateCampaign/${campaign._id}`}>
                                        <button className="btn btn-sm btn-warning mr-2">Update</button>
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(campaign._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;
