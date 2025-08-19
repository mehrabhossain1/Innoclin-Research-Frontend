// components/PageHeading.tsx

import Image from "next/image";

interface PageHeadingProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

export default function PageHeading({
    title,
    subtitle,
    bgImage,
}: PageHeadingProps) {
    return (
        <section className="relative text-white py-20 px-6 text-center overflow-hidden">
            {/* Background Image */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/80" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
