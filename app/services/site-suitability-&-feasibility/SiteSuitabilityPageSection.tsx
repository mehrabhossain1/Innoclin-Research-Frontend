"use client";

import Image from "next/image";

export default function SiteSuitabilityPageSection() {
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
                                    Choosing the Right Sites for the Right
                                    Studies
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we believe that site selection is one of the
                                most critical factors in determining the success
                                of a clinical study. Our Site Suitability &
                                Feasibility services are designed to evaluate
                                and identify sites that not only meet regulatory
                                and logistical requirements but also have the
                                right patient population, infrastructure, and
                                expertise to deliver results.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Through in-depth feasibility assessments, we
                                analyze patient availability, investigator
                                experience, facility capabilities, and
                                historical performance. This ensures that
                                sponsors are matched with sites capable of
                                delivering high-quality data within realistic
                                timelines.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                By choosing the right sites upfront, we help
                                sponsors reduce delays, minimize recruitment
                                challenges, and optimize study execution.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/real-estate-businessman-reaching-out-hand_23-2147653314.jpg"
                                    alt="Site Suitability - Real Estate Businessman Professional Partnership"
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
                                    Building Strong Foundations for Reliable
                                    Studies
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Successful clinical trials are built on strong
                                site partnerships. At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we go beyond basic feasibility surveys by
                                developing close collaborations with
                                investigators and site teams. Our proactive
                                engagement ensures that sites are well-prepared,
                                adequately resourced, and motivated to achieve
                                recruitment and retention goals.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                We support sites with training, communication
                                tools, and performance monitoring—creating a
                                reliable foundation that strengthens study
                                outcomes. By working as a true partner, we
                                enhance both the capacity and the commitment of
                                each participating site.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/real-estate-office-scene-concept_23-2147653321.jpg"
                                    alt="Site Suitability - Real Estate Office Professional Environment"
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
                                    Feasibility That Translates Into Success
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                A well-conducted feasibility process saves time,
                                money, and effort throughout the study. At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , our feasibility assessments don&apos;t just
                                predict whether a study can be done—they ensure
                                it can be done successfully.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                By evaluating patient demographics, competitive
                                trials, infrastructure gaps, and investigator
                                enthusiasm, we deliver a realistic picture of
                                site performance potential. This enables
                                sponsors to make confident choices, reduce
                                risks, and ensure their studies are positioned
                                for timely, high-quality delivery.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/top-view-professional-employer-dressed-formally_273609-4716.jpg?ga=GA1.1.823343372.1757164584&semt=ais_hybrid&w=740&q=80"
                                    alt="Site Suitability - Professional Employer in Formal Business Setting"
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
