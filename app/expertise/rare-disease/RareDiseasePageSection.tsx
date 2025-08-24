import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RareDiseasePageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Turning challenges into breakthroughs for the
                            world’s most underserved patients.
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At Innoclin Research, we know that rare disease
                            studies require more than standard trial management
                            they demand creativity, persistence, and an
                            unmatched commitment to patient communities. Our
                            approach is designed to navigate the complexities of
                            small populations, diverse geographies, and evolving
                            regulatory expectations.
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
                            Specialized strategies for uncommon conditions
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Conducting rare disease research often means working
                            with very limited patient numbers and highly
                            specialized diagnostic requirements. We build study
                            strategies that maximize recruitment potential while
                            ensuring each participant’s experience is
                            respectful, supportive, and seamless.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Our team partners with expert investigators,
                            specialist treatment centers, and patient advocacy
                            groups worldwide to identify eligible participants.
                            We also design decentralized and hybrid trial models
                            to reduce patient burden and make participation
                            possible for those in remote or underserved areas.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Navigating regulatory and operational complexity
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Rare disease studies face unique regulatory scrutiny
                            and require carefully tailored endpoints. Our
                            regulatory specialists are skilled in preparing
                            submissions that meet both local and global
                            requirements, from orphan drug designations to
                            adaptive protocol designs.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Operationally, we anticipate challenges like
                            cross-border logistics for biological samples,
                            complex safety monitoring, and specialized
                            laboratory requirements ensuring solutions are in
                            place before timelines are affected.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            A commitment beyond the study
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Our work doesn’t stop at database lock. We help
                            sponsors collect long-term follow-up data,
                            collaborate on post-market evidence generation, and
                            maintain connections with patient groups to ensure
                            ongoing engagement for future research.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            By keeping the patient community at the center, we
                            create studies that not only meet scientific goals
                            but also build lasting trust paving the way for
                            faster development of future therapies.
                        </p>
                    </div>
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary insight for rare disease
                                success
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We apply lessons learned from other therapeutic
                                areas to strengthen rare disease trials:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Neuroscience
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Managing rare neurodegenerative and
                                    neuromuscular disorders.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Pediatrics
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Conducting child-focused rare disease
                                    studies with tailored safety measures.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    GI & Hepatology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Addressing rare metabolic and genetic liver
                                    conditions.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Endocrinology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Exploring rare hormonal and metabolic
                                    disorders with precision diagnostics.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
