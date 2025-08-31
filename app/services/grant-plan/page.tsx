import PageHeading from "@/components/pages/PageHeading";
import GrantPlanPageSection from "./GrantPlanPageSection";

export default function ClinicalTrialPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Grant Planning & Funding Strategy"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <GrantPlanPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
