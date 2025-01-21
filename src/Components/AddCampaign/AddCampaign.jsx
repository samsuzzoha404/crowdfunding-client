import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaignType, setCampaignType] = useState("");

  const handleAddCampaign = (e) => {
    e.preventDefault();

    const campaignTitle = e.target.campaignTitle.value;
    const campaignType = e.target.campaignType.value;
    const description = e.target.description.value;
    const minimumDonationAmount = e.target.minimumDonationAmount.value;
    const deadline = e.target.deadline.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const newCampaign = {
      campaignTitle,
      campaignType,
      description,
      minimumDonationAmount,
      deadline,
      email,
      name,
      photo,
    };
    // console.log(newCampaign);

    // send data to the server and database
    fetch("https://crowdfunding-servercd.vercel.app/campaignss", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // console.log('successfully added');
          Swal.fire({
            title: "Success!",
            text: "Campaign added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="mx-auto">
      <div className="text-center p-10">
        <h1 className="text-2xl md:text-4xl font-bold">Add Campaign!</h1>
        <p className="py-6">
          Bring Your Vision to Life by Connecting with Supporters Worldwide
        </p>
      </div>
      <div className="card w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddCampaign} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="">Campaign Title</span>
              </label>
              <input
                type="text"
                name="campaignTitle"
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
                value={campaignType}
                onChange={(e) => setCampaignType(e.target.value)}
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
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="">Description</span>
              </label>
              <input
                type="text"
                name="description"
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
                placeholder="Minimum donation amount"
                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
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
                placeholder="User Email"
                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-gray-400"
                value={user.email}
                readOnly
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
                placeholder="User Name"
                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-gray-400"
                value={user.displayName}
                readOnly
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered bg-white text-black dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;
