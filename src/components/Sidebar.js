"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/icons/logo.svg";
import
{
    FaBox,
    FaCoins,
    FaBookOpen,
    FaCogs,
    FaLifeRing,
    FaSignOutAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const menuItems = [
    { label: "Ship", icon: <FaBox />, href: "/ship-single" },
    { label: "Rates", icon: <FaCoins />, href: "/rates" },
    { label: "Reports", icon: <FaBookOpen />, href: "/reports" },
    { label: "Settings", icon: <FaCogs />, href: "/settings" },
    { label: "Support", icon: <FaLifeRing />, href: "/support" },
    { label: "Logout", icon: <FaSignOutAlt />, href: "/logout" },
];

const Sidebar = () =>
{
    const pathname = usePathname();
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 bg-black text-white shadow">
                <Image alt="logo" src={logo} width={50} height={50} />
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-gray-100 text-black h-screen  flex flex-col justify-between fixed top-0 left-0 z-50 transition-transform duration-300 md:static sm:w-auto w-full ${ isOpen ? "translate-x-0 top-[85px]" : "-translate-x-full md:translate-x-0  top-[85px]"
                    }`}
            >
                <div className="space-y-6">
                    <div className="hidden md:flex items-center justify-center  ">
                        <div className="bg-black w-[215px] h-[215px] flex items-center justify-center">
                            <Image alt="logo" src={logo} />
                        </div>
                    </div>

                    <nav className="space-y-4">
                        {menuItems.map((item) => (
                            <SidebarItem
                                key={item.label}
                                icon={item.icon}
                                label={item.label}
                                href={item.href}
                                active={pathname === item.href}
                                onClick={() => setIsOpen(false)}
                            />
                        ))}
                    </nav>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                    <p>© 2014–2025 – All Rights Reserved</p>
                    <p>
                        <a href="#" className="underline">
                            Manage your Privacy & Data Settings
                        </a>
                    </p>
                </div>
            </aside>
        </>
    );
};

const SidebarItem = ({ icon, label, href, active, onClick }) => (
    <Link href={href}>
        <div
            onClick={onClick}
            className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition hover:bg-white ${ active ? "bg-white shadow" : ""
                }`}
        >
            <div className="text-xl">{icon}</div>
            <span className="text-sm font-medium">{label}</span>
        </div>
    </Link>
);

export default Sidebar;
