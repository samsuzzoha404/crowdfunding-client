import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";

const Root = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load theme from localStorage or default to light
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // Toggle Theme Handler
    const handleToggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <div className="max-w-[1440px] mx-auto w-11/12">
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                />
                {/* Navbar */}
                <nav className="sticky top-0 z-50 bg-white text-black dark:bg-gray-900 dark:text-white">
                    <Navbar isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
                </nav>
                <Outlet />
                <Footer isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
            </div>
        </div>
    );
};

export default Root;
