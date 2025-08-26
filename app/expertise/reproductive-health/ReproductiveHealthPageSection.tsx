import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReproductiveHealthPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Comprehensive care across reproductive health
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Our expertise spans the full spectrum of
                            reproductive health, including fertility and
                            assisted reproduction, maternal and fetal medicine,
                            contraception, and gynecological conditions such as
                            endometriosis and polycystic ovary syndrome (PCOS).
                            We design study that integrate both clinical
                            outcomes and patient-centered measures, ensuring
                            that therapies are effective, safe, and accessible.
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
                            Patient-centered study design
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Reproductive health often involves deeply personal
                            experiences, requiring research frameworks that
                            prioritize privacy, informed consent, and
                            psychosocial support. We incorporate family
                            engagement strategies, telehealth consultations, and
                            minimally invasive monitoring tools to reduce
                            barriers to participation and improve long-term
                            retention.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Regulatory expertise in women’s and reproductive
                            health
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Our regulatory teams have experience navigating the
                            unique pathways for reproductive medicines, devices,
                            and diagnostics. From accelerated approvals in
                            maternal health to long-term safety monitoring in
                            contraceptive trials, we ensure compliance with
                            global standards while expediting access to
                            innovative therapies.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24 shadow-xl rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-primary">
                                Cross-disciplinary insight for reproductive
                                success
                            </CardTitle>
                            <h3 className="font-normal text-gray-600">
                                We integrate expertise from multiple therapeutic
                                areas to strengthen reproductive health studies:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Endocrinology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Addressing hormonal disorders like PCOS and
                                    thyroid-related infertility.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Pediatrics
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Supporting safe maternal-fetal medicine
                                    studies with neonatal follow-up.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Oncology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Preserving fertility and studying
                                    reproductive outcomes in cancer survivors.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
