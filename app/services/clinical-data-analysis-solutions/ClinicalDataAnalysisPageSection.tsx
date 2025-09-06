"use client";

import Image from "next/image";

export default function ClinicalDataAnalysisPageSection() {
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
                                    Transforming Data Into Meaningful Insights
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we know that the true value of clinical
                                research lies in the data it generates. Our
                                Clinical Data Analysis Solutions transform raw
                                datasets into actionable insights that support
                                regulatory submissions, publications, and
                                informed decision-making.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Our team of skilled biostatisticians and data
                                scientists apply validated methodologies and
                                advanced analytics to ensure accuracy,
                                reliability, and compliance. Whether analyzing
                                efficacy endpoints, safety profiles, or
                                exploratory biomarkers, we deliver results that
                                stand up to scientific and regulatory scrutiny.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                By partnering with{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , sponsors gain clarity, confidence, and the
                                ability to tell a compelling evidence-based
                                story that drives progress in healthcare.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/experienced-medical-lab-practitioner-smiling-looking-camera-team-scientists-doctors-examining-virus-evolution-using-high-tech-chemistry-tools-scientific-research-vaccine_482257-3972.jpg"
                                    alt="Clinical Data Analysis - Medical Lab Practitioners Using High-Tech Tools"
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
                                    From Numbers to Knowledge, From Knowledge to
                                    Impact
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Clinical data is complex, but our role is to
                                make it meaningful. We provide end-to-end
                                analysis services that span descriptive
                                statistics, inferential testing, survival
                                analyses, meta-analyses, and advanced predictive
                                modeling. Each analysis is tailored to your
                                protocol, therapeutic area, and regulatory
                                pathway.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                Our transparent approach ensures sponsors have
                                clear visibility into every step of the process.
                                By prioritizing reproducibility and integrity,
                                we deliver analyses that not only meet
                                compliance requirements but also generate
                                confidence in study outcomes.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/doctor-provides-cancer-screening-guidance-patient-discussing-mri-scans_482257-126422.jpg"
                                    alt="Clinical Data Analysis - Doctor Discussing MRI Scans with Patient"
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
                                    Driving Smarter Decisions Through Data
                                    Excellence
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , data analysis is more than a technical task—it
                                is a cornerstone of smarter decision-making. We
                                integrate clinical data with statistical rigor
                                and medical insight, helping sponsors refine
                                strategies, accelerate development, and improve
                                patient outcomes.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                From interim analyses that inform adaptive trial
                                designs to final datasets that support approval
                                and publication, our solutions ensure data is
                                always reliable, interpretable, and impactful.
                                With{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>{" "}
                                as your partner, your numbers become narratives
                                that move research forward.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/asian-microbiologists-wrapped-up-discussion_1098-17101.jpg"
                                    alt="Clinical Data Analysis - Asian Microbiologists in Discussion"
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
