import PageHeading from "@/components/pages/PageHeading";
import SiteSuitabilityFeasibilitySection from "./SiteSuitabilityFeasibilitySection";

export default function SiteSuitabilityFeasibilityPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Site Suitability & Feasibility"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <SiteSuitabilityFeasibilitySection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
