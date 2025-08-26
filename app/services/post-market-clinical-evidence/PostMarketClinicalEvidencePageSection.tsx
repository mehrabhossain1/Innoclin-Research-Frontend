import Image from "next/image";

export default function PostMarketClinicalEvidencePageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Proving Value Beyond Approval
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we understand that
                            regulatory approval is not the end of a therapy’s
                            journey it’s the beginning. Our{" "}
                            <b>Post-Market Clinical Evidence services</b> are
                            designed to demonstrate long-term safety,
                            effectiveness, and real-world value, ensuring
                            continued success for your product in diverse
                            patient populations.
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
                            Through carefully designed Phase IV studies,
                            real-world evidence (RWE) programs, and long-term
                            safety surveillance, we generate insights that build
                            trust among regulators, clinicians, and patients.
                            These insights not only fulfill regulatory
                            requirements but also support expanded indications,
                            reimbursement strategies, and stronger adoption in
                            clinical practice.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By partnering with Innoclin Research, you can be
                            confident that your therapy’s value is continually
                            validated and strengthened in the marketplace.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Real-World Insights for Real-World Impact
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            While clinical trials provide controlled evidence,
                            post-market studies reveal how therapies perform in
                            everyday medical practice. Our team leverages
                            observational studies, registry analyses, and
                            patient-reported outcomes to capture real-world data
                            that matters.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            This evidence helps sponsors understand treatment
                            adherence, identify rare adverse events, and assess
                            long-term outcomes across varied populations. These
                            insights empower better clinical decision-making,
                            improve patient care, and strengthen the case for
                            market expansion.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Extending Confidence from Trial to Treatment
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, we bridge the gap between
                            clinical trial results and real-world practice. Our
                            post-market evidence strategies provide sponsors
                            with the confidence that their therapies continue to
                            deliver value, safety, and effectiveness well beyond
                            approval.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We integrate advanced analytics, patient-centric
                            outcomes, and pharmacovigilance systems to ensure
                            that your product remains trusted, competitive, and
                            impactful in the healthcare ecosystem. With Innoclin
                            Research, your therapy’s story continues—supported
                            by evidence that lasts.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
