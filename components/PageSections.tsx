import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Users, Award, ArrowRight, Microscope, Activity, Shield, CheckCircle, Clock, Zap } from "lucide-react";

export default function PageSections() {
    const expertiseAreas = [
        {
            name: "Oncology & Hematology",
            description: "Managing neurological complications in cancer care and treatment impact studies.",
            icon: Microscope,
            color: "from-red-500 to-red-600",
            link: "/expertise/oncology-&-hematology"
        },
        {
            name: "Rare Disease",
            description: "Applying rare neurodegenerative disease trial expertise for targeted, high-impact outcomes.",
            icon: Shield,
            color: "from-purple-500 to-purple-600",
            link: "/expertise/rare-disease"
        },
        {
            name: "Pediatrics",
            description: "Designing and executing pediatric CNS studies with safety and precision.",
            icon: Users,
            color: "from-blue-500 to-blue-600",
            link: "/expertise/pediatrics"
        },
        {
            name: "Endocrinology",
            description: "Leveraging metabolic and hormonal insights that intersect with neurological health.",
            icon: Activity,
            color: "from-green-500 to-green-600",
            link: "/expertise/endocrinology"
        }
    ];

    const keyFeatures = [
        {
            icon: Brain,
            title: "Therapeutic Expertise",
            description: "Deep understanding of neurological disorders and their unique challenges"
        },
        {
            icon: Target,
            title: "Operational Excellence",
            description: "Proven track record in managing complex neurological clinical trials"
        },
        {
            icon: Users,
            title: "Patient-Centric Approach",
            description: "Specialized strategies for patient recruitment and retention"
        },
        {
            icon: Award,
            title: "Regulatory Compliance",
            description: "Expertise in navigating stringent regulatory requirements"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0CB39A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0A9B85] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#089B7A] rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Extensive Experience Section */}
                        <div className="space-y-8">
                            <div className="text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                                    <div className="h-[3px] w-12 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-full"></div>
                                    <span className="uppercase tracking-[0.15em] text-sm font-bold text-[#0CB39A] bg-[#0CB39A]/10 px-3 py-1 rounded-full border border-[#0CB39A]/20">
                                        Neuroscience Expertise
                                    </span>
                                    <div className="h-[3px] w-12 bg-gradient-to-r from-[#0A9B85] to-[#0CB39A] rounded-full"></div>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                                    Extensive Experience in{" "}
                                    <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                                        Neuroscience Clinical Studies
                                    </span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {keyFeatures.map((feature, index) => {
                                    const FeatureIcon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center">
                                                    <FeatureIcon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Neurological trials demand precision, patient sensitivity, and rigorous compliance. At Innoclin Research, 
                                    we have extensive experience in executing both early- and late-phase neuroscience studies, covering 
                                    conditions such as Alzheimer&apos;s disease, Parkinson&apos;s disease, multiple sclerosis, epilepsy, 
                                    migraine, neuropathic pain, and rare neurodegenerative disorders.
                                </p>

                                {/* Enhanced Image Section */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                    <div className="w-full h-80 relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                            alt="Neuroscience research laboratory"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Floating Stats */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50">
                                                <div className="grid grid-cols-3 gap-4 text-center">
                                                    <div>
                                                        <div className="text-2xl font-bold text-[#0CB39A]">150+</div>
                                                        <div className="text-sm text-gray-600">Studies Completed</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-[#0CB39A]">25K+</div>
                                                        <div className="text-sm text-gray-600">Patients Enrolled</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-[#0CB39A]">95%</div>
                                                        <div className="text-sm text-gray-600">Success Rate</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-lg leading-relaxed text-gray-700">
                                    Our teams understand the unique challenges of these studies, including patient recruitment hurdles, 
                                    endpoint selection, and the need for specialized investigative sites. By combining therapeutic expertise 
                                    with operational excellence, we ensure studies are designed to generate robust data and meet the 
                                    stringent regulatory requirements unique to neuroscience research.
                                </p>
                            </div>
                        </div>

                        {/* Accelerate Trial Start-up Section */}
                        <div className="space-y-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                                    Accelerate{" "}
                                    <span className="bg-gradient-to-r from-[#0CB39A] via-[#0A9B85] to-[#089B7A] bg-clip-text text-transparent">
                                        Trial Start-up
                                    </span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#0CB39A]/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 text-[#0CB39A]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Swift Site Activation</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Our deep understanding of the neuroscience therapeutic area allows us to swiftly connect you 
                                                with highly qualified sites, specialist investigators, and engaged patient communities.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#0CB39A]/10 flex items-center justify-center flex-shrink-0">
                                            <Target className="w-5 h-5 text-[#0CB39A]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimized Patient Identification</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                This targeted approach enables faster site activation, optimized patient identification, 
                                                and greater retention—shortening your time to key milestones.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#0CB39A]/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-[#0CB39A]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Trial Management</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                With our proven trial management expertise, we minimize operational risks, anticipate challenges, 
                                                and provide proactive solutions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#0CB39A]/10 flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-5 h-5 text-[#0CB39A]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficiency Focus</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Every team member at Innoclin Research is committed to removing barriers and creating efficiencies 
                                                so you can make earlier, more informed decisions about your program&apos;s success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] rounded-3xl p-8 text-white">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Neuroscience Trial?</h3>
                                    <p className="text-lg mb-6 opacity-90">
                                        From protocol design to database lock, our goal is to deliver your neuroscience trial on time, 
                                        on budget, and to the highest quality standards.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="group inline-flex items-center gap-3 bg-white text-[#0CB39A] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                                    >
                                        <span>Start Your Project</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sticky Related Expertise */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card className="shadow-2xl rounded-3xl border-0 overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] text-white">
                                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                                        <Brain className="w-5 h-5" />
                                        Related Expertise
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    {expertiseAreas.map((area, index) => {
                                        const AreaIcon = area.icon;
                                        return (
                                            <Link
                                                key={index}
                                                href={area.link}
                                                className="group block p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                        <AreaIcon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-gray-900 group-hover:text-[#0CB39A] transition-colors mb-1">
                                                            {area.name}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 leading-relaxed">
                                                            {area.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    
                                    <div className="pt-4 border-t border-gray-200">
                                        <Link
                                            href="/expertise"
                                            className="group inline-flex items-center gap-2 text-[#0CB39A] font-semibold hover:text-[#0A9B85] transition-colors"
                                        >
                                            <span>View All Expertise Areas</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
