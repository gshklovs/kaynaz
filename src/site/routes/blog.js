import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

export const listPosts = (req, res) => {
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];
  const posts = files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const slug = filename.replace(/\.md$/, '');
      const excerpt = content.split('\n').slice(0, 5).join(' ');
      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        excerpt,
      };
    })
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  res.render('blog/index', { title: 'Blog', posts });
};

export const viewPost = (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return res.status(404).render('404', { title: 'Post Not Found' });
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const html = marked.parse(content);

  res.render('blog/post', {
    title: data.title || slug,
    date: data.date || null,
    html,
  });
};

