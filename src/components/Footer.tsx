import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary-600 rounded-lg transform rotate-6"></div>
                <div className="absolute inset-0 bg-secondary-500 rounded-lg"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold">TL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                LecturAI
              </span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              LecturAI is an intelligent learning assistant designed to supercharge how you learn by transforming dense content into clean, structured, and interactive study materials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:info@turbolearnai.com" className="text-gray-500 hover:text-primary-600 transition-colors">
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Automated Notes
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Flashcards & Quizzes
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Progress Tracking
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LecturAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-primary-600 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
