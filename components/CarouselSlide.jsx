import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import chip from "../public/images/chip.png";
import question from "../public/images/question.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import clarity from "../public/images/avatar-question.png";
import time from "../public/images/time.png";
import insights from "../public/images/insights.png";
import customers from "../public/images/customers.png";
import target from "../public/images/target.png";



function CarouselSlide() {

    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="p-[.5rem]">
            <div className="max-w-[800px] mx-auto relative">
                <div className="flex flex-col gap-5 pb-10">
                    <div className="pt-20">
                        <h3 className="text-center text-2xl">Do you want to gain answers to one of these questions?</h3>
                        <Image
                            src={question}
                            className="w-[4rem] h-[4rem] mx-auto"
                            alt="question mark symbol"
                        />
                    </div>
                </div>
                <button onClick={sliderRef?.slickNext}>
                    <i className="fa-solid fa-chevron-right text-2xl absolute right-0 top-[80%] z-10 text-secondary"
                    ></i>

                </button>
                <i className="fa-solid fa-chevron-left text-2xl absolute left-0 top-[80%] z-10 text-secondary"
                    onClick={sliderRef?.slickPrev}></i>

                <Slider ref={setSliderRef} {...settings} >
                    <div className="">
                        <div className="sm:flex sm:items-center">
                            <Image
                                src={clarity}
                                alt="gain clarity on how to use Artificial intelligence "
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                            <p className="text-2xl text-secondary text-center sm:w-[50%] sm:text-left">
                                how do I gain clarity on my AI strategy?
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="sm:flex sm:items-center">
                            <Image
                                src={time}
                                alt="save time and money with Artificial intelligence"
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                            <p className="text-2xl text-secondary text-center sm:w-[50%] sm:text-left">
                                I want to save time and money which task should I automate first?
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="sm:flex sm:items-center">
                            <Image
                                src={customers}
                                alt="gain insights on customers with AI"
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                            <p className="text-2xl text-secondary text-center sm:w-[50%] sm:text-left">
                                I want Insight on my data & customers. How do I go about this in a cost efficient manner?
                            </p>
                        </div>
                    </div>

                    {/* <div>
                        <div className="sm:flex sm:items-center">
                            <Image
                                src={chip}
                                alt="Artificial intelligence chip"
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                            <p className="text-2xl text-secondary text-center sm:w-[50%] sm:text-left">
                                I want to save time & money which tasks should i automate and how?
                            </p>
                        </div>
                    </div> */}

                    <div>
                        <div className="sm:flex sm:items-center">
                            <Image
                                src={insights}
                                alt="predictive analysis with Artificial intelligence chip"
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                            <p className="text-2xl text-secondary text-center sm:w-[50%] sm:text-left">
                                How do I implement predictive analytics in my firm in a cost effcient manner?
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="sm:flex sm:items-center">
                            <Image
                                src={target}
                                alt="identify opportunities with Artificial intelligence"
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                            <p className="text-2xl text-secondary text-center sm:w-[50%] sm:text-left">
                                How do I identify opportunities for AI in my landscape & where do I start from?
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col-reverse sm:flex-row ">
                            <div className="flex text-center sm:text-start flex-col flex-colsm:w-[50%] gap-3 sm:pl-5">
                                <h3 className="text-2xl sm:font-semibold text-secondary">Book a free business consultation call to gain answers to these questions and much more</h3>
                                <Link href="https://calendly.com/golddustai/business-consultaion-call">
                                    <div className="text-white text-2xl mx-auto sm:mx-0 font-semibold text-center bg-primary rounded-lg px-1 my-2 py-2.5  w-[13rem]">
                                        Book a free call
                                    </div>
                                </Link>
                                <p className="text-red-500">Act Now: Limited Availability of 5 Free Calls Per Week!</p>
                            </div>
                            <Image
                                src={chip}
                                alt="Artificial intelligence chip"
                                className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                            />
                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    );
}

export default CarouselSlide;
