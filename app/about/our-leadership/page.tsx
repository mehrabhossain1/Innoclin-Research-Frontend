import { Metadata } from "next";
import OurLeadershipPageSection from "./OurLeadershipPageSection";

export const metadata: Metadata = {
    title: "Our Leadership | Innoclin Research",
    description:
        "We embrace diversity, equity, and inclusion as core strengths, welcoming professionals from all backgrounds to solve complex challenges.",
};

export default function OurLeadershipPage() {
    return <OurLeadershipPageSection />;
}
