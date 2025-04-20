import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UploadSection from '../components/UploadSection';
import ContentDisplay from '../components/ContentDisplay';
import Footer from '../components/Footer';

export default function Home() {
  const [activeContent, setActiveContent] = useState(null);
  const [activeTab, setActiveTab] = useState('notes');

  const handleContentProcessed = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>LecturAI - Intelligent Learning Assistant</title>
        <meta name="description" content="Transform dense content into clean, structured, and interactive study materials—automatically." />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {!activeContent ? (
          <>
            <Hero />
            <Features />
            <UploadSection onContentProcessed={handleContentProcessed} />
          </>
        ) : (
          <ContentDisplay 
            content={activeContent} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
