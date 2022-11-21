import { useState } from "react";
import Image from "next/image";
import { NavLinks } from "./components/navLinks";
import { UserLinks } from "./components/userLinks";
import { Logo } from "../../components/logo";

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function handleClick() {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Logo />
                <NavLinks />
            </div>
            <UserLinks />
        </div>
    );
};
