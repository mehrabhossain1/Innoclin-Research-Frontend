import PageHeading from "@/components/pages/PageHeading";
import DermatologyPageSection from "../dermatology/DermatologyPageSection";
import ContactUsSection from "@/components/ContactUsSection";

export default function PediatricsPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Pediatrics"
                subtitle="Advancing child health through research designed with families in mind. At Innoclin Research, we recognize that pediatric clinical research is not just about smaller doses it’s about building trials around the unique physiology, needs, and safety considerations of children. From rare genetic disorders to common chronic conditions, our mission is to accelerate safe and effective therapies that give every child the chance for a healthier future. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <DermatologyPageSection />
            <ContactUsSection />
        </main>
    );
}
