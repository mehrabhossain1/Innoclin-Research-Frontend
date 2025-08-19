// components/PageHeading.tsx

import Image from "next/image";

interface PageHeadingProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
    subtitle2?: string;
}

export default function PageHeading({
    title,
    subtitle,
    bgImage,
    subtitle2,
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
                    <>
                        <p className="text-lg text-left md:text-xl leading-relaxed mb-4">
                            {subtitle}
                        </p>
                        <p className="text-lg text-left md:text-xl leading-relaxed">
                            {subtitle2}
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}
