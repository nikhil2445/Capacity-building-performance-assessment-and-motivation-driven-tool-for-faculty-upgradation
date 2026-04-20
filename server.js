// ═══════════════════════════════════════════════════════════════
//  FacultyPro – Backend Server (Node.js + Express)
//  Entry point: server.js
// ═══════════════════════════════════════════════════════════════

const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');
const path       = require('path');

// ── Route Imports ──
const authRoutes        = require('./routes/auth');
const facultyRoutes     = require('./routes/faculty');
const assessmentRoutes  = require('./routes/assessments');
const goalRoutes        = require('./routes/goals');
const trainingRoutes    = require('./routes/training');
const motivationRoutes  = require('./routes/motivation');
const reportRoutes      = require('./routes/reports');
const notifRoutes       = require('./routes/notifications');

// ── App Init ──
const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ── Serve static frontend files FIRST (HTML, CSS, JS) ──
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css'))  res.setHeader('Content-Type', 'text/css');
    if (filePath.endsWith('.js'))   res.setHeader('Content-Type', 'application/javascript');
    if (filePath.endsWith('.html')) res.setHeader('Content-Type', 'text/html');
  }
}));

// ── API Routes ──
app.use('/api/auth',          authRoutes);
app.use('/api/faculty',       facultyRoutes);
app.use('/api/assessments',   assessmentRoutes);
app.use('/api/goals',         goalRoutes);
app.use('/api/training',      trainingRoutes);
app.use('/api/motivation',    motivationRoutes);
app.use('/api/reports',       reportRoutes);
app.use('/api/notifications', notifRoutes);

// ── Catch-all: ONLY for HTML pages (not assets) ──
app.get('*', (req, res, next) => {
  // Don't intercept asset requests
  if (req.path.match(/\.(css|js|png|jpg|ico|svg|woff|woff2|ttf)$/)) return next();
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── Error Handler ──
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// ── Start Server ──
app.listen(PORT, () => {
  console.log(`\n🎓  FacultyPro Server running at http://localhost:${PORT}`);
  console.log(`📊  API Base: http://localhost:${PORT}/api`);
  console.log(`🌐  Frontend: http://localhost:${PORT}\n`);
});

module.exports = app;
