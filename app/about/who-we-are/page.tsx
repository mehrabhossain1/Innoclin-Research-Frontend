import { Metadata } from "next";
import WhoWeArePageSection from "./WhoWeArePageSection";

export const metadata: Metadata = {
    title: "Who We Are | Innoclin Research",
    description:
        "Learn about Innoclin Research's innovative strategies, global reach, and deep expertise in clinical research.",
};

export default function WhoWeArePage() {
    return <WhoWeArePageSection />;
}
