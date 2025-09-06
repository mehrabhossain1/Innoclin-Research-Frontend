"use client";

import Image from "next/image";

export default function MarketResearchPageSection() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Main Content Sections */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Section 1 */}
                        <div className="rounded-3xl p-10 shadow-xl bg-white">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-12 bg-gradient-to-b from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Insights That Drive Smarter Clinical
                                    Decisions
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we know that strong clinical outcomes start
                                with strong market understanding. Our Market
                                Research services provide sponsors with deep
                                insights into patient populations, competitive
                                landscapes, and therapeutic
                                opportunities—helping you design studies that
                                are not only scientifically sound but also
                                strategically aligned with market needs.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                We combine data analytics with real-world
                                intelligence, mapping out trends, patient access
                                barriers, and physician perspectives. This
                                ensures that your development strategy is
                                grounded in evidence and positioned to succeed
                                in today&apos;s competitive environment.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                With{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>{" "}
                                as your partner, market research becomes more
                                than data collection—it becomes a strategic
                                advantage, guiding decisions that accelerate
                                trial recruitment, regulatory success, and
                                eventual adoption in the marketplace.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/market-research-consumer-information-needs-concept_53876-138645.jpg"
                                    alt="Market Research - Consumer Information and Data Analysis"
                                    width={800}
                                    height={400}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="rounded-3xl p-10 shadow-xl bg-gradient-to-br from-[#0CB39A]/5 to-[#0A9B85]/5">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-12 bg-gradient-to-b from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Turning Data Into Development Opportunities
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Every new therapy exists within a larger
                                ecosystem of patients, providers, and
                                competitors. Our Market Research services are
                                designed to help you understand this ecosystem
                                fully. We deliver targeted insights that
                                identify unmet needs, patient journey dynamics,
                                and clinical adoption drivers.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                By integrating these insights into study
                                planning, sponsors can anticipate recruitment
                                challenges, refine inclusion criteria, and
                                position their therapies more effectively. Our
                                approach ensures that your research is not only
                                clinically impactful but also commercially
                                viable.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-vector/market-research-isometric-poster-with-light-bulb-magnifying-glass-graphs-network-user-account-profiles_1284-62606.jpg"
                                    alt="Market Research - Isometric Analysis and Data Visualization"
                                    width={800}
                                    height={400}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="rounded-3xl p-10 shadow-xl bg-white">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-12 bg-gradient-to-b from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    From Market Insight to Patient Impact
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we bridge the gap between clinical development
                                and real-world impact. Our Market Research
                                services empower sponsors with a 360° view of
                                the therapeutic landscape, allowing you to
                                design studies that resonate with patients,
                                providers, and regulators alike.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                We don&apos;t just provide reports—we deliver
                                actionable intelligence. From competitive
                                benchmarking to patient access mapping, our team
                                translates insights into strategies that
                                directly influence study design and long-term
                                success. By putting evidence into action, we
                                help sponsors bring therapies to the right
                                patients at the right time.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/close-up-hands-with-financial-charts-business-meeting_1098-348.jpg"
                                    alt="Market Research - Financial Analysis and Business Strategy"
                                    width={800}
                                    height={400}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
