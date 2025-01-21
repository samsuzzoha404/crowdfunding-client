import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from '../../assets/crowdcube.png'

const Footer = () => {
    return (
        <div>
            <footer className="">
                <div className="flex justify-center pb-12">
                    <img src="/assets/logo-footer.png" alt="" srcSet="" />
                </div>
                <div className="mx-auto flex flex-col lg:flex-row justify-between pb-12">
                    {/* Left */}
                    <div className="pb-3">
                        <div className="flex flex-row gap-2 items-center pb-3">
                            <h2 className="text-opacity-90 font-bold text-lg">Contact Information</h2>
                        </div>
                        <div className="space-y-2 text-opacity-[70%]">
                            <p>Location: Kuala Lampur, Malaysia</p>
                            <p>Phone: +60XXXXXXXXXX</p>
                            <p>Email: info.samsuzzohahaque@gmail.com</p>
                            <p>Openings Hours: 9.00 AM to 5.00 PM</p>

                            <div className="flex gap-6 py-3">
                                <a href="#" target="_blank" aria-label="Facebook">
                                    <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
                                </a>
                                <a href="#" target="_blank" aria-label="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
                                </a>
                                <a href="#" target="_blank" aria-label="YouTube">
                                    <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                                </a>
                                <a href="#" target="_blank" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Center */}
                    <div className="flex justify-center">
                        <img 
                        src={logo} 
                        className="object-cover w-64 h-64" />
                    </div>
                    {/* Right */}
                    <div className="pb-3">
                        <h2 className="text-opacity-90 font-bold text-lg pb-3">Quick Links</h2>
                        <div className="text-opacity-70 flex flex-col space-y-2">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/campaigns'>All Campaigns</Link></li>
                            <li><Link to='/addCampaign'>Add Campaign</Link></li>
                            <li><Link to='/stories'>Contributor Stories</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                        </div>
                    </div>
                    <div className="pt-3">
                        <div className="pb-3">
                            <h2 className="text-opacity-90 font-bold text-lg pb-3">Subscribe</h2>
                            <p className="space-y-2 text-opacity-70">
                                Subscribe to our newsletter for the latest updates.
                            </p>
                        </div>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none w-full dark:bg-gray-800 dark:text-white"
                                style={{ borderRight: 'none' }}
                            />
                            <button
                                className="bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-bold py-2 px-6 rounded-r-lg shadow-lg hover:from-pink-500 hover:to-yellow-500 transition duration-300"
                                style={{ borderLeft: 'none' }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 mb-5"></div>
                <div className="w-full mx-auto flex justify-center items-center pb-5">
                    <p className="text-center">Copyright © {new Date().getFullYear()} - All rights reserved by CROWDCUBE</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;