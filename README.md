# 🚀 Kushagra Chaudhary — Personal Portfolio

A full-stack **MERN** portfolio application built with a **Vite + React** frontend and an **Express + MongoDB** backend. Features a premium dark UI with glass-morphism, smooth animations, interactive skill graphs, certificate viewer, resume download, and a fully functional contact form with email notifications.

🔗 **Live:** [kushagrachaudhary.dev](https://kushagrachaudhary.dev) &nbsp;|&nbsp; 👤 **GitHub:** [@Kushagra05Chaudhary](https://github.com/Kushagra05Chaudhary)

---

## 📸 Preview

> A dark-themed, glassmorphic portfolio with animated particle canvas, floating glass orbs, scrolling tech ticker, and multi-page routing.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Premium Dark UI | Glassmorphism, gradient text, animated orbs, particle canvas |
| 🧭 Multi-Page Routing | Home, About, Skills, Projects, Certificates, Let's Talk |
| 📄 Resume Viewer | In-browser PDF preview with download via `/api/resume` |
| 🏅 Certificate Viewer | Per-certificate PDF served via `/api/cert/:name` |
| 📬 Contact Form | Saves to MongoDB + sends styled email notification via Nodemailer |
| 🖱️ Custom Cursor | Magnetic cursor with hover effects |
| 📈 Skill Graph | Interactive animated skill visualization |
| 🌐 Responsive | Fully responsive across desktop and mobile |

---

## 🛠️ Tech Stack

### Frontend
| Tech | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| React Router DOM | 7 | Client-side routing |
| Lucide React | latest | Icon library |
| Vanilla CSS | — | Styling, animations, glassmorphism |

### Backend
| Tech | Version | Purpose |
|---|---|---|
| Node.js + Express | 5 | REST API server |
| MongoDB + Mongoose | 9 | Database for contact messages |
| Nodemailer | 8 | Email notifications for contact form |
| dotenv | 17 | Environment variable management |
| cors | 2 | Cross-origin resource sharing |

---

## 📁 Project Structure

```
portfolio/
├── client/                  # Vite + React frontend
│   ├── public/
│   │   └── icons.svg
│   ├── src/
│   │   ├── assets/          # Static images
│   │   ├── components/
│   │   │   ├── Cursor.jsx       # Custom magnetic cursor
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── ParticleCanvas.jsx  # Animated background
│   │   │   ├── ResumeModal.jsx  # PDF resume viewer
│   │   │   └── SkillGraph.jsx   # Interactive skill chart
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Hero section
│   │   │   ├── About.jsx        # About me
│   │   │   ├── Skills.jsx       # Skills breakdown
│   │   │   ├── Projects.jsx     # Project showcase
│   │   │   ├── Certificates.jsx # Certificate gallery
│   │   │   └── LetsTalk.jsx     # Contact form
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                  # Express backend
│   ├── models/
│   │   └── Message.js       # Mongoose schema for contact form
│   ├── index.js             # Main server file
│   ├── .env.example         # Environment variable template
│   └── package.json
│
├── certificates/            # Certificate PDFs (served via API)
│   ├── Computational_Theory_&_Finite_Automata.pdf
│   ├── Computer_Communications_Specialization.pdf
│   ├── Computer_Networking_Fundamentals.pdf
│   ├── Digital_Systems_Logic_to_Processors.pdf
│   └── Introduction_to_Hardware_&_Operating_Systems.pdf
│
├── resume.pdf               # Served via /api/resume
├── hero_bg.png
├── profile_image.png
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/resume` | Streams `resume.pdf` inline |
| `GET` | `/api/cert/:name` | Streams a certificate PDF by name (fallback to resume) |
| `POST` | `/api/contact` | Saves message to MongoDB + sends email to owner |

### Contact Form Payload
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello!"
}
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js ≥ 18
- MongoDB running locally (`mongodb://127.0.0.1:27017`) or a MongoDB Atlas URI
- A Gmail account with an **App Password** (for Nodemailer)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Kushagra05Chaudhary/portfolio.git
cd portfolio
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create your `.env` file from the template:

```bash
cp .env.example .env
```

Fill in your values in `server/.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
PORT=5000

MAIL_USER=your_gmail@gmail.com
MAIL_PASS=your_16_char_app_password
MAIL_TO=your_inbox@gmail.com
```

> **How to get a Gmail App Password:**
> Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail"

Start the server:

```bash
node index.js
```

Server runs at `http://localhost:5000`

---

### 3. Set Up the Frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend dev server runs at `http://localhost:5173`

---

## 🔐 Environment & Security

- ✅ `server/.env` is listed in `.gitignore` — **never committed**
- ✅ Only `server/.env.example` (with placeholder values) is committed
- ✅ `node_modules/`, `dist/`, and `build/` are excluded
- ✅ Secrets (email password, MongoDB URI) never touch version control

---

## 📜 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section with animated headline, tech ticker, and CTA buttons |
| `/about` | About | Personal background, education, and interests |
| `/skills` | Skills | Interactive skill graph and proficiency overview |
| `/projects` | Projects | Showcase of key projects with links and descriptions |
| `/certificates` | Certificates | Gallery of earned certificates, each with PDF viewer |
| `/lets-talk` | Let's Talk | Contact form (name, email, message) |

---

## 📦 Scripts

### Frontend (`client/`)
```bash
npm run dev        # Start Vite dev server
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run lint       # ESLint check
```

### Backend (`server/`)
```bash
node index.js      # Start the Express server
```

---

## 🚀 Deployment Notes

- **Frontend:** Deploy the `client/` folder to **Vercel** or **Netlify** (set `VITE_API_URL` env var pointing to your backend)
- **Backend:** Deploy the `server/` folder to **Railway**, **Render**, or **Fly.io**
- **Database:** Use **MongoDB Atlas** for cloud MongoDB
- Place `resume.pdf` and `certificates/` in the same relative location to the server (`../resume.pdf`, `../certificates/`)

---

## 👤 Author

**Kushagra Chaudhary**
- GitHub: [@Kushagra05Chaudhary](https://github.com/Kushagra05Chaudhary)
- Email: kush.c47007@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
