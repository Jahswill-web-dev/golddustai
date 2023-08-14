import React from 'react';
// import Button from "./button";
import Link from "next/link";
function Cta() {
    return (
        <div className="bg-secondary py-20 px-1">
            <h2 className="text-white text-center text-3xl sm:w-[90%] mx-auto">
               {"Leverage Golddust's comprehensive AI expertise to identify opportunities for business growth and"} <i className="text-primary not-italic">stay ahead</i> in a constantly changing world.
            </h2>
            <br/> <p className="text-primary text-xl text-center">
                Stay ahead by booking a free consultation call now!!
            </p>
            {/* <Button
                bcontent="Book a free call"
            /> */}
             <Link href="https://calendly.com/golddustai/business-consultaion-call">
                    <div className="text-white text-2xl font-semibold text-center bg-primary rounded-lg px-1 my-2 py-2.5 mx-auto w-[13rem]">
                       Book a free call
                    </div>
                </Link>
            <p className="text-center mt-5 text-red-500 text-[1.3rem]">we only accept five calls a week save your spot now for free</p>
        </div>
    );
}

export default Cta;