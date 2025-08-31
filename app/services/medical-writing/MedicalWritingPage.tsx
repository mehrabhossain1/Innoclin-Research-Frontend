"use client";

import { PenTool, FileText, BookOpen, CheckCircle } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function MedicalWritingPage() {
    const features = [
        {
            icon: PenTool,
            title: "Expert Medical Writing",
            description:
                "Scientifically rigorous and regulatory-compliant documentation",
        },
        {
            icon: FileText,
            title: "Comprehensive Documentation",
            description:
                "Protocols, reports, manuscripts, and regulatory submissions",
        },
        {
            icon: BookOpen,
            title: "Publication Support",
            description: "From concept to publication in high-impact journals",
        },
        {
            icon: CheckCircle,
            title: "Quality Assurance",
            description:
                "Rigorous review processes ensuring accuracy and compliance",
        },
    ];

    const sections = [
        {
            title: "Clarity, Precision, and Scientific Integrity",
            content: [
                "At Innoclin Research, our Medical Writing services ensure that every document you submit, publish, or present reflects the highest standards of clarity, accuracy, and compliance. From protocols and investigator brochures to clinical study reports and manuscripts, we craft documents that are scientifically rigorous and regulatory-ready.",
                "Our medical writing team combines deep therapeutic expertise with regulatory knowledge to create documents that not only meet requirements but exceed expectations. We understand that effective medical writing is both an art and a science—requiring technical precision, narrative clarity, and strategic insight.",
                "Whether you need a single document or comprehensive writing support throughout your clinical program, our team delivers content that accelerates regulatory approvals, enhances publication success, and advances scientific understanding.",
            ],
            background: "white" as const,
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "From Data to Narrative: Stories That Drive Approval",
            content: [
                "Great clinical data deserves great storytelling. Our Medical Writing services transform complex scientific information into clear, compelling narratives that resonate with regulators, clinicians, and the broader scientific community.",
                "We specialize in regulatory writing that facilitates approvals, clinical writing that supports execution, and publication writing that amplifies impact. Our approach integrates strategic thinking with meticulous attention to detail, ensuring that every document serves both immediate needs and long-term objectives.",
                "By partnering with Innoclin Research, you gain access to writers who understand not just how to write, but what to write—and why it matters for your clinical success.",
            ],
            background: "gradient" as const,
        },
        {
            title: "Excellence in Every Word",
            content: [
                "Medical writing is where science meets communication. Our team excels at translating complex clinical concepts into documents that are both scientifically accurate and strategically effective.",
                "We provide comprehensive writing services across the clinical development lifecycle, from early-phase protocols to post-marketing publications. Our quality assurance processes ensure that every document meets the highest standards of accuracy, consistency, and regulatory compliance.",
                "With Innoclin Research, your medical writing becomes a competitive advantage—accelerating timelines, enhancing quality, and positioning your programs for maximum impact in the marketplace.",
            ],
            background: "white" as const,
        },
    ];

    const benefits = [
        "Regulatory-compliant documentation",
        "Protocol and CSR development",
        "Publication and manuscript support",
        "Expert scientific editing",
        "Strategic narrative development",
        "Quality assurance and review",
    ];

    return (
        <ServiceTemplate
            serviceName="Medical Writing"
            serviceIcon={PenTool}
            heroTitle="Transforming Science into Compelling Narratives"
            heroSubtitle="Deliver clear, precise, and impactful medical documents that accelerate regulatory approvals and enhance scientific communication."
            sections={sections}
            features={features}
            benefits={benefits}
        />
    );
}
