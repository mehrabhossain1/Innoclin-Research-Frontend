import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GastroenterologyAndHepatologyPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Integrated strategies for complex conditions
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            GI and liver diseases often involve multifactorial
                            causes and overlapping symptoms. We develop trial
                            protocols that combine precision diagnostics,
                            endoscopic assessment tools, and patient-reported
                            outcomes to capture the full clinical picture. Our
                            operational teams coordinate with specialist
                            gastroenterologists and hepatologists across global
                            centers of excellence, ensuring consistent quality
                            of care and data.
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
                            Navigating diverse patient populations
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            From pediatric liver disorders to elderly patients
                            with chronic hepatitis, our recruitment strategies
                            ensure inclusivity across demographics. We utilize
                            decentralized and hybrid trial models to reduce
                            patient travel, improve adherence, and minimize data
                            loss, especially in conditions that cause chronic
                            fatigue or mobility issues.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Regulatory expertise for GI & liver studies
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We manage complex regulatory pathways for novel
                            biologics, advanced imaging biomarkers, and
                            minimally invasive surgical interventions in GI and
                            hepatology research. Our regulatory team ensures
                            submissions meet international standards while
                            accounting for regional clinical practice
                            differences.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary insight for GI & hepatology
                                success
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We apply knowledge from other therapeutic areas
                                to enrich GI and liver studies:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Oncology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Expertise in GI-related cancers such as
                                    colorectal and hepatocellular carcinoma.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Rare Disease
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Managing rare metabolic and genetic liver
                                    disorders with specialized diagnostic tools.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Endocrinology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Addressing metabolic complications like
                                    non-alcoholic fatty liver disease linked to
                                    insulin resistance.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
