import PageHeading from "@/components/pages/PageHeading";
import PageSections from "@/components/PageSections";
import {
    Brain,
    Target,
    Users,
    Award,
    ArrowRight,
    Microscope,
    Activity,
    Shield,
} from "lucide-react";
import Link from "next/link";

export default function NeurosciencePage() {
    const neuroscienceStats = [
        {
            icon: Brain,
            number: "150+",
            label: "Neurological Studies",
            description: "Successfully completed trials",
        },
        {
            icon: Users,
            number: "25,000+",
            label: "Patients Enrolled",
            description: "Across global sites",
        },
        {
            icon: Target,
            number: "95%",
            label: "Success Rate",
            description: "Trial completion rate",
        },
        {
            icon: Award,
            number: "15+",
            label: "Years Experience",
            description: "In neuroscience research",
        },
    ];

    const neurologicalDisorders = [
        {
            name: "Alzheimer's Disease",
            description:
                "Comprehensive clinical trials for cognitive decline and memory disorders",
            icon: Brain,
            color: "from-blue-500 to-blue-600",
        },
        {
            name: "Parkinson's Disease",
            description:
                "Movement disorder research and therapeutic development",
            icon: Activity,
            color: "from-green-500 to-green-600",
        },
        {
            name: "Multiple Sclerosis",
            description: "Autoimmune neurological condition treatment studies",
            icon: Shield,
            color: "from-purple-500 to-purple-600",
        },
        {
            name: "Epilepsy",
            description: "Seizure disorder management and prevention trials",
            icon: Microscope,
            color: "from-orange-500 to-orange-600",
        },
        {
            name: "Stroke Recovery",
            description: "Post-stroke rehabilitation and recovery research",
            icon: Brain,
            color: "from-red-500 to-red-600",
        },
        {
            name: "Neuropathic Pain",
            description: "Chronic pain management and treatment studies",
            icon: Activity,
            color: "from-indigo-500 to-indigo-600",
        },
    ];

    const expertiseHighlights = [
        {
            title: "Specialized Expertise",
            description:
                "Deep understanding of neurological disorders and their unique challenges",
            icon: Brain,
            features: [
                "Neuroimaging expertise",
                "Cognitive assessment tools",
                "Biomarker development",
            ],
        },
        {
            title: "Global Network",
            description:
                "Access to specialized neurology centers and patient populations worldwide",
            icon: Users,
            features: ["40+ countries", "500+ sites", "Diverse populations"],
        },
        {
            title: "Regulatory Excellence",
            description:
                "Proven track record with regulatory agencies for neurological drug approvals",
            icon: Award,
            features: ["FDA submissions", "EMA approvals", "Global compliance"],
        },
        {
            title: "Technology Integration",
            description:
                "Advanced digital tools and AI-powered solutions for neurological research",
            icon: Microscope,
            features: [
                "Digital biomarkers",
                "AI analysis",
                "Remote monitoring",
            ],
        },
    ];

    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Neuroscience"
                subtitle="Accelerate your neuroscience research from strategy to successful delivery with a partner equipped with the insight, expertise, and operational strength to meet the complexities of neurological trials."
                subtitle2="We have supported studies across a spectrum of neurological disorders, enabling us to deliver exceptional operational performance and high-quality data."
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Statistics Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Proven Track Record in{" "}
                            <span className="text-[#0CB39A]">
                                Neuroscience Research
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our extensive experience in neurological clinical
                            trials has established us as a trusted partner for
                            biopharmaceutical companies developing breakthrough
                            treatments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {neuroscienceStats.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] flex items-center justify-center">
                                        <StatIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-lg font-semibold text-[#0CB39A] mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {stat.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Neurological Disorders Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive Coverage of{" "}
                            <span className="text-[#0CB39A]">
                                Neurological Disorders
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our expertise spans the full spectrum of
                            neurological conditions, from rare disorders to
                            common neurodegenerative diseases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {neurologicalDisorders.map((disorder, index) => {
                            const DisorderIcon = disorder.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border border-gray-200 hover:border-[#0CB39A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${disorder.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <DisorderIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0CB39A] transition-colors">
                                                {disorder.name}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {disorder.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Expertise Highlights Section */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Our{" "}
                            <span className="text-[#0CB39A]">
                                Neuroscience Expertise
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Our specialized approach combines deep scientific
                            knowledge with operational excellence to deliver
                            successful neurological clinical trials.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {expertiseHighlights.map((highlight, index) => {
                            const HighlightIcon = highlight.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-[#0CB39A] flex items-center justify-center">
                                            <HighlightIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {highlight.title}
                                            </h3>
                                            <p className="text-slate-300 leading-relaxed">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {highlight.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center gap-2 text-slate-300"
                                                >
                                                    <div className="w-2 h-2 bg-[#0CB39A] rounded-full"></div>
                                                    <span className="text-sm">
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#0CB39A] to-[#0A9B85] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Accelerate Your{" "}
                        <span className="text-white">
                            Neuroscience Research
                        </span>
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Partner with our neuroscience experts to navigate the
                        complexities of neurological clinical trials and bring
                        breakthrough treatments to patients faster.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 bg-white text-[#0CB39A] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                        >
                            <span>Start Your Project</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="/expertise"
                            className="group inline-flex items-center gap-3 text-white font-semibold hover:text-gray-200 transition-colors duration-300"
                        >
                            <span>Explore Other Expertise Areas</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </section>

            <PageSections />

            {/* <ContactUsSection /> */}
        </main>
    );
}
