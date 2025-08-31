import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import ClinicalStudyPageSection from "./ClinicalStudyPageSection";

export default function ClinicalTrialPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Clinical Study Optimization"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <ClinicalStudyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
