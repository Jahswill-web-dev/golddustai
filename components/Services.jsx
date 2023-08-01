import React from "react";
import Card from "./Card";
import gpt from "../public/images/gpt.png";
import consult from "../public/images/consult.png";
import brain from "../public/images/brain.png";

function Services() {
    const card1Items = [
        'Chatbot development',
        'specialized prompt engineering',
        'AI model tuning and Evaluation.'
    ]
    const card2Items = [
        'AIOPS- using AI tools, processes and systems to solve your business problems.',
        'AI Audit.',
        'AI strategy development and market insights.',
        'business use case identification.',
        'Feasibility assessment and commercial due diligence.',
        'Machine learning cost efficient solutions.',
        'embedding AI ethics  in your product and workflow.'
    ]
    const card3Items = [
        'Sentiment analysis.',
        'Text summarization and retrieval.',
        'Data collection and categorization.',
        'Smart assistants.',
        'Entity Identification'
    ]

    return (
        // grid grid-cols-1 min-[700px]:grid-cols-2  lg:grid-cols-3 gap-4 py-20
        <div className="pt-10">

            <h3 className="text-center text-secondary text-3xl">Our Services</h3>
            <div className="flex flex-col md:flex-row flex-wrap py-20 min-[800px]:w-[800px] mx-auto" id="services">
                <Card key={1} title="GPT-4" listItems={card1Items} imageSrc={gpt} />
                <Card key={2} title="AI Consulting" listItems={card2Items} imageSrc={consult} />
                <Card key={3} title="Natural Language Processing" listItems={card3Items} imageSrc={brain}
                    special=""
                />
            </div>
        </div>
    );
}

export default Services;