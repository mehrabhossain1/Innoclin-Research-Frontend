import PageHeading from "@/components/pages/PageHeading";
import MedicalWritingPageSection from "./MedicalWritingPageSection";

export default function MedicalWritingtPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Medical Writing"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/close-up-doctor-writing_23-2148868180.jpg"
            />

            {/* Main Content Section */}
            <MedicalWritingPageSection />
        </main>
    );
}
