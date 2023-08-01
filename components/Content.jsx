import React from 'react';
import Image from "next/image";
import unlock from "../public/images/unlock.png";
import patners from "../public/images/patners.png";
function Content() {
    return (
        <div className="flex flex-col gap-20 py-10 px-3" id="about">
            <h2 className="text-center p-3 text-3xl text-secondary">What We Do</h2>
            <div className="flex flex-col gap-3 sm:gap-10 items-center text-center sm:flex-row-reverse sm:gap-5 sm:mx-auto">
                <div className="sm:w-[50%]">
                    <Image
                        src={patners}
                        className="w-[12rem] sm:w-[70%] mx-auto"
                        alt="graphics illustration of patnership"
                    />
                </div>
                <div className="sm:w-[50%] sm:text-start text-secondary w-[90%]">
                    <h2 className="text-primary font-semibold text-3xl sm:text-2xl">
                        Golddust AI: Your Partner in AI-Powered Solutions
                    </h2>
                    <p className="text-lg">Golddust AI is your artificial intelligence and analytics consulting firm, specializing in delivering end-to-end AI-powered solutions. From ideation to production, we guide you through the entire process, shaping your ideas into go-to-market solutions. With our expertise across multiple industries, we help businesses innovate with AI, enhance customer insights, automate workflows, and capture opportunities for profit maximization.</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-5 sm:mx-auto">
                <div className="sm:w-[50%]">
                    <Image src={unlock}
                        className="w-[12rem] mx-auto sm:w-[70%]"
                        alt="Unlocking your business potential with AI"
                    />
                </div>
                <div className="sm:w-[50%] sm:text-start text-secondary w-[90%]">
                    <h2 className="text-primary font-semibold text-3xl sm:text-2xl">Unlocking Business Potential: Harnessing the Power of AI/ML</h2>
                    <p className="text-lg">At Golddust AI, we are dedicated to helping small and mid-size firms cut through complexities and implement AI/ML models for business value. As your trusted partner, we assist you in being cost efficient when automating processes, and leveraging the full potential of AI. Our expert guidance spans customer insights, workflow automation, onboarding processes, AIOPS and more. Together, we unlock innovation and maximize profits through the transformative capabilities of AI.</p>
                </div>
            </div>
        </div>
    );
}

export default Content;
