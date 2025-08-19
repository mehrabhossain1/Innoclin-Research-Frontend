import ContactUsSection from "@/components/ContactUsSection";
import PageHeading from "@/components/pages/PageHeading";
import PageSections from "@/components/PageSections";
import Image from "next/image";

export default function OncologyAndHematologyPage() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Oncology & Hematology "
                subtitle=""
                bgImage="https://img.freepik.com/premium-photo/digital-brain-concept-cosmic-background_98396-118211.jpg?w=1480"
            />

            {/* Intro Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-3xl leading-relaxed">
                            We have supported studies across a spectrum of
                            neurological disorders, enabling us to deliver
                            exceptional operational performance and high-quality
                            data.
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        {/* Replace with actual image */}

                        <Image
                            src="https://img.freepik.com/free-photo/brain-study-background-mental-health-care-medical-technology_53876-105237.jpg?t=st=1755618646~exp=1755622246~hmac=b88a57a6c4c3226fb527ffa9de5b9f8873c64ca350ffc1933dc9368fb3466e81&w=1480"
                            alt="Neuroscience Image"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <PageSections />
            <ContactUsSection />
        </main>
    );
}
