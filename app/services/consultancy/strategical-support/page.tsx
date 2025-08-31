import PageHeading from "@/components/pages/PageHeading";
import StrategicalSupportPageSection from "./StrategicalSupportPageSection";

export default function StrategicalSupportPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Strategical Support "
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <StrategicalSupportPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
