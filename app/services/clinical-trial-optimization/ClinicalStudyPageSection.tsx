import Image from "next/image";

export default function ClinicalStudyPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Streamlining Research for Faster Results
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we know that every
                            delay in a study means a delay in bringing therapies
                            to patients. Our{" "}
                            <b>Clinical Study Optimization services</b> focus on
                            reducing inefficiencies, preventing protocol
                            deviations, and ensuring that every trial is
                            conducted with maximum speed and reliability.
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
                            We review study workflows end-to-end, identifying
                            bottlenecks and designing adaptive solutions that
                            keep studies on track. By leveraging advanced
                            analytics, risk-based monitoring, and smarter site
                            engagement strategies, we optimize both time and
                            cost without compromising scientific rigor.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With Innoclin Research as your partner, optimization
                            isn’t just about efficiency—it’s about delivering
                            meaningful outcomes faster, safer, and with greater
                            confidence.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Smarter Processes, Better Outcomes
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Clinical studies are becoming more complex, with
                            growing regulatory demands and patient expectations.
                            Our optimization services provide sponsors with a
                            framework to simplify these complexities. From
                            reducing protocol amendments to improving
                            recruitment timelines, we help ensure that studies
                            remain agile and effective in a changing
                            environment.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our approach blends strategic oversight with
                            operational innovation. This means we not only solve
                            today’s challenges but also prepare your study for
                            future hurdles, ensuring that outcomes remain
                            consistent and reliable.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Maximizing Value at Every Step of the Trial
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, optimization means getting
                            more value from every phase of clinical development.
                            We strengthen communication channels, enhance data
                            collection systems, and introduce digital tools that
                            reduce burden for both sites and patients.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            The result is a streamlined study that delivers
                            high-quality data, keeps investigators engaged, and
                            reduces unnecessary costs. By optimizing your
                            clinical research, we help you achieve more with
                            less—turning every study into a smarter, more
                            impactful investment.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
