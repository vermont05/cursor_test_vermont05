import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Mascot from './components/Mascot.jsx'
import Basics from './pages/Basics.jsx'
import Equations from './pages/Equations.jsx'
import Inequalities from './pages/Inequalities.jsx'
import Graphing from './pages/Graphing.jsx'
import WordProblems from './pages/WordProblems.jsx'
import Quizzes from './pages/Quizzes.jsx'
import LessonVideos from './pages/LessonVideos.jsx'
import ProgressTracking from './pages/ProgressTracking.jsx'

const navLinkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '')

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="mascot">
            <Mascot />
          </div>
          <div className="brand-text">
            <h1>Augustine App</h1>
            <p>Learn math with St. Augustine</p>
          </div>
        </div>

        <div className="nav">
          <div className="nav-section">
            <div className="nav-section-title">Modules</div>
            <NavLink to="/basics" className={navLinkClass}>Basics</NavLink>
            <NavLink to="/equations" className={navLinkClass}>Equations</NavLink>
            <NavLink to="/inequalities" className={navLinkClass}>Inequalities</NavLink>
            <NavLink to="/graphing" className={navLinkClass}>Graphing</NavLink>
            <NavLink to="/word-problems" className={navLinkClass}>Word Problems</NavLink>
          </div>

          <div className="nav-section" style={{ marginTop: 10 }}>
            <div className="nav-section-title">More</div>
            <NavLink to="/quizzes" className={navLinkClass}>Quizzes</NavLink>
            <NavLink to="/lesson-videos" className={navLinkClass}>Lesson Videos</NavLink>
            <NavLink to="/progress" className={navLinkClass}>Progress Tracking</NavLink>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/basics" replace />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/equations" element={<Equations />} />
          <Route path="/inequalities" element={<Inequalities />} />
          <Route path="/graphing" element={<Graphing />} />
          <Route path="/word-problems" element={<WordProblems />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/lesson-videos" element={<LessonVideos />} />
          <Route path="/progress" element={<ProgressTracking />} />
          <Route path="*" element={<Navigate to="/basics" replace />} />
        </Routes>
      </main>
    </div>
  )
}
