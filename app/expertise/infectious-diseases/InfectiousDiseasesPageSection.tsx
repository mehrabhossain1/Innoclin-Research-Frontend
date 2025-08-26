import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfectiousDiseasesPageSection() {
    return (
        <>
            <section className="bg-primary/20 py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Extensive Experience */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-primary">
                                Targeted solutions for diverse pathogens
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Infectious diseases are complex, ranging from
                                acute viral infections to chronic bacterial and
                                parasitic conditions. We design Study that
                                integrate rapid diagnostic tools, real-time data
                                monitoring, and genomic pathogen profiling to
                                ensure every therapeutic candidate is evaluated
                                with scientific rigor. Our collaborations with
                                high-containment laboratories, public health
                                agencies, and leading investigators allow us to
                                respond quickly to evolving threats.
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
                                Reaching the most affected populations
                            </h2>
                            <p className="text-lg leading-relaxed mb-6">
                                We understand that infectious diseases often
                                disproportionately impact underserved or
                                hard-to-reach communities. Our global network
                                ensures recruitment from both urban and remote
                                areas, using community-based engagement and
                                mobile clinical units to make study
                                participation accessible. This approach not only
                                improves enrollment but also builds trust with
                                patient communities.
                            </p>
                        </div>

                        {/* Accelerate Trial Start-up */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 text-primary">
                                Regulatory agility for urgent needs
                            </h2>
                            <p className="text-lg leading-relaxed mb-4">
                                From accelerated approval pathways to emergency
                                use authorizations, our expert teams are adept
                                at navigating fast-changing requirements for
                                infectious disease therapies. We anticipate
                                compliance needs across multiple jurisdictions,
                                ensuring that investigational products can reach
                                patients without unnecessary delays.
                            </p>
                        </div>
                        {/* Insight-driven collaboration  */}
                    </div>

                    {/* Right Column - Sticky Related Expertise */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-24 shadow-xl rounded-2xl">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-primary">
                                    Cross-disciplinary insight for infectious
                                    disease success
                                </CardTitle>
                                <h3 className="font-normal text-gray-600">
                                    We leverage expertise from other therapeutic
                                    areas to enhance trial design and patient
                                    safety:
                                </h3>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Respiratory
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Managing complex respiratory support
                                        needs in viral pneumonia studies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Immunology
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Monitoring immune modulation and
                                        cytokine responses in infection
                                        treatments.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-500">
                                        Pediatrics
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        Conducting child-focused infectious
                                        disease trials with specialized safety
                                        oversight.
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
