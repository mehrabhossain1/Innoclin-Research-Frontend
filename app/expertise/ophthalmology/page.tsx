import PageHeading from "@/components/pages/PageHeading";
import OphthalmologyPageSection from "./OphthalmologyPageSection";

export default function OphthalmologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Ophthalmology "
                subtitle="Shaping the future of vision care through science and innovation. At Innoclin Research, we understand that eye diseases can drastically impair quality of life, independence, and productivity. From widespread disorders like glaucoma, cataracts, and diabetic retinopathy to rare inherited retinal diseases, our mission is to deliver clinical trials that preserve and restore sight through safe, effective, and innovative therapies. "
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}

            <OphthalmologyPageSection />
            {/* <ContactUsSection /> */}
        </main>
    );
}
