import Image from "next/image";

export default function StudyPlanAndMonitoringPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Designing Studies That Deliver Reliable Results
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we recognize that the
                            foundation of every successful clinical program lies
                            in meticulous planning and vigilant monitoring. Our{" "}
                            <b>Study Planning & Monitoring services</b> are
                            designed to ensure that your strudy are
                            scientifically sound, operationally feasible, and
                            executed with precision. From the earliest protocol
                            drafts to ongoing oversight, we safeguard the
                            integrity of your data and the safety of your
                            patients.
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
                            Our planning process begins with a comprehensive
                            feasibility assessment, allowing us to identify the
                            right sites, patient populations, and methodologies
                            for your study. Once underway, our monitoring
                            frameworks provide real-time visibility, ensuring
                            that studies remain compliant with GCP standards and
                            regulatory requirements.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With Innoclin Research, you gain a partner who not
                            only sets your studies up for success but also stays
                            actively engaged throughout the journey resolving
                            issues early, minimizing delays, and ensuring that
                            your research outcomes stand up to the highest
                            standards of scientific scrutiny.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Planning with Precision, Monitoring with Care
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Every clinical study is unique, but all demand the
                            same fundamentals: precision in design and diligence
                            in oversight. Our Study Planning & Monitoring
                            solutions bring both together. By blending strategic
                            foresight with hands-on management, we help sponsors
                            navigate the complexities of trial logistics while
                            maintaining an unwavering focus on patient safety
                            and data quality.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our monitoring teams act as your extended eyes and
                            ears at every site, ensuring adherence to protocols
                            and swiftly addressing deviations before they affect
                            results. This proactive approach reduces risk,
                            maintains data credibility, and provides sponsors
                            with confidence in every stage of the study.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            From Blueprint to Breakthrough: Studies That Work
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Successful trials start with smart planning and
                            thrive on consistent oversight. Innoclin Research
                            offers end-to-end support that transforms study
                            concepts into actionable protocols and ensures their
                            flawless execution.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We build flexible monitoring frameworks tailored to
                            your study size, complexity, and therapeutic area.
                            Whether it’s a small proof-of-concept study or a
                            large multi-country trial, our approach ensures
                            consistent quality, streamlined communication, and
                            data you can trust. With us, every study is not just
                            a trial it’s a step closer to breakthrough.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
