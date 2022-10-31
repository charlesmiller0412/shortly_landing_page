import Image from "next/image";
export const Logo = () => {
    return (
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
    );
};
