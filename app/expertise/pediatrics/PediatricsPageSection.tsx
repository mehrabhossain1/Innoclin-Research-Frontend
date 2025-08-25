import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PediatricsPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Child-centered trial design
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Children are not small adults. Their growth,
                            development, and treatment responses demand
                            specialized approaches. We incorporate
                            age-appropriate formulations, minimally invasive
                            procedures, and family-focused consent processes to
                            ensure trials are both scientifically rigorous and
                            ethically sound.
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

                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Partnering with families and caregivers
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Pediatric trials require trust. We work closely with
                            parents, guardians, and caregivers to make
                            participation accessible and supportive. With
                            flexible visit schedules, remote monitoring tools,
                            and family engagement programs, we reduce the burden
                            of trial involvement while maintaining the highest
                            data integrity.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Specialized expertise for vulnerable populations
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            From neonates to adolescents, pediatric patients
                            face different risks at every stage of development.
                            Our pediatric experts provide dedicated oversight in
                            areas such as growth and development monitoring,
                            long-term safety assessments, and rare disease
                            cohorts, ensuring comprehensive evaluation across
                            all age groups.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary strength in pediatric
                                research
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We bring together expertise from multiple
                                therapeutic areas to enrich pediatric trials:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Infectious Diseases
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Addressing vaccine development and
                                    pediatric-specific treatment regimens.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Oncology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Designing trials for childhood cancers with
                                    tailored dosing and safety endpoints.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Rare Diseases
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Supporting gene therapies and precision
                                    medicines for conditions with early onset.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
