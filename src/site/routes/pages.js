export const home = (req, res) => {
  res.render('home', { title: 'Nasseri & Associates — Therapy and Clinical Supervision' });
};

export const about = (req, res) => {
  res.render('about', { title: 'About, Fees, Insurance, Hours' });
};

export const forms = (req, res) => {
  res.render('forms', { title: 'Client Forms' });
};

export const contact = (req, res) => {
  res.render('contact', { title: 'Contact' });
};

