import Image from "next/image";

export default function ClinicalDataSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Transforming Data Into Meaningful Insights
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we know that the true
                            value of clinical research lies in the data it
                            generates. Our{" "}
                            <b>Clinical Data Analysis Solutions</b> transform
                            raw datasets into actionable insights that support
                            regulatory submissions, publications, and informed
                            decision-making.
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
                            Our team of skilled biostatisticians and data
                            scientists apply validated methodologies and
                            advanced analytics to ensure accuracy, reliability,
                            and compliance. Whether analyzing efficacy
                            endpoints, safety profiles, or exploratory
                            biomarkers, we deliver results that stand up to
                            scientific and regulatory scrutiny.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By partnering with Innoclin Research, sponsors gain
                            clarity, confidence, and the ability to tell a
                            compelling evidence-based story that drives progress
                            in healthcare.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            From Numbers to Knowledge, From Knowledge to Impact
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Clinical data is complex, but our role is to make it
                            meaningful. We provide end-to-end analysis services
                            that span descriptive statistics, inferential
                            testing, survival analyses, meta-analyses, and
                            advanced predictive modeling. Each analysis is
                            tailored to your protocol, therapeutic area, and
                            regulatory pathway.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our transparent approach ensures sponsors have clear
                            visibility into every step of the process. By
                            prioritizing reproducibility and integrity, we
                            deliver analyses that not only meet compliance
                            requirements but also generate confidence in study
                            outcomes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Driving Smarter Decisions Through Data Excellence
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At Innoclin Research, data analysis is more than a
                            technical task—it is a cornerstone of smarter
                            decision-making. We integrate clinical data with
                            statistical rigor and medical insight, helping
                            sponsors refine strategies, accelerate development,
                            and improve patient outcomes.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            From interim analyses that inform adaptive trial
                            designs to final datasets that support approval and
                            publication, our solutions ensure data is always
                            reliable, interpretable, and impactful. With
                            Innoclin Research as your partner, your numbers
                            become narratives that move research forward.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
