import React from "react";
import Image from "next/image";
import cardImage from "@/assets/oncology.png";

const DeepExperienceSection: React.FC = () => {
    const images = Array(5).fill(cardImage); // replace with actual image paths later

    return (
        <section className="py-30 bg-white">
            <div className="container mx-auto px-4 ">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
                    Deep experience with debilitating disease and unique
                    modalities
                </h2>

                {/* Description */}
                <p className="max-w-4xl text-gray-600 mb-12">
                    Like you, we understand that there&apos;s patient throughout
                    the development pathway. Supporting our partners to bring
                    innovative treatments to patients is our purpose. Leverage
                    our experience in these therapeutic areas.
                </p>

                {/* Image Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
                    {images.map((src, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                src={src}
                                alt={`Therapeutic area ${index + 1}`}
                                className="object-cover"
                                width={400}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeepExperienceSection;
