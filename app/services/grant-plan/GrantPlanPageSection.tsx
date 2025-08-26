import Image from "next/image";

export default function GrantPlanPageSection() {
    return (
        <section className="bg-primary/20 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Extensive Experience */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Securing the Resources to Drive Research Forward
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At <b>Innoclin Research,</b> we understand that even
                            the most promising ideas need the right funding to
                            succeed. Our{" "}
                            <b>Grant Planning & Funding Strategy services</b>{" "}
                            help investigators, academic institutions, and
                            biotech innovators identify, apply for, and secure
                            competitive funding opportunities.
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

                        <p className="text-lg leading-relaxed mb-6">
                            We provide end-to-end support, from aligning study
                            aims with funding priorities to preparing compelling
                            applications that highlight scientific merit,
                            innovation, and potential impact. Our team brings
                            expertise in both local and international funding
                            landscapes, ensuring your proposal stands out among
                            peers.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            By partnering with us, you gain more than grant
                            writing—you gain a strategic roadmap that increases
                            your chances of securing the financial resources
                            needed to bring your research to life.
                        </p>
                    </div>

                    {/* Accelerate Trial Start-up */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Transforming Research Ideas into Fundable Proposals
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Every successful grant begins with a strong
                            narrative. At Innoclin Research, we translate your
                            scientific vision into a clear, persuasive proposal
                            that resonates with funding agencies. Our
                            specialists refine objectives, strengthen
                            methodologies, and build budgets that are both
                            realistic and competitive.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Beyond writing, we advise on the most suitable
                            grants for your therapeutic area and research stage,
                            whether from government bodies, global health
                            agencies, or private foundations. This tailored
                            approach ensures that your efforts are targeted,
                            efficient, and aligned with funder expectations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-6 text-primary">
                            Your Partner in Funding Success
                        </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Securing grants is a competitive process—but with
                            Innoclin Research, you don’t have to navigate it
                            alone. We work closely with your team to understand
                            your project’s unique strengths, address potential
                            weaknesses, and present your research in the most
                            compelling way possible.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            From concept notes and letters of intent to
                            full-scale applications and budget justifications,
                            our support covers the entire funding journey. With
                            our expertise, your research stands a stronger
                            chance of winning the grants that make innovation
                            possible
                        </p>
                    </div>

                    {/* Insight-driven collaboration  */}
                </div>

                {/* Right Column - Sticky Related Expertise */}
            </div>
        </section>
    );
}
