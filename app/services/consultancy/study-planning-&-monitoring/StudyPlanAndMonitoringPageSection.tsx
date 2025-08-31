"use client";

import { FileText, Shield, Eye, TrendingUp } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function StudyPlanAndMonitoringPageSection() {
    const features = [
        {
            icon: FileText,
            title: "Meticulous Planning",
            description:
                "Comprehensive feasibility assessments and protocol design",
        },
        {
            icon: Shield,
            title: "GCP Compliance",
            description:
                "Ensuring adherence to Good Clinical Practice standards",
        },
        {
            icon: Eye,
            title: "Vigilant Monitoring",
            description: "Real-time oversight and quality assurance",
        },
        {
            icon: TrendingUp,
            title: "Data Integrity",
            description:
                "Safeguarding scientific credibility and patient safety",
        },
    ];

    const sections = [
        {
            title: "Designing Studies That Deliver Reliable Results",
            content: [
                "At Innoclin Research, we recognize that the foundation of every successful clinical program lies in meticulous planning and vigilant monitoring. Our Study Planning & Monitoring services are designed to ensure that your studies are scientifically sound, operationally feasible, and executed with precision. From the earliest protocol drafts to ongoing oversight, we safeguard the integrity of your data and the safety of your patients.",
                "Our planning process begins with a comprehensive feasibility assessment, allowing us to identify the right sites, patient populations, and methodologies for your study. Once underway, our monitoring frameworks provide real-time visibility, ensuring that studies remain compliant with GCP standards and regulatory requirements.",
                "With Innoclin Research, you gain a partner who not only sets your studies up for success but also stays actively engaged throughout the journey—resolving issues early, minimizing delays, and ensuring that your research outcomes stand up to the highest standards of scientific scrutiny.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Planning with Precision, Monitoring with Care",
            content: [
                "Every clinical study is unique, but all demand the same fundamentals: precision in design and diligence in oversight. Our Study Planning & Monitoring solutions bring both together. By blending strategic foresight with hands-on management, we help sponsors navigate the complexities of trial logistics while maintaining an unwavering focus on patient safety and data quality.",
                "Our monitoring teams act as your extended eyes and ears at every site, ensuring adherence to protocols and swiftly addressing deviations before they affect results. This proactive approach reduces risk, maintains data credibility, and provides sponsors with confidence in every stage of the study.",
            ],
            background: "gradient" as const,
        },
        {
            title: "From Blueprint to Breakthrough: Studies That Work",
            content: [
                "Successful trials start with smart planning and thrive on consistent oversight. Innoclin Research offers end-to-end support that transforms study concepts into actionable protocols and ensures their flawless execution.",
                "We build flexible monitoring frameworks tailored to your study size, complexity, and therapeutic area. Whether it's a small proof-of-concept study or a large multi-country trial, our approach ensures consistent quality, streamlined communication, and data you can trust. With us, every study is not just a trial—it's a step closer to breakthrough.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Comprehensive feasibility assessments",
        "GCP-compliant monitoring frameworks",
        "Real-time study oversight",
        "Proactive deviation management",
        "Data integrity assurance",
        "Risk mitigation strategies",
    ];

    return (
        <ServiceTemplate
            serviceName="Study Planning & Monitoring"
            serviceIcon={FileText}
            heroTitle="Precision Study Planning & Vigilant Monitoring"
            heroSubtitle="From meticulous planning to ongoing oversight, we ensure your studies are scientifically sound, operationally feasible, and executed with the highest standards of quality and compliance."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
