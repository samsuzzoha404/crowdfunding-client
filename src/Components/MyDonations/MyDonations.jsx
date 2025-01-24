import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            // Fetch donations by user email
            fetch(`https://crowdfunding-server-sable.vercel.app/myDonations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setDonations(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching donations:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>;
    }

    if (donations.length === 0) {
        return <p className="text-center py-10 min-h-screen">No donations found!</p>;
    }

    return (
        <div className="container mx-auto py-10 min-h-screen">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">My Donations</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Campaign Title</th>
                            <th className="px-4 py-2 border">Campaign Type</th>
                            <th className="px-4 py-2 border">Donated Amount</th>
                            <th className="px-4 py-2 border">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation, index) => (
                            <tr key={donation._id} className="text-center hover:bg-gray-100 dark:hover:bg-black">
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">
                                    {donation.campaignTitle}
                                </td>
                                <td className="px-4 py-2 border">
                                    {donation.campaignType}
                                </td>
                                <td className="px-4 py-2 border">
                                    {donation.minimumDonationAmount} RM
                                </td>
                                <td className="px-4 py-2 border">
                                    {donation.deadline
                                        ? new Date(donation.deadline).toLocaleDateString()
                                        : 'N/A'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDonations;
