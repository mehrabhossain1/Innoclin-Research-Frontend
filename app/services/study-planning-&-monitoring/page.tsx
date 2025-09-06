import PageHeading from "@/components/pages/PageHeading";
import StudyPlanningAndMonitoringPageSection from "./StudyPlanningAndMonitoringPageSection";

export default function StudyPlanningAndMonitoring() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Study Planning & Monitoring"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/classroom-class-study-academic-schedule_53876-124509.jpg"
            />

            {/* Main Content Section */}
            <StudyPlanningAndMonitoringPageSection />
        </main>
    );
}
