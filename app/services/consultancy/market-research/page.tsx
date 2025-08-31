import PageHeading from "@/components/pages/PageHeading";
import MarketResearchPageSection from "./MarketResearchPageSection";

export default function MarketResearchPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Market Research"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <MarketResearchPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
