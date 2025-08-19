import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PageSections() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Extensive experience in neuroscience clinical study
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Neurological trials demand precision, patient
                            sensitivity, and rigorous compliance. At Innoclin
                            Research, we have extensive experience in executing
                            both early- and late-phase neuroscience studies,
                            covering conditions such as Alzheimer’s disease,
                            Parkinson’s disease, multiple sclerosis, epilepsy,
                            migraine, neuropathic pain, and rare
                            neurodegenerative disorders.
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

                        <p className="text-lg leading-relaxed">
                            Our teams understand the unique challenges of these
                            studies, including patient recruitment hurdles,
                            endpoint selection, and the need for specialized
                            investigative sites. By combining therapeutic
                            expertise with operational excellence, we ensure
                            studies are designed to generate robust data and
                            meet the stringent regulatory requirements unique to
                            neuroscience research.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Accelerate trial start-up
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Our deep understanding of the neuroscience
                            therapeutic area allows us to swiftly connect you
                            with highly qualified sites, specialist
                            investigators, and engaged patient communities. This
                            targeted approach enables faster site activation,
                            optimized patient identification, and greater
                            retention—shortening your time to key milestones.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            With our proven trial management expertise, we
                            minimize operational risks, anticipate challenges,
                            and provide proactive solutions. From protocol
                            design to database lock, our goal is to deliver your
                            neuroscience trial on time, on budget, and to the
                            highest quality standards.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Every team member at Innoclin Research is committed
                            to removing barriers and creating efficiencies so
                            you can make earlier, more informed decisions about
                            your program’s success.
                        </p>
                    </div>
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Related expertise
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold">
                                    Oncology &amp; Hematology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Managing neurological complications in
                                    cancer care and treatment impact studies.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Rare Disease</h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Applying rare neurodegenerative disease
                                    trial expertise for targeted, high-impact
                                    outcomes.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Pediatrics</h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Designing and executing pediatric CNS
                                    studies with safety and precision.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Endocrinology</h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Leveraging metabolic and hormonal insights
                                    that intersect with neurological health.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
