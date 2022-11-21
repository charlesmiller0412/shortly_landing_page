import { NavLinks } from "../../navbar/components/navLinks";
import { UserLinks } from "../../navbar/components/userLinks";

export const MobileMenu = (props: any) => {
    return (
        <div className={props.className}>
            <NavLinks />
            <hr />
            <UserLinks />
        </div>
    );
};
