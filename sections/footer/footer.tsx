import Image from "next/image";
import { useState } from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Pinterest,
} from "../../public/assets/socialIcons";
export const Footer = () => {
    const [twitterColor, setTwitterColor] = useState("#fff");
    const [facebookColor, setFacebookColor] = useState("#fff");
    const [pinterestColor, setPinterestColor] = useState("#fff");
    const [instagramColor, setInstagramColor] = useState("#fff");

    return (
        <div className="footer">
            <div className="footer__logo">
                <a href="#">
                    <Image
                        src="/assets/logo.svg"
                        alt="shortly"
                        width={120}
                        height={33}
                    />
                </a>
            </div>
            <div className="footer__links">
                <div className="footer__links--features">
                    <h5>Features</h5>
                    <ul>
                        <li>
                            <a href="#">link sharing</a>
                        </li>
                        <li>
                            <a href="#">branded links</a>
                        </li>
                        <li>
                            <a href="#">analytics</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__links--resources">
                    <h5>Resources</h5>
                    <ul>
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li>
                            <a href="#">developers</a>
                        </li>
                        <li>
                            <a href="#">support</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__links--company">
                    <h5>Company</h5>
                    <ul>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">our team</a>
                        </li>
                        <li>
                            <a href="#">careers</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__social">
                <a href="#">
                    <Facebook
                        fill={facebookColor}
                        onMouseEnter={() => {
                            setFacebookColor("#2bd0d0");
                        }}
                        onMouseLeave={() => {
                            setFacebookColor("#fff");
                        }}
                    />
                </a>
                <a href="#">
                    <Twitter
                        fill={twitterColor}
                        onMouseEnter={() => {
                            setTwitterColor("#2bd0d0");
                        }}
                        onMouseLeave={() => {
                            setTwitterColor("#fff");
                        }}
                    />
                </a>
                <a href="#">
                    <Pinterest
                        fill={pinterestColor}
                        onMouseEnter={() => {
                            setPinterestColor("#2bd0d0");
                        }}
                        onMouseLeave={() => {
                            setPinterestColor("#fff");
                        }}
                    />
                </a>
                <a href="#">
                    <Instagram
                        fill={instagramColor}
                        onMouseEnter={() => {
                            setInstagramColor("#2bd0d0");
                        }}
                        onMouseLeave={() => {
                            setInstagramColor("#fff");
                        }}
                    />
                </a>
            </div>
        </div>
    );
};
