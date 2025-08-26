import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RespiratoryDiseasesPageSection() {
    return (
        <>
            <section className="bg-primary/20 py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Extensive Experience */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-primary">
                                Patient-centered solutions for complex
                                conditions
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Respiratory diseases often involve fluctuating
                                symptoms, environmental triggers, and
                                overlapping comorbidities. We design trials that
                                capture the real-world variability of
                                respiratory illness through advanced digital
                                spirometry, wearable monitoring devices, and
                                longitudinal patient-reported outcomes. By
                                combining clinical endpoints with real-time
                                data, we ensure a holistic understanding of
                                therapeutic efficacy.
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

                        {/* Insight-driven collaboration  */}
                    </div>

                    {/* Right Column - Sticky Related Expertise */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24 shadow-xl rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-primary">
                                    Expertise across the respiratory spectrum
                                </CardTitle>
                                <h3 className="font-normal text-gray-600">
                                    Our teams have supported clinical
                                    development for a broad range of
                                    interventions, including:
                                </h3>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Asthma and COPD
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Biologics, inhaled therapies, and
                                        combination treatments.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Pulmonary Hypertension
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Targeted vasodilator therapies and novel
                                        molecular agents.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Cystic Fibrosis & Rare Lung Diseases
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Specialized endpoints and long-term
                                        registries.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Acute Respiratory Infections (e.g.,
                                        Influenza, COVID-19, RSV)
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Antivirals, monoclonal antibodies, and
                                        vaccines.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-primary/20 py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Extensive Experience */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-primary">
                                Enhancing trial accessibility and retention
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Respiratory patients often face mobility and
                                travel challenges. To address this, we integrate
                                home health visits, decentralized trial
                                technologies, and remote pulmonary function
                                testing into study designs. This not only
                                improves patient retention but also reflects the
                                real-world use of therapies.
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
                                Regulatory and safety expertise in respiratory
                                care
                            </h2>
                            <p className="text-lg leading-relaxed mb-4">
                                Our regulatory experts are adept at navigating
                                evolving guidance on inhaled medicines,
                                biologics, and advanced therapies for
                                respiratory diseases. From device-related safety
                                to long-term monitoring of pulmonary function,
                                we prioritize patient safety while expediting
                                regulatory approvals.
                            </p>
                        </div>
                        {/* Insight-driven collaboration  */}
                    </div>

                    {/* Right Column - Sticky Related Expertise */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24 shadow-xl rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-primary">
                                    Cross-disciplinary insight for respiratory
                                    success
                                </CardTitle>
                                <h3 className="font-normal text-gray-600">
                                    We leverage expertise from other therapeutic
                                    areas to optimize study design and outcomes:
                                </h3>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Cardiology
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Monitoring cardiovascular comorbidities
                                        in COPD and pulmonary hypertension.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Infectious Diseases
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Integrating respiratory support needs in
                                        viral pneumonia and pandemic studies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Pediatrics
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Ensuring age-appropriate endpoints and
                                        safety measures in pediatric asthma and
                                        cystic fibrosis.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
