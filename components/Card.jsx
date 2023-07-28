import React from "react";
import Image from "next/image";
import thick from "../public/images/thick.png";

function Card({ title, listItems, imageSrc, special }) {
    const cardClasses = `text-secondary mx-auto rounded-md w-[20rem] shadow-lg px-10 py-10 ${special}`
    return (
        <div className={`card ${cardClasses}`}>
            <div>
                <Image src={imageSrc} alt={title}
                className="w-[8rem] mx-auto"
                />
                <h2 className="text-center text-4xl">{title}</h2>
            </div>
            {/* text Container */}
            <div>
            {listItems.map((item, index)=>(
                <div className="flex gap-4 mt-5 items-center" key={index}>
                    <Image src={thick} alt="bullet point Goldsustai consulting" className="w-[10%]"/>
                    <p className="">{item}</p>
                </div>
            ))}
                
            </div>
        </div>
    );
}

export default Card;