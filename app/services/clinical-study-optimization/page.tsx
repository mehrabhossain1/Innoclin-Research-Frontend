import PageHeading from "@/components/pages/PageHeading";
import ClinicalStudyOptimizationPageSection from "./ClinicalStudyOptimizationPageSection";

export default function ClinicalStudyOptimization() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Clinical Study Optimization"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/healthcare-professional-uses-oximeter-measure-oxygen-levels_482257-123694.jpg"
            />

            {/* Main Content Section */}
            <ClinicalStudyOptimizationPageSection />
        </main>
    );
}
