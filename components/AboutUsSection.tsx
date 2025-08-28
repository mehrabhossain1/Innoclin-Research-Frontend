"use client";

import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section className="py-32 bg-gradient-to-r from-gray-50 via-white to-gray-500">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                {/* Left Side - Text */}
                <div className="flex flex-col ">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
                        Welcome to{" "}
                        <span className="text-primary">Innoclin Research</span>
                    </h2>

                    <p className="text-gray-700 mb-5 leading-relaxed text-lg">
                        At{" "}
                        <span className="text-primary font-semibold">
                            Innoclin Research
                        </span>
                        , we are a premier clinical research services and
                        strategic resourcing organization, dedicated to
                        delivering an exceptional clinical experience. We
                        specialize in providing end-to-end Clinical Research
                        Organization (CRO) solutions, Functional Service
                        Provider (FSP) support, and Strategic Resourcing
                        services that drive efficiency, accuracy, and value for
                        both patients and sponsors throughout the clinical
                        research journey.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-lg">
                        With deep expertise, we are committed to advancing the
                        impact of clinical research — improving lives,
                        accelerating breakthroughs, and ensuring every project
                        reaches its full potential. Through transparent
                        communication, forward-thinking strategies, and
                        innovative solutions, we partner with our clients to
                        achieve better outcomes and long-lasting success.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full h-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="https://img.freepik.com/free-photo/microbiologist-doctor-taking-blood-sample-tube-from-rack-with-machines-analysis-lab-background_482257-527.jpg?t=st=1755199313~exp=1755202913~hmac=162a0ecc42826d6715b46d7fc24f692a62d19fbd05910d498de9d0d925d5c227&w=1480"
                        alt="Innoclin Research Laboratory"
                        fill
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </section>
    );
}
