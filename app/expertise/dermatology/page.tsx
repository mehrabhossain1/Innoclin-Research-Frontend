import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import DermatologyPageSection from "./DermatologyPageSection";

export default function DermatologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Dermatology"
                subtitle="Transforming skin health with science, innovation, and patient-centered care. At Innoclin Research, we recognize that dermatological conditions are more than skin deep they impact quality of life, self-confidence, and overall well-being. From rare genetic disorders to widespread chronic conditions like psoriasis, eczema, and acne, our mission is to accelerate the development of safe and effective therapies that improve patients’ lives."
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <DermatologyPageSection />
            <ContactUsSection />
        </main>
    );
}
