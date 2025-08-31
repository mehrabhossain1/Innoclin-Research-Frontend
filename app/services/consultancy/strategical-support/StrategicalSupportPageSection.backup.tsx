import Image from "next/image";

export default function StrategicalSupportPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Aligning Strategy with Clinical Success
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we believe that every
                            clinical study requires more than operational
                            execution it demands a strategy that anticipates
                            risks, adapts to challenges, and maximizes
                            efficiency. Our <b>Strategical Support services</b>{" "}
                            are designed to align your project goals with
                            long-term development strategies, ensuring that your
                            resources are optimized and your study remains on
                            the path to success.
                        </p>

                        {/* Image between descriptions */}
                        <div className="w-full h-72 relative rounded-2xl overflow-hidden shadow-md mb-6">
                            <Image
                                src="https://www.caidya.com/wp-content/uploads/2022/09/Cardiology-2-2048x1366.jpg" // replace with real image
                                alt="Neuroscience research"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-lg leading-relaxed mb-6">
                            We provide forward-thinking frameworks that
                            integrate scientific insight, regulatory foresight,
                            and patient-centered approaches. By analyzing
                            development pipelines, monitoring trial feasibility,
                            and identifying early risks, our team ensures that
                            every study decision contributes directly to your
                            broader clinical and commercial objectives.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With Innoclin Research as your strategic partner,
                            you don’t just conduct studies—you conduct studies
                            that are designed for sustainability, scalability,
                            and impact.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Smart Strategies for Complex Clinical Pathways
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            In today’s fast-moving research environment,
                            clinical programs need strategies that go beyond
                            simple timelines and budgets. Our Strategical
                            Support services combine <b>data-driven planning</b>{" "}
                            with therapeutic expertise to build adaptive study
                            models. These models allow sponsors to pivot
                            effectively, maintain regulatory alignment, and
                            achieve milestones without compromising quality.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            We partner closely with your teams to define success
                            metrics, optimize study resources, and reduce
                            development costs. Whether you are a small biotech
                            or a global sponsor, Innoclin Research ensures your
                            clinical journey is supported by robust strategies
                            that work in practice—not just on paper.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Transforming Vision into Roadmaps for Success
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Every breakthrough begins with a vision. At Innoclin
                            Research, our Strategical Support services transform
                            that vision into an actionable roadmap. By combining
                            operational insight with clinical innovation, we
                            create strategies that help sponsors move
                            confidently from protocol design to regulatory
                            approval.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Our strategic support doesn’t stop at planning we
                            continuously evaluate study performance, identify
                            emerging challenges, and refine strategies in real
                            time. This ensures your clinical research not only
                            stays on course but also adapts seamlessly to the
                            evolving research landscape.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
