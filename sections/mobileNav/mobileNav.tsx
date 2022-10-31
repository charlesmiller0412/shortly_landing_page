import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileMenu } from "../navbar/components/mobileMenu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../navbar/components/logo";
export const MobileNav = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function handleClick() {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <div className="mobileNav">
            <Logo />
            <div className="mobileNav__mobileBtn" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <MobileMenu
                className={
                    showMobileMenu
                        ? "mobileNav__mobileMenu show"
                        : "mobileNav__mobileMenu"
                }
            />
        </div>
    );
};
