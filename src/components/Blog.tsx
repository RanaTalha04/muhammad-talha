import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    summary: string;
    date: string;
    link: string;
    tags?: string[];
}

const blogPosts: BlogPost[] = [
    // {
    //     id: 1,
    //     title: "Predicting Obesity Risk Using Machine Learning",
    //     summary:
    //         "A complete walkthrough of building and deploying a model using Pakistani health data — including preprocessing, training, evaluation, and Streamlit deployment.",
    //     date: "October 25, 2025",
    //     link: "https://medium.com/@muhammadtalha/obesity-ml-project",
    //     tags: ["Machine Learning", "Health Data", "Streamlit"],
    // },
    // {
    //     id: 2,
    //     title: "Understanding Ensemble Learning in ML",
    //     summary:
    //         "An easy explanation of Bagging, Boosting, and Stacking with examples and when to use each approach.",
    //     date: "October 28, 2025",
    //     link: "/blog/ensemble-learning",
    //     tags: ["Ensemble Learning", "XGBoost", "Random Forest"],
    // },
    // {
    //     id: 3,
    //     title: "PCA Explained Simply (with Visuals)",
    //     summary:
    //         "A visual guide to understanding Principal Component Analysis (PCA) — theory, intuition, and code examples.",
    //     date: "November 1, 2025",
    //     link: "/blog/pca-explained",
    //     tags: ["Dimensionality Reduction", "PCA", "Visualization"],
    // },
];

export default function Blog() {
    return (
        <section
            id="blog"
            className="min-h-screen bg-background text-foreground pt-20 pb-10 px-6"
        >
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                    <span className="text-white">ML & AI </span>
                    <span className="bg-gradient-primary bg-clip-text text-transparent">Blogs</span>
                </h1>

                <p className="text-muted-foreground mt-3">
                    Technical write-ups and insights from my learning and projects.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <Card
                        key={post.id}
                        className="p-5 border hover:shadow-lg transition duration-300 hover:border-primary"
                    >
                        <CardContent className="p-0 flex flex-col h-full">
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-sm text-muted-foreground mb-3">
                                    {post.summary}
                                </p>
                                {post.tags && (
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <p className="text-xs text-muted-foreground">{post.date}</p>
                                <a
                                    // href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary hover:underline text-sm"
                                >
                                    Read More <ArrowUpRight size={14} className="ml-1" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
