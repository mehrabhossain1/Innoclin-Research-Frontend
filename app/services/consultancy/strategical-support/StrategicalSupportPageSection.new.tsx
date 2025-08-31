import { Brain, Target, TrendingUp, Zap } from "lucide-react";

export default function StrategicalSupportPageSection() {
    const features = [
        {
            icon: Brain,
            title: "Strategic Planning",
            description:
                "Forward-thinking frameworks that integrate scientific insight",
        },
        {
            icon: Target,
            title: "Risk Management",
            description:
                "Early identification and mitigation of development risks",
        },
        {
            icon: TrendingUp,
            title: "Adaptive Models",
            description: "Flexible study designs that evolve with your needs",
        },
        {
            icon: Zap,
            title: "Real-time Optimization",
            description:
                "Continuous strategy refinement throughout development",
        },
    ];

    const sections = [
        {
            title: "Aligning Strategy with Clinical Success",
            content: [
                "At Innoclin Research, we believe that every clinical study requires more than operational execution—it demands a strategy that anticipates risks, adapts to challenges, and maximizes efficiency. Our Strategical Support services are designed to align your project goals with long-term development strategies, ensuring that your resources are optimized and your study remains on the path to success.",
                "We provide forward-thinking frameworks that integrate scientific insight, regulatory foresight, and patient-centered approaches. By analyzing development pipelines, monitoring trial feasibility, and identifying early risks, our team ensures that every study decision contributes directly to your broader clinical and commercial objectives.",
                "With Innoclin Research as your strategic partner, you don't just conduct studies—you conduct studies that are designed for sustainability, scalability, and impact.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Smart Strategies for Complex Clinical Pathways",
            content: [
                "In today's fast-moving research environment, clinical programs need strategies that go beyond simple timelines and budgets. Our Strategical Support services combine data-driven planning with therapeutic expertise to build adaptive study models. These models allow sponsors to pivot effectively, maintain regulatory alignment, and achieve milestones without compromising quality.",
                "We partner closely with your teams to define success metrics, optimize study resources, and reduce development costs. Whether you are a small biotech or a global sponsor, Innoclin Research ensures your clinical journey is supported by robust strategies that work in practice—not just on paper.",
            ],
            background: "gradient" as const,
        },
        {
            title: "Transforming Vision into Roadmaps for Success",
            content: [
                "Every breakthrough begins with a vision. At Innoclin Research, our Strategical Support services transform that vision into an actionable roadmap. By combining operational insight with clinical innovation, we create strategies that help sponsors move confidently from protocol design to regulatory approval.",
                "Our strategic support doesn't stop at planning—we continuously evaluate study performance, identify emerging challenges, and refine strategies in real time. This ensures your clinical research not only stays on course but also adapts seamlessly to the evolving research landscape.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Long-term development strategy alignment",
        "Risk anticipation and mitigation",
        "Resource optimization and cost reduction",
        "Adaptive study model development",
        "Real-time performance evaluation",
        "Regulatory alignment maintenance",
    ];

    return (
        <ServiceTemplate
            serviceName="Strategical Support"
            serviceIcon={Brain}
            heroTitle="Strategic Clinical Development Support"
            heroSubtitle="Align your project goals with long-term development strategies through forward-thinking frameworks that maximize efficiency and ensure sustainable success."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
