import Image from "next/image";

export default function ClinicalAssessmentPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Building Capacity, Ensuring Quality
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we believe that
                            clinical excellence depends on both skilled
                            professionals and robust oversight. Our{" "}
                            <b>
                                Clinical Assessment, Training & Surveillance
                                services
                            </b>{" "}
                            are designed to equip research teams with the
                            knowledge they need while safeguarding the integrity
                            of every study.
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
                            We provide comprehensive training programs tailored
                            to investigators, coordinators, and site staff
                            covering Good Clinical Practice (GCP), regulatory
                            compliance, safety monitoring, and advanced study
                            methodologies. Beyond training, our surveillance
                            systems ensure ongoing compliance, early detection
                            of issues, and continuous improvement in research
                            conduct.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By combining education with oversight, we empower
                            sponsors and research teams to uphold the highest
                            ethical, regulatory, and scientific standards across
                            every phase of clinical development.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Empowering Teams, Protecting Studies
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Clinical trials succeed when people are
                            well-prepared and processes are well-guarded. That’s
                            why our services go beyond training sessions we
                            build <b>sustainable capacity</b> within research
                            teams and establish{" "}
                            <b>robust surveillance frameworks</b> that protect
                            the credibility of your data.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our tailored programs adapt to different therapeutic
                            areas and trial complexities, ensuring that every
                            team member, from investigators to site monitors,
                            has the skills and confidence to perform at their
                            best. Meanwhile, our surveillance initiatives
                            provide sponsors with real-time visibility and
                            assurance that their studies remain on track,
                            compliant, and safe.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Training Today, Safeguarding Tomorrow
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, we don’t see training and
                            surveillance as separate functions they are part of
                            one continuous cycle of quality. Our clinical
                            assessment frameworks identify gaps in performance,
                            our training modules close those gaps, and our
                            surveillance systems ensure that improvements are
                            sustained over time.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            This integrated approach means your teams are always
                            prepared, your sites remain compliant, and your
                            studies achieve outcomes that regulators, sponsors,
                            and patients can trust. By investing in both people
                            and processes, Innoclin Research delivers a
                            long-term commitment to quality clinical research.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
