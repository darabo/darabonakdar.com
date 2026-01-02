import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getAllProjectIds, getProjectData } from '../../../lib/api';

export async function generateStaticParams() {
  const paths = getAllProjectIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Project({ params }) {
  // params is a Promise in Next.js 15+ (if using 15, let's assume 14/15 compat or handle async)
  // Actually in App Router, params is an object, but sometimes treated differently in latest versions.
  // We will await it just in case, or use it directly.
  // Next 15 breaks this slightly, let's check package.json version.
  // It is 15.x? No, it's 14.x usually.
  // Wait, I checked package.json earlier. "next": "16.1.1".
  // Oh, Next 16? That's very new (or canary/nightly? No, probably 15).
  // Next.js 15 made params a promise.

  const { slug } = await params;
  const projectData = await getProjectData(slug);

  const imageSrc = projectData.image && projectData.image.startsWith('http')
    ? projectData.image
    : projectData.image ? `/images/${projectData.image}` : null;

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">{projectData.title}</h1>
            <div className="text-gray-500 dark:text-gray-400 mb-4">
                <span className="mr-4">{projectData.type}</span>
                <span>{projectData.date}</span>
            </div>
            {imageSrc && (
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageSrc}
                        alt={projectData.title}
                        className="object-cover w-full h-full"
                    />
                </div>
            )}
        </header>

        <div
            className="prose dark:prose-invert lg:prose-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </article>
      <Footer />
    </main>
  );
}
