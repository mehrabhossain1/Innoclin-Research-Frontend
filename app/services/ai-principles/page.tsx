import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import AiPrinciplesPageSection from "./AiPrinciplesPageSection";

export default function AiPrinciplesPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="AI Principles in Clinical Research"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <AiPrinciplesPageSection />
            <ContactUsSection />
        </main>
    );
}
