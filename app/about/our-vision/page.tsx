import { Metadata } from "next";
import OurVisionPageSection from "./OurVisionPageSection";

export const metadata: Metadata = {
    title: "Our Vision | Innoclin Research",
    description:
        "To be the premier provider of end-to-end clinical research solutions, powered by experienced leadership, passionate teams, and an unwavering commitment to excellence.",
};

export default function OurVisionPage() {
    return <OurVisionPageSection />;
}
