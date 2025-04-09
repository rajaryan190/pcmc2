import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Indian Elections",
    excerpt: "A deep dive into evolving strategies of political campaigns.",
    content: "Full blog content here...",
    author: "Rajesh Kumar",
    date: "March 25, 2025",
    readTime: "5 min read",
    slug: "why-bihar-politics-is-interesting",
    imageUrl: "./why-bihar-politics-is-interesting2.jpeg",
    category: "Politics",
  },
  // More posts...
  {
    id: 2,
    title: "What is Waqf Sanshodhan Bill?",
    excerpt: "Exploring how social media platforms influence political discourse.",
    content: "Full blog content here...",
    author: "Ayesha Khan",
    date: "April 6, 2025",
    readTime: "5 min read",
    slug: "what-is-waqf-sanshodhan-bill",
    imageUrl: "/what-is-waqf-sanshodhan-bill.jpg",
    category: "Politics",
  },
  {
    id: 3,
    title: "LPG Gas Cylinder Price Hike in Bihar: A Major Issue Ahead of 2025 Vidhan Sabha Elections",
    excerpt: "Analyzing the impact of rising LPG prices on the upcoming elections.",
    content: "Full blog content here...",
    author: "Anjali Sharma",
    date: "April 10, 2025",
    readTime: "7 min read",
    slug: "lpg-gas-cylinder-price-hike-bihar-2025",
    imageUrl: "/lpg-gas-cylinder-price-hike-bihar-2025.png",
    category: "Politics",
  },
];

export default function BlogSection() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center">Latest Political Insights</h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-58 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <span className="flex items-center gap-x-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                  <span className="flex items-center gap-x-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 hover:text-blue-600">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-3 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-800">By {post.author}</span>
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 font-semibold flex items-center gap-x-1 hover:underline">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
