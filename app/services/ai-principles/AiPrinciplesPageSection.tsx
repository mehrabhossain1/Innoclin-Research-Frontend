"use client";

import { Brain, Shield, Zap, Target } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function AiPrinciplesPageSection() {
    const features = [
        {
            icon: Brain,
            title: "Intelligent Solutions",
            description:
                "AI-driven approaches that enhance clinical research efficiency",
        },
        {
            icon: Shield,
            title: "Ethical AI Framework",
            description:
                "Responsible AI implementation with integrity and transparency",
        },
        {
            icon: Zap,
            title: "Enhanced Efficiency",
            description: "Streamlined processes through intelligent automation",
        },
        {
            icon: Target,
            title: "Precision Insights",
            description: "Data-driven insights that optimize clinical outcomes",
        },
    ];

    const sections = [
        {
            title: "Harnessing Artificial Intelligence for Smarter Trials",
            content: [
                "At Innoclin Research, we integrate AI-driven solutions to reimagine how clinical research is planned, conducted, and optimized. Our AI principles ensure that technology serves as a trusted partner—enhancing efficiency, accuracy, and inclusivity without compromising scientific or ethical integrity.",
                "We believe that artificial intelligence should amplify human expertise, not replace it. Our approach combines cutting-edge AI capabilities with deep clinical research knowledge, creating solutions that are both technologically advanced and practically applicable.",
                "From patient identification and site selection to data analysis and regulatory reporting, our AI principles guide the development of tools and methodologies that accelerate research timelines while maintaining the highest standards of quality and compliance.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Intelligent Innovation with Human Oversight",
            content: [
                "Our AI principles are built on a foundation of responsible innovation and human-centered design. We recognize that while AI can process vast amounts of data and identify patterns beyond human capability, the interpretation and application of these insights require clinical expertise and ethical judgment.",
                "We implement AI solutions that enhance decision-making while preserving the human elements that are essential to clinical research—empathy, judgment, and ethical reasoning. Our approach ensures that technology serves to empower research teams rather than replace critical human oversight.",
                "By maintaining this balance, we create AI-enabled clinical research environments that are both highly efficient and deeply human, delivering outcomes that benefit patients, sponsors, and the broader scientific community.",
            ],
            background: "gradient" as const,
        },
        {
            title: "The Future of Clinical Research, Today",
            content: [
                "Our AI principles position clinical research at the forefront of technological innovation while respecting the fundamental values that guide medical research. We use artificial intelligence to solve real-world challenges—reducing study timelines, improving patient matching, and enhancing data quality.",
                "We are committed to transparent AI implementation, ensuring that our algorithms are explainable, our data sources are validated, and our outcomes are reproducible. This commitment to transparency builds trust with regulators, sponsors, and patients alike.",
                "Through thoughtful AI integration, we're not just conducting clinical research—we're pioneering the future of evidence generation, creating more efficient, inclusive, and impactful research programs that accelerate the development of life-changing therapies.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Intelligent patient identification and matching",
        "Automated data quality monitoring",
        "Predictive analytics for study optimization",
        "AI-enhanced regulatory compliance",
        "Transparent and explainable algorithms",
        "Human-centered AI implementation",
    ];

    return (
        <ServiceTemplate
            serviceName="AI Principles"
            serviceIcon={Brain}
            heroTitle="Intelligent Clinical Research with Human Integrity"
            heroSubtitle="Harness the power of artificial intelligence to enhance clinical research efficiency while maintaining the highest standards of scientific and ethical integrity."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
