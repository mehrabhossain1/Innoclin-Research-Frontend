import Image from "next/image";

export default function SiteSuitabilityFeasibilitySection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Choosing the Right Sites for the Right Studies
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we believe that site
                            selection is one of the most critical factors in
                            determining the success of a clinical study. Our{" "}
                            <b>Site Suitability & Feasibility services</b> are
                            designed to evaluate and identify sites that not
                            only meet regulatory and logistical requirements but
                            also have the right patient population,
                            infrastructure, and expertise to deliver results.
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
                            Through in-depth feasibility assessments, we analyze
                            patient availability, investigator experience,
                            facility capabilities, and historical performance.
                            This ensures that sponsors are matched with sites
                            capable of delivering high-quality data within
                            realistic timelines.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By choosing the right sites upfront, we help
                            sponsors reduce delays, minimize recruitment
                            challenges, and optimize study execution.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Building Strong Foundations for Reliable Studies
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Successful clinical trials are built on strong site
                            partnerships. At Innoclin Research, we go beyond
                            basic feasibility surveys by developing close
                            collaborations with investigators and site teams.
                            Our proactive engagement ensures that sites are
                            well-prepared, adequately resourced, and motivated
                            to achieve recruitment and retention goals.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            We support sites with training, communication tools,
                            and performance monitoring—creating a reliable
                            foundation that strengthens study outcomes. By
                            working as a true partner, we enhance both the
                            capacity and the commitment of each participating
                            site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Feasibility That Translates Into Success
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            A well-conducted feasibility process saves time,
                            money, and effort throughout the study. At Innoclin
                            Research, our feasibility assessments don’t just
                            predict whether a study can be done—they ensure it
                            can be done successfully.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            By evaluating patient demographics, competitive
                            trials, infrastructure gaps, and investigator
                            enthusiasm, we deliver a realistic picture of site
                            performance potential. This enables sponsors to make
                            confident choices, reduce risks, and ensure their
                            studies are positioned for timely, high-quality
                            delivery.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
