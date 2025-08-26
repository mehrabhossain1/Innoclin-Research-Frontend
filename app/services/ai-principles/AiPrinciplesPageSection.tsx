import Image from "next/image";

export default function AiPrinciplesPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Harnessing Artificial Intelligence for Smarter
                            Trials
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we integrate{" "}
                            <b>AI-driven solutions</b> to reimagine how clinical
                            research is planned, conducted, and optimized. Our
                            AI principles ensure that technology serves as a
                            trusted partner—enhancing efficiency, accuracy, and
                            inclusivity without compromising scientific or
                            ethical integrity.
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
                            From predictive patient recruitment to risk-based
                            monitoring, we use AI models to identify patterns,
                            reduce delays, and anticipate challenges. This
                            allows sponsors to accelerate timelines, optimize
                            resources, and make data-driven decisions with
                            confidence.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By embedding AI throughout the clinical research
                            lifecycle, we not only enhance operational
                            performance but also create opportunities for
                            broader participation, improved data quality, and
                            faster access to therapies for patients worldwide.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Innovation Meets Responsibility
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Artificial intelligence is revolutionizing
                            healthcare, but innovation must be balanced with
                            responsibility. At Innoclin Research, our AI
                            principles emphasize{" "}
                            <b>
                                transparency, fairness, and patient protection.
                            </b>{" "}
                            We design AI tools that support—not replace—expert
                            judgment, ensuring that data interpretation and
                            decision-making remain scientifically sound and
                            ethically robust.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our focus extends beyond efficiency—we use AI to
                            drive equity, expanding outreach to underrepresented
                            patient populations and improving trial diversity.
                            This ensures that research findings are meaningful,
                            representative, and impactful across global
                            communities.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Transforming Data Into Decisions with AI
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            AI has the power to transform complex clinical data
                            into actionable insights. At Innoclin Research, we
                            leverage machine learning, predictive modeling, and
                            natural language processing to simplify trial
                            management, enhance protocol design, and optimize
                            site performance.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            By integrating AI into our workflows, we reduce
                            redundancy, anticipate risks, and enable smarter,
                            faster, and more reliable studies. Our AI-driven
                            approach is not just about technology—it’s about{" "}
                            <b>empowering people with better tools</b> to
                            achieve breakthroughs in clinical research.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
