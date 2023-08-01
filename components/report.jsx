import React from 'react';
import chip from '../public/images/chip2.png';
import Image from 'next/image';

function report(props) {
    return (
        <div className="bg-secondary py-20 mt-10 px-1 flex flex-col gap-5">
            <Image
            alt="AI engraved on a chip"
            className="w-[30%] mx-auto"
            src={chip}
            />
            <h2 className="text-white text-center text-3xl sm:w-[90%] mx-auto">
                {props.content}
            </h2>
            
            
        </div>
    );
}

export default report;