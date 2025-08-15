import Image from "next/image";
import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Logo from "@/assets/Logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[rgb(29,20,82)] text-white py-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Left Column - Logo & Contact */}
                <div>
                    <Image
                        src={Logo} // Replace with actual logo
                        alt="Innoclin Logo"
                        className="mb-4 "
                        width={200}
                        height={140}
                    />
                    <p className="mb-4">info@innoclin.com</p>
                    <div className="flex space-x-3 mb-4">
                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedin className="text-white hover:text-gray-300" />
                        </a>
                        <a href="#" aria-label="X">
                            <FaTwitter className="text-white hover:text-gray-300" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="text-white hover:text-gray-300" />
                        </a>
                        <a href="#" aria-label="Butterfly">
                            <FaFacebook className="text-white hover:text-gray-300" />
                        </a>
                    </div>
                    <Image
                        src="/qr-code.png" // Replace with QR image
                        alt="QR Code"
                        className="w-20 h-20"
                        width={80}
                        height={80}
                    />
                </div>

                {/* About Us */}
                <div>
                    <h4 className="font-semibold text-pink-500 mb-3">
                        About Us
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li>Mission, purpose & values</li>
                        <li>Leadership</li>
                        <li>Where we operate</li>
                        <li>Our story so far</li>
                        <li>DEI</li>
                        <li>ESG</li>
                        <li>Code of conduct</li>
                        <li>Vendor partners</li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h4 className="font-semibold text-pink-500 mb-3">
                        Our Services
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li>Early phase development</li>
                        <li>Phase I/II/III studies</li>
                        <li>Clinical development expertise</li>
                        <li>Study start-up</li>
                        <li>Patient pathway & feasibility</li>
                        <li>Regulatory services</li>
                        <li>Pharmacovigilance</li>
                        <li>Medical writing</li>
                        <li>Biometrics and Biostatistics</li>
                        <li>Clarity</li>
                        <li>Clinical analytics</li>
                        <li>Clinical data management</li>
                        <li>Clinical technology and ecosystem</li>
                        <li>RBQM</li>
                        <li>AI Principles</li>
                    </ul>
                </div>

                {/* Therapeutic Areas */}
                <div>
                    <h4 className="font-semibold text-pink-500 mb-3">
                        Therapeutic areas
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li>Cardiology</li>
                        <li>Cell and Gene Therapy</li>
                        <li>Dermatology</li>
                        <li>Gastroenterology</li>
                        <li>Infectious diseases</li>
                        <li>Nephrology</li>
                        <li>Neurology</li>
                        <li>Oncology</li>
                        <li>Pediatrics</li>
                        <li>Rare diseases</li>
                        <li>Respiratory</li>
                        <li>Women’s health</li>
                    </ul>
                </div>

                {/* Your Journey & Careers */}
                <div>
                    <h4 className="font-semibold text-pink-500 mb-3">
                        Your journey
                    </h4>
                    <ul className="space-y-1 text-sm mb-4">
                        <li>Become part of a trial</li>
                        <li>Partner with us</li>
                    </ul>
                    <h4 className="font-semibold text-pink-500 mb-3">
                        Careers
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li>View open positions</li>
                        <li>Being part of our team</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-4">
                <p>© 2025 Innoclin Research®. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Transparency in Coverage</a>
                    <a href="#">CFIUS Disclosure</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
