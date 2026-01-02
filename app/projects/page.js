import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import { getSortedProjectsData } from '../../lib/api';

export default function Projects() {
  const allProjectsData = getSortedProjectsData();

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">All Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allProjectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
