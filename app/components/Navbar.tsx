import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/06/28/13/51/dog-1484728_640.png"// Example Pixabay logo
              alt="Logo"
              width={70}
              height={30}
              quality={100}
              
            />
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tickets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
