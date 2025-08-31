import PageHeading from "@/components/pages/PageHeading";
import PostMarketClinicalEvidencePageSection from "./PostMarketClinicalEvidencePageSection";

export default function MedicalWritingtPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Post-Market Clinical Evidence"
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <PostMarketClinicalEvidencePageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
