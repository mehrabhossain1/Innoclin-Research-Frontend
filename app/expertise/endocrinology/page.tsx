import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import EndocrinologyPageSection from "./EndocrinologyPageSection";

export default function EndocrinologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Endocrinology"
                subtitle="Transforming hormonal and metabolic health with precision-driven research. At Innoclin Research, we know that endocrine disorders are complex, often lifelong conditions that affect every stage of life. From diabetes and thyroid diseases to rare hormonal imbalances and metabolic syndromes, our mission is to deliver clinical research that advances safe and effective therapies for patients across the globe."
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <EndocrinologyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
