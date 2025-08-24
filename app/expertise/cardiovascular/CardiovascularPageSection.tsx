import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardiovascularPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Driving innovation in heart and vascular health
                            through precision research.
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At Innoclin Research, we combine deep therapeutic
                            expertise with operational excellence to deliver
                            cardiovascular trials that meet the highest
                            scientific, regulatory, and ethical standards. Our
                            goal is to help our partners bring safer, more
                            effective heart and vascular therapies to
                            market—faster and with greater confidence.
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
                            Proven expertise in cardiovascular clinical Study
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Cardiovascular research demands specialized
                            knowledge, advanced diagnostics, and the ability to
                            navigate complex comorbidities. Our team has managed
                            study across the full spectrum of cardiovascular
                            disease including heart failure, coronary artery
                            disease, arrhythmias, valvular heart disease,
                            hypertension, peripheral artery disease, and
                            thromboembolic disorders.
                        </p>

                        <p className="text-lg leading-relaxed">
                            We work closely with leading cardiologists, vascular
                            specialists, and global site networks to ensure your
                            study is not only scientifically robust but also
                            operationally efficient. Whether it’s a large-scale
                            outcomes trial or an early-phase device study, our
                            project teams tailor strategies to meet your
                            protocol requirements while staying adaptable to
                            real-world challenges.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Accelerating time to results
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            In cardiovascular research, speed and precision are
                            critical. We streamline start-up processes with
                            targeted site feasibility, rapid regulatory
                            submission support, and pre-qualified investigative
                            networks that specialize in cardiovascular
                            endpoints.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Our recruitment plans leverage hospital networks,
                            specialist clinics, and patient registries to
                            identify eligible participants quickly and maintain
                            high retention rates. We integrate remote
                            monitoring, wearable device data, and centralized
                            imaging review to capture high-quality data
                            efficiently reducing both costs and timelines
                            without compromising on compliance.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Data-driven decision-making
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Every cardiovascular trial we conduct is guided by
                            evidence-based methodology and continuous data
                            insight. From real-time data visualization
                            dashboards to advanced statistical modeling, we give
                            sponsors the tools they need to make informed
                            decisions at every stage of development.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We also help identify early indicators of efficacy
                            and safety, enabling earlier go/no-go decisions that
                            protect resources and accelerate promising
                            therapies.
                        </p>
                    </div>
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Connected expertise
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                Cardiovascular health intersects with multiple
                                therapeutic areas, and our cross-disciplinary
                                knowledge strengthens trial outcomes:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Oncology & Hematology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Managing cardiovascular risks associated
                                    with cancer treatments.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Nephrology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Addressing kidney-related complications in
                                    heart disease patients.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Endocrinology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Investigating the metabolic and hormonal
                                    factors influencing cardiovascular health.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Respiratory
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Managing overlapping cardiopulmonary
                                    conditions to ensure accurate endpoint
                                    assessment.
                                </p>
                            </div>
                        </CardContent>
                        <CardHeader>
                            <h3 className="font-normal text-gray-600">
                                By integrating these insights, we deliver
                                cardiovascular studies that are faster, smarter,
                                and more impactful helping you bring life-saving
                                therapies to those who need them most.
                            </h3>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
