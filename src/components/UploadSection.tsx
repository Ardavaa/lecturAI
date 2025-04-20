import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FiUpload, FiYoutube, FiFile, FiGlobe, FiMic } from 'react-icons/fi';

const UploadSection = ({ onContentProcessed }) => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('file');

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      handleUpload(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'audio/*': ['.mp3', '.wav'],
      'video/*': ['.mp4', '.webm']
    },
    maxFiles: 1
  });

  const handleUpload = async (file) => {
    setIsProcessing(true);
    
    // Simulate API processing
    setTimeout(() => {
      setIsProcessing(false);
      // Mock data - in a real app, this would come from your backend
      const mockProcessedContent = {
        type: 'pdf',
        title: file.name.replace(/\.[^/.]+$/, ""),
        notes: [
          { title: "Introduction", content: "This is an automatically generated introduction..." },
          { title: "Key Concepts", content: "Here are the key concepts from the uploaded content..." },
          { title: "Summary", content: "This is a summary of the main points..." }
        ],
        flashcards: [
          { question: "What is LecturAI?", answer: "An intelligent learning assistant." },
          { question: "What does LecturAI do?", answer: "It transforms dense content into clean, structured learning materials." },
          { question: "What formats does LecturAI support?", answer: "YouTube videos, PDFs, websites, and recorded lectures." }
        ],
        quiz: [
          {
            question: "What is the main purpose of LecturAI?",
            options: [
              "Entertainment",
              "Gaming",
              "Learning assistance",
              "Social networking"
            ],
            correctAnswer: 2
          },
          {
            question: "Which of these is NOT a feature of LecturAI?",
            options: [
              "Automated Note-Taking",
              "Video Editing",
              "Flashcards",
              "Progress Tracking"
            ],
            correctAnswer: 1
          }
        ]
      };
      
      onContentProcessed(mockProcessedContent);
    }, 2000);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    
    setIsProcessing(true);
    
    // Simulate API processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Mock data based on URL type (YouTube, website, etc.)
      const mockProcessedContent = {
        type: url.includes('youtube') ? 'youtube' : 'website',
        title: url.includes('youtube') ? 'YouTube Video Notes' : 'Website Content Notes',
        url: url,
        notes: [
          { title: "Main Points", content: "Here are the main points extracted from the URL..." },
          { title: "Supporting Details", content: "These are the supporting details..." },
          { title: "Conclusions", content: "These are the conclusions drawn from the content..." }
        ],
        flashcards: [
          { question: "What was the main topic?", answer: "The main topic was learning enhancement." },
          { question: "Who was the primary audience?", answer: "Students and lifelong learners." },
          { question: "What was the key takeaway?", answer: "AI can significantly improve learning efficiency." }
        ],
        quiz: [
          {
            question: "What technology powers TurboLearn?",
            options: ["Blockchain", "AI", "Virtual Reality", "5G"],
            correctAnswer: 1
          }
        ]
      };
      
      onContentProcessed(mockProcessedContent);
    }, 2000);
  };

  const tabs = [
    { id: 'file', label: 'File Upload', icon: <FiFile /> },
    { id: 'youtube', label: 'YouTube Video', icon: <FiYoutube /> },
    { id: 'website', label: 'Website URL', icon: <FiGlobe /> },
    { id: 'audio', label: 'Audio Recording', icon: <FiMic /> }
  ];

  return (
    <section id="upload" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Upload Your Learning Material</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          LecturAI works with various types of content. Choose your preferred option below.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 focus:outline-none transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'file' && (
            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
              }`}
            >
              <input {...getInputProps()} />
              <FiUpload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg mb-2">Drag & drop a file here, or click to select</p>
              <p className="text-sm text-gray-500">
                Supports PDF, PPT, PPTX, MP3, WAV, MP4, WEBM
              </p>
            </div>
          )}

          {(activeTab === 'youtube' || activeTab === 'website') && (
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                  {activeTab === 'youtube' ? 'YouTube Video URL' : 'Website URL'}
                </label>
                <input
                  type="url"
                  id="url"
                  className="input"
                  placeholder={activeTab === 'youtube' ? 'https://www.youtube.com/watch?v=...' : 'https://example.com/...'}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Process Content'
                )}
              </button>
            </form>
          )}

          {activeTab === 'audio' && (
            <div className="text-center py-8">
              <FiMic className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg mb-4">Record or Upload Audio</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-outline flex items-center justify-center gap-2">
                  <FiMic />
                  Start Recording
                </button>
                <button 
                  className="btn btn-primary flex items-center justify-center gap-2"
                  {...getRootProps()}
                >
                  <FiUpload />
                  Upload Audio File
                  <input {...getInputProps()} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                For uploading lecture recordings or audio notes
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default UploadSection;
