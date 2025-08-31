import PageHeading from "@/components/pages/PageHeading";
import GastroenterologyAndHepatologyPageSection from "./GastroenterologyAndHepatologyPageSection";

export default function GastroenterologyAndHepatologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Gastroenterology & Hepatology"
                subtitle="Transforming digestive and liver health through science that delivers. 
At Innoclin Research, we understand that gastrointestinal (GI) and liver disorders can drastically affect quality of life and demand innovative, patient-centered research solutions. Whether it’s inflammatory bowel disease, liver fibrosis, or gastrointestinal cancers, our studies are designed to accelerate therapies that bring meaningful relief and restore health. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <GastroenterologyAndHepatologyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
