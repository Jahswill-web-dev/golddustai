import React, { useState } from 'react';
// import Image from "next/image";
import Link from "next/link";

function Nav() {
    const [navHeight, setNavHeigth] = useState("h-0");

    const handleNav = () => {
        setNavHeigth(navHeight === "h-0" ? "h-60" : "h-0");
    }
    return (
        <div className="fixed w-full z-20">
            {/* mobile */}
            <nav className="flex justify-between px-4 py-2 items-center md:hidden bg-secondary">
                <Link  href="#home" className="text-3xl text-primary">Golddust AI</Link>
                <i className="fa fa-bars text-white text-3xl" onClick={handleNav}></i>
            </nav>
            <ul className={`flex flex-col items-center gap-4 transition-all ease-in-out ${navHeight} md:h-0
                 duration-400 delay-150 overflow-hidden text-primary text-2xl bg-secondary absolute top-10 bottom-0 left-0 right-0`}
                style={{ transition: 'height 0.3s' }} >
                <Link href="#services">Our Services</Link>
                <Link href="#about">About Us</Link>
                <Link href="#contact">Contact Us</Link>
                <Link href="/">
                    <div className="text-white text-2xl mx-auto sm:mx-0 font-semibold text-center bg-primary rounded-lg px-1 my-2 py-2.5  w-[13rem]">
                        Book a free call
                    </div>
                </Link>
            </ul>


            {/* desktop */}
            <nav className="flex justify-between px-4 py-2 items-center hidden md:flex bg-secondary">
            <Link  href="#home" className="text-3xl text-primary">Golddust AI</Link>
                <ul className="hidden md:flex gap-2 text-primary pr-4 text-xl">
                    <Link href="#services">Services</Link>
                    <Link href="#about">About</Link>
                    <Link href="#contact">Contact </Link>
                </ul>
            </nav>






        </div>
    );
}

export default Nav;