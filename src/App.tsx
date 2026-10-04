import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Coding } from './sections/Coding';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Project } from './types';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'journey',
  'education',
  'coding',
  'contact',
];

export function App() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={`min-h-screen relative font-sans ${isDark ? 'dark bg-[#070b14] text-slate-100' : 'light bg-slate-50 text-slate-900'} transition-colors duration-200`}>
      {/* Background Developer Grid Pattern */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${isDark ? 'bg-grid-dark opacity-75' : 'bg-grid-light opacity-60'}`} />

      {/* Subtle Ambient Radial Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] glow-spot-green pointer-events-none blur-3xl opacity-30 z-0" />
      <div className="fixed top-1/3 right-1/4 w-[600px] h-[600px] glow-spot-cyan pointer-events-none blur-3xl opacity-25 z-0" />

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar
          activeSection={activeSection}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Journey />
          <Education />
          <Coding />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Case Study Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}

export default App;
