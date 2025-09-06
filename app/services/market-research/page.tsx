import PageHeading from "@/components/pages/PageHeading";
import MarketResearchPageSection from "./MarketResearchPageSection";

export default function MarketResearch() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Market Research"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/market-research-consumer-information-needs-concept_53876-138645.jpg"
            />

            {/* Main Content Section */}
            <MarketResearchPageSection />
        </main>
    );
}
