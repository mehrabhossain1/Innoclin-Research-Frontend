import PageHeading from "@/components/pages/PageHeading";
import ClinicalDataAnalysisPageSection from "./ClinicalDataAnalysisPageSection";

export default function ClinicalDataAnalysisSolutions() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Clinical Data Analysis Solutions"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/experienced-medical-lab-practitioner-smiling-looking-camera-team-scientists-doctors-examining-virus-evolution-using-high-tech-chemistry-tools-scientific-research-vaccine_482257-3972.jpg"
            />

            {/* Main Content Section */}
            <ClinicalDataAnalysisPageSection />
        </main>
    );
}
