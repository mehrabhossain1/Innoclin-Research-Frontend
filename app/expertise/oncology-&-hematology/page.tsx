import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import OnocologyAndHeamtologyPageSection from "./OnocologyAndHeamtologyPageSection";

export default function OncologyAndHematologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Oncology & Hematology "
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <OnocologyAndHeamtologyPageSection />
            <ContactUsSection />
        </main>
    );
}
