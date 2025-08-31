import Link from "next/link";

export default function BlogIndex() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 text-black/70 max-w-2xl">
        Insights on mental health, supervision, and practical skills for everyday life. Articles can be added by creating new markdown files—this page is a temporary placeholder.
      </p>
      <div className="mt-8 text-sm text-black/60">
        <p>No posts yet. <Link href="#" className="link">Add your first article</Link>.</p>
      </div>
    </div>
  );
}

