import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import PageSections from "@/components/PageSections";

export default function NeurosciencePage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Neuroscience"
                subtitle="Accelerate your neuroscience research from strategy to successful delivery with a partner equipped with the insight, expertise, and operational strength to meet the complexities of neurological trials."
                subtitle2="We have supported studies across a spectrum of neurological disorders, enabling us to deliver exceptional operational performance and high-quality data."
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            <PageSections />
            <ContactUsSection />
        </main>
    );
}
