import PageHeading from "@/components/pages/PageHeading";
import ConsultancyPageSection from "./ConsultancyPageSection";

export default function ConsultancyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Consultancy"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg"
            />

            {/* Intro Section */}

            <ConsultancyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
