import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import NephrologyPageSection from "./NephrologyPageSection";

export default function NephrologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Nephrology"
                subtitle="Driving innovation in kidney health through precision-focused research. At Innoclin Research, we understand that kidney diseases are complex, chronic, and often silent until advanced stages. Our nephrology research programs are designed to accelerate therapies that improve outcomes in patients with acute and chronic kidney conditions, ensuring both safety and long-term efficacy. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <NephrologyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
