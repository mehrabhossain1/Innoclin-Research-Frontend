import PageHeading from "@/components/pages/PageHeading";
import PostMarketClinicalEvidencePageSection from "./PostMarketClinicalEvidencePageSection";

export default function PostMarketClinicalEvidence() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Post-Market Clinical Evidence"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/happy-businessman-with-face-mask-analyzing-chart-video-call-home_637285-12753.jpg"
            />

            {/* Main Content Section */}
            <PostMarketClinicalEvidencePageSection />
        </main>
    );
}
