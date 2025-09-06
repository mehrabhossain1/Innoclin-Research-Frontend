import PageHeading from "@/components/pages/PageHeading";
import AIPrinciplesPageSection from "./AIPrinciplesPageSection";

export default function AIPrinciplesinClinicalResearch() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="AI Principles in Clinical Research"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887054.jpg"
            />

            {/* Main Content Section */}
            <AIPrinciplesPageSection />
        </main>
    );
}
