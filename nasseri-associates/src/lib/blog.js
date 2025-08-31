import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export async function getAllPosts() {
  ensureSamplePost();
  const filenames = fs.existsSync(postsDirectory) ? fs.readdirSync(postsDirectory) : [];
  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? new Date().toISOString(),
        description: data.description ?? "",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

export async function getPostBySlug(slug) {
  ensureSamplePost();
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    description: data.description ?? "",
    contentHtml,
  };
}

function ensureSamplePost() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
  const sample = path.join(postsDirectory, "welcome.md");
  if (!fs.existsSync(sample)) {
    const now = new Date().toISOString();
    fs.writeFileSync(
      sample,
      `---\n` +
        `title: Welcome to Our Practice Blog\n` +
        `date: ${now}\n` +
        `description: Brief updates and supportive resources from our team.\n` +
        `---\n\n` +
        `Thank you for visiting. We share short, accessible posts that support personal wellbeing and professional growth.`
    );
  }
}

