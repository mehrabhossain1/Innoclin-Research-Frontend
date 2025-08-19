import ContactUsSection from "@/components/ContactUsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NeurosciencePage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Neuroscience
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Accelerate your neuroscience research from strategy to
                        successful delivery with a partner equipped with the
                        insight, expertise, and operational strength to meet the
                        complexities of neurological trials.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-lg leading-relaxed">
                            We have supported studies across a spectrum of
                            neurological disorders, enabling us to deliver
                            exceptional operational performance and high-quality
                            data.
                        </p>
                    </div>
                    <div className="w-full h-64 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center">
                        {/* Replace with actual image */}
                        <span className="text-gray-500">
                            [Image Placeholder]
                        </span>
                    </div>
                </div>
            </section>

            {/* Extensive Experience */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">
                        Extensive experience in neuroscience clinical study
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        Neurological trials demand precision, patient
                        sensitivity, and rigorous compliance. At Innoclin
                        Research, we have extensive experience in executing both
                        early- and late-phase neuroscience studies, covering
                        conditions such as Alzheimer’s disease, Parkinson’s
                        disease, multiple sclerosis, epilepsy, migraine,
                        neuropathic pain, and rare neurodegenerative disorders.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Our teams understand the unique challenges of these
                        studies, including patient recruitment hurdles, endpoint
                        selection, and the need for specialized investigative
                        sites. By combining therapeutic expertise with
                        operational excellence, we ensure studies are designed
                        to generate robust data and meet the stringent
                        regulatory requirements unique to neuroscience research.
                    </p>
                </div>
            </section>

            {/* Accelerate Trial Start-up */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">
                        Accelerate trial start-up
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        Our deep understanding of the neuroscience therapeutic
                        area allows us to swiftly connect you with highly
                        qualified sites, specialist investigators, and engaged
                        patient communities. This targeted approach enables
                        faster site activation, optimized patient
                        identification, and greater retention—shortening your
                        time to key milestones.
                    </p>
                    <p className="text-lg leading-relaxed">
                        With our proven trial management expertise, we minimize
                        operational risks, anticipate challenges, and provide
                        proactive solutions. From protocol design to database
                        lock, our goal is to deliver your neuroscience trial on
                        time, on budget, and to the highest quality standards.
                        Every team member at Innoclin Research is committed to
                        removing barriers and creating efficiencies so you can
                        make earlier, more informed decisions about your
                        program’s success.
                    </p>
                </div>
            </section>

            {/* Shared Knowledge */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">
                        Shared knowledge is power
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Our neuroscience experience benefits from the insights
                        we’ve gained across related therapeutic areas. By
                        integrating cross-disciplinary learnings, we help you
                        make smarter, faster decisions that advance your
                        program.
                    </p>
                </div>
            </section>

            <ContactUsSection />
            {/* Related Expertise */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center">
                        Related expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle>Oncology &amp; Hematology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed">
                                    Managing neurological complications in
                                    cancer care and treatment impact studies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle>Rare Disease</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed">
                                    Applying rare neurodegenerative disease
                                    trial expertise for targeted, high-impact
                                    outcomes.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle>Pediatrics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed">
                                    Designing and executing pediatric CNS
                                    studies with safety and precision.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg rounded-2xl">
                            <CardHeader>
                                <CardTitle>Endocrinology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed">
                                    Leveraging metabolic and hormonal insights
                                    that intersect with neurological health.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}
