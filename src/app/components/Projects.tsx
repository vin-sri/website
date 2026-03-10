import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Minimal Task Manager",
    description: "A distraction-free task management app built with React and local storage.",
    githubUrl: "https://github.com/yourusername/minimal-task-manager",
  },
  {
    id: "2",
    title: "Reading List Tracker",
    description: "Track books you want to read, are currently reading, and have finished.",
    githubUrl: "https://github.com/yourusername/reading-list-tracker",
  },
  {
    id: "3",
    title: "Pomodoro Timer",
    description: "A beautiful, minimal pomodoro timer with customizable work/break intervals.",
    githubUrl: "https://github.com/yourusername/pomodoro-timer",
  },
  {
    id: "4",
    title: "Daily Journal",
    description: "Private, encrypted daily journaling app stored locally.",
    githubUrl: "https://github.com/yourusername/daily-journal",
  },
  {
    id: "5",
    title: "Habit Tracker",
    description: "Track daily habits with a clean calendar view.",
    githubUrl: "https://github.com/yourusername/habit-tracker",
  },
  {
    id: "6",
    title: "Markdown Notes",
    description: "A fast, offline-first markdown note-taking app.",
    githubUrl: "https://github.com/yourusername/markdown-notes",
  },
];

export function Projects() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-3xl">Projects</h1>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="space-y-1">
            <div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title}
              </a>
            </div>
            <p className="text-muted-foreground">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}