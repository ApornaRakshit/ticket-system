import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">
            {/* Left: Logo */}
            <div className="navbar-start">
                {/* Mobile Menu Button */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        ☰
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                {/* Website Name */}
                <a className="text-xl font-bold ml-2">
                    CS — Ticket System
                </a>

            </div>
            <div className="navbar-end hidden lg:flex gap-6">
                <a className="cursor-pointer">Home</a>
                <a className="cursor-pointer">FAQ</a>
                <a className="cursor-pointer">Changelog</a>
                <a className="cursor-pointer">Blog</a>
                <a className="cursor-pointer">Download</a>
                <a className="cursor-pointer">Contact</a>
                <button className="px-4 py-2 rounded-lg text-white font-medium 
                bg-gradient-to-r from-[#422AD5] to-[#5B3DF0] 
                hover:opacity-90 transition">
                + New Ticket
                </button>
            </div>
        </div>
    );
};

export default Navbar