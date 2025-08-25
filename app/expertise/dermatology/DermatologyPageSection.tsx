import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DermatologyPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Precision trials across the dermatology spectrum
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Dermatology spans a diverse range of conditions,
                            each with unique endpoints and patient populations.
                            Our trials integrate advanced imaging technologies,
                            digital dermatology tools, and validated
                            patient-reported outcomes to ensure accurate
                            assessment of therapeutic efficacy. Whether testing
                            biologics, small molecules, or topical formulations,
                            we tailor our approach to capture meaningful
                            outcomes for both clinicians and patients.
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
                            Inclusive recruitment for visible conditions
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Skin disorders affect individuals across all ages,
                            ethnicities, and geographies. We prioritize
                            diversity in our studies, ensuring representation of
                            different skin types, pigmentation profiles, and
                            cultural backgrounds. Our global network supports
                            recruitment from both specialized dermatology
                            centers and community practices, improving
                            accessibility and enhancing the generalizability of
                            trial findings.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Regulatory excellence in dermatology therapeutics
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Dermatological therapies often involve novel
                            biologics, biosimilars, and topical agents with
                            unique safety and regulatory considerations. Our
                            regulatory experts are skilled in navigating
                            pathways for orphan skin diseases, accelerated
                            biologic approvals, and cosmetic-to-therapeutic
                            crossovers. This ensures our sponsors can move
                            confidently from early-phase research through to
                            market authorization.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary expertise for holistic
                                outcomes
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We bring insight from adjacent therapeutic areas
                                to strengthen dermatology research:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Immunology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Supporting the rise of immunomodulators and
                                    biologics in chronic skin conditions.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Pediatrics
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Designing age-appropriate protocols for
                                    childhood dermatologic disorders.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Rare Diseases
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Conducting specialized trials for genetic
                                    skin syndromes with tailored safety
                                    oversight.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
