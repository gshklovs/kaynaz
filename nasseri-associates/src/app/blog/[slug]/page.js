import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} | Nasseri & Associates`,
    description: post.description
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <article className="prose-custom">
      <h1 className="font-display text-3xl text-brand-secondary mb-4">{post.title}</h1>
      <p className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString()}</p>
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

