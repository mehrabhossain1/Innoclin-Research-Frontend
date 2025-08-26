import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OphthalmologyPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Comprehensive approaches for complex eye disorders
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Ophthalmology study require precision. We integrate
                            advanced techniques, biomarker-driven endpoints, and
                            tele-ophthalmology platforms to accurately assess
                            disease progression and treatment response. By
                            partnering with leading eye care centers and retinal
                            specialists worldwide, we ensure studies are
                            conducted with both scientific rigor and patient
                            accessibility in mind.
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
                            Enhancing patient accessibility and adherence
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Patients with vision impairment often face barriers
                            to study participation. Our decentralized and hybrid
                            trial models include remote vision assessments,
                            portable diagnostic tools, and support services for
                            mobility-impaired participants. These solutions
                            improve recruitment, retention, and the overall
                            patient experience while ensuring the collection of
                            reliable, real-world data.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Regulatory pathways for novel eye therapies
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Eye care research increasingly involves cutting-edge
                            therapies such as gene therapy, stem cell–based
                            treatments, and sustained-release drug delivery
                            systems. Our regulatory specialists bring experience
                            navigating approvals for these advanced modalities,
                            ensuring that sponsors can move from early clinical
                            phases to market authorization smoothly and
                            efficiently.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary insight for ophthalmology
                                success
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We bring knowledge from across therapeutic areas
                                to strengthen eye research:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Endocrinology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Advancing studies in diabetic eye disease
                                    and endocrine-related vision loss.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Neurology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Investigating neuro-ophthalmic conditions
                                    involving the optic nerve and brain
                                    pathways.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Pediatrics
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Designing protocols for congenital and
                                    childhood eye disorders.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
