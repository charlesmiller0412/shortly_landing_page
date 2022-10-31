import { useState } from "react";
import Image from "next/image";
import { NavLinks } from "./components/navLinks";
import { UserLinks } from "./components/userLinks";

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function handleClick() {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__logo">
                    <Image
                        src="/assets/logo.svg"
                        alt="Shortly logo"
                        fill
                        className="contain"
                        priority
                        sizes="12rem, 3.3rem"
                    />
                </div>
                <NavLinks />
            </div>
            <UserLinks />
        </div>
    );
};
