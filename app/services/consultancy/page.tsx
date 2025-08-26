import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import ConsultancyPageSection from "./ConsultancyPageSection";

export default function ConsultancyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Consultancy"
                subtitle="Advancing reproductive science to improve outcomes for individuals and families. At Innoclin Research, we understand that reproductive health research requires sensitivity, precision, and innovation. From fertility treatments to maternal health and gynecological disorders, our mission is to accelerate therapies and interventions that enhance reproductive well-being and transform lives. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <ConsultancyPageSection />
            <ContactUsSection />
        </main>
    );
}
