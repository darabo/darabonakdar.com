import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { getSortedProjectsData } from '../lib/api';

export default function Home() {
  const allProjectsData = getSortedProjectsData();
  const recentProjects = allProjectsData.slice(0, 3); // Show top 3 recent projects

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-32 pb-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Dara Bonakdar
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                VR/AR and Python Developer, Entrepreneur, Innovator.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link href="/projects" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    View Portfolio
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
                <Link href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Learn More
                </Link>
            </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Recent Work
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                    A selection of my latest projects.
                </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
                {recentProjects.map((project) => (
                   <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="text-center">
                <Link href="/projects" className="text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 font-medium">
                    View All Projects &rarr;
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
