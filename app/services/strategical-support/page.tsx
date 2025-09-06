import PageHeading from "@/components/pages/PageHeading";
import StrategicalSupportPageSection from "./StrategicalSupportPageSection";

export default function StrategicalSupport() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Strategical Support"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/business-partners-connecting-jigsaw-puzzle-pieces_53876-148197.jpg"
            />

            {/* Main Content Section */}
            <StrategicalSupportPageSection />
        </main>
    );
}
