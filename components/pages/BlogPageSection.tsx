import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import PageHeading from "./PageHeading";

// Temporary dummy posts — replace later with real data or CMS
const posts = [
    {
        slug: "neuroscience-trials",
        title: "Advancing Neuroscience Trials with Precision",
        excerpt:
            "Explore how Innoclin Research accelerates neuroscience trials with expertise in Alzheimer’s, Parkinson’s, and more.",
        image: "https://img.freepik.com/premium-photo/3d-brain-digital-technology-background_123271-202.jpg?w=1480",
    },
    {
        slug: "oncology-hematology",
        title: "Oncology & Hematology Innovations",
        excerpt:
            "Managing neurological complications in cancer care with advanced trial design and high-impact outcomes.",
        image: "https://img.freepik.com/premium-photo/dna-background-with-medical-technology_71374-177.jpg?w=1480",
    },
    {
        slug: "rare-disease-research",
        title: "Rare Disease Research: Overcoming Challenges",
        excerpt:
            "Learn how Innoclin Research delivers targeted outcomes in rare neurodegenerative disease trials.",
        image: "https://img.freepik.com/premium-photo/medical-genetics-concept-with-dna-double-helix_71374-30.jpg?w=1480",
    },
];

export default function BlogPageSectionn() {
    return (
        <main>
            {/* Page Heading */}
            <PageHeading
                title="Blogs"
                subtitle="Stay updated with the latest research, innovations, and therapeutic insights from Innoclin Research."
                bgImage="https://img.freepik.com/premium-photo/abstract-healthcare-technology-background-with-futuristic-hud-interface-design_670147-307.jpg?w=1480"
            />

            {/* Blog Grid */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Card
                                key={post.slug}
                                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition"
                            >
                                <div className="relative w-full h-52">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        Read more →
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
