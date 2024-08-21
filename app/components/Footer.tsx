// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">MyApp</h2>
            <p className="text-sm mt-2">
              &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/about"
              className="text-white hover:underline text-sm"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:underline text-sm"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:underline text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.495v-9.293H9.497V11.71h3.324v-2.34c0-3.292 1.996-5.085 4.914-5.085 1.396 0 2.594.104 2.942.15v3.41h-2.018c-1.584 0-1.89.753-1.89 1.857v2.434h3.777l-.492 3.001h-3.285V24h6.437c.732 0 1.324-.592 1.324-1.324V1.325C24 .592 23.408 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.561-2.001.97-3.127 1.191-.896-.957-2.173-1.555-3.594-1.555-2.717 0-4.924 2.208-4.924 4.924 0 .386.045.762.127 1.124-4.09-.205-7.719-2.166-10.141-5.144-.424.722-.667 1.561-.667 2.457 0 1.697.863 3.193 2.174 4.074-.803-.026-1.56-.246-2.228-.615v.061c0 2.369 1.684 4.342 3.918 4.788-.411.112-.843.171-1.288.171-.314 0-.616-.03-.916-.086.616 1.926 2.407 3.326 4.528 3.365-1.662 1.303-3.757 2.079-6.033 2.079-.392 0-.779-.023-1.17-.067 2.148 1.381 4.696 2.188 7.437 2.188 8.923 0 13.805-7.396 13.805-13.805 0-.211-.005-.423-.014-.634.947-.686 1.77-1.543 2.421-2.517z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.225 0H1.771C.792 0 0 .782 0 1.748v20.502C0 23.217.792 24 1.771 24h20.451C23.205 24 24 23.217 24 22.25V1.748C24 .782 23.205 0 22.225 0zM7.09 20.452H3.645V8.935H7.09v11.517zM5.364 7.672c-1.078 0-1.956-.873-1.956-1.948a1.956 1.956 0 113.912 0c.002 1.075-.876 1.948-1.956 1.948zm14.09 12.78h-3.444v-5.597c0-1.332-.025-3.046-1.855-3.046-1.855 0-2.14 1.45-2.14 2.949v5.694h-3.446V8.935h3.306v1.572h.047c.461-.875 1.59-1.797 3.27-1.797 3.495 0 4.14 2.298 4.14 5.287v6.455z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
