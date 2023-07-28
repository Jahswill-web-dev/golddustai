import React from "react";
import Image from "next/image";
import research from "../public/images/research2.png"; 
import data from "../public/images/data.png"; 
import automate from "../public/images/automate.png"; 
import deploy from "../public/images/deploy.png";

function process() {
    return (
        <div className="pb-10">
            <h3 className="text-2xl text-center fontsemibold text-secondary py-20">
                How we do it: our 4 simple step process
            </h3>
            <div className="flex flex-col gap-10 md:gap-28">


                <div className="flex gap-5 flex-col mx-auto md:flex-row-reverse md:items-center md:gap-4">
                    <Image
                        alt="golddust AI research"
                        src={research}
                        className="w-[20rem] md:w-[25%] mx-auto"
                    />

                    <div className="md:w-[50%] text-center text-secondary w-[90%] md:pl-5 mx-auto md:text-start">
                        <h3 className="text-2xl md:text-3xl font-bold">Discover and uncover insights in with data exploration</h3>
                        <p className="text-lg">we enable you to delve deep into your data and uncover patterns, trends and correlation that were previously unseen to automate your business with AI </p>
                    </div>
                </div>


                <div className="flex gap-5 flex-col mx-auto md:flex-row md:items-center md:gap-4">
                    <Image
                        alt="golddust AI data analysis"
                        src={data}
                        className="w-[16rem] md:w-[25%] mx-auto"
                    />

                    <div className="md:w-[50%] text-center text-secondary w-[90%] md:pl-5 mx-auto md:text-start">
                        <h3 className="text-2xl md:text-3xl font-bold">Collect and analyze data</h3>
                        <p className="text-lg">maximize your business intelligence through data collection and analysis. harness the full potential of your data with seamless advanced analytic techniques for actionable insights that drive informed  decision making.</p>
                    </div>
                </div>


                <div className="flex gap-5 flex-col mx-auto md:flex-row-reverse md:items-center md:gap-4">
                    <Image
                        alt="golddust AI automation"
                        src={automate}
                        className="w-[20rem] md:w-[25%] mx-auto"
                    />

                    <div className="md:w-[50%] text-center text-secondary w-[90%] md:pl-5 mx-auto md:text-start">
                        <h3 className="text-2xl md:text-3xl font-bold">Automate: Streamlining processes with intelligent automation.</h3>
                        <p className="text-lg">experience increased efficiency and productivity with our intelligent  automation solutions. Automate repetitive tasks and complex workflows using cutting-edge artificial intelligence systems by eliminating manual intervention,  automation systems optimize resource allocation, minimize error, and enhance operational effectiveness. let us help you streamline your business processes and unlock your full potential.  </p>
                    </div>
                </div>


                <div className="flex gap-5 flex-col mx-auto md:flex-row md:items-center md:gap-4">
                    <Image
                        alt="golddust AI deploy project"
                        src={deploy}
                        className="w-[20rem] md:w-[25%] mx-auto"
                    />

                    <div className="md:w-[50%] text-center text-secondary w-[90%] md:pl-5 mx-auto md:text-start">
                        <h3 className="text-2xl md:text-3xl font-bold">Operate: deploy and manage AI-powered</h3>
                        <p className="text-lg">automation across your business for seamless management and performance optimization while you focus on you core business activities    </p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default process;