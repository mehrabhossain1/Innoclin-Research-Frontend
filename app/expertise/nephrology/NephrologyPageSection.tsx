import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NephrologyPageSection() {
    return (
        <>
            {" "}
            <section className="bg-primary/20 py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Extensive Experience */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-primary">
                                Patient-centered study design
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Nephrology patients often face significant
                                comorbidities and treatment burdens. We design
                                trials with{" "}
                                <b>
                                    reduced procedural load, integrated
                                    monitoring, and renal function–specific
                                    endpoints
                                </b>{" "}
                                to make participation accessible while capturing
                                meaningful clinical data.
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
                                    Expertise across kidney disorders
                                </CardTitle>
                                <h3 className="font-normal text-gray-600">
                                    Our research spans the spectrum of kidney
                                    disease, including:
                                </h3>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Chronic Kidney Disease (CKD)
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Evaluating interventions to slow
                                        progression and improve quality of life.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Acute Kidney Injury (AKI)
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Rapid-response studies focusing on early
                                        detection and therapeutic intervention.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Dialysis & Transplantation
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Supporting innovation in dialysis
                                        technologies and post-transplant care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Pediatric Nephrology
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Addressing unique challenges in children
                                        with relapsing or congenital kidney
                                        disorders.
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
                                Integrated biomarker and safety monitoring
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                With kidney disease, biomarkers and lab
                                assessments play a central role in evaluating
                                therapeutic impact. Our trials feature real-time
                                renal monitoring, longitudinal safety follow-up,
                                and integration of digital health tools to
                                ensure early detection of adverse effects and
                                sustained outcome measurement.
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
                                    Collaborative, multidisciplinary strength
                                </CardTitle>
                                <h3 className="font-normal text-gray-600">
                                    Nephrology research at Innoclin is enriched
                                    by cross-disciplinary collaboration:
                                </h3>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Cardiology
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Studying the critical link between renal
                                        and cardiovascular health.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Endocrinology
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Advancing understanding of
                                        diabetes-related kidney disease.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Pediatrics
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Focusing on hereditary and early-onset
                                        nephropathies.
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
