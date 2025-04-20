import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCopy, FiBookOpen, FiHelpCircle, FiCheckCircle } from 'react-icons/fi';

const ContentDisplay = ({ content, activeTab, setActiveTab }) => {
  const [activeFlashcard, setActiveFlashcard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [activeQuizQuestion, setActiveQuizQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'system', content: `Welcome! I'm your AI study assistant for "${content?.title}". Ask me anything about this material!` }
  ]);

  const tabs = [
    { id: 'notes', label: 'Notes', icon: <FiFileText /> },
    { id: 'flashcards', label: 'Flashcards', icon: <FiCopy /> },
    { id: 'quiz', label: 'Quiz', icon: <FiBookOpen /> },
    { id: 'chat', label: 'Chat', icon: <FiHelpCircle /> },
  ];

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newMessages = [
      ...chatMessages,
      { role: 'user', content: chatInput }
    ];
    
    setChatMessages(newMessages);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      setChatMessages([
        ...newMessages,
        { 
          role: 'system', 
          content: `Based on the content in "${content?.title}", ${
            chatInput.toLowerCase().includes('what') 
              ? 'the answer to your question is related to the key concepts covered in the material.' 
              : 'I can help you understand this better. The material covers several important concepts that address your question.'
          } Is there anything specific you'd like me to explain in more detail?` 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
      >
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 focus:outline-none transition-colors ${
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
          {/* Notes Tab */}
          {activeTab === 'notes' && (
            <div className="prose prose-lg max-w-none">
              <h1>{content?.title}</h1>
              {content?.notes.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Flashcards Tab */}
          {activeTab === 'flashcards' && (
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Flashcards</h2>
                <p className="text-gray-600">
                  Click on the card to reveal the answer. Use the navigation buttons to move between cards.
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div 
                  className="w-full max-w-md h-64 rounded-xl shadow-md perspective"
                  onClick={() => setFlipped(!flipped)}
                >
                  <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
                    {/* Front of card (question) */}
                    <div className={`absolute inset-0 bg-white rounded-xl p-6 flex flex-col justify-center items-center backface-hidden ${flipped ? 'hidden' : ''}`}>
                      <div className="text-sm text-gray-500 mb-2">Question</div>
                      <div className="text-xl font-medium text-center">
                        {content?.flashcards[activeFlashcard].question}
                      </div>
                      <div className="mt-6 text-sm text-gray-400">Click to flip</div>
                    </div>
                    
                    {/* Back of card (answer) */}
                    <div className={`absolute inset-0 bg-primary-50 rounded-xl p-6 flex flex-col justify-center items-center backface-hidden ${!flipped ? 'hidden' : ''}`}>
                      <div className="text-sm text-gray-500 mb-2">Answer</div>
                      <div className="text-xl font-medium text-center">
                        {content?.flashcards[activeFlashcard].answer}
                      </div>
                      <div className="mt-6 text-sm text-gray-400">Click to flip back</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center space-x-4">
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setFlipped(false);
                    setActiveFlashcard(prev => 
                      prev === 0 ? content.flashcards.length - 1 : prev - 1
                    );
                  }}
                  disabled={content?.flashcards.length <= 1}
                >
                  Previous
                </button>
                <div className="text-sm text-gray-500">
                  {activeFlashcard + 1} of {content?.flashcards.length}
                </div>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setFlipped(false);
                    setActiveFlashcard(prev => 
                      prev === content.flashcards.length - 1 ? 0 : prev + 1
                    );
                  }}
                  disabled={content?.flashcards.length <= 1}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Quiz Tab */}
          {activeTab === 'quiz' && (
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Knowledge Check</h2>
                <p className="text-gray-600">
                  Test your understanding of the material with these questions.
                </p>
              </div>

              {!showResults ? (
                <>
                  <div className="mb-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                        Question {activeQuizQuestion + 1} of {content?.quiz.length}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {content?.quiz[activeQuizQuestion].question}
                    </h3>
                    <div className="space-y-3">
                      {content?.quiz[activeQuizQuestion].options.map((option, index) => (
                        <div
                          key={index}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedAnswers[activeQuizQuestion] === index
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleQuizAnswer(activeQuizQuestion, index)}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                              selectedAnswers[activeQuizQuestion] === index
                                ? 'border-primary-500 bg-primary-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedAnswers[activeQuizQuestion] === index && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              )}
                            </div>
                            <span>{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="btn btn-outline"
                      onClick={() => setActiveQuizQuestion(prev => prev === 0 ? content.quiz.length - 1 : prev - 1)}
                      disabled={content?.quiz.length <= 1}
                    >
                      Previous
                    </button>
                    
                    {activeQuizQuestion === content?.quiz.length - 1 ? (
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(selectedAnswers).length < content?.quiz.length}
                      >
                        Submit Quiz
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline"
                        onClick={() => setActiveQuizQuestion(prev => prev === content.quiz.length - 1 ? 0 : prev + 1)}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div>
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FiCheckCircle className="text-green-500 mr-2" />
                      <h3 className="font-semibold">Quiz Results</h3>
                    </div>
                    <p>
                      You scored {Object.entries(selectedAnswers).filter(
                        ([questionIndex, answerIndex]) => 
                          answerIndex === content.quiz[parseInt(questionIndex)].correctAnswer
                      ).length} out of {content?.quiz.length}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {content?.quiz.map((question, qIndex) => (
                      <div key={qIndex} className="border rounded-lg overflow-hidden">
                        <div className="p-4 bg-gray-50 border-b">
                          <h4 className="font-medium">{question.question}</h4>
                        </div>
                        <div className="p-4">
                          {question.options.map((option, oIndex) => (
                            <div
                              key={oIndex}
                              className={`p-3 mb-2 rounded-lg ${
                                question.correctAnswer === oIndex
                                  ? 'bg-green-50 border border-green-200'
                                  : selectedAnswers[qIndex] === oIndex
                                  ? 'bg-red-50 border border-red-200'
                                  : 'bg-gray-50 border border-gray-200'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                                  question.correctAnswer === oIndex
                                    ? 'bg-green-500 text-white'
                                    : selectedAnswers[qIndex] === oIndex
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-200'
                                }`}>
                                  {question.correctAnswer === oIndex ? (
                                    <FiCheckCircle className="w-3 h-3" />
                                  ) : selectedAnswers[qIndex] === oIndex ? (
                                    <span>✕</span>
                                  ) : null}
                                </div>
                                <span>{option}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        {selectedAnswers[qIndex] !== question.correctAnswer && (
                          <div className="p-4 bg-blue-50 border-t border-blue-100">
                            <p className="text-sm text-blue-800">
                              <span className="font-medium">Explanation:</span> The correct answer is "{question.options[question.correctAnswer]}" because it accurately reflects the content from your learning materials.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setShowResults(false);
                        setSelectedAnswers({});
                        setActiveQuizQuestion(0);
                      }}
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Chat Tab */}
          {activeTab === 'chat' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">AI Study Assistant</h2>
                <p className="text-gray-600">
                  Ask questions about "{content?.title}" and get instant answers from your AI assistant.
                </p>
              </div>

              <div className="border rounded-lg mb-4">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-3/4 rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-primary-100 text-primary-900'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleChatSubmit} className="border-t p-4 flex gap-2">
                  <input
                    type="text"
                    className="input flex-grow"
                    placeholder="Ask a question about this content..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap"
                    disabled={!chatInput.trim()}
                  >
                    Send
                  </button>
                </form>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>
                  Your AI assistant has analyzed the content and can answer specific questions about the material.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContentDisplay;
