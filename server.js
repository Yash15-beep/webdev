const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
require('dotenv').config();

const app = express();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skillswap';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('[v0] MongoDB connected successfully');
}).catch((err) => {
  console.log('[v0] MongoDB connection error:', err);
});

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    eq: (a, b) => a === b,
  },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index');
const skillRoutes = require('./routes/skills');
const userRoutes = require('./routes/users');

app.use('/', indexRoutes);
app.use('/skills', skillRoutes);
app.use('/users', userRoutes);

app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[v0] SkillSwap server running on http://localhost:${PORT}`);
});
