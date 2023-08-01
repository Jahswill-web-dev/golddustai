import React from 'react';
import Image from "next/image";
import avatar1 from "../public/images/avatarc.png";
import avatar2 from "../public/images/avatari.png";
import avatar3 from "../public/images/avatarl.png";

function Team() {
    return (
        <div className="py-20 mx-auto">
            <h3 className="text-center text-secondary text-3xl">Meet The Team</h3>
            <div className="p-10 flex flex-col gap-10 sm:flex-row sm:justify-center">
                <div className="flex flex-col gap-3">
                    <Image
                        alt="GolddustAI team Avatar"
                        src={avatar1}
                        className="w-[10rem] mx-auto"
                    />
                    <h3 className="text-2xl text-secondary text-center">MIKE CLAIBURN</h3>
                    <p  className="text-1xl text-primary text-center">Lead developer</p>
                </div>
                <div className="flex flex-col gap-3">
                    <Image
                        alt="GolddustAI team Avatar"
                        src={avatar3}
                        className="w-[10rem] mx-auto"
                    />
                    <h3 className="text-2xl text-secondary text-center">ESTEFAN CORREA</h3>
                    <p  className="text-1xl text-primary text-center">CEO</p>
                </div>
                <div className="flex flex-col gap-3">
                    <Image
                        alt="GolddustAI team Avatar"
                        src={avatar2}
                        className="w-[10rem] mx-auto"
                    />
                    <h3 className="text-2xl text-secondary text-center">JOSEPH IYOFOR</h3>
                    <p  className="text-1xl text-primary text-center">Lead consultant</p>
                </div>
            </div>
        </div>
    );
}

export default Team;