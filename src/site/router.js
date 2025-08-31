import { Router } from 'express';
import * as pages from './routes/pages.js';
import * as blog from './routes/blog.js';
import * as contact from './routes/contact.js';
import * as admin from './routes/admin.js';

const router = Router();

router.get('/', pages.home);
router.get('/about', pages.about);
router.get('/forms', pages.forms);
router.get('/contact', pages.contact);

router.get('/blog', blog.listPosts);
router.get('/blog/:slug', blog.viewPost);

router.post('/contact', contact.submitContactForm);

router.get('/admin/new-post', admin.newPostForm);
router.post('/admin/new-post', admin.createPost);

export default router;

