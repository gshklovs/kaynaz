import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog | Nasseri & Associates",
  description: "Updates and perspectives to support your wellbeing and professional growth."
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1 className="font-display text-3xl text-brand-secondary">Blog</h1>
      <p className="mt-3 text-slate-700">Short articles and resources from our practice.</p>
      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
            </h2>
            <p className="mt-2 text-slate-600">{post.description}</p>
            <p className="mt-1 text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

