import React from 'react';
import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  CalendarDaysIcon,
  MapPinIcon,
  StarIcon,
  TrophyIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant Technology Solutions',
      period: 'July 2024 - Present',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Working on cloud infrastructure management and application deployment across multiple platforms.',
      responsibilities: [
        'Gained 700+ hours of hands-on experience managing cloud environments across 3 major platforms',
        'Packaged and deployed over 25 applications using INTUNE with 99.9% compatibility',
        'Acquired proficiency in Microsoft Azure and Amazon Web Services (AWS)',
        'Actively upskilling in Generative AI and automation processes'
      ],
      achievements: [
        '99.9% application compatibility across Windows versions',
        '700+ hours cloud experience',
        '25+ successful application deployments'
      ],
      skills: ['Azure', 'AWS', 'INTUNE', 'Cloud Management', 'Application Deployment'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Software Engineer',
      company: 'Alignerr AI',
      period: 'January 2025 - Present',
      location: 'Remote',
      type: 'Contract',
      description: 'Specializing in AI model training, optimization, and prompt engineering for enhanced performance.',
      responsibilities: [
        'Composed and trained AI models achieving 20% performance increase',
        'Reviewed and improved 30% of AI responses for better clarity and accuracy',
        'Conducted data labeling and annotation for 10,000+ data points',
        'Implemented quality assurance processes for model reliability'
      ],
      achievements: [
        '20% increase in model performance',
        '30% improvement in response quality',
        '15% improvement in model reliability',
        '10,000+ data points processed'
      ],
      skills: ['Machine Learning', 'AI Training', 'Prompt Engineering', 'Data Annotation', 'Quality Assurance'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Freelance AI Specialist',
      company: 'Outlier',
      period: 'December 2024 - Present',
      location: 'Remote',
      type: 'Freelance',
      description: 'Developing and testing AI models through advanced prompt engineering and weakness identification.',
      responsibilities: [
        'Developed and tested AI models through prompt creation and weakness analysis',
        'Analyzed model failures and refined prompts for better performance',
        'Conducted multiple testing cycles achieving significant failure rate reduction',
        'Expertise in Image Understanding, Instruction Following, and Response Criteria'
      ],
      achievements: [
        '30% reduction in model failure rates',
        'Expert-level proficiency in IU, IF, and IIR assessments',
        'Multiple successful testing cycles',
        'Advanced prompt engineering capabilities'
      ],
      skills: ['Prompt Engineering', 'AI Testing', 'Model Optimization', 'Image Understanding', 'Quality Control'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg',
      period: 'January 2023 - May 2023',
      location: 'Remote',
      type: 'Freelance',
      description: 'Provided expert solutions for Computer Science problems with exceptional accuracy and user satisfaction.',
      responsibilities: [
        'Solved 70+ complex Computer Science problems with high accuracy',
        'Maintained outstanding 4.8-star rating from students',
        'Provided expert solutions in Data Structures and Programming concepts',
        'Delivered comprehensive explanations for learning enhancement'
      ],
      achievements: [
        '98% accuracy rating',
        '4.8-star user satisfaction rating',
        '75+ problems solved successfully',
        'Expert recognition in CS subjects'
      ],
      skills: ['Data Structures', 'Algorithms', 'Programming', 'Problem Solving', 'Technical Writing'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '2+', icon: CalendarDaysIcon },
    { label: 'Projects Completed', value: '25+', icon: ChartBarIcon },
    { label: 'Cloud Hours', value: '700+', icon: BriefcaseIcon },
    { label: 'Accuracy Rating', value: '98%', icon: StarIcon },
  ];

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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional career in software engineering, AI development, and cloud computing
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My career progression and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-1">
                          <BriefcaseIcon className="h-5 w-5 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-1">
                          <CalendarDaysIcon className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          {exp.location} • {exp.type}
                        </div>
                      </div>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0 ml-4`}>
                        <BriefcaseIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrophyIcon className="h-5 w-5 text-yellow-500 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                            <StarIcon className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how my experience 
              can help you achieve your goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;