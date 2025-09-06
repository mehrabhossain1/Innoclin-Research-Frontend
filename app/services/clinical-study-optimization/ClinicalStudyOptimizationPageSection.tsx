"use client";

import Image from "next/image";

export default function ClinicalStudyOptimizationPageSection() {
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
                                    Streamlining Research for Faster Results
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we know that every delay in a study means a
                                delay in bringing therapies to patients. Our
                                Clinical Study Optimization services focus on
                                reducing inefficiencies, preventing protocol
                                deviations, and ensuring that every trial is
                                conducted with maximum speed and reliability.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                We review study workflows end-to-end,
                                identifying bottlenecks and designing adaptive
                                solutions that keep studies on track. By
                                leveraging advanced analytics, risk-based
                                monitoring, and smarter site engagement
                                strategies, we optimize both time and cost
                                without compromising scientific rigor.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                With{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>{" "}
                                as your partner, optimization isn&apos;t just
                                about efficiency—it&apos;s about delivering
                                meaningful outcomes faster, safer, and with
                                greater confidence.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/healthcare-professional-uses-oximeter-measure-oxygen-levels_482257-123694.jpg"
                                    alt="Clinical Study Optimization - Healthcare Professional Using Oximeter"
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    style={{ height: "auto" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="rounded-3xl p-10 shadow-xl bg-gradient-to-br from-[#0CB39A]/5 to-[#0A9B85]/5">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-12 bg-gradient-to-b from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Smarter Processes, Better Outcomes
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Clinical studies are becoming more complex, with
                                growing regulatory demands and patient
                                expectations. Our optimization services provide
                                sponsors with a framework to simplify these
                                complexities. From reducing protocol amendments
                                to improving recruitment timelines, we help
                                ensure that studies remain agile and effective
                                in a changing environment.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                Our approach blends strategic oversight with
                                operational innovation. This means we not only
                                solve today&apos;s challenges but also prepare
                                your study for future hurdles, ensuring that
                                outcomes remain consistent and reliable.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/female-medic-measuring-blood-pressure-pulse-patient_482257-124734.jpg"
                                    alt="Clinical Study Optimization - Female Medic Measuring Blood Pressure"
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    style={{ height: "auto" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="rounded-3xl p-10 shadow-xl bg-white">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-12 bg-gradient-to-b from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Maximizing Value at Every Step of the Trial
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , optimization means getting more value from
                                every phase of clinical development. We
                                strengthen communication channels, enhance data
                                collection systems, and introduce digital tools
                                that reduce burden for both sites and patients.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                The result is a streamlined study that delivers
                                high-quality data, keeps investigators engaged,
                                and reduces unnecessary costs. By optimizing
                                your clinical research, we help you achieve more
                                with less—turning every study into a smarter,
                                more impactful investment.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/nurses-analysing-together-virus-mutations-working-overtime-chemistry-equipped-laboratory_482257-511.jpg"
                                    alt="Clinical Study Optimization - Nurses Analyzing Virus Mutations in Laboratory"
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    style={{ height: "auto" }}
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
