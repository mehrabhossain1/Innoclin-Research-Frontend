"use client";

import { TrendingUp, Shield, Users, BarChart3 } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function PostMarketClinicalEvidencePageSection() {
    const features = [
        {
            icon: TrendingUp,
            title: "Real-World Evidence",
            description:
                "Demonstrating long-term safety and effectiveness in diverse populations",
        },
        {
            icon: Shield,
            title: "Safety Surveillance",
            description:
                "Comprehensive post-market safety monitoring and assessment",
        },
        {
            icon: Users,
            title: "Patient Outcomes",
            description: "Real-world data collection and outcomes measurement",
        },
        {
            icon: BarChart3,
            title: "Value Demonstration",
            description:
                "Health economics and market access evidence generation",
        },
    ];

    const sections = [
        {
            title: "Proving Value Beyond Approval",
            content: [
                "At Innoclin Research, we understand that regulatory approval is not the end of a therapy's journey—it's the beginning. Our Post-Market Clinical Evidence services are designed to demonstrate long-term safety, effectiveness, and real-world value, ensuring continued success for your product in diverse patient populations.",
                "From Phase IV studies to registry-based research, we design and execute post-market programs that address regulatory requirements while generating commercially valuable insights. Our approach combines rigorous methodology with practical feasibility, delivering evidence that satisfies both scientific standards and business objectives.",
                "With our post-market expertise, you can confidently navigate the complexities of real-world evidence generation, ensuring that your therapy continues to demonstrate value long after initial approval.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "From Market Entry to Market Leadership",
            content: [
                "Post-market clinical evidence is essential for maintaining competitive advantage and ensuring long-term commercial success. Our comprehensive approach addresses safety surveillance, effectiveness confirmation, and value demonstration across diverse real-world settings.",
                "We specialize in designing studies that leverage existing healthcare infrastructure while generating high-quality evidence. Our programs capture the complexity of real-world treatment patterns, patient heterogeneity, and healthcare delivery variations that define actual clinical practice.",
                "By partnering with us, you transform post-market obligations into strategic opportunities, generating evidence that strengthens market position and expands therapeutic utility.",
            ],
            background: "gradient" as const,
        },
        {
            title: "Real-World Impact, Real-World Evidence",
            content: [
                "The true measure of therapeutic success lies in real-world impact. Our Post-Market Clinical Evidence services focus on capturing and quantifying this impact through robust study designs and comprehensive data collection strategies.",
                "We develop evidence generation plans that address multiple stakeholder needs—from regulatory authorities requiring safety updates to payers demanding economic justification. Our approach ensures that every study contributes to a comprehensive understanding of your therapy's value proposition.",
                "Through systematic post-market research, we help sponsors build compelling evidence portfolios that support label expansions, reimbursement negotiations, and continued market access across global healthcare systems.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Phase IV study design and execution",
        "Real-world evidence generation",
        "Safety surveillance programs",
        "Registry and cohort studies",
        "Health economics research",
        "Market access evidence",
    ];

    return (
        <ServiceTemplate
            serviceName="Post-Market Clinical Evidence"
            serviceIcon={TrendingUp}
            heroTitle="Demonstrating Real-World Value Beyond Approval"
            heroSubtitle="Generate compelling post-market evidence that proves long-term safety, effectiveness, and value in real-world clinical practice."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
