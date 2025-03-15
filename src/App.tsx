import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/HomePage'
import About from './pages/AboutPage'
import Projects from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetailPage'
import Contact from './pages/ContactPage'
import NotFound from './pages/NotFoundPage'
import Layout from './components/layout/Layout'

function App() {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
  )
}

export default App
