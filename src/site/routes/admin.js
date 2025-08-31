import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');

const ensureAuth = (req, res) => {
  const token = req.query.token || req.body.token;
  const expected = process.env.ADMIN_TOKEN || 'changeme';
  if (token !== expected) {
    res.status(401).send('Unauthorized');
    return false;
  }
  return true;
};

export const newPostForm = (req, res) => {
  if (!ensureAuth(req, res)) return;
  res.render('admin/new-post', { title: 'New Post', token: req.query.token });
};

export const createPost = (req, res) => {
  if (!ensureAuth(req, res)) return;
  const { title, slug, date, content, token } = req.body;
  if (!slug || !title) {
    return res.status(400).send('Missing required fields');
  }
  if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });
  const file = path.join(postsDir, `${slug}.md`);
  const md = `---\ntitle: ${title}\ndate: ${date || new Date().toISOString()}\n---\n\n${content || ''}\n`;
  fs.writeFileSync(file, md, 'utf-8');
  res.redirect(`/blog/${slug}` + (token ? `?token=${token}` : ''));
};

