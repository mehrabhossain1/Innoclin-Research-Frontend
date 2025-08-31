"use client";

import { GraduationCap, Shield, Eye, Users } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function ClinicalAssessmentPageSection() {
    const features = [
        {
            icon: GraduationCap,
            title: "Comprehensive Training",
            description:
                "Expert-led educational programs for clinical research teams",
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description:
                "Robust assessment frameworks ensuring compliance and excellence",
        },
        {
            icon: Eye,
            title: "Ongoing Surveillance",
            description: "Continuous monitoring and performance optimization",
        },
        {
            icon: Users,
            title: "Team Development",
            description:
                "Building capable, confident clinical research professionals",
        },
    ];

    const sections = [
        {
            title: "Building Capacity, Ensuring Quality",
            content: [
                "At Innoclin Research, we believe that clinical excellence depends on both skilled professionals and robust oversight. Our Clinical Assessment, Training & Surveillance services are designed to equip research teams with the knowledge they need while safeguarding the integrity of every study.",
                "From foundational GCP training to specialized protocol-specific education, we build competency across all levels of your organization. Our surveillance programs then ensure that this knowledge translates into consistent, high-quality performance in real-world settings.",
                "With Innoclin Research, you gain more than training—you gain a partnership that elevates your entire clinical operation, ensuring that every team member contributes to study success with confidence and competence.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "From Learning to Leading: Clinical Excellence at Every Level",
            content: [
                "Effective clinical research requires more than good intentions—it demands expertise, consistency, and accountability. Our Clinical Assessment, Training & Surveillance programs address all three, creating a comprehensive framework for operational excellence.",
                "We assess current capabilities, design targeted training interventions, and implement surveillance systems that monitor performance and identify opportunities for continuous improvement. This integrated approach ensures that your teams not only learn best practices but consistently apply them.",
                "Whether you're onboarding new staff, launching complex protocols, or scaling operations across multiple sites, our programs provide the foundation for sustainable clinical success.",
            ],
            background: "gradient" as const,
        },
        {
            title: "Empowering Teams, Protecting Studies",
            content: [
                "Clinical research is only as strong as the people who conduct it. Our Training & Surveillance services focus on human capital development while maintaining the highest standards of study integrity.",
                "We deliver customized training programs that address the specific needs of your therapeutic areas, study designs, and operational challenges. Our surveillance frameworks then provide ongoing oversight that protects both study quality and team performance.",
                "Through this dual approach, we help sponsors build research organizations that are not only compliant and efficient but also confident and capable of handling the most complex clinical challenges.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Comprehensive team competency assessment",
        "Customized training program development",
        "GCP and protocol-specific education",
        "Performance monitoring and surveillance",
        "Continuous improvement frameworks",
        "Quality assurance systems",
    ];

    return (
        <ServiceTemplate
            serviceName="Clinical Assessment, Training & Surveillance"
            serviceIcon={GraduationCap}
            heroTitle="Empowering Excellence Through Education & Oversight"
            heroSubtitle="Build capable research teams and maintain the highest standards of clinical quality through comprehensive training programs and robust surveillance systems."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
