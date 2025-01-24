import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Campaigns from '../Components/Campaigns/Campaigns';
import AddCampaign from '../Components/AddCampaign/AddCampaign';
import MyCampaign from '../Components/MyCampaign/MyCampaign';
import MyDonations from '../Components/MyDonations/MyDonations';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import UpdateCampaign from '../Components/UpdateCampaign/UpdateCampaign';
import Details from '../Components/Details/Details';
import ContributorStories from '../Components/ContributorStories/ContributorStories';
import AboutUs from '../Components/AboutUs/AboutUs';
import FrequentlyAskedQuestion from '../Components/FrequentlyAskedQuestion/FrequentlyAskedQuestion';

const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/campaigns",
                element: <Campaigns></Campaigns>,
                loader: () => fetch('https://crowdfunding-server-sable.vercel.app/campaigns')
            },
            {
                path: "/addCampaign",
                element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>,
            },
            {
                path: "/myCampaign",
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
            },
            {
                path: "/updateCampaign/:id",
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`https://crowdfunding-server-sable.vercel.app/campaigns/${params.id}`)
            },
            {
                path: "/myDonations",
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
            },
            {
                path: "/stories",
                element: <ContributorStories></ContributorStories>,
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/faq",
                element: <FrequentlyAskedQuestion></FrequentlyAskedQuestion>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/campaign/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
            },
        ]
    }
])

export default router;