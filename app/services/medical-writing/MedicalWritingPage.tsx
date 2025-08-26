import Image from "next/image";

export default function MedicalWritingPage() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Clarity, Precision, and Scientific Integrity
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> our{" "}
                            <b>Medical Writing services</b> ensure that every
                            document you submit, publish, or present reflects
                            the highest standards of clarity, accuracy, and
                            compliance. From protocols and investigator
                            brochures to clinical study reports and manuscripts,
                            we craft documents that are scientifically rigorous
                            and regulatory-ready.
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
                            Our medical writers work at the intersection of
                            science and communication. With deep therapeutic
                            knowledge and a strong grasp of global regulatory
                            guidelines, they translate complex data into clear
                            narratives that support approvals, publications, and
                            stakeholder understanding. Every deliverable is
                            designed to enhance transparency and credibility in
                            your clinical development journey.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By partnering with Innoclin Research, you gain more
                            than just writers—you gain a team committed to
                            transforming data into compelling evidence that
                            advances your product and strengthens your
                            reputation.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            From Data to Document, With Excellence
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Clinical research generates vast amounts of data—but
                            without skilled communication, its value can be
                            lost. Our medical writing team specializes in
                            turning raw results into meaningful, structured, and
                            impactful documents. Whether for regulatory
                            authorities, ethics committees, or scientific
                            journals, we ensure your findings are presented with
                            precision and purpose.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            We offer end-to-end support across the clinical
                            research lifecycle, including study protocols,
                            informed consent forms, safety narratives,
                            investigator brochures, clinical study reports
                            (CSRs), and peer-reviewed manuscripts. Every
                            document is created with attention to scientific
                            integrity, compliance with ICH-GCP, and alignment
                            with sponsor objectives.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Communicating Science, Advancing Medicine
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, we see medical writing as more
                            than documentation—it is a bridge between science
                            and its application. By communicating study results
                            in a way that is accessible, reliable, and
                            impactful, we help sponsors, regulators, clinicians,
                            and patients alike understand the true significance
                            of your work.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Our writers combine technical accuracy with clear
                            storytelling, ensuring that your research resonates
                            beyond numbers and charts. With Innoclin Research as
                            your partner, your science is not only
                            well-documented—it is well-communicated.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
