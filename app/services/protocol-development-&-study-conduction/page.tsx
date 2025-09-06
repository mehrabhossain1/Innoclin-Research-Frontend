import PageHeading from "@/components/pages/PageHeading";
import ProtocolDevelopmentPageSection from "./ProtocolDevelopmentPageSection";

export default function ProtocolDevelopmentAndStudyConduction() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Protocol Development & Study Conduction"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/programming-background-collage_23-2149901785.jpg"
            />

            {/* Main Content Section */}
            <ProtocolDevelopmentPageSection />
        </main>
    );
}
