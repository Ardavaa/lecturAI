import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Learning with{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              AI-Powered Notes
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            LecturAI supercharges how you learn. Upload your content and get structured notes, flashcards, quizzes, and a smart study assistant—automatically.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary px-6 py-3 text-lg">
              Get Started Free
            </button>
            <button className="btn btn-outline px-6 py-3 text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-6 w-5/6 max-w-md z-20">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                  📝
                </div>
                <h3 className="font-semibold">Automated Notes</h3>
              </div>
              <div className="space-y-3 mb-4">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-3">
                  🎯
                </div>
                <h3 className="font-semibold">Flashcards & Quizzes</h3>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="h-16 bg-white rounded shadow-sm p-3 flex items-center justify-between">
                  <span className="text-sm text-gray-600">What is LecturAI?</span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">Flip</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
