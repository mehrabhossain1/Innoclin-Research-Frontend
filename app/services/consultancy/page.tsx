import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import ConsultancyPageSection from "./ConsultancyPageSection";

export default function ConsultancyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Consultancy"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <ConsultancyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
