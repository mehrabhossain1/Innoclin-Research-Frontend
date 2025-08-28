import Image from "next/image";
import React from "react";
// import { ArrowRight } from "lucide-react";
import Clock1 from "@/assets/clock1.png";
import Clock2 from "@/assets/clock2.png";
import Clock3 from "@/assets/clock3.png";

const steps = [
    {
        id: 1,
        icon: Clock1, // You can replace with actual icon or SVG
        text: "Contact us to schedule a call",
    },
    {
        id: 2,
        icon: Clock2,
        text: "Submit an RFP",
    },
    {
        id: 3,
        icon: Clock3,
        text: "Launch your study on time",
    },
];

const HowDoesHappenSection: React.FC = () => {
    return (
        <section className="bg-[#380387] text-white py-30 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl mb-6">How does it happen?</h2>

                {/* Paragraphs */}
                <p className="mb-4 leading-relaxed">
                    We meet deadlines and enrollment milestones, time and time
                    and time again. In fact, you could say our obsession with
                    timelines is something of an unfair advantage. We’ve built a
                    name by coming to the rescue when studys fall behind and
                    sponsors have to start from scratch.{" "}
                    <strong>“We Can Do Hard Things”</strong> is one of our
                    rallying cries, and it’s true.
                </p>
                <p className="mb-12 leading-relaxed">
                    On-time delivery goes hand in hand with world class service.
                    In an industry where being behind schedule is considered par
                    for the course, we dare to buck the trend. It’s time to
                    choose the CRO you can trust.
                </p>

                {/* Subheading */}
                <h3 className="text-4xl  text-teal-300 mb-4">
                    Ready to push your study ahead?
                </h3>
                <p className="mb-10">
                    Here are 3 simple first steps on the way to a successful
                    study:
                </p>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col items-center"
                        >
                            <div className="w-28 h-28 rounded-full flex items-center justify-center relative mb-4 ">
                                {/* Placeholder for icon */}
                                <Image
                                    src={step.icon}
                                    alt="step icon"
                                    // className="w-16 h-16"
                                    width={164}
                                    height={164}
                                />
                            </div>
                            <p className="font-normal text-4xl mt-4">
                                {step.id}. {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowDoesHappenSection;
