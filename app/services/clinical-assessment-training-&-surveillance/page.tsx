import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import ClinicalAssessmentPageSection from "./ClinicalAssessmentPageSection";

export default function ClinicalAssessmentPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Clinical Assessment, Training & Surveillance"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <ClinicalAssessmentPageSection />
            <ContactUsSection />
        </main>
    );
}
