import React, { useState } from 'react';
import { KaiSpaceSquare } from './components/KaiSpaceSquare';
import { ProjectTwoThirds } from './components/ProjectTwoThirds';
import { PhotographySquare } from './components/PhotographySquare';
import { GraphicSquare } from './components/GraphicSquare';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactModal } from './components/ContactModal';
import { GitHubModal } from './components/GitHubModal';
import { PROJECTS_DATA } from './data/projects';
import { ProjectItem } from './types';

export default function App() {
  // Projects displayed across the three 2/3 spaces
  const [projectRow1, setProjectRow1] = useState<ProjectItem>(PROJECTS_DATA[0]); // Aether Spatial OS
  const [projectRow2, setProjectRow2] = useState<ProjectItem>(PROJECTS_DATA[1]); // Luminary Typography
  const [projectRow3, setProjectRow3] = useState<ProjectItem>(PROJECTS_DATA[2]); // Monolith Keymapper

  // Modals
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isGitHubOpen, setIsGitHubOpen] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden bg-[#17181c] text-white selection:bg-white selection:text-black">
      {/* 
        3x3 Frame-filling Bento Grid with 1px white stroke division and zero padding
      */}
      <main className="w-full h-full min-h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-[1px] bg-white border border-white p-0 m-0">
        {/* ROW 1: [1x1 Kai's Space] + [2/3 Project 01] */}
        <KaiSpaceSquare
          onOpenContact={() => setIsContactOpen(true)}
          onOpenGitHub={() => setIsGitHubOpen(true)}
        />

        <ProjectTwoThirds
          project={projectRow1}
          indexNumber="01"
          onSelect={(p) => setSelectedProject(p)}
          allProjects={PROJECTS_DATA}
          onSwitchProject={(p) => setProjectRow1(p)}
        />

        {/* ROW 2: [2/3 Project 02] + [1x1 Photography Hero] */}
        <ProjectTwoThirds
          project={projectRow2}
          indexNumber="02"
          onSelect={(p) => setSelectedProject(p)}
          allProjects={PROJECTS_DATA}
          onSwitchProject={(p) => setProjectRow2(p)}
        />

        <PhotographySquare />

        {/* ROW 3: [1x1 Image/Graphic] + [2/3 Project 03] */}
        <GraphicSquare />

        <ProjectTwoThirds
          project={projectRow3}
          indexNumber="03"
          onSelect={(p) => setSelectedProject(p)}
          allProjects={PROJECTS_DATA}
          onSwitchProject={(p) => setProjectRow3(p)}
        />
      </main>

      {/* Project Deep-Dive & Simulation Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* GitHub Deployment & Repository Modal */}
      <GitHubModal
        isOpen={isGitHubOpen}
        onClose={() => setIsGitHubOpen(false)}
      />
    </div>
  );
}
