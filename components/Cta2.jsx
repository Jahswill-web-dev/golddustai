import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import bulb from '../public/images/bulb.png'
function Cta2() {
    return (
        <div className="bg-secondary p-20 sm:py-5 px-1 flex flex-col items-center gap-2 sm:flex-row-reverse">
          <Image alt="AI artificial intellingence bulb"
          src={bulb}
          className="w-[15rem] mx-auto sm:w-[30%]"
          />  
            <div className="sm:pl-7 flex flex-col sm:w-[60%]">
                <h2 className="text-center text-3xl text-primary sm:px-0 px-[2.5rem] sm:text-start">
                    Book a free business consultation call
                </h2>
                <br /> <p className="text-white w-[95%] mx-auto sm:mx-0 text-xl text-center sm:text-start">
                    {"Gain clarity on AI strategies that drive real business results"}
                </p>

                <Link href="/">
                    <div className="text-white text-2xl font-semibold text-center 
                    bg-primary rounded-lg px-1 my-2 py-2.5 mx-auto flex items-center justify-center sm:mx-0 w-[13rem] my-5">
                        Book a free call
                    </div>
                </Link>
                <p className="text-center sm:text-start mt-1 text-red-500 text-[1rem] justify-center sm:justify-start flex items-center">Limited Availability of 5 Free Calls Per Week!</p>
            </div>
        
        </div>
    );
}

export default Cta2;