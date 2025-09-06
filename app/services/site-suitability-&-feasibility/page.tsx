import PageHeading from "@/components/pages/PageHeading";
import SiteSuitabilityPageSection from "./SiteSuitabilityPageSection";

export default function SiteSuite() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Site Suitability & Feasibility"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/real-estate-businessman-reaching-out-hand_23-2147653314.jpg"
            />

            {/* Main Content Section */}
            <SiteSuitabilityPageSection />
        </main>
    );
}
