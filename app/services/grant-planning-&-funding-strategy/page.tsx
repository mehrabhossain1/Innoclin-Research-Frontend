import PageHeading from "@/components/pages/PageHeading";
import GrantPlanningPageSection from "./GrantPlanningPageSection";

export default function GrantPlanningAndFundingStrategy() {
    return (
        <main className="flex flex-col">
            {/* Hero Section */}
            <PageHeading
                title="Grant Planning & Funding Strategy"
                subtitle=""
                bgImage="https://img.freepik.com/free-photo/financial-plan-retirement-investment-diagram-concept_53876-121216.jpg"
            />

            {/* Main Content Section */}
            <GrantPlanningPageSection />
        </main>
    );
}
