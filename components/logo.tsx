import Image from "next/image";
export const Logo = () => {
    return (
        <a href="#" className="navbar__logo">
            <Image
                src="/assets/logo.svg"
                alt="Shortly logo"
                fill
                className="contain"
                priority
                sizes="12rem, 3.3rem"
            />
        </a>
    );
};
