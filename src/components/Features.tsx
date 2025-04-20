import { motion } from 'framer-motion';
import { FiFileText, FiBook, FiMessageCircle, FiTarget, FiActivity } from 'react-icons/fi';

const features = [
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Automated Note-Taking",
    description: "Drop in any content and get structured notes with tables, emojis, diagrams, and math support.",
    emoji: "📝",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <FiBook className="w-6 h-6" />,
    title: "Interactive Flashcards & Quizzes",
    description: "Auto-generated flashcards and quiz sets to reinforce learning and boost retention.",
    emoji: "🎯",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <FiMessageCircle className="w-6 h-6" />,
    title: "Built-in AI Chatbot",
    description: "Ask questions while studying and get accurate answers pulled straight from your uploaded content.",
    emoji: "🤖",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <FiTarget className="w-6 h-6" />,
    title: "Personalized Learning Paths",
    description: "Adaptive study plans and suggestions based on your learning style and progress.",
    emoji: "🎓",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: <FiActivity className="w-6 h-6" />,
    title: "Progress Tracking",
    description: "Get metrics, trends, and insights to help shape your next study sprint.",
    emoji: "📈",
    color: "bg-pink-50 text-pink-600"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          🧠 Key Features
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          LecturAI transforms how you study with these powerful tools
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="card hover:shadow-lg hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
              {feature.emoji}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
