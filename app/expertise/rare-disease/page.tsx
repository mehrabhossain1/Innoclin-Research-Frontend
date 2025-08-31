import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import RareDiseasePageSection from "./RareDiseasePageSection";

export default function RareDiseasePage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Rare Disease"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <RareDiseasePageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
