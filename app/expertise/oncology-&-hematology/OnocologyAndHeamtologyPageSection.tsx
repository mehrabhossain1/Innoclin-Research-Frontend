import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OnocologyAndHeamtologyPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Turning research into hope and hope into results.
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At Innoclin Research, we combine precision, agility,
                            and compassion to deliver oncology and hematology
                            trials that meet the highest scientific and ethical
                            standards. Our mission is simple yet powerful: to
                            help our partners navigate the complexity of cancer
                            and blood disorder research while accelerating the
                            arrival of life-saving therapies to the people who
                            need them most.
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
                            Proven leadership in complex cancer and blood
                            disorder study
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Cancer and hematologic disorders are among the most
                            challenging areas in clinical research, requiring
                            not only deep therapeutic understanding but also
                            operational excellence and global coordination. From
                            multi-arm solid tumor studies to niche rare blood
                            disease trials, our team has successfully guided
                            programs through every stage of development from
                            early feasibility through pivotal Phase III and
                            post-market safety monitoring. Our strength lies in
                            our ability to integrate specialized expertise with
                            real-world execution. We collaborate with leading
                            oncologists, hematologists, cancer research
                            networks, and patient advocacy organizations to
                            ensure our trials are scientifically rigorous,
                            patient-friendly, and aligned with the latest
                            advancements in oncology and hematology care. By
                            leveraging global site networks, biomarker
                            capabilities, and adaptive trial design expertise,
                            we ensure each study is built for precision and
                            positioned for success.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Our teams understand the unique challenges of these
                            studies, including patient recruitment hurdles,
                            endpoint selection, and the need for specialized
                            investigative sites. By combining therapeutic
                            expertise with operational excellence, we ensure
                            studies are designed to generate robust data and
                            meet the stringent regulatory requirements unique to
                            neuroscience research.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Speed without compromise
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            In cancer research, every day is critical. Patients,
                            physicians, and sponsors rely on rapid yet reliable
                            data to guide life-changing decisions. Our study
                            start-up process is built to meet that urgency
                            without sacrificing quality.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We conduct targeted feasibility assessments to
                            identify sites with proven recruitment records,
                            access to relevant patient populations, and
                            specialized infrastructure for oncology and
                            hematology protocols. Through proactive site
                            activation planning, regulatory preparation, and
                            patient pre-screening, we minimize downtime and keep
                            trials moving forward at pace. Our recruitment
                            strategies integrate traditional methods with
                            digital patient outreach, precision-matching tools,
                            and partnerships with advocacy groups ensuring that
                            eligible patients are identified and engaged as
                            quickly as possible.
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Insight-driven collaboration
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            We see ourselves not just as a service provider, but
                            as a strategic extension of your team. Our oncology
                            and hematology trial management incorporates
                            scientific insight, operational foresight, and
                            patient-centered design.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            For biomarker-driven studies, we align closely with
                            central labs, imaging providers, and molecular
                            diagnostics teams to ensure accurate sample handling
                            and data integrity. For adaptive or platform trials,
                            we implement agile project management that allows
                            for protocol modifications without losing momentum.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Post-market, we help sponsors assess long-term
                            safety, monitor real-world effectiveness, and
                            generate data that supports ongoing regulatory and
                            payer discussions. Every recommendation and decision
                            is backed by analytics, evidence, and decades of
                            combined oncology and hematology expertise.
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
                                Oncology and hematology research intersects with
                                many other therapeutic areas, and our broad
                                expertise allows us to apply cross-disciplinary
                                insights that improve trial outcomes:
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Rare Disease
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Leveraging orphan trial strategies for
                                    precision oncology and rare hematologic
                                    indications.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Cardiovascular
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Proactively assessing and managing
                                    treatment-related cardiac effects common in
                                    certain cancer therapies.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Nephrology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Monitoring renal safety and managing
                                    kidney-related adverse events in oncology
                                    protocols.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-500">
                                    Dermatology
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    Addressing and mitigating dermatologic
                                    toxicities caused by oncology treatments,
                                    ensuring better patient comfort and
                                    adherence.
                                </p>
                            </div>
                        </CardContent>
                        <CardHeader>
                            <h3 className="font-normal text-gray-600">
                                By integrating this interconnected knowledge, we
                                design oncology and hematology trials that
                                anticipate risks, improve efficiency, and
                                deliver data that drives confident, timely
                                decision-making.
                            </h3>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    );
}
