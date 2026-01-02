import Link from 'next/link';

export default function ProjectCard({ project }) {
  // Determine if image path is absolute or needs prefix
  // In Jekyll site, it was: src="{{ site.image_path }}/{{ project.image }}"
  // site.image_path was ../public/images.
  // In our new structure, public is root.
  // If project.image is "something.jpg", it should be "/images/something.jpg" assuming we moved them there.
  // Or if it was a full URL, use that.

  const imageSrc = project.image && project.image.startsWith('http')
    ? project.image
    : project.image ? `/images/${project.image}` : '/images/placeholder.jpg';

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <Link href={`/projects/${project.id}`}>
        <div className="h-48 overflow-hidden rounded-t-lg">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="object-cover w-full h-full" src={imageSrc} alt={project.title} />
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/projects/${project.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.type}
        </p>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
