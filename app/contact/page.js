import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Get in Touch</h1>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="mb-6 text-gray-600 dark:text-gray-300">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href="mailto:hello@darabonakdar.com" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600">hello@darabonakdar.com</a>
                </div>

                <div className="flex items-center">
                     <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">San Francisco, CA, USA</span>
                </div>
            </div>

            <div className="mt-8">
                 <a href="mailto:hello@darabonakdar.com" className="block w-full text-center py-3 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition duration-300">
                    Send Me an Email
                 </a>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
