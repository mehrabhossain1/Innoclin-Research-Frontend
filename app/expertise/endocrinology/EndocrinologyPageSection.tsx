import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EndocrinologyPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Innovative approaches to hormonal disorders
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Endocrine diseases require therapies tailored to the
                            body’s intricate hormonal pathways. Our study
                            integrate biomarker profiling, continuous glucose
                            monitoring technologies, and patient-reported
                            outcomes to capture a holistic view of treatment
                            efficacy. With expertise across diabetes, thyroid,
                            adrenal, and pituitary disorders, we design
                            protocols that deliver meaningful data for both
                            clinicians and patients.
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
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Addressing global metabolic challenges
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Metabolic diseases such as obesity and insulin
                            resistance are rising worldwide, creating an urgent
                            need for novel treatments. We support studies that
                            evaluate GLP-1 analogues, metabolic modulators, and
                            gene-based interventions, ensuring rigorous design
                            while addressing the social and lifestyle factors
                            that impact long-term outcomes.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Regulatory expertise in advanced therapies
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            With the rapid development of biologics,
                            biosimilars, and next-generation endocrine
                            therapies, navigating regulatory requirements is
                            essential. Our teams are skilled in managing complex
                            safety monitoring, long-term follow-up, and
                            international submissions, ensuring smooth pathways
                            from early-phase research to large-scale trials and
                            approvals.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary insight for endocrinology
                                success
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We collaborate across therapeutic areas to
                                strengthen trial design and patient care:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Cardiology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Exploring cardiovascular risks and benefits
                                    of endocrine therapies.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Nephrology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Managing renal complications associated with
                                    diabetes and hypertension.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Pediatrics
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Designing age-appropriate trials for
                                    childhood endocrine and growth disorders.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
