"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/icons/logo.svg";
import ship from '../../public/icons/menu-ship.png'
import rates from '../../public/icons/menu-rates.png'
import reports from '../../public/icons/menu-reports.png'
import settings from '../../public/icons/menu-settings.png'
import support from '../../public/icons/menu-support.png'
import logout from '../../public/icons/menu-logout.png'
import
{

    FaBars,
    FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const menuItems = [
    { label: "Ship", icon: ship, href: "/ship" },
    { label: "Rates", icon: rates, href: "/rates" },
    { label: "Reports", icon: reports, href: "/reports" },
    { label: "Settings", icon: settings, href: "/settings" },
    { label: "Support", icon: support, href: "/support" },
    { label: "Logout", icon: logout, href: "/logout" },
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
                <div className="space-y-2">
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

                <div className="text-[8px] text-gray-500 text-center space-y-1 px-2">
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
            className={`relative group h-[70px] flex items-center gap-[16px]  px-4 rounded-md cursor-pointer transition 
        ${ active
                    ? "bg-white"
                    : "   bg-transparent"
                } 
        hover:bg-white  `}
        >
            <div className=" w-[70px] h-[70px]">
                <Image
                    src={icon}
                    alt={label}
                    className="w-full h-full object-contain"
                />


            </div>
            {!active && (
                <div className="absolute inset-0 bg-gray-100/50  group-hover:opacity-0 transition-opacity rounded" />
            )}
            <span className="text-xl font-bold">{label}</span>

        </div>
    </Link>

);

export default Sidebar;
