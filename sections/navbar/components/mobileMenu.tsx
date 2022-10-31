import { NavLinks } from "./navLinks";
import { UserLinks } from "./userLinks";

export const MobileMenu = (props: any) => {
    return (
        <div className={props.className}>
            <NavLinks />
            <hr />
            <UserLinks />
        </div>
    );
};
