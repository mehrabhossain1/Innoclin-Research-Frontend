import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import RespiratoryDiseasesPageSection from "./RespiratoryDiseasesPageSection";

export default function RespiratoryDiseasesPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Respiratory Diseases"
                subtitle="Breathing life into innovation for patients with chronic and acute respiratory conditions. 
At Innoclin Research, we recognize the profound impact respiratory diseases have on patients’ quality of life and healthcare systems worldwide. From common conditions like asthma and COPD to rare pulmonary disorders and acute respiratory infections, our goal is to deliver studies that lead to safer, faster, and more effective therapies. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <RespiratoryDiseasesPageSection />
            <ContactUsSection />
        </main>
    );
}
