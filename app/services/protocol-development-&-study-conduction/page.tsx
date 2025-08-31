import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import ProtocolDevPageSection from "./ProtocolDevPageSection";

export default function AiPrinciplesPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Protocol Development & Study Conduction"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <ProtocolDevPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
