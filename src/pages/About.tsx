import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  CalendarDaysIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  CodeBracketIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const skills = [
    'Python', 'Java', 'SQL', 'Bash', 'AWS', 'Azure', 'Google Cloud',
    'Docker', 'Kubernetes', 'CI/CD', 'Machine Learning', 'NLP', 'Generative AI'
  ];

  const experience = [
    {
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant Technology Solutions',
      period: 'July 2024 - Present',
      location: 'Hyderabad, India',
      description: 'Gained 700+ hours of hands-on experience managing cloud environments across 3 major platforms. Packaged and deployed 25+ applications using INTUNE with 99.9% compatibility.',
      achievements: [
        'Acquired proficiency in Microsoft Azure and AWS through extensive hands-on experience',
        'Actively upskilling in Generative AI and automation processes',
        'Managed cloud environments with 99.9% uptime'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Alignerr AI',
      period: 'January 2025 - Present',
      location: 'Remote',
      description: 'Composed and trained AI models, achieving 20% increase in performance using advanced machine learning techniques.',
      achievements: [
        'Reviewed and improved 30% of AI responses for better clarity and accuracy',
        'Processed over 10,000 data points for high-quality training datasets',
        'Implemented QA processes resulting in 15% improvement in model reliability'
      ]
    },
    {
      title: 'Freelance AI Specialist',
      company: 'Outlier',
      period: 'December 2024 - Present',
      location: 'Remote',
      description: 'Developed and tested AI models through prompt engineering and weakness identification.',
      achievements: [
        'Achieved 30% reduction in model failure rates through refined prompts',
        'Expertise in Image Understanding, Instruction Following, and Response Criteria',
        'Conducted multiple testing cycles for model optimization'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Vishnu Institute of Technology',
      period: 'August 2020 - May 2024',
      location: 'Bhimavaram, Andhra Pradesh, India',
      cgpa: '8.11',
      description: 'Focused on software engineering, data structures, and modern web technologies.'
    },
    {
      degree: 'Intermediate',
      school: 'Pragati Junior College',
      period: 'June 2018 - March 2020',
      location: 'Kakinada, Andhra Pradesh, India',
      cgpa: '9.29',
      description: 'Specialized in Mathematics, Physics, and Chemistry with excellent academic performance.'
    }
  ];

  const achievements = [
    'Top 10 in Google BigQuery Skills Challenge 2023 among 10,000+ APAC participants',
    'Selected for Google AI Startup School 2023, completed with distinction',
    'Enhanced ML skills through Amazon ML Summer School focusing on NLP and Deep Learning',
    'Maintained 4.8-star rating as Chegg Subject Expert with 98% accuracy'
  ];

  const interests = [
    'Cloud Computing',
    'Machine Learning',
    'Open Source',
    'Tech Blogging',
    'Problem Solving',
    'Innovation'
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code - my journey, passion, and what drives me to create exceptional digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Hero Section with Bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div className="relative overflow-hidden rounded-2xl">
                <motion.img
                src="/Navaneeth.jpeg"
                alt="Navaneeth Sai Adapa"
                className="w-full max-w-md mx-auto shadow-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 opacity-20"
              animate={{ rotate: [3, -3, 3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Navaneeth Sai Adapa
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Software Engineer at Cognizant Technology Solutions with expertise in 
                cloud computing, artificial intelligence, and full-stack development. My journey began 
                with a curiosity about how technology can solve real-world problems.
              </p>
              <p>
                With over 700 hours of hands-on cloud experience and proficiency in platforms like 
                AWS, Azure, and Google Cloud, I specialize in building scalable solutions. I'm also 
                actively working in the AI space, contributing to model training and optimization.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or solving algorithmic challenges on LeetCode. I believe in 
                continuous learning and sharing knowledge with the developer community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="/Navaneeth_Sai_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Download Resume
              </motion.a>
              <motion.a
                href="https://calendly.com/adapanavaneethsai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CalendarDaysIcon className="h-5 w-5 mr-2" />
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <BriefcaseIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h2>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {exp.description}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <AcademicCapIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-600 font-medium mb-1">
                      {edu.school} • {edu.location}
                    </p>
                    <p className="text-gray-500 text-sm mb-1">{edu.period}</p>
                    <p className="text-green-600 font-medium text-sm mb-3">CGPA: {edu.cgpa}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <TrophyIcon className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Achievements
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Recognition and accomplishments in my journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start">
                  <TrophyIcon className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <HeartIcon className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Interests & Passions
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What drives me beyond work
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <HeartIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {interest}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
