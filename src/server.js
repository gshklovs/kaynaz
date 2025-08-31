import path from 'path';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './site/router.js';
import expressLayouts from 'express-ejs-layouts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src', 'site', 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/static', express.static(path.join(process.cwd(), 'src', 'public')));

app.use('/', router);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});

