import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  fullDescription: string;
  features: string[];
  achievements: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Health Monitoring System',
      description: 'Real-time health monitoring system with ML-powered drug recommendations',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Streamlit', 'SQLite', 'Machine Learning', 'ReLU'],
      liveUrl: 'https://health-monitor-demo.streamlit.app',
      githubUrl: 'https://github.com/Navaneethadapa/health-monitoring',
      category: 'Machine Learning',
      fullDescription: 'Developed a comprehensive real-time health monitoring system that analyzes drug datasets from Primary Health Centers (PHCs) and provides intelligent recommendations using machine learning algorithms.',
      features: [
        'Real-time data processing from 105+ drug datasets',
        'ReLU-based ML model with 91% accuracy',
        'Responsive Streamlit UI with 40% faster processing',
        'SQLite database integration',
        'Interactive dashboards and visualizations'
      ],
      achievements: [
        '91% accuracy in drug recommendations',
        '40% reduction in data processing time',
        'Processed 105+ drug datasets from PHCs',
        'Implemented responsive UI design'
      ]
    },
    {
      id: 2,
      title: 'Language Testing Web Application',
      description: 'Advanced quiz platform with MERN stack serving 500+ users',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ReactJS', 'Express.js', 'MongoDB Atlas', 'Node.js', 'HTML', 'CSS'],
      liveUrl: 'https://language-test-platform.netlify.app',
      githubUrl: 'https://github.com/Navaneethadapa/language-testing',
      category: 'Full Stack',
      fullDescription: 'Built a comprehensive language testing platform using the MERN stack, designed to serve educational institutions and language learners with interactive quiz functionality.',
      features: [
        'User authentication and authorization',
        'Real-time quiz functionality',
        'Progress tracking and analytics',
        'Responsive design for all devices',
        'Admin dashboard for content management'
      ],
      achievements: [
        'Serving 500+ active users with 99.9% uptime',
        '40% reduction in page load time',
        '95% faster API response times',
        'Handling 1000+ daily quiz submissions',
        'Optimized MongoDB Atlas integration'
      ]
    },
    {
      id: 3,
      title: 'AI Model Training Platform',
      description: 'Platform for training and optimizing AI models with advanced prompt engineering',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'PyTorch', 'Prompt Engineering', 'NLP'],
      githubUrl: 'https://github.com/Navaneethadapa/ai-training-platform',
      category: 'AI/ML',
      fullDescription: 'Developed a comprehensive platform for training AI models with focus on prompt engineering, model optimization, and performance evaluation across various AI tasks.',
      features: [
        'Advanced prompt engineering tools',
        'Model performance analytics',
        'Automated testing and validation',
        'Multi-model comparison dashboard',
        'Real-time training monitoring'
      ],
      achievements: [
        '20% increase in model performance',
        '30% reduction in model failure rates',
        'Processed 10,000+ data points',
        '15% improvement in model reliability',
        'Expertise in IU, IF, and IIR assessments'
      ]
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Automation',
      description: 'Automated cloud deployment and management system using Infrastructure as Code',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
      githubUrl: 'https://github.com/Navaneethadapa/cloud-automation',
      category: 'Cloud Computing',
      fullDescription: 'Built an automated cloud infrastructure management system that streamlines deployment processes across multiple cloud platforms with Infrastructure as Code principles.',
      features: [
        'Multi-cloud deployment automation',
        'Infrastructure as Code with Terraform',
        'Container orchestration with Kubernetes',
        'CI/CD pipeline integration',
        'Monitoring and alerting systems'
      ],
      achievements: [
        '700+ hours of cloud experience',
        '25+ applications deployed with INTUNE',
        '99.9% compatibility across Windows versions',
        'Automated deployment processes',
        'Reduced deployment time by 60%'
      ]
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and business intelligence',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Pandas', 'Plotly', 'Dash', 'SQL', 'BigQuery'],
      liveUrl: 'https://analytics-dashboard-demo.herokuapp.com',
      githubUrl: 'https://github.com/Navaneethadapa/analytics-dashboard',
      category: 'Data Science',
      fullDescription: 'Created an interactive data analytics dashboard that provides real-time insights and visualizations for business intelligence and decision-making processes.',
      features: [
        'Real-time data visualization',
        'Interactive charts and graphs',
        'Custom filtering and sorting',
        'Export functionality',
        'Multi-source data integration'
      ],
      achievements: [
        'Top 10 in Google BigQuery Challenge',
        'Processed large-scale datasets',
        'Real-time data processing capabilities',
        'Interactive visualization components',
        'Optimized query performance'
      ]
    },
    {
      id: 6,
      title: 'Problem Solving Portfolio',
      description: 'Collection of algorithmic solutions and competitive programming achievements',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Java', 'Python', 'Algorithms', 'Data Structures', 'LeetCode'],
      githubUrl: 'https://github.com/Navaneethadapa/problem-solving',
      category: 'Algorithms',
      fullDescription: 'Comprehensive collection of algorithmic solutions, competitive programming problems, and data structure implementations showcasing problem-solving skills.',
      features: [
        'LeetCode problem solutions',
        'Algorithm implementations',
        'Data structure examples',
        'Competitive programming solutions',
        'Code optimization techniques'
      ],
      achievements: [
        'Solved 75+ Computer Science problems',
        '98% accuracy rating on Chegg',
        '4.8-star rating as subject expert',
        'Expertise in Data Structures and Algorithms',
        'Active LeetCode contributor'
      ]
    }
  ];

  const categories = ['All', 'Machine Learning', 'Full Stack', 'AI/ML', 'Cloud Computing', 'Data Science', 'Algorithms'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in machine learning, full-stack development, cloud computing, and AI solutions
          </p>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <EyeIcon className="h-5 w-5" />
                      </motion.button>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <CodeBracketIcon className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-500 ml-1">Featured</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {selectedProject.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Achievements
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <StarIcon className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                      View Live Demo
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CodeBracketIcon className="h-5 w-5 mr-2" />
                      View Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;