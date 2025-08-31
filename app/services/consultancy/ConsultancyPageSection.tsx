"use client";

import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function ConsultancyPageSection() {
    const features = [
        {
            icon: Users,
            title: "Expert Guidance",
            description: "Decades of therapeutic and operational expertise",
        },
        {
            icon: Target,
            title: "Tailored Solutions",
            description: "Customized strategies aligned with your study goals",
        },
        {
            icon: Lightbulb,
            title: "Strategic Innovation",
            description: "Transform challenges into opportunities",
        },
        {
            icon: TrendingUp,
            title: "Proven Results",
            description: "Save time, reduce costs, improve outcomes",
        },
    ];

    const sections = [
        {
            title: "Guiding Clinical Development with Expertise and Clarity",
            content: [
                "Clinical research is complex, with sponsors often facing challenges in regulatory navigation, patient recruitment, protocol optimization, and operational efficiency. At Innoclin Research, our consultancy service is built to transform these challenges into opportunities by providing tailored solutions that align with your study goals.",
                "Our consultants bring decades of therapeutic and operational expertise, combining deep scientific knowledge with practical strategies. From early-phase planning to late-stage execution, we analyze potential barriers, evaluate feasibility, and recommend approaches that streamline your development pathway. With a commitment to accuracy and transparency, we help you make confident decisions that save time, reduce costs, and improve trial outcomes.",
                "Collaboration is at the core of our approach. We partner closely with sponsors, academic institutions, and biotech innovators, ensuring that every recommendation we provide is not only evidence-based but also adaptable to the realities of your study. By aligning global best practices with patient-centered strategies, Innoclin Research delivers consultancy that positions your clinical research for lasting success.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Turning Complex Challenges into Clear Solutions",
            content: [
                "At Innoclin Research, we understand that clinical research comes with uncertainty. Our consultancy team is here to simplify complexity—helping you navigate regulations, optimize study design, and unlock smarter ways to bring therapies to patients. With a blend of scientific rigor and operational know-how, we deliver solutions that are strategic, adaptable, and results-driven.",
                "From feasibility assessments to regulatory pathway design, our consultancy framework is built around your priorities. We don't just offer advice; we provide actionable roadmaps that anticipate challenges and create opportunities for success.",
            ],
            background: "gradient" as const,
        },
        {
            title: "Strategic Guidance for Smarter, Faster Studies",
            content: [
                "Innoclin Research's consultancy service empowers sponsors with the insights needed to move research forward quickly and effectively. By combining therapeutic expertise, regulatory knowledge, and patient-centric planning, we ensure your trials are designed for both scientific excellence and operational feasibility.",
                "With us, consultancy means more than guidance—it's a partnership built on innovation, transparency, and trust.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Regulatory navigation expertise",
        "Protocol optimization strategies",
        "Patient recruitment enhancement",
        "Operational efficiency improvement",
        "Risk mitigation planning",
        "Cost reduction initiatives",
    ];

    return (
        <ServiceTemplate
            serviceName="Consultancy Services"
            serviceIcon={Users}
            heroTitle="Expert Clinical Research Consultancy"
            heroSubtitle="Transform clinical research challenges into opportunities with strategic guidance, regulatory expertise, and tailored solutions that accelerate your path to success."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
