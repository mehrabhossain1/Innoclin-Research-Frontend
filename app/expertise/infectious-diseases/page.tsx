import PageHeading from "@/components/pages/PageHeading";
import InfectiousDiseasesPageSection from "./InfectiousDiseasesPageSection";

export default function InfectiousDiseasesPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Infectious Diseases"
                subtitle="Protecting communities and advancing science in the fight against global health threats. 
At Innoclin Research, we know infectious disease research requires speed, precision, and deep understanding of both pathogens and the people they affect. Whether it’s combating long-standing threats like tuberculosis and HIV or addressing emerging outbreaks such as COVID-19 or novel viral infections, our mission is to accelerate the discovery of vaccines, antivirals, and other life-saving treatments. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <InfectiousDiseasesPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
