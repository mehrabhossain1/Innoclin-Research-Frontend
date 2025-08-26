import Image from "next/image";

export default function MarketResearchPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Insights That Drive Smarter Clinical Decisions
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we know that strong
                            clinical outcomes start with strong market
                            understanding. Our <b>Market Research services</b>{" "}
                            provide sponsors with deep insights into patient
                            populations, competitive landscapes, and therapeutic
                            opportunities helping you design studies that are
                            not only scientifically sound but also strategically
                            aligned with market needs.
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
                            We combine data analytics with real-world
                            intelligence, mapping out trends, patient access
                            barriers, and physician perspectives. This ensures
                            that your development strategy is grounded in
                            evidence and positioned to succeed in today’s
                            competitive environment.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With Innoclin Research as your partner, market
                            research becomes more than data collection it
                            becomes a strategic advantage, guiding decisions
                            that accelerate trial recruitment, regulatory
                            success, and eventual adoption in the marketplace.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Turning Data Into Development Opportunities
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Every new therapy exists within a larger ecosystem
                            of patients, providers, and competitors. Our Market
                            Research services are designed to help you
                            understand this ecosystem fully. We deliver targeted
                            insights that identify unmet needs, patient journey
                            dynamics, and clinical adoption drivers.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By integrating these insights into study planning,
                            sponsors can anticipate recruitment challenges,
                            refine inclusion criteria, and position their
                            therapies more effectively. Our approach ensures
                            that your research is not only clinically impactful
                            but also commercially viable.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            From Market Insight to Patient Impact
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, we bridge the gap between
                            clinical development and real-world impact. Our
                            Market Research services empower sponsors with a
                            360° view of the therapeutic landscape, allowing you
                            to design studies that resonate with patients,
                            providers, and regulators alike.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We don’t just provide reports we deliver actionable
                            intelligence. From competitive benchmarking to
                            patient access mapping, our team translates insights
                            into strategies that directly influence study design
                            and long-term success. By putting evidence into
                            action, we help sponsors bring therapies to the
                            right patients at the right time.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
