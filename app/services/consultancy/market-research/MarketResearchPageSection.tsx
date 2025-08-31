"use client";

import { TrendingUp, Search, Target, BarChart3 } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function MarketResearchPageSection() {
    const features = [
        {
            icon: Search,
            title: "Deep Market Analysis",
            description:
                "Comprehensive insights into patient populations and therapeutic landscapes",
        },
        {
            icon: Target,
            title: "Strategic Positioning",
            description:
                "Identifying optimal market opportunities and competitive advantages",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Insights",
            description: "Quantitative and qualitative research methodologies",
        },
        {
            icon: TrendingUp,
            title: "Market Intelligence",
            description: "Real-time market trends and forecasting capabilities",
        },
    ];

    const sections = [
        {
            title: "Insights That Drive Smarter Clinical Decisions",
            content: [
                "At Innoclin Research, we know that strong clinical outcomes start with strong market understanding. Our Market Research services provide sponsors with deep insights into patient populations, competitive landscapes, and therapeutic opportunities—helping you design studies that are not only scientifically sound but also strategically aligned with market needs.",
                "From early-stage opportunity assessment to late-phase commercialization planning, our research capabilities span the entire product lifecycle. We combine traditional market research methodologies with cutting-edge analytics to deliver actionable intelligence that informs every aspect of your clinical strategy.",
                "Whether you're exploring a new therapeutic area or positioning for market entry, our insights give you the confidence to make informed decisions that accelerate development timelines and maximize commercial potential.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "From Market Gaps to Market Leadership",
            content: [
                "Understanding the market landscape is critical to clinical success. Our Market Research team specializes in identifying unmet medical needs, analyzing competitive dynamics, and uncovering patient insights that drive breakthrough innovations.",
                "We leverage both primary and secondary research methodologies to provide comprehensive market intelligence. Our approach combines physician interviews, patient surveys, claims data analysis, and competitive intelligence to paint a complete picture of your therapeutic landscape.",
                "By aligning clinical development with market realities, we help sponsors optimize their programs for both regulatory success and commercial viability.",
            ],
            background: "gradient" as const,
        },
        {
            title: "Strategic Intelligence for Every Phase",
            content: [
                "Market research isn't just about understanding what exists—it's about uncovering what's possible. Our team delivers strategic intelligence that spans from early opportunity assessment through post-market surveillance.",
                "We provide critical insights into patient journey mapping, treatment paradigms, pricing strategies, and market access considerations. This comprehensive understanding enables sponsors to design studies that address real-world needs and position products for optimal market reception.",
                "With Innoclin Research, your market research becomes a strategic asset that guides decision-making, reduces development risks, and accelerates paths to market success.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Comprehensive market landscape analysis",
        "Patient population insights and segmentation",
        "Competitive intelligence and positioning",
        "Unmet medical need identification",
        "Commercial viability assessments",
        "Strategic market entry planning",
    ];

    return (
        <ServiceTemplate
            serviceName="Market Research"
            serviceIcon={TrendingUp}
            heroTitle="Strategic Market Intelligence for Clinical Success"
            heroSubtitle="Transform market insights into competitive advantages with comprehensive research that guides clinical development and commercial strategy."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
