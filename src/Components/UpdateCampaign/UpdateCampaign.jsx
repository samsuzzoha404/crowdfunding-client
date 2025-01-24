import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateCampaign = () => {
    const campaign = useLoaderData();
    const { _id, campaignTitle, campaignType, description, minimumDonationAmount, deadline, email, name, photo } = campaign;

    const { user } = useContext(AuthContext);

    // Local state for managing form data
    const [formData, setFormData] = useState({
        campaignTitle,
        campaignType,
        description,
        minimumDonationAmount,
        deadline,
        email,
        name,
        photo,
    });

    // Handle field changes and update the state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateCampaign = (e) => {
        e.preventDefault();

        // Send updated data to the server
        fetch(`https://crowdfunding-server-sable.vercel.app/campaigns/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Campaign updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                } else {
                    Swal.fire({
                        title: 'No Changes!',
                        text: 'No fields were updated.',
                        icon: 'info',
                        confirmButtonText: 'Ok',
                    });
                }
            })
            .catch((err) => {
                console.error('Error updating campaign:', err);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                });
            });
    };

    return (
        <div className="lg:w-3/4 mx-auto min-h-screen">
            <div className="text-center p-10">
                <h1 className="text-2xl md:text-4xl font-bold">Update Campaign: {formData.campaignTitle}</h1>
                <p className="py-6">
                    Bring Your Vision to Life by Connecting with Supporters Worldwide
                </p>
            </div>
            <div className="card w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateCampaign} className="card-body">
                    {/* Form Fields */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">Campaign Title</span>
                            </label>
                            <input
                                type="text"
                                name="campaignTitle"
                                value={formData.campaignTitle}
                                onChange={handleChange}
                                placeholder="Campaign Title"
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">Campaign Type</span>
                            </label>
                            <select
                                name="campaignType"
                                className="select select-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                value={formData.campaignType}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select a Campaign Type
                                </option>
                                <option value="personal-issue">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative-ideas">Creative Ideas</option>
                                <option value="crowd-funding">Charity</option>
                                <option value="education">Education</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">Description</span>
                            </label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Description"
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">Minimum donation amount</span>
                            </label>
                            <input
                                type="number"
                                name="minimumDonationAmount"
                                value={formData.minimumDonationAmount}
                                onChange={handleChange}
                                placeholder="Minimum donation amount"
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">Deadline</span>
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                placeholder="Deadline"
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">User Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                readOnly
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">User Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={user.displayName}
                                readOnly
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                placeholder="Photo URL"
                                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Campaign</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;
