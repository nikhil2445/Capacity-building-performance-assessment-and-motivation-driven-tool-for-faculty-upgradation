# 🎓 FacultyPro – Capacity Building & Performance Assessment Platform

A full-stack web application for faculty performance tracking, capacity building,
and motivation-driven professional development.

---

## 📁 Project Structure

```
facultypro/
│
├── server.js                  ← Node.js Express entry point
├── package.json               ← Dependencies & scripts
│
├── models/
│   └── db.js                  ← In-memory data store (acts as DB)
│
├── middleware/
│   └── auth.js                ← Token-based authentication middleware
│
├── routes/
│   ├── auth.js                ← POST /api/auth/login, /logout, /me
│   ├── faculty.js             ← CRUD /api/faculty
│   ├── assessments.js         ← CRUD /api/assessments
│   ├── goals.js               ← CRUD /api/goals
│   ├── training.js            ← CRUD /api/training
│   ├── motivation.js          ← /api/motivation/awards, /leaderboard
│   ├── reports.js             ← /api/reports/summary, /performance, /kpi
│   └── notifications.js       ← /api/notifications
│
└── public/                    ← Static frontend (served by Express)
    ├── index.html             ← Main HTML (structure only)
    ├── css/
    │   └── style.css          ← All styles
    └── js/
        ├── api.js             ← API service layer (all HTTP calls)
        └── app.js             ← App logic, rendering, events

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+  (https://nodejs.org)

### Installation

```bash
# 1. Go to project folder
cd facultypro

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# For development with auto-reload:
npm run dev
```

### Access the App

Open your browser and go to:

```
http://localhost:3000
```

---

## 🔐 Login Credentials

| Role    | Email                        | Password    |
|---------|------------------------------|-------------|
| Admin   | admin@university.edu         | admin123    |
| Faculty | priya@university.edu         | faculty123  |
| HOD     | hod@university.edu           | hod123      |

> **Demo Mode**: If the backend is offline, the frontend automatically
> uses built-in mock data — so the UI works standalone too.

---

## 📡 API Endpoints

### Auth
| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| POST   | /api/auth/login     | Login               |
| POST   | /api/auth/logout    | Logout              |
| GET    | /api/auth/me        | Current user info   |

### Faculty
| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | /api/faculty          | List all faculty         |
| GET    | /api/faculty/stats    | Dashboard stats          |
| GET    | /api/faculty/:id      | Faculty detail           |
| POST   | /api/faculty          | Add faculty (Admin/HOD)  |
| PUT    | /api/faculty/:id      | Update faculty           |
| DELETE | /api/faculty/:id      | Remove faculty (Admin)   |

### Assessments
| Method | Endpoint                  | Description          |
|--------|---------------------------|----------------------|
| GET    | /api/assessments          | List assessments     |
| POST   | /api/assessments          | Submit assessment    |
| PUT    | /api/assessments/:id      | Update assessment    |
| DELETE | /api/assessments/:id      | Delete assessment    |

### Goals & KPIs
| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | /api/goals       | List all goals    |
| POST   | /api/goals       | Set a new goal    |
| PUT    | /api/goals/:id   | Update progress   |
| DELETE | /api/goals/:id   | Delete goal       |

### Training
| Method | Endpoint                   | Description             |
|--------|----------------------------|-------------------------|
| GET    | /api/training              | List programs           |
| POST   | /api/training              | Add program (Admin/HOD) |
| POST   | /api/training/:id/enroll   | Enroll faculty          |
| PUT    | /api/training/:id          | Update program          |
| DELETE | /api/training/:id          | Delete program          |

### Motivation
| Method | Endpoint                       | Description         |
|--------|--------------------------------|---------------------|
| GET    | /api/motivation/leaderboard    | Faculty leaderboard |
| GET    | /api/motivation/awards         | List awards         |
| POST   | /api/motivation/awards         | Give award          |
| GET    | /api/motivation/strategies     | Motivation tips     |

### Reports
| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| GET    | /api/reports/summary      | Dashboard summary      |
| GET    | /api/reports/performance  | Full performance data  |
| GET    | /api/reports/kpi          | KPI metrics            |

### Notifications
| Method | Endpoint                        | Description          |
|--------|---------------------------------|----------------------|
| GET    | /api/notifications              | List notifications   |
| PUT    | /api/notifications/read-all     | Mark all as read     |
| PUT    | /api/notifications/:id/read     | Mark one as read     |

---

## 🔧 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Backend   | Node.js + Express.js    |
| Auth      | Token-based (session)   |
| Frontend  | Vanilla HTML/CSS/JS     |
| Fonts     | Syne + DM Sans (Google) |
| Database  | In-memory (models/db.js)|

### To connect a real database (MongoDB example):
Replace `models/db.js` arrays with MongoDB collections using Mongoose.

---

## ✨ Features

- **Multi-role Login** — Admin, Faculty, HOD
- **Faculty Profiles** — Add, view, search, filter by department
- **Performance Assessments** — 4-rubric scoring (Teaching, Research, PD, Contribution)
- **Goals & KPIs** — Set, track, and update faculty goals with auto-status
- **Training Hub** — FDP/Workshop/Seminar management with enrollment
- **Motivation & Recognition** — Awards, leaderboard, strategy tips
- **Analytics** — Score distribution, KPI charts, trend visualization
- **Reports** — Performance, training, goals, compliance reports
- **Notifications** — Real-time alerts and reminders
- **Offline fallback** — Works without backend using mock data

---

## 📞 Support

For issues or feature requests, contact the development team.
