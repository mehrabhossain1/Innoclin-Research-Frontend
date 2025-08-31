import AboutUsSection from "@/components/AboutUsSection";
import DeepExperienceSection from "@/components/DeepExperienceSection";
import HeroSection from "@/components/HeroSection";
import HowDoesHappenSection from "@/components/HowDoesHappenSection";
import LifeSciencesSection from "@/components/LifeSciencesSection";
import OurCareersSection from "@/components/OurCareersSection";
import OurPartnerSection from "@/components/OurPartnerSection";
// import RareDiseasesSection from "@/components/RareDiseasesSection";
import SpecializedCapabilitiesSection from "@/components/SpecializedCapabilitesSection";
import TheInnoclinResearchDifferenceSection from "@/components/TheInnoclinResearchDifferenceSection";
import WantACROPartnerSection from "@/components/WantACROPartnerSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutUsSection />
            <OurPartnerSection />
            <SpecializedCapabilitiesSection />
            <OurCareersSection />
            {/* <GetInTouchSection /> */}
            <WantACROPartnerSection />
            <HowDoesHappenSection />
            <TheInnoclinResearchDifferenceSection />
            <DeepExperienceSection />
            {/* <RareDiseasesSection /> */}
            <LifeSciencesSection />
            {/* <ContactUsSection /> */}
        </div>
    );
}
