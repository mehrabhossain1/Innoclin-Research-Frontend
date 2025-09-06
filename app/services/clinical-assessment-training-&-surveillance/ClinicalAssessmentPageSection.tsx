"use client";

import Image from "next/image";

export default function ClinicalAssessmentPageSection() {
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
                                    Building Capacity, Ensuring Quality
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we believe that clinical excellence depends on
                                both skilled professionals and robust oversight.
                                Our Clinical Assessment, Training & Surveillance
                                services are designed to equip research teams
                                with the knowledge they need while safeguarding
                                the integrity of every study.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                We provide comprehensive training programs
                                tailored to investigators, coordinators, and
                                site staff—covering Good Clinical Practice
                                (GCP), regulatory compliance, safety monitoring,
                                and advanced study methodologies. Beyond
                                training, our surveillance systems ensure
                                ongoing compliance, early detection of issues,
                                and continuous improvement in research conduct.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                By combining education with oversight, we
                                empower sponsors and research teams to uphold
                                the highest ethical, regulatory, and scientific
                                standards across every phase of clinical
                                development.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/i-would-like-ask-question_637285-9144.jpg"
                                    alt="Clinical Training - Interactive Learning Session"
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
                                    Empowering Teams, Protecting Studies
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Clinical trials succeed when people are
                                well-prepared and processes are well-guarded.
                                That&apos;s why our services go beyond training
                                sessions—we build sustainable capacity within
                                research teams and establish robust surveillance
                                frameworks that protect the credibility of your
                                data.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                Our tailored programs adapt to different
                                therapeutic areas and trial complexities,
                                ensuring that every team member, from
                                investigators to site monitors, has the skills
                                and confidence to perform at their best.
                                Meanwhile, our surveillance initiatives provide
                                sponsors with real-time visibility and assurance
                                that their studies remain on track, compliant,
                                and safe.
                            </p>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84781.jpg"
                                    alt="Clinical Training - Doctor Presentation to Medical Team"
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
                                    Training Today, Safeguarding Tomorrow
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                At{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>
                                , we don&apos;t see training and surveillance as
                                separate functions—they are part of one
                                continuous cycle of quality. Our clinical
                                assessment frameworks identify gaps in
                                performance, our training modules close those
                                gaps, and our surveillance systems ensure that
                                improvements are sustained over time.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                This integrated approach means your teams are
                                always prepared, your sites remain compliant,
                                and your studies achieve outcomes that
                                regulators, sponsors, and patients can trust. By
                                investing in both people and processes,{" "}
                                <span className="font-semibold text-[#0CB39A]">
                                    Innoclin Research
                                </span>{" "}
                                delivers a long-term commitment to quality
                                clinical research.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                    <Image
                                        src="https://img.freepik.com/free-photo/team-doctors-meeting_107420-84790.jpg"
                                        alt="Clinical Training - Medical Team Meeting"
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                    <Image
                                        src="https://img.freepik.com/free-photo/colleagues-working-together-using-laptop-documents-talking_23-2149330994.jpg"
                                        alt="Clinical Training - Colleagues Collaboration"
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
