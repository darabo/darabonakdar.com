import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getContentData } from '../../lib/api';

export default async function About() {
  const aboutData = await getContentData('about');

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">About Me</h1>
        <div
            className="prose dark:prose-invert lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }}
        />
      </div>
      <Footer />
    </main>
  );
}
