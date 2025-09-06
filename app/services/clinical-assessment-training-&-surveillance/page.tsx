import PageHeading from "@/components/pages/PageHeading";
import ClinicalAssessmentPageSection from "./ClinicalAssessmentPageSection";

export default function ClinicalAssessmentPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Clinical Assessment Training & Surveillance"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84781.jpg"
            />

            {/* Main Content Section */}
            <ClinicalAssessmentPageSection />
        </main>
    );
}
