import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import StudyPlanAndMonitoringPageSection from "./StudyPlanAndMonitoringPageSection";

export default function StudyPlanAndMonitoringPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Study Planning & Monitoring "
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <StudyPlanAndMonitoringPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
