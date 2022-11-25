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
                <a href="#" aria-label="home">
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
                    <h4>Features</h4>
                    <ul>
                        <li>
                            <a href="#" aria-label="link sharing">
                                link sharing
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="brand links">
                                branded links
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="analytics">
                                analytics
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__links--resources">
                    <h4>Resources</h4>
                    <ul>
                        <li>
                            <a href="#" aria-label="blog">
                                blog
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="developers">
                                developers
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="support">
                                support
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__links--company">
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a href="#" aria-label="about">
                                about
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="our team">
                                our team
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="careers">
                                careers
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="contact">
                                contact
                            </a>
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
