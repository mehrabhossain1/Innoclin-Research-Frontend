import Image from "next/image";

export default function ProtocolDevPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Designing Studies That Stand the Test of Science
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we believe that the
                            quality of a protocol determines the quality of a
                            study. Our{" "}
                            <b>
                                Protocol Development & Study Conduction services
                            </b>{" "}
                            ensure that every research plan is scientifically
                            robust, ethically sound, and operationally feasible.
                            From first draft to final execution, we build
                            protocols that anticipate regulatory requirements,
                            align with therapeutic goals, and prioritize patient
                            safety.
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
                            Our experienced scientific and operational teams
                            collaborate with sponsors to transform research
                            concepts into actionable study designs. Once
                            approved, we manage the full conduct of the
                            study—overseeing site initiation, patient
                            enrollment, monitoring, and data management. The
                            result is a seamless process that maintains
                            compliance and delivers high-quality, reliable
                            outcomes.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With Innoclin Research, your studies are not just
                            executed—they are carefully designed, efficiently
                            conducted, and strategically positioned for success.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            From Concept to Completion, Without Compromise
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Developing and conducting a clinical study requires
                            precision at every step. At Innoclin Research, we
                            bridge the gap between research vision and
                            real-world execution. Our protocol development
                            integrates therapeutic expertise, regulatory
                            insight, and practical feasibility assessments,
                            ensuring that your study is both scientifically
                            rigorous and operationally achievable.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            During study conduction, we bring structure,
                            oversight, and adaptability. Whether managing a
                            single-site pilot or a complex multi-country trial,
                            our processes safeguard data quality and regulatory
                            compliance while minimizing delays. We don’t just
                            plan—we deliver.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Your Protocol, Perfected. Your Study, Executed.
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, protocols are more than
                            documents—they are the blueprint for discovery. We
                            treat protocol development as a collaborative
                            process, ensuring that every objective, endpoint,
                            and methodology is aligned with your research and
                            regulatory goals.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Once your protocol is finalized, our study
                            conduction services provide end-to-end support,
                            ensuring your project runs smoothly from start-up
                            through close-out. By integrating scientific rigor
                            with operational excellence, we help sponsors
                            achieve faster approvals, stronger data, and
                            ultimately, better outcomes for patients.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
